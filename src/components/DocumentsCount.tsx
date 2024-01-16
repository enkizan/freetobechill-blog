import {groq} from 'next-sanity';
export const documentsCountQuery = groq`count(*[_type == "post"]{
  title,  
  "slug": slug.current, 
  "author": author->name,
  "categories": categories[]->title
})
`


export default function DocumentsCount({data}: {data: number}) {
  return <div>There are {data} documents</div>
}