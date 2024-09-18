import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prismaClient } from "../../prisma/prismaClient";

export async function CreateUserTransaction(app: FastifyInstance) {
  app.post("/transaction", async (req, res) => {
    const createTransaction = z.object({
        type: z.string(),
        category: z.string(),
        spend: z.number(),
        description: z.string(),
        paid: z.boolean(),
        data: z.coerce.date(),
    })

    const { type, category, spend, description, paid, data } = createTransaction.parse(req.body)

    const transaction = await prismaClient.transaction.create({
      data: {
        type, 
        category, 
        spend, 
        description, 
        paid,
        data
      }
    })

    return res.status(201).send({ transaction: transaction })
  })
}