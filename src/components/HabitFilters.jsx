import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HabitFilters({ filter, onFilterChange }) {
  return (
    <Tabs value={filter} onValueChange={onFilterChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 gap-2 bg-slate-100 p-1 md:grid-cols-4 dark:bg-slate-900">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="due">Due Today</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}