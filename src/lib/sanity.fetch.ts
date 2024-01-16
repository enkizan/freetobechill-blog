import 'server-only'

import type {QueryParams} from '@sanity/client'
import {draftMode} from 'next/headers'

import {client} from './sanity.client'

export const token = process.env.SANITY_API_READ_TOKEN

// Only defined on the server, passed to the browser via a `loader`
// export const token =
//   typeof process === 'undefined' ? '' : process.env.SANITY_API_READ_TOKEN!

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]


export async function sanityFetch<QueryResponse>({
  previewDrafts,
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  previewDrafts?: boolean
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {

  const isDraftMode = draftMode().isEnabled
  if (previewDrafts && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
  }

  return client.fetch<QueryResponse>( query, params, {
    ...(previewDrafts && {
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      revalidate: isDraftMode ? 0 : false,
      tags,
    },
  })
}