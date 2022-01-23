import { gql, useMutation } from '@apollo/client'
import { getUrlsQuery } from './Records'
import { normalizeURL } from './utils'

interface MutationVariables {
  variables: {
    input: {
      url: string
    }
  }
}

interface SubmitProps {
  value: string
  onSuccess: () => void
}

export const putUrlMutation = gql`
  mutation putUrl($input: UrlRecordInput!) {
    putUrl(input: $input) {
      id
      alias
      url
      createdAt
    }
  }
`

function buildMutationVariables (url: string): MutationVariables {
  return {
    variables: {
      input: {
        url
      }
    }
  }
}

export default function Submit ({ value, onSuccess }: SubmitProps) {
  const [putUrl, { error }] = useMutation(putUrlMutation, {
    refetchQueries: [ getUrlsQuery, 'getUrls'],
  })

  return (
    <div className='submit'>
      <button
        disabled={!value}
        onClick={async () => {
          try {
            const normalized = normalizeURL(value)
            await putUrl(buildMutationVariables(normalized))
            onSuccess()
          } catch (e) {
            console.error('putUrl', e)
          }
        }}
      >
        Toast URL!
      </button>
      {error && (
        <div className='user-hint error'>
          {`${error.toString()}. Try again...`}
        </div>
      )}
    </div>
  )
}