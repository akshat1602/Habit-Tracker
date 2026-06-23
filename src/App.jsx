import HabitForm from "@/components/HabitForm"
import HabitList from "@/components/HabitList"
import HabitStats from "@/components/HabitStats"
import { useHabits } from "@/hooks/useHabits"

function App() {
  const { habits, addHabit, deleteHabit, toggleHabitCompletion } = useHabits();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Habit Tracker</h1>
          <p className="mt-2 text-sm text-slate-600">
            Track daily habits, build streaks, and stay consistent.
          </p>
        </div>

        <HabitStats habits={habits} />

        <HabitForm onAddHabit={addHabit} />

        <HabitList
          habits={habits}
          onToggle={toggleHabitCompletion}
          onDelete={deleteHabit}
        />
      </div>
    </main>
  )
}

export default App