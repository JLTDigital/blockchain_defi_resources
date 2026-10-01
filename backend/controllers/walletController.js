import asyncHandler from 'express-async-handler'
import wallet from '../data/wallet.js'

// @desc - Get all Wallet Links
// @route - GET /api/wallet
// @access - public
export const getWallets = asyncHandler(async (req, res) => {
  if (wallet.length) {
    res.json(wallet)
  } else {
    res.status(404)
    throw new Error('No Wallet Resources Found')
  }
})
