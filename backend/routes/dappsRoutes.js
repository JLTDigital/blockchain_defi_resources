import express from 'express'
const router = express.Router()
import { 
  getDefi,
  getGames,
  getNft
 } from '../controllers/dappsController.js'

router.route('/defi').get(getDefi)
router.route('/games').get(getGames)
router.route('/nft').get(getNft)

export default router