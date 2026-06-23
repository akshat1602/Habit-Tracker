import HabitCard from "./HabitCard"
import EmptyState from "./EmptyState"

export default function HabitList({ habits, onToggle, onDelete }) {
  if (!habits.length) {
    return <EmptyState />
  }

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}