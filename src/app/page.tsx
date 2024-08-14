import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Habits() {
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
        <div className="pb-2 text-3xl font-bold">Welcome to Habit Garden</div>
        <button>Get started by adding a habit</button>
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

export default async function HomePage() {
  return (
    <main className="py-12">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h1 className="pb-2 text-3xl font-bold">Welcome to Habit Garden</h1>
          <div>Please sign in above</div>
        </div>
      </SignedOut>
      <SignedIn>
        <Habits />
      </SignedIn>
    </main>
  );
}
