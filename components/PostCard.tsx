import Image from 'next/image'
import React from 'react'

import { PostMetrics, TagBubble } from '../components'

type Props = {
    post: {
        title: string
        tags: string[]
        image: string
        user: string
        viewCount: number
        likeCount: number
        commentCount: number
    }
}

const PostCard = ({ post }: Props) => {
    return (
        <div className='p-[14px] bg-white dark:bg-backgroundDark2 rounded-[10px] flex items-start'>
            <Image src={post.image} alt='post' width={56} height={56} className='object-contain shrink-0' />
            <div className='flex flex-col ml-[14px]'>
                <div className='flex items-start gap-5'>
                    <h2 className='text-textLight1 dark:text-textDark1 text-xs font-semibold'>{post.title}</h2>
                    <Image src={post.user} alt='user' width={30} height={30} className='object-contain shrink-0' />
                </div>
                <div className='flex gap-[10px] mt-[10px]'>
                    {post.tags.map((tag, index) => (
                        <TagBubble key={index} tag={tag} />
                    ))}
                </div>
                <PostMetrics viewCount={post.viewCount} likeCount={post.likeCount} commentCount={post.commentCount} />
            </div>
        </div>
    )
}

export default PostCard