import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({
      take: 20,
      orderBy: {
        created_at: "desc",
      },
    });
  }),

  getIds: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({
      select: {
        id: true,
      },
    });
  }),

  // getAllStream: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
  //     return ctx.prisma.product.findMany({
  //         where: {
  //             streamId: input
  //         },
  //         include: {
  //             stream: true,
  //             teacher: true
  //         },
  //         orderBy: {
  //             createdAt: 'desc'
  //         }
  //     });
  // }),
  // getAllTeacher: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
  //     return ctx.prisma.product.findMany({
  //         where: {
  //             teacherId: input
  //         },
  //         include: {
  //             stream: true,
  //             teacher: true
  //         },
  //         orderBy: {
  //             createdAt: 'desc'
  //         }
  //     });
  // }),

  // getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
  //     return ctx.prisma.product.findMany({
  //         where: {
  //             id: input
  //         },
  //         include: {
  //             stream: true,
  //             teacher: true
  //         }
  //     });
  // }),

  // // .or(z.literal(''))

  addProduct: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        price: z.string(),
        old_price: z.string(),
        image_url: z.string(),
        serialno: z.string(),
        warranty: z.string(),
        brand: z.string(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        created_at: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      // const { subject, teacherId, streamId, ...productData } = input;
      console.log("trpc input", input);
      return ctx.prisma.product.create({
        data: input,
      });
    }),

  // delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
  //     return ctx.prisma.product.delete({
  //         where: {
  //             id: input
  //         }
  //     })
  // }),

  // search: publicProcedure.input(z.string()).query(({ ctx, input }) => {
  //     return ctx.prisma.product.findMany({
  //         where: {
  //             name: { contains: input }
  //         },
  //         include: {
  //             stream: true,
  //             teacher: true
  //         },
  //         orderBy: {
  //             createdAt: 'desc'
  //         },
  //         take: 20
  //     })
  // }),

  // hello: publicProcedure
  //     .input(z.object({ text: z.string() }))
  //     .query(({ input }) => {
  //         return {
  //             greeting: `Hello ${input.text}`,
  //         };
  //     }),
});
