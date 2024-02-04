import { groq } from "next-sanity";


// ! Home's bloglist api
export const blogListQuery = groq`*[_type == "post" && !("about-us" in categories[]->title) && !("announcement" in categories[]->title) ]{
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
// ! Home's Carousel api
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
export const authorBlogListQuery = groq`*[_type == "post" && author->slug.current == $name && !("about-us" in categories[]->title) && !("announcement" in categories[]->title)]{
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


// ! about-us's api

export const aboutQuery = groq`*[_type == "post" && "about-us" in categories[]->title]{
  ...,  
  "slugCurrent": slug.current, 
  "authorName": author->name,
  "authorAll": author->slug,
  "author": author->,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "text": body[].children[].text,
  "description": description,
} | order(_createdAt desc) [0]
`
