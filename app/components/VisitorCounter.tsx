"use client";
import { useEffect, useState } from "react";

function Spinner() {
  return (
    <span className="align-middle w-5 h-5">
      <style jsx>{`
        .spinner {
          display: inline-block;
          width: 13px;
          height: 13px;
          border: 2px solid #fff;
          border-top: 2px solid #888;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <span className="spinner"></span>
    </span>
  );
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div
      className="absolute top-4 left-4 z-50 bg-black text-white px-4 py-2 rounded-lg font-jost text-sm shadow"
      style={{ fontFamily: "Jost, sans-serif" }}
    >
      Посетителей: {count === null ? <Spinner /> : count}
    </div>
  );
}
