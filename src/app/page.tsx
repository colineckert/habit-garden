import { SignedIn, SignedOut } from "@clerk/nextjs";
import { HabitList } from "~/components/HabitList";
import { Button } from "~/components/ui/button";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="py-12">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <h1 className="pb-2 text-3xl font-bold">Welcome to Habit Garden</h1>
          <div>Please sign in above</div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center">
          <HabitList />
          <Button>Track New Habit</Button>
        </div>
      </SignedIn>
    </main>
  );
}
