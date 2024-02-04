import AuthorBlogList from "@/components/AuthorBlogList";
import { authorBlogListQuery } from "@/components/api";
import { client } from "@/lib/sanity.client";


interface PageProps {
    params: {
        name: string;
    }
}

export const revalidate = 60; // revalidate this page every 60 seconds

export async function generateStaticParams() {
  const slugs: Post[] = await client.fetch(authorBlogListQuery, { name: "$name" });
  const slugRoutes = slugs.map((item) => item.authorSlug);

  return slugRoutes.map((authorSlug) => ({
    params: {
      name: authorSlug,
    },
  }));
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
