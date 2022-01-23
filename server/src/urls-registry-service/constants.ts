import { ShortUniqueIdOptions } from 'short-unique-id'

export const aliasBaseUrl = process.env.ALIAS_BASE_URL

export const shortUniqueIdConfig: Partial<ShortUniqueIdOptions> = {
  dictionary: 'alphanum_lower',
  length: 8,
}