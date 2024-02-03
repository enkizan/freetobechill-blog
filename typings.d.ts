type Base = {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: string
}

interface Post extends Base {
    author: Author;
    authorName: string;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    slugCurrent: string;
    title: string;
    description: string;
    publishedAt: Date;
}

interface Author extends Base {
    name: string;
    image: Image;
    slug: Slug;
    bio: Block[];
}

interface Image {
    _type: string;
    asset: Asset;
    alt: string;
}

interface Reference {
    _ref: string;
    _type: string;
}

interface Slug {
    _type: string;
    current: string;
}

interface Block {
    _key: string;
    _type: string;
    children: Children[];
    markDefs: any[];
    style: string;
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    title: string;
    description: string;
}

interface MainImage {
    _type: string;
    current: string;
}