import AuthorBlogList from "@/components/AuthorBlogList";
import { client } from "@/lib/sanity.client";
import {groq} from 'next-sanity';


interface PageProps {
    params: {
        name: string;
    }
}


async function page({params: {name}}: PageProps) {

const authorBlogListQuery = groq`*[_type == "post" && author->slug.current == $name]{
    ...,  
    "slug": slug.current,
    "authorSlug": author->slug.current,
    "author": author->name,
    "authorAll": author->slug,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    "text": body[].children[].text,
    "description": description,
  } | order(_createdAt desc) [0...6]
  `

    const blogListData = await client.fetch(authorBlogListQuery,{name: name})

  return (
    <div>
      <div> Author name: {name}</div>
      <div> Display author's blog list. </div>
      {/* <AuthorBlogList posts={blogListData as Post[]}/> */}
    <AuthorBlogList author={name} posts={blogListData} />
    </div>
  )
}

export default page
