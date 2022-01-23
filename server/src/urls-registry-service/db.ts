import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI as string

async function connect (): Promise<void> {
  await mongoose.connect(mongoUri)
  console.log('UrlRegistry Database Connected @', mongoUri)
}

export default {
  connect
}