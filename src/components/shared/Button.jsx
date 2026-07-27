import React from "react";

export default function Button({
  children,
  variant = "solid",
  className = "",
  href = "#/kontakt",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-4 text-base md:text-lg font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#070b1c]";

  const styles =
    variant === "outline"
      ? "border border-cyan-300/35 bg-transparent text-cyan-100 hover:bg-cyan-300/10"
      : "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30 hover:bg-cyan-200";

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}