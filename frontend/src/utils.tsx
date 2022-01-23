import validUrl from 'valid-url'

export function normalizeURL (url: string): string {
  if (!validUrl.isHttpUri(url) && !validUrl.isHttpsUri(url)) {
    return `https://${url}`
  } else {
    return url
  }
}

export function validateUrl (url: string, shouldNormalize: boolean): boolean {
  return !!validUrl.isWebUri(shouldNormalize ? normalizeURL(url) : url)
}