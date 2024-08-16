import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { Button } from "./ui/button";

export async function HabitList() {
  const user = auth();

  if (!user?.userId) {
    return null;
  }

  const habits = await db.query.habits.findMany({
    where: (habit, { eq }) => eq(habit.userId, user.userId),
    orderBy: (habit, { asc }) => asc(habit.createdAt),
  });

  if (!habits.length) {
    return (
      <div className="h-full w-full text-center text-2xl">
        <div className="pb-3 text-3xl font-bold">Welcome to Habit Garden</div>
        <Button>Track Your First Habit</Button>
      </div>
    );
  }

  return (
    <div className="h-full w-full text-center">
      <div className="text-2xl font-semibold">Habits</div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
}
