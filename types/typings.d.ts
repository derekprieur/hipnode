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
    createdAt: string
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
    createdAt: string
    notifications: Notification[]
}

interface Notification {
    type: string
    userId: string
    postId: string
    time: string
    commentId: string
    isRead: boolean
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

interface Podcast {
    title: string
    image: string
    author: string
    date: string
    description: string
    user: string
    location: string
    _id: string
}

interface Message {
    user1: string
    user2: string
    messages: MessageContent[]
    _id: string
}

interface MessageContent {
    sender: string
    message: string
    date: string
    _id: string
}