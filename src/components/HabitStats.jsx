import {
  CheckCircle2,
  Flame,
  ListTodo,
  CalendarCheck2,
} from "lucide-react"
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

function StatCard({ title, value, subtitle, icon, accentClasses }) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </CardTitle>
          <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {value}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accentClasses}`}
        >
          {icon}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
      </CardContent>
    </Card>
  )
}

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
        <StatCard
          title="Total Habits"
          value={totalHabits}
          subtitle="All active habits you are tracking"
          icon={<ListTodo className="h-5 w-5" />}
          accentClasses="bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
        />

        <StatCard
          title="Due Today"
          value={dueToday}
          subtitle="Habits scheduled for today"
          icon={<CalendarCheck2 className="h-5 w-5" />}
          accentClasses="bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
        />

        <StatCard
          title="Completed Today"
          value={completedToday}
          subtitle={`${completionRate}% of due habits completed`}
          icon={<CheckCircle2 className="h-5 w-5" />}
          accentClasses="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
        />

        <StatCard
          title="Best Streak"
          value={longestStreak}
          subtitle={`${weeklyRate}% weekly consistency`}
          icon={<Flame className="h-5 w-5" />}
          accentClasses="bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
        />
      </div>

      <Card className="rounded-2xl border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-slate-900 dark:text-slate-100">
            Last 7 days completion
          </CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Review your recent consistency across scheduled habits.
          </p>
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
                  stroke="#3b82f6"
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