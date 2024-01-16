import { urlFor } from '@/lib/urlFor';
import {groq} from 'next-sanity';
import Image from 'next/image';


export const blogListQuery = groq`*[_type == "post"]{
    ...,  
    "slug": slug.current, 
    "author": author->name,
    "authorAll": author->slug,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    "text": body[].children[].text,
    "description": description,
  } | order(_createdAt desc) [0...6]
  `

// export const blogListQuery = groq`*[_type=='post'] {
//     ...,
//     author->,
//     categories[]->
//   } | order(_createdAt desc)
//  `;



type blogListProps = {
    posts: Post[]
}


export default function BlogList({posts}: blogListProps) {
// console.log("posts", posts);
//   console.log("posts", posts[3].mainImage);
  return (
    <div
        // className='
        // col-span-2
        // '
    >
        <hr className=' mb-10 mx-10'/>
        {/* <h1 className='px-12 gap-10 '>Blog List</h1> */}
        <div 
        className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'
        >
            {posts.map((post: any) => (
                <div key={post.slug} className='
                    flex 
                    flex-col
                    my-5
                    mx-3
                    group
                    cursor-pointer
                    '>
                    {/* <h1
                        className='text-2xl'
                    >{post.title}</h1> */}
                    
                    <div className='
                                    relative 
                                    w-full
                                    h-80
                                    my-5
                                    lg:object-center
                                    drop-shadow-lg 
                                    group-hover:scale-105
                                    transition-transform 
                                    duration-200 
                                    ease-out
                                    '
                                    >
                    {post.mainImage && (
                        <div className='w-full h-full '>
                            <div className=' relative rounded-lg w-full h-full bg-stone-200'>
                            

                                <Image
                                    className='
                                        object-cover
                                        object-left
                                        rounded-lg
                                        lg:object-center
                                        ' 
                                    src={urlFor(post.mainImage).url()} 
                                    // width={200}
                                    // height={200}
                                    alt={post.author} 
                                    fill={true}
                                    />

                                    <div className='absolute bottom-0 w-full bg-opacity-30 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex flex-col justify-between '>
                                        <p className=' font-semibold px-3'>{post.title}</p>
                                        <p className='text-l font-thin px-3 '>{
                                            new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}</p>
                                        </div>
                                    
                            </div>
                        </div>
                    )}

                    {!post.mainImage && (
                    <div className='w-full h-full '>
                        <div className='flex items-center justify-center rounded-lg w-full h-full bg-stone-200'>

                                <h1 className='
                                text-stone-400/50
                                text-5xl 
                                font-sans 
                                font-semibold 
                                subpixel-antialiased
                                text-center
                                '>No Image</h1>
                        </div>
                    </div>
                    )} 
                    </div>


                    <div className='indent-8 text-stone-700 px-2 line-clamp-2'>{post.description}</div>
                    <p className='font-light text-end pt-5 text-stone-500 px-2'>by {post.author}</p>
                </div>
            ))}

        </div>
    </div>
  ) 
}