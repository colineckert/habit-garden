import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2f363c] to-[#040405] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-center text-4xl font-bold">
            Welcome to Habit Garden
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
