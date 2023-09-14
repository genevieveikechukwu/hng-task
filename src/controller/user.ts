import { Response, Request } from "express";
import UserModel from "../models/user";

export const createHandler = async (req: Request, res: Response) => {
    try {
        const { fullName } = req.body

        if (!fullName) return res.status(400).send({ message: "fullName is required!!" })
        let smallName = fullName.toLowerCase()
        const isUser = await UserModel.findOne({ fullName: smallName })
        if (isUser) return res.status(400).send({ message: "User with name already exists!" })
        const user = await UserModel.create({ fullName: smallName })
        return res.status(201).send({ message: "Successfully created!!", data: user })
    } catch (error: any) {
        return res.status(500).send({ message: error.message })
    }
}
export const getHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let user = await UserModel.findOne({ fullName: new RegExp(id, 'i') })
        if (!user) {
            return res.status(404).send({ message: "user with name does not exist" })
        }

        return res.status(200).send({ message: "Successfull!!", data: user })
    } catch (error: any) {
        return res.status(500).send({ message: error.message })
    }
}
export const updateHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { fullName } = req.body
        let smallName = fullName.toLowerCase()
        let user = await UserModel.findOne({ fullName: new RegExp(id, 'i') })
        if (!user) {

            return res.status(404).send({ message: "user with id does not exist" })
        }

        if (!fullName) return res.status(404).send({ message: "Please provide fullName" })
        const isUser = await UserModel.findOne({ fullName: smallName })
        if (isUser) return res.status(400).send({ message: "User with name already exists!" })
        await user.updateOne({ smallName });
        await user.save()
        return res.status(200).send({ message: "Successfully updated!!" })
    } catch (error: any) {
        return res.status(500).send({ message: error.message })
    }
}
export const deleteHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        let user = await UserModel.findOne({ fullName: new RegExp(id, 'i') })
        if (!user) {
            return res.status(404).send({ message: "user with name does not exist" })
        }
        await user.deleteOne()
        return res.status(200).send({ message: "Successfully deleted!!" })
    } catch (error: any) {
        return res.status(500).send({ message: error.message })
    }
}