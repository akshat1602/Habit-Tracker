import { parseISO, differenceInCalendarDays } from "date-fns"

export function calculateCurrentStreak(completedDates) {
  if (!completedDates?.length) return 0

  const sortedDates = [...completedDates].sort(
    (a, b) => new Date(b) - new Date(a)
  )

  let streak = 0
  let currentDate = new Date()

  for (const dateStr of sortedDates) {
    const date = parseISO(dateStr)
    const diff = differenceInCalendarDays(currentDate, date)

    if (diff === 0 || diff === 1) {
      streak++
      currentDate = date
    } else {
      break
    }
  }

  return streak
}