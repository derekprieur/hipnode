import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { PostMetrics, TagBubble } from '../components'
import { getCommentCount } from '../utils/getCommentCount'

type Props = {
    post: Post
}

const PostCard = ({ post }: Props) => {
    const [favorited, setFavorited] = useState(false)
    const [userInfo, setUserInfo] = useState<User>({
        email: '', name: '', description: '', following: [], image: '', _id: '', favorites: [], username: '', followers: [], createdAt: ''
    })
    const [creatorInfo, setCreatorInfo] = useState({
        username: '',
        image: '',
        _id: ''
    })
    const { data: session } = useSession()
    const router = useRouter()
    const commentCount = getCommentCount(post)

    const checkIfFavorited = async () => {
        if (userInfo.favorites.includes(post?._id)) {
            setFavorited(true)
        } else {
            setFavorited(false)
        }
    }

    const updateFavoritePosts = async () => {
        if (!session) {
            router.push('/signin')
            return
        }
        try {
            // @ts-ignore
            const response = await fetch(`/api/users/${session?.user?.id}/favorites`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    postId: post._id,
                    // @ts-ignore
                    userId: session?.user?.id,
                })
            });

            const data = await response.json();

            if (favorited) {
                post.likeCount -= 1;
            } else {
                post.likeCount += 1;
            }

            setFavorited(prev => !prev);
        } catch (error) {
            // handle error
        }
    }

    const getLoggedInUserInfo = async () => {
        if (!session) return
        try {
            // @ts-ignore
            const response = await fetch(`/api/users/${session?.user?.id}`)
            const data = await response.json()
            setUserInfo(data)
        } catch (error) {
            // handle error
        }
    }

    const getCreatorInfo = async () => {
        if (!post.user) return
        try {
            const response = await fetch(`/api/users/${post.user}`)
            const data = await response.json()
            setCreatorInfo(data)
        } catch (error) {
            // handle error
        }
    }

    const getTimeSincePosted = (post: Post) => {
        const date1 = new Date(post.createdAt)
        const date2 = new Date()
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // return diffDay + ' days ago'
        if (diffDays > 365) {
            return Math.floor(diffDays / 365) + ' years ago'
        }
        if (diffDays > 30) {
            return Math.floor(diffDays / 30) + ' months ago'
        }
        return diffDays + ' days ago'
    }

    useEffect(() => {
        getLoggedInUserInfo()
    }, [])

    useEffect(() => {
        getCreatorInfo()
    }, [post])

    useEffect(() => {
        checkIfFavorited()
    }, [userInfo])

    if (!creatorInfo) return null

    return (
        <div className='p-[14px] lg:p-5 bg-white dark:bg-backgroundDark2 rounded-[10px] flex items-start'>
            <Link href={`/posts/${post._id}`} className='cursor-pointer'>
                {post.image && <Image src={post.image} alt='post' width={56} height={56} className='object-contain shrink-0 flex lg:hidden' />}
                {post.image && <Image src={post.image} alt='post' width={156} height={156} className='object-contain shrink-0 hidden lg:flex' />}
            </Link>
            <div className='flex flex-col ml-[14px] lg:w-full lg:justify-between'>
                <div className='flex flex-col lg:mb-[30px]'>
                    <div className='flex items-start gap-5 lg:justify-between'>
                        <Link href={`/posts/${post._id}`}>
                            <h2 className='text-textLight1 dark:text-textDark1 text-xs lg:text-lg font-semibold cursor-pointer'>{post.title}</h2>
                        </Link>
                        {creatorInfo.image && <Image src={creatorInfo?.image} alt='user' width={30} height={30} className='object-contain rounded-full shrink-0 flex lg:hidden cursor-pointer' onClick={() => router.push(`/profile/${creatorInfo._id}`)} />}
                        <div className={`hidden lg:flex ${favorited ? 'bg-backgroundAlt3 dark:bg-backgroundDark3' : 'bg-backgroundLight3 dark:bg-backgroundDark3'} py-[6px] px-[5px] rounded-full cursor-pointer`} onClick={updateFavoritePosts}>
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
                        {creatorInfo.image && <Image src={creatorInfo?.image} alt='user' width={40} height={40} className='object-contain rounded-full shrink-0 cursor-pointer' onClick={() => router.push(`/profile/${creatorInfo._id}`)} />}
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <p className='font-semibold text-sm cursor-pointer' onClick={() => router.push(`/profile/${creatorInfo._id}`)}>{creatorInfo?.username}</p>
                                <div className={`w-[5px] h-[5px] rounded-full ${creatorInfo._id === userInfo._id ? 'bg-textAlt4' : 'bg-backgroundLight4'}`} />
                            </div>
                            <p className='text-[10px] text-textLight3'>{getTimeSincePosted(post)}</p>
                        </div>
                    </div>
                    <PostMetrics viewCount={post.viewCount} likeCount={post.likeCount} commentCount={commentCount} />
                </div>
            </div>
        </div>
    )
}

export default PostCard