import { useState } from 'react'
import URLInput from './URLInput'
import Submit from './Submit'
import Records from './Records'

export default function Registry () {
  const [url, setUrl] = useState('')

  return (
    <div className='registry'>
      <div className='header'>
        <URLInput value={url} setUrl={setUrl} />
        <Submit value={url} onSuccess={() => setUrl('')} />
      </div>
      <Records query={url} />
    </div>
  )
}
