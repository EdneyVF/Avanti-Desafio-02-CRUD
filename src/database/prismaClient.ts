import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient({
  log: ["info", "query", "warn","error"],
});

export { prismaClient };