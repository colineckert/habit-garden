import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const habits = await db.query.habits.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Welcome to Habit Garden
        </h1>
      </div>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            <h2>{habit.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
