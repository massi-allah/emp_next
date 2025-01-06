"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

function FAQ({ question, answer, isActive, onClick }: FAQProps) {
  return (
    <div

      className={`flex flex-col justify-start gap-4 p-16 w-full lg:px-40 rounded-16 cursor-pointer ${
        isActive ? "bg-primary-100" : "bg-white"
      }`}
      onClick={onClick}
    >
      {/* Header with Question and Icon */}
      <div className="flex justify-between items-center py-16 gap-8">
        <p>{question}</p>
        <Image
          src={isActive ? "/icons/tabler_minus.svg" : "/icons/tabler_plus.svg"}
          alt="toggle icon"
          width={30}
          height={30}
          className="rounded-button-pill bg-primary-100"
        />
      </div>

      {/* Collapsible Answer with Transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 text-sm text-gray-700 py-4">{answer}</div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    { question: "What is Employ, and how can it help me?", answer: "Employ is an innovative online job platform designed to connect job seekers and employers efficiently. Whether you're looking for your dream job or the perfect candidate, Employ simplifies the recruitment process through advanced tools and user-friendly features." },
    { question: "How can Employ help with job postings?", answer: "Employ provides tools to translate job postings into multiple languages, making them accessible to a wider audience. This ensures that job opportunities reach more candidates, regardless of language barriers." },
    { question: "What is the Employ community?", answer: "The Employ community is a space where users can learn about using the platform, discuss career-related topics, and engage with other job seekers and employers. It’s a hub for collaboration and shared growth." },
    { question: "Do I need an account to use Employ?", answer: "No, Employ currently doesn’t require account registration. You can explore job postings, translations, and the community features without signing up." },
    { question: "How can I suggest improvements or report issues?", answer: "We value your feedback! Use the 'Contact Us' section on our website or participate in the community to share your suggestions and report any issues." },
  ];

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-8" data-aos="fade-up">
      {questions.map((item, index) => (
        <FAQ
          key={index}
          question={item.question}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}
