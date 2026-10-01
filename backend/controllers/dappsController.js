import asyncHandler from 'express-async-handler'
import dapps from '../data/dapps.js'

// @desc - Get all apps with DeFi Category
// @route - GET /api/dapps/dapps
// @access - public
export const getDapps = asyncHandler(async (req, res) => {
  const defi = dapps.filter((dapp) => dapp.category === 'DeFi')

  if (defi.length) {
    res.json(defi)
  } else {
    res.status(404)
    throw new Error('No DeFi Apps Found')
  }
})

// @desc - Get all apps with Games Category
// @route - GET /api/dapps/games
// @access - public
export const getGames = asyncHandler(async (req, res) => {
  const games = dapps.filter((dapp) => dapp.category === 'Games')

  if (games.length) {
    res.json(games)
  } else {
    res.status(404)
    throw new Error('No Games Apps Found')
  }
})

// @desc - Get all apps with NFT Category
// @route - GET /api/dapps/nft
// @access - public
export const getNft = asyncHandler(async (req, res) => {
  const nft = dapps.filter((dapp) => dapp.category === 'NFT')

  if (nft.length) {
    res.json(nft)
  } else {
    res.status(404)
    throw new Error('No DeFi Apps Found')
  }
})
