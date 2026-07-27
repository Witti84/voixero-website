import React from "react";

const icons = {
  arrow: "→",
  bot: "◎",
  brain: "✦",
  phone: "☎",
  spark: "✧",
  globe: "◌",
  users: "◉",
  gauge: "◒",
  check: "✓",
  line: "⌁",
  zap: "⚡",
  message: "▱",
  monitor: "▤",
  settings: "⚙",
  shield: "▣",
  target: "◎",
  cloud: "☁",
};

export default function Icon({
  name,
  className = "",
  size = "text-3xl",
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center font-light leading-none ${size} ${className}`}
    >
      {icons[name] || icons.spark}
    </span>
  );
}