# **МАҢЫЗДЫ: СТУДЕНТТЕРГЕ АРНАЛҒАН ТАПСЫРМАЛАР!**

Дағдыларды бекітуге арналған практикалық тапсырмалар. Қателерден қорықпа, бұл оқу процесінің бір бөлігі!

---

# **Жоба 5/10: Нақты уақыттағы дауыс беру**

Интерактивті дауыс беру қосымшасы, мұнда нәтижелер поллинг (polling) механизмі арқылы нақты уақытта жаңартылады.

---

**🚀 Технологиялар**

* **Бэкенд**: FastAPI
* **Фронтенд**: Next.js, React, Axios
* **Негізгі концепция**: Фронтендте API-ны мерзімді сұрау және жаңа деректерді алу үшін `setInterval` қолдану, бұл "тірі" қосымша иллюзиясын жасайды.

**✨ Функционал**

* Сұрақ пен дауыс беруге арналған нұсқаларды көрсету.
* Нұсқалардың біріне дауыс беру мүмкіндігі.
* Барлық қосылған клиенттер үшін нәтижелер гистограммасын әр 3 секунд сайын автоматты түрде жаңарту.
* Клиент тарапында қайта дауыс беруді қарапайым бұғаттау.

# **Сенің міндетің:**

## Сенің тапсырмаң:

# 1. **Опростарды пайдаланушылар жасауы:**
> * ## **Бэкенд**: Жаңа опрос (сұрақ + нұсқалар) жасауға мүмкіндік беретін `POST /api/poll/create` эндпоинтін қос. Бірнеше опросты тізімде немесе сөздікте сақта.
> * ## **Фронтенд**: Жаңа опрос жасауға арналған формасы бар жеке бет (`/create`) жаса.

# 2. **Деректерді сақтау:**
> * ## **Бэкенд**: Стандартты `json` кітапханасын пайдалан. Әр дауыс беру немесе опрос жасау кезінде барлық деректерді `polls.json` файлына сақта. Сервер іске қосылғанда, бұл файлдың бар-жоғын тексер және егер бар болса, одан деректерді жүкте. Бұл серверді қайта іске қосқанда нәтижелерді сақтауға мүмкіндік береді.

# 3. **Қайта дауыс беруден сенімдірек қорғау:**
> * ## Қарапайым бұғаттау орнына браузерде `localStorage` қолдан. Пайдаланушы дауыс берген кезде, опрос ID-ін және таңдалған нұсқаны `localStorage`-ға жаз. Бетті жүктеу кезінде, ағымдағы опрос үшін жазбаның бар-жоғын тексер және егер бар болса — дауыс беруді бірден бұғатта.

---

# **IMPORTANT: TASKS FOR STUDENTS!**

These are practical assignments to consolidate your skills. Don't be afraid of mistakes; they are part of the learning process!

---

# **Project 5/10: Real-time Voting**

An interactive voting application where results are updated in real-time using a polling mechanism.

---

**🚀 Technologies**

* **Backend**: FastAPI
* **Frontend**: Next.js, React, Axios
* **Key Concept**: Using `setInterval` on the frontend for periodic API polling to get fresh data, creating the illusion of a "live" application.

**✨ Functionality**

* Display of a question and voting options.
* Ability to vote for one of the options.
* Automatic update of the results histogram every 3 seconds for all connected clients.
* Simple client-side blocking of repeat voting.

# **Your Task:**

## Your Mission:

# 1. **User-Created Polls:**
> * ## **Backend**: Add a `POST /api/poll/create` endpoint that allows creating a new poll (question + options). Store multiple polls in a list or dictionary.
> * ## **Frontend**: Create a separate page (`/create`) with a form for creating a new poll.

# 2. **Data Persistence:**
> * ## **Backend**: Use the standard `json` library. On each vote or poll creation, save all data to a `polls.json` file. When the server starts, check if this file exists, and if so, load the data from it. This will allow results to be saved between server restarts.

# 3. **More Robust Duplicate Voting Protection:**
> * ## Instead of simple state-based blocking, use `localStorage` in the browser. When a user votes, record the poll ID and selected option in `localStorage`. When the page loads, check if there's an entry for the current poll, and if so, immediately block voting.

---

# **ВАЖНО: ЗАДАЧИ ДЛЯ СТУДЕНТОВ!**

Перед тобой практические задания для закрепления навыков. Не бойся ошибок, это часть обучения!

---

# **Проект 5/10: Голосование в реальном времени**

Интерактивное приложение для голосования, где результаты обновляются в реальном времени с помощью механизма поллинга (polling).

---

**🚀 Технологии**

* **Бэкенд**: FastAPI
* **Фронтенд**: Next.js, React, Axios
* **Ключевая концепция**: `setInterval` на фронтенде для периодического опроса API и получения свежих данных, что создает иллюзию "живого" приложения.

**✨ Функционал**

* Отображение вопроса и вариантов для голосования.
* Возможность проголосовать за один из вариантов.
* Автоматическое обновление гистограммы с результатами каждые 3 секунды для всех подключенных клиентов.
* Простая блокировка повторного голосования на стороне клиента.

# **Твоя задача:**

## Твоя миссия:

# 1. **Создание опросов пользователями:**
> * ## **Бэкенд**: Добавь эндпоинт `POST /api/poll/create`, который позволяет создать новый опрос (вопрос + варианты). Храни несколько опросов в списке или словаре.
> * ## **Фронтенд**: Создай отдельную страницу (`/create`) с формой для создания нового опроса.

# 2. **Сохранение данных:**
> * ## **Бэкенд**: Используй стандартную библиотеку `json`. При каждом голосовании или создании опроса сохраняй все данные в файл `polls.json`. При старте сервера проверяй, существует ли этот файл, и если да, загружай данные из него. Это позволит сохранять результаты между перезапусками сервера.

# 3. **Более надежная защита от повторного голосования:**
> * ## Вместо простой блокировки в стейте используй `localStorage` в браузере. Когда пользователь голосует, записывай ID опроса и выбранный вариант в `localStorage`. При загрузке страницы проверяй, нет ли там записи для текущего опроса, и если есть — сразу блокируй голосование.

# Next.js және FastAPI орнату: Жылдам бастау нұсқаулығы

**НАЗАР АУДАРЫҢЫЗ\! Осы жобаны іске қосу үшін қазір бірден ЕКІ БӨЛЕК ТЕРМИНАЛ (пәрмен жолы) ТЕРЕЗЕСІН ашуыңыз керек\!**

**Екі терминалды ашыңыз және әрқайсысы үшін төмендегі нұсқауларды орындаңыз.**

-----

## Терминал №1: FRONT-END (Next.js) іске қосу

1.  **Front-end қалтасына өту:**

    ```bash
    cd frontend
    ```

2.  **JavaScript тәуелділіктерін орнату (БІР РЕТ немесе жобаны жаңартқанда орындаңыз):**

    ```bash
    pnpm install
    ```

3.  **Front-end серверін іске қосу:**

    ```bash
    pnpm dev
    ```

      * **Егер `pnpm dev` "next танылмады" деген қате берсе**, мына пәрменді қолданыңыз:
        ```bash
        .\node_modules\.bin\next dev --turbopack
        ```
      * **Бұл терминалды жаппаңыз.** Front-end онда жұмыс істеуін жалғастырады.

-----

## Терминал №2: BACK-END (FastAPI) іске қосу

1.  **Back-end қалтасына өту:**

    ```bash
    cd backend
    ```

2.  **Python ортасын орнату (БІР РЕТ немесе жобаны жаңартқанда орындаңыз):**

    -----

    **МАҢЫЗДЫ PYTHON НҰСҚАСЫ ТУРАЛЫ ЕСКЕРТУ:**

      * **Егер Python нұсқасы сәйкес келсе**, жай ғана бар `venv` (3-қадам) белсендіріңіз және тәуелділіктерді орнатыңыз (`pip install -r requirements.txt`). Егер `venv` жобада бұрыннан бар болса, оны көшіру қажет емес.
      * **Егер Python нұсқасы әртүрлі болса**, міндетті түрде жаңа `venv` жасаңыз: `python -m venv venv`. Содан кейін оны белсендіріңіз және тәуелділіктерді орнатыңыз.
      * `venv` Python-ның нақты нұсқасына байланысты. `python --version` арқылы тексеріңіз.

    -----

      * **Виртуалды ортаны жасау (Python venv, Conda емес):**
        ```bash
        python -m venv venv
        ```
      * **Ортаны белсендіру:**
          * **Windows үшін (PowerShell):**
            ```bash
            .\venv\Scripts\activate
            ```
          * **macOS / Linux үшін (Bash/Zsh):**
            ```bash
            source venv/bin/activate
            ```
      * **`requirements.txt` файлынан Python тәуелділіктерін орнату:**
        ```bash
        pip install -r requirements.txt
        ```
        [cite\_start]`aiofiles` [cite: 1, 2] [cite\_start]және `httpx` [cite: 4] орнатылғанына көз жеткізіңіз.
      * **Ортаны белсенділігін тоқтату (орнатқаннан кейін):**
        ```bash
        deactivate
        ```

3.  **Виртуалды ортаны белсендіру (әр серверді іске қоспас бұрын):**

      * **Windows үшін (PowerShell):**
        ```bash
        .\venv\Scripts\activate
        ```
      * **macOS / Linux үшін (Bash/Zsh):**
        ```bash
        source venv/bin/activate
        ```

4.  **FastAPI Back-end серверін іске қосу:**

    ```bash
    fastapi dev main.py
    ```

      * **Бұл терминалды жаппаңыз.** Back-end онда жұмыс істеуін жалғастырады. API құжаттамасы: `http://127.0.0.1:8000/docs`.

-----

**Екі терминал да өз серверлерінің іске қосылғанын көрсеткеннен кейін, веб-шолғышты ашып, мына мекенжайға өтіңіз:**

**`http://localhost:3000`**

**Дәл осы жерде сіз жобаның жұмыс істеп тұрған Front-end бөлігін көресіз.**

-----

# Setting Up Next.js and FastAPI: A Quick Start Guide

**ATTENTION\! To run this project, you need to open TWO SEPARATE TERMINAL (command prompt) WINDOWS RIGHT NOW\!**

**Open two terminals and follow the instructions below for each one.**

-----

## Terminal №1: Starting the FRONT-END (Next.js)

1.  **Navigate to the Front-end folder:**

    ```bash
    cd frontend
    ```

2.  **Install JavaScript dependencies (perform ONCE, or when updating the project):**

    ```bash
    pnpm install
    ```

3.  **Start the Front-end server:**

    ```bash
    pnpm dev
    ```

      * **If `pnpm dev` throws an "next is not recognized" error**, use this command:
        ```bash
        .\node_modules\.bin\next dev --turbopack
        ```
      * **Do not close this terminal.** The Front-end will continue to run in it.

-----

## Terminal №2: Starting the BACK-END (FastAPI)

1.  **Navigate to the Back-end folder:**

    ```bash
    cd backend
    ```

2.  **Set up the Python environment (perform ONCE, or when updating the project):**

    -----

    **IMPORTANT PYTHON VERSION WARNING:**

      * **If your Python version matches**, simply activate the existing `venv` (step 3) and install dependencies (`pip install -r requirements.txt`). Copying `venv` is not needed if it's already in the project.
      * **If your Python version differs**, you **must** create a new `venv`: `python -m venv venv`. Then activate it and install dependencies.
      * `venv` is tied to a specific Python version. Check `python --version`.

    -----

      * **Create a virtual environment (Python venv, not Conda):**
        ```bash
        python -m venv venv
        ```
      * **Activate the environment:**
          * **For Windows (PowerShell):**
            ```bash
            .\venv\Scripts\activate
            ```
          * **For macOS / Linux (Bash/Zsh):**
            ```bash
            source venv/bin/activate
            ```
      * **Install Python dependencies from `requirements.txt`:**
        ```bash
        pip install -r requirements.txt
        ```
        [cite\_start]Ensure that `aiofiles` [cite: 1, 2] [cite\_start]and `httpx` [cite: 4] are installed.
      * **Deactivate the environment (after installation):**
        ```bash
        deactivate
        ```

3.  **Activate the virtual environment (before each server start):**

      * **For Windows (PowerShell):**
        ```bash
        .\venv\Scripts\activate
        ```
      * **For macOS / Linux (Bash/Zsh):**
        ```bash
        source venv/bin/activate
        ```

4.  **Start the FastAPI Back-end server:**

    ```bash
    fastapi dev main.py
    ```

      * **Do not close this terminal.** The Back-end will continue to run in it. API Documentation: `http://127.0.0.1:8000/docs`.

-----

**Once both terminals show their servers are running, open your web browser and navigate to:**

**`http://localhost:3000`**

**This is where you will see the running Front-end of the project.**

-----

# Настройка Next.js и FastAPI: Руководство по быстрому старту

**ВНИМАНИЕ\! Для запуска проекта тебе нужно открыть ДВА ОТДЕЛЬНЫХ ОКНА ТЕРМИНАЛА (командной строки) ПРЯМО СЕЙЧАС\!**

**Открой два терминала и следуй инструкциям ниже для каждого из них.**

-----

## Терминал №1: Запуск FRONT-END (Next.js)

1.  **Переход в папку Front-end:**

    ```bash
    cd frontend
    ```

2.  **Установка JavaScript-зависимостей (выполнить ОДИН РАЗ, или при обновлении проекта):**

    ```bash
    pnpm install
    ```

3.  **Запуск Front-end сервера:**

    ```bash
    pnpm dev
    ```

      * **Если `pnpm dev` выдает ошибку "next не распознан"**, используй эту команду:
        ```bash
        .\node_modules\.bin\next dev --turbopack
        ```
      * **Не закрывай этот терминал.** Front-end будет продолжать работать в нем.

-----

## Терминал №2: Запуск BACK-END (FastAPI)

1.  **Переход в папку Back-end:**

    ```bash
    cd backend
    ```

2.  **Настройка Python-окружения (выполнить ОДИН РАЗ, или при обновлении проекта):**

    -----

    **ВАЖНОЕ ПРЕДУПРЕЖДЕНИЕ О ВЕРСИЯХ PYTHON:**

      * **Если версия Python совпадает**, просто активируй существующее `venv` (шаг 3) и установи зависимости (`pip install -r requirements.txt`). Копирование `venv` не требуется, если оно уже в проекте.
      * **Если версия Python отличается**, **обязательно** создай новое `venv`: `python -m venv venv`. Затем активируй его и установи зависимости.
      * `venv` привязан к конкретной версии Python. Проверяй `python --version`.

    -----

      * **Создание виртуального окружения (Python venv, не Conda):**
        ```bash
        python -m venv venv
        ```
      * **Активация окружения:**
          * **Для Windows (PowerShell):**
            ```bash
            .\venv\Scripts\activate
            ```
          * **Для macOS / Linux (Bash/Zsh):**
            ```bash
            source venv/bin/activate
            ```
      * **Установка Python-зависимостей из `requirements.txt`:**
        ```bash
        pip install -r requirements.txt
        ```
        [cite\_start]Убедись, что `aiofiles` [cite: 1, 2] [cite\_start]и `httpx` [cite: 4] установлены.
      * **Деактивация окружения (после установки):**
        ```bash
        deactivate
        ```

3.  **Активация виртуального окружения (перед каждым запуском сервера):**

      * **Для Windows (PowerShell):**
        ```bash
        .\venv\Scripts\activate
        ```
      * **Для macOS / Linux (Bash/Zsh):**
        ```bash
        source venv/bin/activate
        ```

4.  **Запуск Back-end сервера FastAPI:**

    ```bash
    fastapi dev main.py
    ```

      * **Не закрывай этот терминал.** Back-end будет продолжать работать в нем. Документация API: `http://127.0.0.1:8000/docs`.

-----

**Как только оба терминала покажут, что их серверы запущены, открой веб-браузер и перейди по адресу:**

**`http://localhost:3000`**

**Именно здесь ты увидишь работающий Front-end проекта.**

# Проект 5/10: Голосование в реальном времени

Интерактивное приложение для голосования, где результаты обновляются в реальном времени с помощью механизма **поллинга (polling)**.

## 🚀 Технологии

* **Бэкенд:** FastAPI
* **Фронтенд:** Next.js, React, Axios
* **Ключевая концепция:** `setInterval` на фронтенде для периодического опроса API и получения свежих данных, что создает иллюзию "живого" приложения.

## ✨ Функционал

* Отображение вопроса и вариантов для голосования.
* Возможность проголосовать за один из вариантов.
* Автоматическое обновление гистограммы с результатами каждые 3 секунды для всех подключенных клиентов.
* Простая блокировка повторного голосования на стороне клиента.

## 🎓 Задание для студентов

### Ваша миссия:

1.  **Создание опросов пользователями:**
    * **Бэкенд:** Добавьте эндпоинт `POST /api/poll/create`, который позволяет создать новый опрос (вопрос + варианты). Храните несколько опросов в списке или словаре.
    * **Фронтенд:** Создайте отдельную страницу (`/create`) с формой для создания нового опроса.

2.  **Сохранение данных:**
    * **Бэкенд:** Используйте стандартную библиотеку `json`. При каждом голосовании или создании опроса сохраняйте все данные в файл `polls.json`. При старте сервера проверяйте, существует ли этот файл, и если да, загружайте данные из него. Это позволит сохранять результаты между перезапусками сервера.

3.  **Более надежная защита от повторного голосования:**
    * Вместо простой блокировки в стейте используйте `localStorage` в браузере. Когда пользователь голосует, записывайте ID опроса и выбранный вариант в `localStorage`. При загрузке страницы проверяйте, нет ли там записи для текущего опроса, и если есть — сразу блокируйте голосование.

## ⚙️ Локальный запуск

1.  Клонируйте репозиторий.
2.  **Бэкенд:** в папке `backend` выполните `pip install "fastapi[all]"` и `uvicorn main:app --reload`.
3.  **Фронтенд:** в папке `frontend` выполните `pnpm install` и `pnpm dev`.
