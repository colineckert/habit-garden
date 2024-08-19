import { Button } from "./ui/button";
import { getUserHabits } from "~/server/queries";

export async function HabitList() {
  const habits = await getUserHabits();

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
