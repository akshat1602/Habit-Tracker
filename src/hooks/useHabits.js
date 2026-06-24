import { useLocalStorage } from "./useLocalStorage"
import { sampleHabits } from "@/data/sampleHabits"
import { getTodayDate } from "@/utils/date"

function normalizeHabit(habit) {
  return {
    id: habit.id ?? crypto.randomUUID(),
    title: habit.title ?? "",
    category: habit.category ?? "General",
    frequency: habit.frequency ?? "daily",
    daysOfWeek: Array.isArray(habit.daysOfWeek) ? habit.daysOfWeek : [],
    createdAt: habit.createdAt ?? getTodayDate(),
    completedDates: Array.isArray(habit.completedDates) ? habit.completedDates : [],
  }
}

export function useHabits() {
  const [habits, setHabits] = useLocalStorage(
    "habits",
    sampleHabits.map(normalizeHabit)
  )

  function addHabit({ title, category, frequency, daysOfWeek }) {
    const newHabit = {
      id: crypto.randomUUID(),
      title,
      category,
      frequency,
      daysOfWeek,
      createdAt: getTodayDate(),
      completedDates: [],
    }

    setHabits((prev) => [newHabit, ...prev.map(normalizeHabit)])
  }

  function deleteHabit(id) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id))
  }

  function toggleHabitCompletion(id) {
    const today = getTodayDate()

    setHabits((prev) =>
      prev.map((habit) => {
        const safeHabit = normalizeHabit(habit)
        if (safeHabit.id !== id) return safeHabit

        const alreadyCompleted = safeHabit.completedDates.includes(today)

        return {
          ...safeHabit,
          completedDates: alreadyCompleted
            ? safeHabit.completedDates.filter((date) => date !== today)
            : [...safeHabit.completedDates, today].sort(),
        }
      })
    )
  }

  return {
    habits: habits.map(normalizeHabit),
    addHabit,
    deleteHabit,
    toggleHabitCompletion,
  }
}