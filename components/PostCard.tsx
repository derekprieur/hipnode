import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
    const [favorited, setFavorited] = useState(false)
    const [userInfo, setUserInfo] = useState({
        username: '',
        image: '',
    })

    const handleClick = () => {
        setFavorited(!favorited)
    }

    const getCreatorInfo = async () => {
        try {
            const response = await fetch(`/api/users/${post.user}`)
            const data = await response.json()
            setUserInfo(data)
        } catch (error) {
            console.log(error, 'error');
        }
    }

    useEffect(() => {
        getCreatorInfo()
    }, [])


    return (
        <div className='p-[14px] lg:p-5 bg-white dark:bg-backgroundDark2 rounded-[10px] flex items-start'>
            <Image src={post.image} alt='post' width={56} height={56} className='object-contain shrink-0 flex lg:hidden' />
            <Image src={post.image} alt='post' width={156} height={156} className='object-contain shrink-0 hidden lg:flex' />
            <div className='flex flex-col ml-[14px] lg:w-full lg:justify-between'>
                <div className='flex flex-col lg:mb-[30px]'>
                    <div className='flex items-start gap-5 lg:justify-between'>
                        <h2 className='text-textLight1 dark:text-textDark1 text-xs lg:text-lg font-semibold'>{post.title}</h2>
                        <Image src={userInfo?.image} alt='user' width={30} height={30} className='object-contain rounded-full shrink-0 flex lg:hidden' />
                        <div className={`hidden lg:flex ${favorited ? 'bg-backgroundAlt3 dark:bg-backgroundDark3' : 'bg-backgroundLight3 dark:bg-backgroundDark3'} py-[6px] px-[5px] rounded-full cursor-pointer`} onClick={handleClick}>
                            <Image src={favorited ? '/assets/heart-full.png' : '/assets/heart.png'} alt='heart' width={20} height={20} className='object-contain shrink-0' />
                        </div>
                    </div>
                    <div className='flex gap-[10px] mt-[10px]'>
                        {post.tags.map((tag, index) => (
                            <TagBubble key={index} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div className='hidden lg:flex gap-[10px]'>
                        <Image src={userInfo?.image} alt='user' width={40} height={40} className='object-contain rounded-full shrink-0' />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <p className='font-semibold text-sm'>{userInfo?.username}</p>
                                <div className='w-[5px] h-[5px] rounded-full bg-backgroundLight4' />
                            </div>
                            <p className='text-[10px] text-textLight3'>3 weeks ago</p>
                        </div>
                    </div>
                    <PostMetrics viewCount={post.viewCount} likeCount={post.likeCount} commentCount={post.commentCount} />
                </div>
            </div>
        </div>
    )
}

export default PostCard