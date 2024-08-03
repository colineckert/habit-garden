import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { HydrateClient } from "~/trpc/server";
import { HabitList } from "./_components/HabitList";

export default async function Home() {
  const user = await currentUser();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SignedOut>
          <div className="h-full w-full text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
        <SignedIn>
          <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16">
            <h1 className="text-center text-4xl font-bold">
              {user?.firstName}&rsquo;s Habit Garden
            </h1>
            <Button>Track a New Habit</Button>
            <HabitList />
          </div>
        </SignedIn>
      </main>
    </HydrateClient>
  );
}
