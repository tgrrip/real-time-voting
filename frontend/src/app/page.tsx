'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Типы для данных голосования
interface PollOption {
  id: string;
  text: string;
  votes: number;
}
interface PollData {
  id: string;
  question: string;
  options: PollOption[];
}

const API_URL = 'http://localhost:8000/api';

export default function Home() {
  const [polls, setPolls] = useState<PollData[]>([]);
  const [voted, setVoted] = useState<Record<string, string>>({}); // pollId: optionId
  const router = useRouter();

  // Получение всех опросов
  const fetchPolls = async () => {
    try {
      const response = await axios.get(`${API_URL}/poll`);
      if (Array.isArray(response.data)) {
        setPolls(response.data);
      } else {
        setPolls([]);
      }
    } catch (error) {
      console.error("Failed to fetch polls:", error);
    }
  };

  // Проверка localStorage на голосование по каждому опросу
  useEffect(() => {
    fetchPolls();
    const intervalId = setInterval(fetchPolls, 3000);
    // При загрузке страницы читаем localStorage для всех опросов
    const votes: Record<string, string> = {};
    if (typeof window !== "undefined") {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith("poll-vote-")) {
          const pollId = key.replace("poll-vote-", "");
          votes[pollId] = localStorage.getItem(key) || "";
        }
      });
      setVoted(votes);
    }
    return () => clearInterval(intervalId);
  }, []);

  // При появлении новых опросов, обновлять voted из localStorage
  useEffect(() => {
    const votes: Record<string, string> = {};
    if (typeof window !== "undefined") {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith("poll-vote-")) {
          const pollId = key.replace("poll-vote-", "");
          votes[pollId] = localStorage.getItem(key) || "";
        }
      });
      setVoted(votes);
    }
  }, [polls.length]);

  const handleVote = async (pollId: string, optionId: string) => {
    if (voted[pollId]) return;
    try {
      const response = await axios.post(`${API_URL}/poll/vote/${pollId}/${optionId}`);
      setPolls(polls => polls.map(p => p.id === pollId ? response.data : p));
      if (typeof window !== "undefined") {
        localStorage.setItem(`poll-vote-${pollId}`, optionId);
        setVoted(v => ({ ...v, [pollId]: optionId }));
      }
    } catch (error) {
      console.error("Failed to cast vote:", error);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <button
          className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          onClick={() => router.push('/create')}
        >
          Создать опрос
        </button>
        {polls.length === 0 ? (
          <p className="text-center text-gray-500">Опросы не найдены. Создайте первый опрос!</p>
        ) : (
          polls.map(poll => {
            const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);
            return (
              <div key={poll.id} className="mb-8 pb-8 border-b last:border-b-0 last:mb-0 last:pb-0">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{poll.question}</h2>
                <div className="space-y-4">
                  {poll.options.map(option => {
                    const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
                    return (
                      <div key={option.id}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-gray-700">{option.text}</span>
                          <span className="text-sm font-medium text-gray-500">{option.votes} голосов ({percentage.toFixed(1)}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-8">
                          <div
                            className="bg-blue-500 h-8 rounded-full transition-all duration-500 ease-in-out text-white flex items-center px-2"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <button
                          onClick={() => handleVote(poll.id, option.id)}
                          disabled={!!voted[poll.id]}
                          className={`w-full mt-2 py-2 text-white font-semibold rounded-lg transition-colors ${
                            voted[poll.id] ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                          } ${voted[poll.id] === option.id ? '!bg-blue-700' : ''}`}
                        >
                          {voted[poll.id] === option.id ? 'Ваш голос' : 'Голосовать'}
                        </button>
                      </div>
                    );
                  })}
                </div>
                {voted[poll.id] && <div className="text-green-600 font-semibold text-center mt-4">Спасибо за голос!</div>}
                <div className="text-center text-gray-600 font-bold pt-4">
                  Всего голосов: {totalVotes}
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-semibold"
                  onClick={() => router.push(`/poll/${poll.id}`)}
                >
                  Перейти к опросу
                </button>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}