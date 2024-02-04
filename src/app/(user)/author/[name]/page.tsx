import AuthorBlogList from "@/components/AuthorBlogList";
import { authorBlogListQuery } from "@/components/api";
import { client } from "@/lib/sanity.client";


interface PageProps {
    params: {
        name: string;
    }
}


async function page({params: {name}}: PageProps) {

    const blogListData = await client.fetch(authorBlogListQuery,{name: name})

  return (
    <div className="min-h-screen">
      {/* <div> Author name: {name}</div> */}
      {/* <div> Display author's blog list. </div> */}
      {/* <AuthorBlogList posts={blogListData as Post[]}/> */}
    <AuthorBlogList author={name} posts={blogListData} />
    </div>
  )
}

export default page
