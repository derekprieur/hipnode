interface Post {
    title: string
        tags: string[]
        image: string
        user: string
        viewCount: number
        likeCount: number
        commentCount: number
        _id: string
        comments: Comment[]
        likes: string[]
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

interface Meetup {
    title: string
    image: string
    organizer: string
    location: string
    date: string
    description: string 
    tags: string[]   
}

interface Comment {
    user: string
    date: string
    content: string
    replies: Comment[]
    _id: string
}