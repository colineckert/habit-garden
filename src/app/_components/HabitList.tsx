"use client";

import { api } from "~/trpc/react";

export function HabitList() {
  const [habits] = api.habit.getAllByUser.useSuspenseQuery();

  return (
    <div className="w-full max-w-xs">
      <h1 className="text-2xl font-bold">Habits</h1>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
}
