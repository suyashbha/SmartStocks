import { useEffect, useState } from "react";
import MoonIcon from "../assets/moon.svg";
import SunIcon from "../assets/sun.svg";

export default function DarkModeToggle() {
  // 1. Read initial preference from localStorage (or fallback to system)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 2. Whenever it changes, apply to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return (
    <button className="dark-toggle" title={dark ? "Turn off dark mode" : "Turn on dark mode"} onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
  {dark ? <img src={SunIcon} alt="" /> : <img src={MoonIcon} alt="" />}
</button>

  );
}
