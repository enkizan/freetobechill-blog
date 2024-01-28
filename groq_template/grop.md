```
*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url,
      "posts": *[_type == "post" && author._ref in *[_type=="author" && name == name ]._id ]{
        title,
        "slug": slug.current,
      }
  }
```


```
*[_type == "post"]{
  _id,
  title,
  author->{ // here to reach author name and image you should type ->
  name,
  image
},
description,
mainImage,
slug
}

```


## Author's blog list

```
*[_type == "post" && author->slug.current == "tung-san"]{
  ...,
  "slug": slug.current, 
  "author": author->slug.current
}
```
