import { Router } from 'express'
import UserController from '@controllers/user'
import { validateUser, validateId } from '@validators/user'

const router = Router()

router.get('/users', UserController.index)
router.get('/users/:id', validateId, UserController.show)
router.post('/users', validateUser, UserController.create)
router.put('/users/:id', validateId, validateUser, UserController.update)
router.delete('/users/:id', validateId, UserController.delete)

export default router
