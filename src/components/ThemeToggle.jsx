import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="relative rounded-full border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  )
}