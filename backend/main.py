from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict
import json
import os
import uuid

app = FastAPI()

# --- Настройка CORS ---
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- "База данных" в памяти ---
POLLS_FILE = "polls.json"

# Загружаем опросы из файла при старте
if os.path.exists(POLLS_FILE):
    with open(POLLS_FILE, "r", encoding="utf-8") as f:
        polls = json.load(f)
else:
    polls = []

def save_polls():
    with open(POLLS_FILE, "w", encoding="utf-8") as f:
        json.dump(polls, f, ensure_ascii=False, indent=2)

# --- Pydantic модели ---
class PollOption(BaseModel):
    id: str
    text: str
    votes: int = 0

class Poll(BaseModel):
    id: str
    question: str
    options: list[PollOption]

class PollCreateRequest(BaseModel):
    question: str
    options: list[str]

# --- Эндпоинты API ---

@app.get("/api/poll", response_model=list[Poll])
async def get_polls():
    """
    Возвращает список всех опросов.
    """
    return polls

@app.get("/api/poll/{poll_id}", response_model=Poll)
async def get_poll(poll_id: str):
    for poll in polls:
        if poll["id"] == poll_id:
            return poll
    raise HTTPException(status_code=404, detail="Poll not found")

@app.post("/api/poll/create", response_model=Poll)
async def create_poll(req: PollCreateRequest):
    poll_id = str(uuid.uuid4())
    options = [
        {"id": str(uuid.uuid4()), "text": opt, "votes": 0}
        for opt in req.options
    ]
    poll = {"id": poll_id, "question": req.question, "options": options}
    polls.append(poll)
    save_polls()
    return poll

@app.post("/api/poll/vote/{poll_id}/{option_id}", response_model=Poll)
async def cast_vote(poll_id: str, option_id: str):
    for poll in polls:
        if poll["id"] == poll_id:
            for option in poll["options"]:
                if option["id"] == option_id:
                    option["votes"] += 1
                    save_polls()
                    return poll
            raise HTTPException(status_code=404, detail="Option not found")
    raise HTTPException(status_code=404, detail="Poll not found")