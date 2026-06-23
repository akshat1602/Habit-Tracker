export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed p-10 text-center">
      <h3 className="text-lg font-semibold">No habits yet</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Add your first habit to start building consistency.
      </p>
    </div>
  )
}