import SafeAnchor from './SafeAnchor'
import { Record } from './Records'
import { useCallback } from 'react'

interface RecordItemProps extends Record {
  show: boolean
}

export default function RecordItem ({ url, alias, createdAt, show }: RecordItemProps) {
  const date = new Date(+createdAt).toLocaleString()
  const style ={
    display: show ? 'block' : 'none'
  }

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(alias)
  }, [alias])

  return (
    <div
      className='record'
      style={style}
      title="Copy To Clipboard"
      onClick={copyToClipboard}
    >
      <div className='layout'>
        <div>
          <SafeAnchor url={alias}>
            <div className='alias'>{alias}</div>
          </SafeAnchor>
          <SafeAnchor url={url}>
            <div className='url'>{url}</div>
          </SafeAnchor>
        </div>
        <div className='date'>{date}</div>
      </div>
    </div>
  )
}