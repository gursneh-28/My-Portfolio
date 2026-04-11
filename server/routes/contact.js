import express from 'express'
import { submitContact } from '../controllers/ContactController.js'

const router = express.Router()
router.post('/', submitContact)
export default router