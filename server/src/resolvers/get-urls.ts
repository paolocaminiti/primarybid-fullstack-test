import UrlRegistryService, { UrlRecord } from '../urls-registry-service'

export default async function getUrls (): Promise<UrlRecord[]> {
  try {
    return await UrlRegistryService.getAll()
  } catch (e) {
    console.error('getUrls', e)
    throw new Error('500 Internal Error')
  }
}