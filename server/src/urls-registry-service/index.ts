import db from './db'
import UrlRecordModel from './url-record-model'
import { generateUrlRecord, validateUrl } from './utils'
import { GenericError } from '../generic-error'

export interface UrlRecord {
  id: string,
  alias: string,
  url: string,
}

async function init (): Promise<void> {
  try {
    await db.connect()
    console.log('UrlRegistryService Initialized')
  } catch (e) {
    console.error('UrlRegistryService.init', e)
    throw { code: 503, message: 'Could not connect to db' }
  }
}

async function getAll (): Promise<UrlRecord[]> {
  try {
    return await UrlRecordModel
      .find({})
      .sort({ createdAt: -1 })
      .exec()
  } catch (e) {
    console.error('UrlsRegistryService.getAll', e)
    throw { code: 500, message: 'UrlsRegistryServie.getAtll failed' }
  }
}

async function put (url: string): Promise<UrlRecord> {
  try {
    validateUrl(url)
    let record = await UrlRecordModel.findOne({ url })
    if (!record) {
      const newUrlRecord = generateUrlRecord(url)
      record = new UrlRecordModel(newUrlRecord)
      await record.save()
    }
    return record
  } catch (e) {
    console.error('UrlsRegistryService.put', e)
    const { code } = e as GenericError
    if (code === 400) {
      throw e
    } else {
      throw { code: 500, message: 'UrlsRegistryServie.put failed' }
    }
  }
}

export default {
  init,
  getAll,
  put,
  validateUrl,
}