import { Button } from "./ui/button";
import { getUserHabits } from "~/server/queries";

export async function HabitList() {
  const habits = await getUserHabits();

  if (!habits.length) {
    return (
      <div className="p-4">
        <div className="pb-3 text-3xl font-bold">Welcome to Habit Garden</div>
        <Button>Track Your First Habit</Button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="text-2xl font-semibold">Habits</div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  );
}
