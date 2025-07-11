"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

interface Option {
  id: string;
  text: string;
  votes: number;
}
interface Poll {
  id: string;
  question: string;
  options: Option[];
}

export default function PollPage() {
  const { id } = useParams();
  const router = useRouter();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [loading, setLoading] = useState(true);
  const [votedOption, setVotedOption] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      const voted = localStorage.getItem(`poll-vote-${id}`);
      if (voted) setVotedOption(voted);
    }
  }, [id]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const fetchPoll = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/poll/${id}`);
        setPoll(res.data);
        setLoading(false);
      } catch {
        setError("Опрос не найден");
        setLoading(false);
      }
    };
    fetchPoll();
    interval = setInterval(fetchPoll, 3000);
    return () => clearInterval(interval);
  }, [id]);

  const handleVote = async (optionId: string) => {
    if (!poll || votedOption) return;
    try {
      const res = await axios.post(`http://localhost:8000/api/poll/vote/${id}/${optionId}`);
      setPoll(res.data);
      setVotedOption(optionId);
      if (typeof window !== "undefined") {
        localStorage.setItem(`poll-vote-${id}`, optionId);
      }
    } catch {
      setError("Ошибка при голосовании");
    }
  };

  if (loading) return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-lg text-center">
        Загрузка...
      </div>
    </main>
  );
  if (error) return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-lg text-center text-red-600">
        {error}
      </div>
    </main>
  );
  if (!poll) return null;

  const totalVotes = poll.options.reduce((sum, o) => sum + o.votes, 0);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <button
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-semibold"
          onClick={() => router.push("/")}
        >
          На главную
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800">{poll.question}</h2>
        <div className="space-y-4">
          {poll.options.map(opt => {
            const percentage = totalVotes > 0 ? (opt.votes / totalVotes) * 100 : 0;
            return (
              <div key={opt.id}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-gray-700">{opt.text}</span>
                  <span className="text-sm font-medium text-gray-500">{opt.votes} голосов ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8">
                  <div
                    className="bg-blue-500 h-8 rounded-full transition-all duration-500 ease-in-out text-white flex items-center px-2"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <button
                  disabled={!!votedOption}
                  onClick={() => handleVote(opt.id)}
                  className={`w-full mt-2 py-2 text-white font-semibold rounded-lg transition-colors ${
                    votedOption ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                  } ${votedOption === opt.id ? '!bg-blue-700' : ''}`}
                >
                  {votedOption === opt.id ? 'Ваш голос' : 'Голосовать'}
                </button>
              </div>
            );
          })}
        </div>
        {votedOption && <div className="text-green-600 font-semibold text-center mt-4">Спасибо за голос!</div>}
        <div className="text-center text-gray-600 font-bold pt-4 border-t">
          Всего голосов: {totalVotes}
        </div>
      </div>
    </main>
  );
} 