import asyncHandler from 'express-async-handler'
import links from '../data/links.js'

// @desc - Get all Links
// @route - GET /api/links
// @access - public
export const getLinks = asyncHandler(async (req, res) => {
  if (links.length) {
    res.json(links)
  } else {
    res.status(404)
    throw new Error('No Links Resources Found')
  }
})
