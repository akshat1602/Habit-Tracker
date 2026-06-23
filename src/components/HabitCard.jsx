import { Trash2, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { calculateCurrentStreak } from "@/utils/streak"
import { getTodayDate } from "@/utils/date"

export default function HabitCard({ habit, onToggle, onDelete }) {
  const today = getTodayDate()
  const isCompletedToday = habit.completedDates.includes(today)
  const streak = calculateCurrentStreak(habit.completedDates)

  return (
    <Card className="rounded-2xl">
      <CardContent className="flex items-center justify-between gap-4 p-5">
        <div className="flex items-start gap-4">
          <Checkbox checked={isCompletedToday} onCheckedChange={() => onToggle(habit.id)} />
          <div>
            <h3 className="font-semibold">{habit.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="secondary">{habit.category}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Flame className="h-3.5 w-3.5" />
                {streak} day streak
              </Badge>
            </div>
          </div>
        </div>

        <Button variant="ghost" size="icon" onClick={() => onDelete(habit.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}