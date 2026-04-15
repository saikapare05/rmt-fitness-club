import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

type Feedback = {
  id: string;
  name: string;
  feedback?: string;
  message?: string; // fallback for old data
};

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [index, setIndex] = useState(0);

  // 🔹 Fetch data from Firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "feedbacks"), (snapshot) => {
      const data: Feedback[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Feedback, "id">),
      }));
      setFeedbacks(data);
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Auto-slide every 3 seconds
  useEffect(() => {
    if (feedbacks.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === feedbacks.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [feedbacks, index]);

  // 🔹 If no data
  if (feedbacks.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No reviews yet
      </p>
    );
  }

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? feedbacks.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === feedbacks.length - 1 ? 0 : prev + 1
    );
  };

  const current = feedbacks[index];

  return (
    <div className="max-w-3xl mx-auto text-center">
      
      <div className="bg-black border border-gray-700 rounded-2xl p-10 shadow-xl">
        
        {/* Quote icon */}
        <div className="text-[#18249E] text-5xl mb-4">“</div>

        {/* Feedback */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {current.feedback || current.message}
        </p>

        {/* Name */}
        <p className="text-[#18249E] font-semibold text-lg">
          — {current.name}
        </p>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 mt-8">
          
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 border border-gray-600 rounded-full hover:bg-[#18249E] transition"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {feedbacks.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-[#18249E]" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 border border-gray-600 rounded-full hover:bg-[#18249E] transition"
          >
            ›
          </button>

        </div>
      </div>
    </div>
  );
};

export default FeedbackList;