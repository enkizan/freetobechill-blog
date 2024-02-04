import { groq } from "next-sanity";


// ! Home's api
export const blogListQuery = groq`*[_type == "post"]{
    ...,  
    "slugCurrent": slug.current,
    "authorName": author->name,
    "authorAll": author->slug,
    "author": author->,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    "text": body[].children[].text,
    "description": description,
  } | order(_createdAt desc) [0...6]
  `

export const carouselQuery = groq`*[_type == "post"]{
    ...,  
    "slugCurrent": slug.current, 
    "authorName": author->name,
    "authorAll": author->slug,
    "author": author->,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    "text": body[].children[].text,
    "description": description,
  } | order(_createdAt desc) [0...3]
  `


// ! Author's api
export const authorBlogListQuery = groq`*[_type == "post" && author->slug.current == $name && categories != "about-us" && categories != "announcement"]{
    ...,  
    "slugCurrent": slug.current,
    "authorSlug": author->slug.current,
    "authorName": author->name,
    "authorAll": author->slug,
    "author": author->,
    "categories": categories[]->title,
    "mainImage": mainImage.asset->url,
    "text": body[].children[].text,
    "description": description,
  } | order(_createdAt desc) [0...6]
  `