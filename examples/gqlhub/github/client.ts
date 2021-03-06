import { Client, QueryFetcher } from 'gqless'
import { Logger } from '@gqless/logger'
import { schema, Query } from './generated'

const endpoint = `https://api.github.com/graphql?access_token=${process.env.GITHUB_TOKEN}`

const fetchQuery: QueryFetcher = async (query, variables) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
  })

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`)
  }

  const json = await response.json()

  return json
}

export const client = new Client<any>(schema.Query, fetchQuery)
new Logger(client)

export const query = client.query
