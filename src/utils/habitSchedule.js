import { getDayOfWeek, getTodayDate } from "./date"

export function isHabitDueOnDate(habit, dateStr) {
  const frequency = habit.frequency ?? "daily"

  if (frequency === "daily") return true

  if (frequency === "weekly") {
    const days = Array.isArray(habit.daysOfWeek) ? habit.daysOfWeek : []
    return days.includes(getDayOfWeek(dateStr))
  }

  return true
}

export function isHabitDueToday(habit, dateStr = getTodayDate()) {
  return isHabitDueOnDate(habit, dateStr)
}