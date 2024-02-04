import { urlFor } from '@/lib/urlFor';
import Image from 'next/image';
import ClientSideRoute from '@/components/ClientSideRoute';
import ReactStrapCarousel from './ReactStrapCarousel';


type blogListProps = {

    listPosts: Post[],
    carouselPosts: Post[]
}

export const revalidate = 60;

export default function HomeBlogList({ listPosts, carouselPosts }: blogListProps) {
    return (
        <div>


            {/* Carousell */}
            <div
                className='
                mb-20
                hidden
                sm:block
                '>
                <h1 className='
                m-10
                indent-2
                text-2xl
                text-stone-500
                '> Feature Posts </h1>
                <ReactStrapCarousel carouselPosts={carouselPosts}  />
            </div>

            <h1 className='
            mx-10
            mb-10
            indent-2
            text-2xl
            text-stone-500
            '> Latest Posts </h1>

            <div
                className='grid grid-cols-1 lg:grid-cols-2 px-10 gap-10 gap-y-0 sm:gap-y-16 pb-24'
            >
                {/* <HomeCarousel carouselPosts={listPosts} /> */}
                {/* <SecondExample /> */}
                {listPosts.map((post) => (
                    <ClientSideRoute route={`/post/${post.slugCurrent}`} key={post.slugCurrent}>
                        {/* <div>TEST SLUG: {post.slug}</div> */}
                        <div
                            // key={post.slug} 
                            className='
                    flex 
                    flex-col
                    my-0
                    sm:my-5
                    mx-3
                    group
                    cursor-pointer
                    '>
                            <div className='
                                    relative 
                                    w-full
                                    h-40
                                    sm:h-80
                                    my-3
                                    sm:my-5
                                    lg:object-center
                                    drop-shadow-lg 
                                    group-hover:scale-105
                                    transition-transform 
                                    duration-200 
                                    ease-out
                                    '
                            >
                                {post.mainImage && (
                                    <div className='w-full h-full md:h-full'>
                                        <div className=' relative rounded-lg w-full h-full bg-stone-200 '>
                                            {post.mainImage && (
                                                <Image
                                                    className='
                                                        object-cover
                                                        object-left
                                                        rounded-lg
                                                        lg:object-center
                                                        '
                                                    src={urlFor( post.mainImage).url()}
                                                    // width={200}
                                                    // height={200}
                                                    alt={post.authorName}
                                                    fill={true}
                                                />
                                            )}

                                            <div className='
                                            absolute 
                                            bottom-0

                                            flex 
                                            flex-col 
                                            justify-between 
                                            w-full

                                            bg-opacity-30 
                                            bg-balck
                                            backdrop-blur-lg 
                                            rounded 
                                            drop-shadow-lg 
                                            text-white

                                            p-3
                                            sm:p-1
                                            '>
                                                <p className='text-sm sm:text-l font-semibold px-3'>{post.title}</p>
                                                <p className=' text-sm sm:text-l font-thin px-3 '>{
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


                            <div className='indent-8 text-stone-700 px-2 line-clamp-2 drop-shadow-md '>{post.description}</div>
                            <p className='font-light text-end pt-1 pb-5 text-stone-500 px-2'>by {post.authorName}</p>
                        </div>
                    </ClientSideRoute>
                ))}

            </div>
        </div>
    )
}