# Habit Tracker

A modern habit tracking web app built with React, Vite, Tailwind CSS, and shadcn/ui to help users stay consistent, build streaks, and review weekly progress.

## Live Demo

[View Live App](https://akshat1602.github.io/Habit-Tracker/)

## Overview

Habit Tracker is a responsive productivity app that lets users create habits, mark daily completion, filter tasks, track streaks, and review weekly performance through simple analytics.

This project was built to strengthen React fundamentals and improve practical frontend skills such as component-based architecture, state management, custom hooks, localStorage persistence, derived state, date-based logic, and reusable UI design.

## Features

- Add and delete habits with category support.
- Mark habits as completed for the current day.
- Support daily and specific weekday-based habits.
- Track current streaks for each habit.
- Filter habits by All, Due Today, Completed, and Pending.
- View a 7-day completion history for every habit.
- See dashboard stats for total habits, due today, completed today, and best streak.
- Review weekly consistency through a 7-day analytics chart.
- Persist data with localStorage.
- Responsive UI for desktop and mobile screens.
- Icon-only dark mode toggle with persistent theme state.
- Improved empty state and polished dashboard stat cards.

## Tech Stack

- React
- Vite
- Tailwind CSS
- shadcn/ui
- Recharts
- date-fns
- Lucide React
- localStorage

## Folder Structure

```txt
src/
  components/
    EmptyState.jsx
    HabitCard.jsx
    HabitFilters.jsx
    HabitForm.jsx
    HabitHistory.jsx
    HabitList.jsx
    HabitStats.jsx
    ThemeToggle.jsx
  hooks/
    useHabits.js
    useLocalStorage.js
    useTheme.js
  utils/
    date.js
    habitSchedule.js
    progress.js
    streak.js
  data/
    sampleHabits.js
  App.jsx
  main.jsx
```

## Installation

```bash
git clone https://github.com/akshat1602/Habit-Tracker.git
cd Habit-Tracker
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## How It Works

- Users can create habits with a category and frequency.
- Habits can be tracked daily or on specific weekdays.
- Completion status is stored locally in the browser.
- Streaks and weekly analytics are calculated from saved completion history.
- The interface supports both light and dark themes for a cleaner user experience.

## Author

**Akshat**  
GitHub: [@akshat1602](https://github.com/akshat1602)
