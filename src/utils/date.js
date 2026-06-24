import { format, parseISO, subDays } from "date-fns"

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function getTodayDate() {
  return format(new Date(), "yyyy-MM-dd")
}

export function getLastNDates(count) {
  return Array.from({ length: count }, (_, index) =>
    format(subDays(new Date(), count - 1 - index), "yyyy-MM-dd")
  )
}

export function getShortDayLabel(dateStr) {
  return format(parseISO(dateStr), "EEE")
}

export function getDayOfWeek(dateStr) {
  return parseISO(dateStr).getDay()
}

export function formatFrequencyLabel(habit) {
  if (habit.frequency === "daily") return "Daily"

  if (habit.frequency === "weekly" && habit.daysOfWeek?.length) {
    const labels = habit.daysOfWeek.map((day) => dayNames[day])
    return labels.join(", ")
  }

  return "Custom"
}