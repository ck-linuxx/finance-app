import { FastifyInstance } from "fastify";
import { prismaClient } from "../../prisma/prismaClient";

export async function ListUserTransactions(app: FastifyInstance) {
  app.get("/transaction", async (req, res) => {
    const listTransactions =  await prismaClient.transaction.findMany()

    return res.status(200).send(listTransactions)
  })
}