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

  async update (req: Request, res:Response):Promise<Response> {
    const { id } = req.params
    const { name, email } = req.body
    try {
      const user = await getRepository(User).findOne()
      if (!user) {
        return res.status(400).json({ message: 'user not found' })
      }
      getRepository(User).merge(user, { name, email })
      await getRepository(User).save(user)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  async delete (req:Request, res:Response):Promise<Response> {
    const { id } = req.params
    try {
      await getRepository(User).delete(id)
      return res.status(200).json({ message: 'user was deleted' })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new UserController()
