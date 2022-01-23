import { server } from './index'
const supertest = require('supertest')
const request = supertest(server)
import mongoose from 'mongoose'

afterAll(() => {
  server.close()
  mongoose.connection.close()
})

const expectedRecordFields = ['id', 'alias', 'url', 'createdAt']

it('Integration: getUrls query should return a list of Records', async () => {
  const res = await request.post('/graphql')
    .send({
      query: `{ getUrls { id, alias, url, createdAt } }`,
    })
    .set("Accept", "application/json")
    .expect(200)

  const { data } = res.body
  expect(Array.isArray(data.getUrls)).toBe(true)
  expect(Object.keys(data.getUrls[0])).toEqual(expect.arrayContaining(expectedRecordFields))
})

it('Integration: putUrl should succeed with good url value', async () => {
  const res = await request.post('/graphql')
    .send({
      query: `mutation { putUrl(input: { url: "http://localhost:3000/" }) { id } }`
    })
    .set("Accept", "application/json")
    .expect(200)
    console.log(res.body)
  
  const { data } = res.body
  expect(data.putUrl.id).toBeDefined()
})

it('Integration: putUrl should fail with bad url value', async () => {
  const res = await request.post('/graphql')
    .send({
      query: `mutation { putUrl(input: { url: "bad url" }) { id } }`
    })
    .set("Accept", "application/json")
    .expect(200)

  const { data, errors } = res.body
  expect(data.putUrl).toBe(null)
  expect(Array.isArray(errors)).toBe(true)
})
