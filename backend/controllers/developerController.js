import asyncHandler from 'express-async-handler'
import developer from '../data/developer.js'

// @desc - Get all Developer links
// @route - GET /api/developer
// @access - public
export const getDev = asyncHandler(async (req, res) => {
  if (developer.length) {
    res.json(developer)
  } else {
    res.status(404)
    throw new Error('No Dev Resources Found')
  }
})
