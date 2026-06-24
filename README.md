# Habit Tracker

A modern React habit tracker for building consistency, tracking streaks, and reviewing weekly progress.

## Live Demo

[Open Live App](https://akshat1602.github.io/Habit-Tracker/)

## Overview

Habit Tracker is a productivity-focused web app built with React, Vite, Tailwind CSS, and shadcn/ui. It helps users create habits, mark daily completion, track streaks, filter due tasks, and review weekly consistency through analytics and visual history.

This project was built to strengthen React concepts such as component architecture, custom hooks, localStorage persistence, derived state, date-based logic, and reusable UI design.

## Features

- Add and delete habits with category support.
- Track daily completion with persistent localStorage data.
- Support daily habits and weekday-based habits.
- View current streaks for each habit.
- Filter habits by all, due today, completed, and pending.
- See a 7-day completion history strip for every habit.
- View dashboard cards for total habits, due today, completed today, and best streak.
- Review weekly consistency with a 7-day analytics chart.
- Responsive UI built with shadcn/ui and Tailwind CSS.

## Tech Stack

- React
- Vite
- Tailwind CSS
- shadcn/ui
- date-fns
- Recharts
- localStorage

## Folder Structure

```txt
src/
  components/
    HabitCard.jsx
    HabitFilters.jsx
    HabitForm.jsx
    HabitHistory.jsx
    HabitList.jsx
    HabitStats.jsx
  hooks/
    useHabits.js
    useLocalStorage.js
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

## What I Learned

- Managing app state with custom React hooks.
- Persisting structured data with localStorage.
- Designing reusable components for forms, lists, filters, and stats.
- Working with date-based logic for streaks, schedules, and weekly analytics.
- Building a more product-like frontend instead of a basic CRUD project.

## Future Improvements

- Monthly heatmap view.
- CSV export for habit history.
- PWA/offline install support.
- Reminder notifications.
- Editable habits and richer analytics.

## Screenshots

Add screenshots or a short GIF here after final UI polish so recruiters can understand the project quickly.

## Author

Akshat  
GitHub: [@akshat1602](https://github.com/akshat1602)