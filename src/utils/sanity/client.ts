import 'server-only'

import {draftMode} from 'next/headers'
import type {QueryParams} from '@sanity/client'
import {createClient, groq} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

// Used by `PreviewProvider`
export const token = process.env.SANITY_API_READ_TOKEN

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
    query,
    params = DEFAULT_PARAMS,
    tags = DEFAULT_TAGS,
  }: {
    query: string
    params?: QueryParams
    tags: string[]
  }): Promise<QueryResponse> {
    const isDraftMode = draftMode().isEnabled
    if (isDraftMode && !token) {
      throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
    }
  
    const REVALIDATE_SKIP_CACHE = 0
    const REVALIDATE_CACHE_FOREVER = false
  
    return client.fetch<QueryResponse>(query, params, {
      ...(isDraftMode && {
        token: token,
        perspective: 'previewDrafts',
      }),
      next: {
        revalidate: isDraftMode ? REVALIDATE_SKIP_CACHE : REVALIDATE_CACHE_FOREVER,
        tags,
      },
    })
  }