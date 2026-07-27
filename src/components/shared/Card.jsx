import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-cyan-300/15 bg-white/[0.035] ${className}`}
    >
      {children}
    </div>
  );
}