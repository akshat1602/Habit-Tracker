import { differenceInCalendarDays, parseISO } from "date-fns"
import { getTodayDate } from "./date"

export function calculateCurrentStreak(completedDates) {
  if (!completedDates?.length) return 0

  const uniqueSortedDates = [...new Set(completedDates)].sort(
    (a, b) => new Date(b) - new Date(a)
  )

  const today = getTodayDate()
  const hasToday = uniqueSortedDates.includes(today)
  let currentDate = hasToday ? parseISO(today) : new Date()
  let streak = 0

  for (const dateStr of uniqueSortedDates) {
    const date = parseISO(dateStr)
    const diff = differenceInCalendarDays(currentDate, date)

    if ((streak === 0 && (diff === 0 || diff === 1)) || (streak > 0 && diff === 1)) {
      streak++
      currentDate = date
    } else if (streak === 0 && diff > 1) {
      break
    } else {
      break
    }
  }

  return streak
}

export function calculateLongestStreak(completedDates) {
  if (!completedDates?.length) return 0

  const uniqueSortedDates = [...new Set(completedDates)].sort(
    (a, b) => new Date(a) - new Date(b)
  )

  let longest = 1
  let current = 1

  for (let i = 1; i < uniqueSortedDates.length; i++) {
    const prev = parseISO(uniqueSortedDates[i - 1])
    const curr = parseISO(uniqueSortedDates[i])
    const diff = differenceInCalendarDays(curr, prev)

    if (diff === 1) {
      current++
      longest = Math.max(longest, current)
    } else if (diff > 1) {
      current = 1
    }
  }

  return longest
}