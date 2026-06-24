import { getLastNDates, getShortDayLabel } from "@/utils/date"

export default function HabitHistory({ completedDates }) {
  const days = getLastNDates(7)

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        Last 7 days
      </p>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date) => {
          const completed = completedDates.includes(date)

          return (
            <div key={date} className="space-y-1 text-center">
              <div
                className={[
                  "h-10 rounded-xl border",
                  completed
                    ? "border-slate-900 bg-slate-900"
                    : "border-slate-200 bg-slate-100",
                ].join(" ")}
                title={date}
              />
              <p className="text-[11px] text-slate-500">{getShortDayLabel(date)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}