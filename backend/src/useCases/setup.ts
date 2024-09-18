//função destinada há iniciar as configurações necessárias da aplicação

import { FastifyInstance } from "fastify"
import { prismaClient } from "../../prisma/prismaClient"
import { z } from "zod"


export async function Setup(app: FastifyInstance) {

  app.post("/setup", async (req, res) => {
    const createMainTable = z.object({
      user_name: z.string(),
      income: z.number(),
    })
  
    const { user_name, income } = createMainTable.parse(req.body)
  
    const mainTable = await prismaClient.main.create({
      data: {
        user_name, 
        income, 
        expanse: 0, 
      }
    })
  
    return res.status(201).send({ setupId: mainTable.id })
  })

}