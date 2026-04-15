import { useState, FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

const feedbackOptions = [
  // positive feedback options
  "Excellent gym with high-quality equipment and great ambience",
  "Trainers are highly knowledgeable and provide proper guidance",
  "Very motivating and energetic workout environment",
  "Affordable pricing for the facilities offered",
  "Clean, hygienic, and well-maintained space",
  "Friendly and supportive staff",
  "Great place for beginners to start their fitness journey",
  "Personal training sessions are very effective",
  "Spacious gym with good workout setup",
  "Modern equipment that enhances workout experience",
  "Positive and disciplined fitness atmosphere",
  "Convenient location and easy accessibility",
  "Well-organized workout areas and layout",
  "Good crowd with serious fitness focus",
  "Overall excellent fitness experience",

  // negative feedback options
  "Gym gets crowded during peak hours",
  "Equipment maintenance could be improved",
  "Hygiene standards can be improved further",
  "Need more variety in workout programs",
  "Would prefer more flexible timing options"
];

const FeedbackForm = () => {
  const [name, setName] = useState<string>("");
  const [selectedFeedback, setSelectedFeedback] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !selectedFeedback) {
      alert("Fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "feedbacks"), {
        name,
        feedback: selectedFeedback,
        createdAt: new Date()
      });

      alert("Feedback submitted!");
      setName("");
      setSelectedFeedback("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    // ✅ IMPORTANT: ID added here
    <section className="p-6 scroll-mt-24">

      <h2 className="text-2xl font-bold text-center text-white mb-4">
        We Value Your Feedback 💬
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-xl mx-auto">

        {/* Name Input */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 bg-black/60 text-white border border-gray-700 rounded placeholder-gray-400 caret-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Dropdown */}
        <select
          value={selectedFeedback}
          onChange={(e) => setSelectedFeedback(e.target.value)}
          className="w-full p-3 bg-black/60 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Select your experience</option>
          {feedbackOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <button
            className="
              bg-blue-500 
              hover:bg-blue-600 
              text-white 
              text-md 
              px-8 py-2 
              rounded-lg 
              transition 
              hover:scale-105
            "
          >
            Submit
          </button>
        </div>

      </form>
    </section>
  );
};

export default FeedbackForm;
