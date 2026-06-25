import { useEffect, useState } from "react"

const THEME_KEY = "habit-tracker-theme"

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY)

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  }
}