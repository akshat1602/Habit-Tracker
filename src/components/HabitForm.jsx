import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const weekDays = [
  { label: "Mon", value: 1 },
  { label: "Tue", value: 2 },
  { label: "Wed", value: 3 },
  { label: "Thu", value: 4 },
  { label: "Fri", value: 5 },
  { label: "Sat", value: 6 },
  { label: "Sun", value: 0 },
]

export default function HabitForm({ onAddHabit }) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("General")
  const [frequency, setFrequency] = useState("daily")
  const [daysOfWeek, setDaysOfWeek] = useState([])

  function toggleDay(dayValue) {
    setDaysOfWeek((prev) =>
      prev.includes(dayValue)
        ? prev.filter((day) => day !== dayValue)
        : [...prev, dayValue].sort((a, b) => a - b)
    )
  }

  function handleSubmit(e) {
    e.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedCategory = category.trim() || "General"

    if (!trimmedTitle) return
    if (frequency === "weekly" && daysOfWeek.length === 0) return

    onAddHabit({
      title: trimmedTitle,
      category: trimmedCategory,
      frequency,
      daysOfWeek: frequency === "weekly" ? daysOfWeek : [],
    })

    setTitle("")
    setCategory("General")
    setFrequency("daily")
    setDaysOfWeek([])
  }

  return (
    <Card className="rounded-2xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <CardHeader>
        <CardTitle className="dark:text-slate-100">Add Habit</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            placeholder="e.g. Read 20 minutes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
          />

          <Input
            placeholder="Category (Study, Health, Fitness...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
          />

          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Frequency
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant={frequency === "daily" ? "default" : "outline"}
                onClick={() => {
                  setFrequency("daily")
                  setDaysOfWeek([])
                }}
                className={frequency !== "daily" ? "dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800" : ""}
              >
                Daily
              </Button>

              <Button
                type="button"
                variant={frequency === "weekly" ? "default" : "outline"}
                onClick={() => setFrequency("weekly")}
                className={frequency !== "weekly" ? "dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800" : ""}
              >
                Specific days
              </Button>
            </div>

            {frequency === "weekly" && (
              <div className="space-y-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700 dark:bg-slate-950/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Choose the weekdays when this habit should appear as due.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {weekDays.map((day) => (
                    <label
                      key={day.value}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-700 dark:text-slate-200"
                    >
                      <Checkbox
                        checked={daysOfWeek.includes(day.value)}
                        onCheckedChange={() => toggleDay(day.value)}
                      />
                      <span>{day.label}</span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {daysOfWeek.length === 0 ? (
                    <Badge variant="secondary" className="dark:bg-slate-800 dark:text-slate-200">
                      No days selected
                    </Badge>
                  ) : (
                    weekDays
                      .filter((day) => daysOfWeek.includes(day.value))
                      .map((day) => (
                        <Badge
                          key={day.value}
                          variant="secondary"
                          className="dark:bg-slate-800 dark:text-slate-200"
                        >
                          {day.label}
                        </Badge>
                      ))
                  )}
                </div>
              </div>
            )}
          </div>

          <Button type="submit" className="w-full">
            Add Habit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}