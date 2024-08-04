import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { habits } from "~/server/db/schema";

export const habitRouter = createTRPCRouter({
  getAllByUser: publicProcedure.query(async ({ ctx }) => {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const userHabits = ctx.db.query.habits.findMany({
      where: (habits, { eq }) => eq(habits.userId, user.userId),
      orderBy: (habits, { desc }) => desc(habits.createdAt),
    });

    return userHabits ?? [];
  }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const user = auth();

      if (!user.userId) throw new Error("Unauthorized");

      await ctx.db.insert(habits).values({
        name: input.name,
        userId: user.userId,
      });
    }),

  // getLatest: publicProcedure.query(async ({ ctx }) => {
  //   const post = await ctx.db.query.posts.findFirst({
  //     orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  //   });
  //   return post ?? null;
  // }),
});
