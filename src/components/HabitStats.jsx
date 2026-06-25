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
        <Card className="rounded-2xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
              Total Habits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold dark:text-slate-100">{totalHabits}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
              Due Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold dark:text-slate-100">{dueToday}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
              Completed Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold dark:text-slate-100">{completedToday}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {completionRate}% of due habits
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-sm text-slate-500 dark:text-slate-400">
              Best Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold dark:text-slate-100">{longestStreak}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {weeklyRate}% weekly consistency
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-base dark:text-slate-100">
            Last 7 days completion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  className="text-slate-200 dark:text-slate-700"
                />
                <XAxis
                  dataKey="label"
                  tick={{ fill: "currentColor" }}
                  className="text-slate-500 dark:text-slate-400"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgb(15 23 42)",
                    border: "1px solid rgb(51 65 85)",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#0f172a"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                  className="dark:stroke-slate-100"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}