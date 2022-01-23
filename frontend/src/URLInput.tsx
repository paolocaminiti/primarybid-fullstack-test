import { validateUrl } from './utils'

interface URLInputProps {
  value: string
  setUrl: (url: string) => void
}

function BadInputHint () {
  return (
    <div className='user-hint'>
      This is not a URL but you can send it to the server to enjoy error handling.
    </div>
  )
}

export default function URLInput ({ value, setUrl }: URLInputProps) {
  const isValidValue = !value || validateUrl(value, true)

  return (
    <div className='url-input'>
      <input
        type="text"
        value={value}
        placeholder='Your URL goes here...'
        onChange={e => {
          const { value } = e.target
          setUrl(value)
        }}
      />
      <button
        onClick={() => void setUrl('')}
      >
        Clear
      </button>
      <button
        onClick={async () => {
          const text = await navigator.clipboard.readText()
          setUrl(text)
        }}
      >
        Paste
      </button>
      {!isValidValue && <BadInputHint />}
    </div>
  )
}