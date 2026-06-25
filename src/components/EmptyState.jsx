import { Target, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function EmptyState() {
  return (
    <Card className="rounded-2xl border border-dashed border-slate-300 bg-white/80 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <CardContent className="flex flex-col items-center justify-center px-6 py-14 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <Target className="h-8 w-8" />
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
          No habits yet
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
          Start with one small daily goal. Add a habit like reading, walking,
          coding, or drinking water and begin building consistency one day at a
          time.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <Sparkles className="h-4 w-4" />
          Add your first habit from the form above
        </div>
      </CardContent>
    </Card>
  )
}