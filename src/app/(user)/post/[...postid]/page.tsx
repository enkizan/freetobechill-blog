import type { FC } from 'react';


// Parmas type for URL's sagments
interface PageProps {
    params: {
        postid: string;
    };
}

// [ postid ] SearchParams example: ?id=123&name=abc
// [...postid] : match any number of segments [ .com/post/123/abc/5566 ]

// const Page: FC<PageProps> = ({params}) => {
const Page = async (params: any) => {
    console.log("params", params);

    // db-fetching
    // const post = await fetch(`https://.../post/${params.postid}`);

    return (<div>page number : {params.postid}</div>);
}

export default Page;
