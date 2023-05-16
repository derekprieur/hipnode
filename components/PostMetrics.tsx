import React from 'react'

type Props = {
    viewCount: number
    likeCount: number
    commentCount: number
}

const PostMetrics = ({ viewCount, likeCount, commentCount }: Props) => {
    return (
        <div className='flex gap-[30px] lg:gap-10 mt-5 text-textLight3 dark:text-textDark3 text-[9px] lg:text-sm'>
            <p>{viewCount} Views</p>
            <p>{likeCount} Likes</p>
            <p>{commentCount} Comments</p>
        </div>
    )
}

export default PostMetrics