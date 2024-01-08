import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const recurringPaymentsRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        dateOfCharge: z.number().int().min(1).max(31),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.recurringPayment.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
          amount: input.name.length * 100,
          dateOfCharge: input.dateOfCharge,
          createdAt: new Date(),
          owner: { connect: { id: ctx.session.user.id } },
          updatedAt: new Date(),
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.recurringPayment.findMany({
      orderBy: { createdAt: "desc" },
      where: { owner: { id: ctx.session.user.id } },
    });
  }),
});
