import { create, act } from 'react-test-renderer'
import { MockedProvider } from '@apollo/client/testing'
import Records, { getUrlsQuery } from './Records'
import RecordItem from './RecordItem'

const wait = (t: number) => new Promise(resolve => setTimeout(resolve, t))

const successMock = [
  {
    request: {
      query: getUrlsQuery
    },
    result: {
      data: {
        getUrls: [
          {
            id: '0ugcamf3',
            alias: 'https://pbid.io/0ugcamf3',
            url: 'https://example.com',
            createdAt: '1642452324430',
          },
          {
            id: '1ugcamf3',
            alias: 'https://pbid.io/1ugcamf3',
            url: 'https://test.com/pathname#hash?qs=true',
            createdAt: '1642452324431',
          }
        ]
      }
    }
  }
]

it('Renders a list of RecordItem children on query result', async () => {
  let component: any
  await act(async () => {
    component = create(
      <MockedProvider mocks={successMock} addTypename={false}>
        <Records query="" />
      </MockedProvider>
    )

    await wait(100)
  })

  const root = component.root
  root.findAllByType(RecordItem)
})
