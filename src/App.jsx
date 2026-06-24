import { useMemo, useState } from "react"
import HabitFilters from "@/components/HabitFilters"
import HabitForm from "@/components/HabitForm"
import HabitList from "@/components/HabitList"
import HabitStats from "@/components/HabitStats"
import { useHabits } from "@/hooks/useHabits"
import { getTodayDate } from "@/utils/date"
import { isHabitDueToday } from "@/utils/habitSchedule"

function App() {
  const {
    habits,
    addHabit,
    deleteHabit,
    toggleHabitCompletion,
  } = useHabits()

  const [filter, setFilter] = useState("all")
  const today = getTodayDate()

  const filteredHabits = useMemo(() => {
    return habits.filter((habit) => {
      const isCompletedToday = habit.completedDates.includes(today)
      const isDueToday = isHabitDueToday(habit, today)

      if (filter === "all") return true
      if (filter === "due") return isDueToday
      if (filter === "completed") return isCompletedToday
      if (filter === "pending") return isDueToday && !isCompletedToday

      return true
    })
  }, [habits, filter, today])

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Habit Tracker</h1>
          <p className="text-sm text-slate-600">
            Track habits, build streaks, and review your weekly consistency.
          </p>
        </div>

        <HabitStats habits={habits} />

        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <div className="space-y-6">
            <HabitForm onAddHabit={addHabit} />
          </div>

          <div className="space-y-6">
            <HabitFilters filter={filter} onFilterChange={setFilter} />
            <HabitList
              habits={filteredHabits}
              onToggle={toggleHabitCompletion}
              onDelete={deleteHabit}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App