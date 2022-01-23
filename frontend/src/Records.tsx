import { gql, useQuery } from '@apollo/client'

export interface Record {
  id: string
  url: string
  alias: string
  createdAt: string
}

interface GetUrlsData {
  getUrls: Record[]
}

export const getUrlsQuery = gql`
  query getUrls {
    getUrls {
      id
      alias
      url
      createdAt
    }
  }
`

export default function Records () {
  const { data, loading, error } = useQuery<GetUrlsData>(getUrlsQuery)

  if (error) {
    return <div>Nice Error Status</div>
  }

  if (loading) {
    return <div>Cool Loading Status</div>
  }

  const records = data?.getUrls
  return (
    <>
      {records?.map(i => JSON.stringify(i))}
    </>
  )
}