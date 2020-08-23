import { Router } from 'express'
import UserController from '@controllers/user'

const router = Router()

router.get('/users', UserController.index)
router.get('/users/:id', UserController.show)
router.post('/users', UserController.create)

export default router
