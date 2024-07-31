import { SignedIn, SignedOut } from "@clerk/nextjs";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SignedOut>
          <div className="h-full w-full text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
        <SignedIn>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <h1 className="text-center text-4xl font-bold">
              Create a new habit
            </h1>
          </div>
        </SignedIn>
      </main>
    </HydrateClient>
  );
}
