import {
  eachDayOfInterval,
  endOfWeek,
  format,
  parseISO,
  startOfWeek,
} from "date-fns"
import { getTodayDate } from "./date"
import { calculateLongestStreak } from "./streak"
import { isHabitDueOnDate } from "./habitSchedule"

export function getCompletedTodayCount(habits) {
  const today = getTodayDate()

  return habits.filter(
    (habit) =>
      isHabitDueOnDate(habit, today) && habit.completedDates.includes(today)
  ).length
}

export function getDueTodayCount(habits) {
  const today = getTodayDate()
  return habits.filter((habit) => isHabitDueOnDate(habit, today)).length
}

export function getCompletionRate(habits) {
  const dueToday = getDueTodayCount(habits)
  if (!dueToday) return 0

  return Math.round((getCompletedTodayCount(habits) / dueToday) * 100)
}

export function getLongestStreakAcrossHabits(habits) {
  if (!habits.length) return 0

  return Math.max(
    ...habits.map((habit) => calculateLongestStreak(habit.completedDates))
  )
}

export function getWeeklyChartData(habits) {
  const today = new Date()
  const weekStart = startOfWeek(today, { weekStartsOn: 1 })
  const weekEnd = endOfWeek(today, { weekStartsOn: 1 })

  return eachDayOfInterval({ start: weekStart, end: weekEnd }).map((date) => {
    const dateStr = format(date, "yyyy-MM-dd")

    const completed = habits.filter(
      (habit) =>
        isHabitDueOnDate(habit, dateStr) &&
        habit.completedDates.includes(dateStr)
    ).length

    return {
      label: format(date, "EEE"),
      completed,
    }
  })
}

export function getWeeklyCompletionRate(habits) {
  const today = new Date()
  const weekStart = startOfWeek(today, { weekStartsOn: 1 })
  const weekEnd = endOfWeek(today, { weekStartsOn: 1 })
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd })

  let totalDue = 0
  let totalCompleted = 0

  for (const day of days) {
    const dateStr = format(day, "yyyy-MM-dd")

    for (const habit of habits) {
      if (isHabitDueOnDate(habit, dateStr)) {
        totalDue++
        if (habit.completedDates.includes(dateStr)) {
          totalCompleted++
        }
      }
    }
  }

  if (!totalDue) return 0
  return Math.round((totalCompleted / totalDue) * 100)
}