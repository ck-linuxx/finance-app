import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prismaClient } from "../../prisma/prismaClient";

export async function EditUserTransaction(app: FastifyInstance) {
  app.put("/transaction/:id", async (req, res) => {
    const getTransactionId = z.object({
      id: z.coerce.number()
    })

    const { id } = getTransactionId.parse(req.params)

    const findTransactionId = await prismaClient.transaction.findUnique({
      where: {
        id
      }
    })

    if(!findTransactionId) return res.status(404).send({ message: "Transaction not found" })
    
      const createTransaction = z.object({
        type: z.string(),
        category: z.string(),
        spend: z.number(),
        description: z.string(),
        paid: z.boolean(),
        data: z.coerce.date(),
    })

    const { type, category, spend, description, paid, data } = createTransaction.parse(req.body)

    const editTransaction = await prismaClient.transaction.update({
      where: {
        id
      }, 
      data: {
        type, 
        category, 
        spend, 
        description, 
        paid,
        data
      }
    })

    return res.status(200).send(editTransaction)

  })
}