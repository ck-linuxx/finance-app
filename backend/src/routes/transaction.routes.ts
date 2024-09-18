import fastify from "fastify";
import { Setup } from "../useCases/setup";
import { CreateUserTransaction } from "../useCases/createUserTransaction";
import { ListUserTransactions } from "../useCases/listUserTransactions";
import { ListUserCategoryTransaction } from "../useCases/listUserCategoryTransaction";
import { DeleteUserTransaction } from "../useCases/deleteUserTransaction";
import { EditUserTransaction } from "../useCases/editUserTransaction";

export const app = fastify()

app.register(Setup)
app.register(CreateUserTransaction)
app.register(ListUserTransactions)
app.register(ListUserCategoryTransaction)
app.register(DeleteUserTransaction)
app.register(EditUserTransaction)

app.listen({ port: 8080 }).then(() => console.log("<-- Server is running -->"))
