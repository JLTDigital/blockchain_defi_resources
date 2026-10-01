import express from 'express'
import app from './backend/server.js'

// Vercel only accepts this file as the Express entry when it imports express directly.
void express

export default app
