import { Router } from 'express'
import UserController from '@controllers/user'

const router = Router()

router.get('/users', UserController.index)
router.get('/users/:id', UserController.show)
router.post('/users', UserController.create)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

export default router
