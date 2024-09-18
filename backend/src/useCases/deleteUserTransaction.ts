import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prismaClient } from "../../prisma/prismaClient";

export async function DeleteUserTransaction(app: FastifyInstance) {
  app.delete("/transaction/:id", async (req, res) => {
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


    await prismaClient.transaction.delete({
      where: {
        id
      }
    })

    return res.status(200).send({ message: "Transaction deleted" })
  })
}