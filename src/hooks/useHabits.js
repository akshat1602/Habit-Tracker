import { useLocalStorage } from "./useLocalStorage"
import { sampleHabits } from "@/data/sampleHabits"
import { getTodayDate } from "@/utils/date"

export function useHabits() {
  const [habits, setHabits] = useLocalStorage("habits", sampleHabits)

  function addHabit(title, category) {
    const newHabit = {
      id: crypto.randomUUID(),
      title,
      category,
      createdAt: getTodayDate(),
      completedDates: [],
    }

    setHabits((prev) => [newHabit, ...prev])
  }

  function deleteHabit(id) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id))
  }

  function toggleHabitCompletion(id) {
    const today = getTodayDate()

    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit

        const alreadyCompleted = habit.completedDates.includes(today)

        return {
          ...habit,
          completedDates: alreadyCompleted
            ? habit.completedDates.filter((date) => date !== today)
            : [...habit.completedDates, today],
        }
      })
    )
  }

  return {
    habits,
    addHabit,
    deleteHabit,
    toggleHabitCompletion,
  }
}