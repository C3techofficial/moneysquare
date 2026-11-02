import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Switch theme"
      style={{
        width: 40,
        height: 40,
        background: "transparent",
        color: "var(--text)",
        fontSize: 16,
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}