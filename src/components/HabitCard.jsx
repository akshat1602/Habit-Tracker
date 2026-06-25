import { Trash2, Flame, CalendarDays, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { calculateCurrentStreak } from "@/utils/streak"
import { getTodayDate, formatFrequencyLabel } from "@/utils/date"
import { isHabitDueToday } from "@/utils/habitSchedule"
import HabitHistory from "./HabitHistory"

export default function HabitCard({ habit, onToggle, onDelete }) {
  const today = getTodayDate()
  const isCompletedToday = habit.completedDates.includes(today)
  const isDueToday = isHabitDueToday(habit, today)
  const streak = calculateCurrentStreak(habit.completedDates)

  return (
    <Card className="rounded-2xl border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <Checkbox
              checked={isCompletedToday}
              onCheckedChange={() => onToggle(habit.id)}
              disabled={!isDueToday}
            />

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold dark:text-slate-100">{habit.title}</h3>

                {isCompletedToday && (
                  <Badge className="gap-1 bg-emerald-600 text-white hover:bg-emerald-600 dark:bg-emerald-500">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Done today
                  </Badge>
                )}

                {!isDueToday && (
                  <Badge variant="outline" className="dark:border-slate-700 dark:text-slate-300">
                    Not due today
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="dark:bg-slate-800 dark:text-slate-200"
                >
                  {habit.category}
                </Badge>

                <Badge
                  variant="outline"
                  className="flex items-center gap-1 dark:border-slate-700 dark:text-slate-300"
                >
                  <Flame className="h-3.5 w-3.5" />
                  {streak} day streak
                </Badge>

                <Badge
                  variant="outline"
                  className="flex items-center gap-1 dark:border-slate-700 dark:text-slate-300"
                >
                  <CalendarDays className="h-3.5 w-3.5" />
                  {formatFrequencyLabel(habit)}
                </Badge>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(habit.id)}
            aria-label={`Delete ${habit.title}`}
            className="dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <HabitHistory completedDates={habit.completedDates} />
      </CardContent>
    </Card>
  )
}