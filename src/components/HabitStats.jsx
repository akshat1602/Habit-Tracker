import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  getCompletedTodayCount,
  getCompletionRate,
  getDueTodayCount,
  getLongestStreakAcrossHabits,
  getWeeklyChartData,
  getWeeklyCompletionRate,
} from "@/utils/progress"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

export default function HabitStats({ habits }) {
  const totalHabits = habits.length
  const dueToday = getDueTodayCount(habits)
  const completedToday = getCompletedTodayCount(habits)
  const completionRate = getCompletionRate(habits)
  const weeklyRate = getWeeklyCompletionRate(habits)
  const longestStreak = getLongestStreakAcrossHabits(habits)
  const chartData = getWeeklyChartData(habits)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Total Habits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalHabits}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Due Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{dueToday}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Completed Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{completedToday}</p>
            <p className="mt-1 text-xs text-slate-500">{completionRate}% of due habits</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Best Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{longestStreak}</p>
            <p className="mt-1 text-xs text-slate-500">{weeklyRate}% weekly consistency</p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle className="text-base">Last 7 days completion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="label" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#0f172a"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}