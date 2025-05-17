import { PrismaClient } from "@prisma/client";

const isVercel = !!process.env.VERCEL;

let prisma: PrismaClient;

if (isVercel) {
  prisma = new PrismaClient();
} else {
  const globalForPrisma = global as unknown as { prisma?: PrismaClient };
  prisma = globalForPrisma.prisma ?? new PrismaClient();
  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
}

export { prisma };
