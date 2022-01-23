import UrlRegistryService, { UrlRecord } from '../urls-registry-service'
import { GenericError } from '../generic-error'

export default async function putUrl (params: any): Promise<UrlRecord> {
  try {
    const { url } = params.input
    UrlRegistryService.validateUrl(url)
    return await UrlRegistryService.put(url)
  } catch (e) {
    console.error('putUrl', e)
    const { code } = e as GenericError
    if (code === 400) {
      throw new Error(`400 Invalid Input: ${(e as GenericError).message}`)
    } else {
      throw new Error('500 Internal Error')
    }
  }
}