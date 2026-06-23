import { getTodayDate } from "./date"

export function getCompletedTodayCount(habits) {
  const today = getTodayDate()
  return habits.filter((habit) => habit.completedDates.includes(today)).length
}

export function getCompletionRate(habits) {
  if (!habits.length) return 0
  return Math.round((getCompletedTodayCount(habits) / habits.length) * 100)
}