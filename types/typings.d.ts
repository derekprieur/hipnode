interface Post {
    title: string
        tags: string[]
        image: string
        user: string
        viewCount: number
        likeCount: number
        commentCount: number
        _id: string
}

interface User {
    name: string
    username: string
    email: string
    image: string
    description: string
    following: string[]
    favorites: string[]
    followers: string[]
    _id: string
}

interface Session {
    email: string
    image: string
    id: string
    name: string
}