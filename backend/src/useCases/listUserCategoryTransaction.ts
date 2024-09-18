import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prismaClient } from "../../prisma/prismaClient";

export async function ListUserCategoryTransaction(app: FastifyInstance) {
  app.get("/transaction/:category", async (req, res) => {
    const defineCategoryType = z.object({
      category: z.string()
    })

    const { category } = defineCategoryType.parse(req.params)

    const findCategories = await prismaClient.transaction.findMany({
      where: {
        category
      }
    })

    return res.status(201).send(findCategories)
  })
}