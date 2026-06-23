import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCompletedTodayCount, getCompletionRate } from "@/utils/progress"

export default function HabitStats({ habits }) {
  const totalHabits = habits.length
  const completedToday = getCompletedTodayCount(habits)
  const completionRate = getCompletionRate(habits)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">Total Habits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{totalHabits}</p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">Completed Today</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{completedToday}</p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">Completion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{completionRate}%</p>
        </CardContent>
      </Card>
    </div>
  )
}