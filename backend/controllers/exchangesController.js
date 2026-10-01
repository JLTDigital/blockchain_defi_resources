import asyncHandler from 'express-async-handler'
import exchanges from '../data/exchanges.js'

// @desc - Get all Exchanges links
// @route - GET /api/exchanges
// @access - public
export const getExchanges = asyncHandler(async (req, res) => {
  if (exchanges.length) {
    res.json(exchanges)
  } else {
    res.status(404)
    throw new Error('No Exchanges Resources Found')
  }
})
