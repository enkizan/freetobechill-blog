import {draftMode} from 'next/headers'
import {LiveQuery} from 'next-sanity/preview/live-query'
import DocumentsCount, {documentsCountQuery} from '../../components/DocumentsCount'
import PreviewDocumentsCount from '../../components/PreviewDocumentsCount'
import {sanityFetch} from '../../lib/sanity.fetch'
import HomeBlogList from '@/components/HomeBlogList'
import { blogListQuery,carouselQuery } from '@/components/api'
import { client } from '@/lib/sanity.client'


export default async function IndexPage() {
  const previewDrafts = process.env.SANITY_API_PREVIEW_DRAFTS === 'true'
  const data = await sanityFetch<number>({previewDrafts,query: documentsCountQuery, tags: ['post']})
  const blogListData = await client.fetch(blogListQuery)
  const carouselQueryData = await client.fetch(carouselQuery)




  if(previewDrafts){
    
    return (
      <div>
        {/* What preview mode for ?? */}
        <div>In preview mode :  </div>
      <LiveQuery
        enabled={draftMode().isEnabled}
        query={documentsCountQuery}
        initialData={data}
        as={PreviewDocumentsCount}
      >
        <DocumentsCount data={data} />
      </LiveQuery>

      <LiveQuery
        enabled={draftMode().isEnabled}
        query={blogListQuery}
        initialData={blogListData}
        as={PreviewDocumentsCount}
      >
        <div>Show Bloglist4</div>
      <HomeBlogList listPosts={blogListData as Post[]} carouselPosts={carouselQueryData as Post[]}  />
      </LiveQuery>


      </div>
    ) 
  }else{
    return (
      <div className='min-h-screen'>
        {/* <div>Not in preview mode </div> */}
        {/* <DocumentsCount data={data} /> */}
        <HomeBlogList listPosts={blogListData as Post[]} carouselPosts={carouselQueryData as Post[]} />


      </div>
    )
  }
}