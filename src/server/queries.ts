import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { habits } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getUserHabits() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const habits = await db.query.habits.findMany({
    where: (habit, { eq }) => eq(habit.userId, user.userId),
    orderBy: (habit, { asc }) => asc(habit.createdAt),
  });

  return habits;
}

export async function createHabit(name: string) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db.insert(habits).values({
    name,
    userId: user.userId,
  });

  redirect("/");
}

export async function deleteHabit(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(habits)
    .where(and(eq(habits.id, id), eq(habits.userId, user.userId)));

  redirect("/");
}
