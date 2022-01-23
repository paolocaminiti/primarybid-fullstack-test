import mongoose from 'mongoose'

const UrlRecordSchema = new mongoose.Schema({
  id: String,
  alias: String,
  createdAt: { type: String, default: Date.now },
  url: String,
})

export default mongoose.model('UrlRecord', UrlRecordSchema)