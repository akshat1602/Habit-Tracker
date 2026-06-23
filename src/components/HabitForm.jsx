import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HabitForm({ onAddHabit }) {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("General")

  function handleSubmit(e) {
    e.preventDefault()

    if (!title.trim()) return

    onAddHabit(title.trim(), category)
    setTitle("")
    setCategory("General")
  }

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Add Habit</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="e.g. Read 20 minutes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Category (Study, Health, Fitness...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <Button type="submit" className="w-full">
            Add Habit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}