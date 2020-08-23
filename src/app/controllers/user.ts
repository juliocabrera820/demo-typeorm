import { getRepository } from 'typeorm'
import { User } from '@models/user'
import { Request, Response } from 'express'

class UserController {
  async index (req: Request, res: Response):Promise<Response> {
    try {
      const users = await getRepository(User).find()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async show (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const user = await getRepository(User).findOne(id)
      if (!user) {
        return res.status(400).json({ message: 'user not found' })
      }
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async create (req:Request, res:Response):Promise<Response> {
    try {
      const { name, email } = req.body
      const user = getRepository(User).create({ name, email })
      await getRepository(User).save(user)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new UserController()
