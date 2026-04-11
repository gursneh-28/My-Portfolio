import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router = express.Router()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

router.get('/pdf', (req, res) => {
  const file = path.join(__dirname, '../assets/Gursneh_Kaur_Resume.pdf')
  res.download(file, 'Gursneh_Kaur_Resume.pdf')
})

router.get('/docx', (req, res) => {
  const file = path.join(__dirname, '../assets/Gursneh_Kaur_Resume.docx')
  res.download(file, 'Gursneh_Kaur_Resume.docx')
})

export default router