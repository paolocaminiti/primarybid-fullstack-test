interface SafeAnchorProps {
  url: string
  children: JSX.Element
}

export default function SafeAnchor ({ url, children }: SafeAnchorProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" title={url}>
      {children}
    </a>
  )
}