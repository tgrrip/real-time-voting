"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreatePollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOptionChange = (idx: number, value: string) => {
    setOptions(opts => opts.map((opt, i) => (i === idx ? value : opt)));
  };

  const addOption = () => {
    setOptions(opts => [...opts, ""]);
  };

  const removeOption = (idx: number) => {
    if (options.length <= 2) return;
    setOptions(opts => opts.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!question.trim() || options.some(opt => !opt.trim())) {
      setError("Заполните вопрос и все варианты");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/api/poll/create", {
        question,
        options,
      });
      router.push(`/poll/${res.data.id}`);
    } catch (err: any) {
      setError("Ошибка при создании опроса");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <button
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-semibold"
          onClick={() => router.push("/")}
        >
          На главную
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800">Создать опрос</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Вопрос:</label>
            <input
              type="text"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Варианты:</label>
            {options.map((opt, idx) => (
              <div key={idx} className="flex items-center mb-2">
                <input
                  type="text"
                  value={opt}
                  onChange={e => handleOptionChange(idx, e.target.value)}
                  required
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {options.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeOption(idx)}
                    className="ml-2 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addOption}
              className="mt-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg"
            >
              + Добавить вариант
            </button>
          </div>
          {error && <div className="text-red-600 font-semibold">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors"
          >
            {loading ? "Создание..." : "Создать опрос"}
          </button>
        </form>
      </div>
    </main>
  );
} 