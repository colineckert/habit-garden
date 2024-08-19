import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export async function getUserHabits() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const habits = await db.query.habits.findMany({
    where: (habit, { eq }) => eq(habit.userId, user.userId),
    orderBy: (habit, { asc }) => asc(habit.createdAt),
  });

  return habits;
}
