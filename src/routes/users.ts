import { Router } from "express";
import { createHandler, deleteHandler, getHandler, updateHandler } from "../controller/user";

const userRoutes = Router()

userRoutes.route('/').post(createHandler)
userRoutes.route('/:id').get( getHandler)
userRoutes.route('/:id').put(updateHandler)
userRoutes.route('/:id').delete( deleteHandler)

export default userRoutes