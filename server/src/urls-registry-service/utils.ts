import { UrlRecord } from './index'
import { aliasBaseUrl } from './constants'
import { shortUniqueIdConfig } from './constants'
import ShortUniqueId from 'short-unique-id'
import validUrl from 'valid-url'

export const generateShortId: ShortUniqueId = new ShortUniqueId(
  shortUniqueIdConfig
)

export function generateUrlAlias(id: string): string {
  return `${aliasBaseUrl}/${id}`
}

export function generateUrlRecord (url: string): UrlRecord {
  const id = generateShortId()
  const alias = generateUrlAlias(id)
  return {
    id,
    alias,
    url: url,
  }
}

export function validateUrl (url: string): boolean {
  if (!validUrl.isWebUri(url)) {
    throw { code: 400, message: 'Invalid Url' }
  }
  return true
}