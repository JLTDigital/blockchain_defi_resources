import asyncHandler from 'express-async-handler'
import literature from '../data/literature.js'

// @desc - Get all Literature links
// @route - GET /api/literature
// @access - public
export const getLiterature = asyncHandler(async (req, res) => {
  if (literature.length) {
    res.json(literature)
  } else {
    res.status(404)
    throw new Error('No Literature Resources Found')
  }
})
