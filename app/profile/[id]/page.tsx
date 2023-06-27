'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { ChatBox, MeetupCard, Navbar, PodcastCard, PostCard, Title } from '../../../components'
import { categories } from '../../../constants/profile'
import { meetups } from '../../../constants/constants'
import { seeMorePosts } from '@utils/seeMorePosts'
import { setMessageThread, setUserToMessage } from '@redux/newMessageSlice'
import { getAllMessages } from '@utils/getAllMessages'

const Profile = ({ params }: { params: { id: string } }) => {
    const { theme } = useTheme()
    const [isFollowed, setIsFollowed] = useState(false)
    const [followedUsers, setFollowedUsers] = useState<User[]>([])
    const [posts, setPosts] = useState<Post[]>([])
    const [loggedInUserInfo, setLoggedInUserInfo] = useState<User>()
    const [userInfo, setUserInfo] = useState<User>({ name: '', username: '', email: '', image: '', description: '', following: [], favorites: [], followers: [], _id: '', createdAt: '' })
    const [currentSelectedType, setCurrentSelectedType] = useState('Posts')
    const [showChatBox, setShowChatBox] = useState(false);
    const [podcasts, setPodcasts] = useState<Podcast[]>([])
    const [displayCount, setDisplayCount] = useState(4)
    const [messages, setMessages] = useState<Message[]>([])
    const [message, setMessage] = useState<Message>()
    const { data: session } = useSession()
    const router = useRouter()
    const dispatch = useDispatch()

    console.log(messages, 'messages')
    console.log(userInfo, 'userInfo')
    console.log(loggedInUserInfo, 'loggedInUserInfo')
    console.log(message, 'message')
    console.log(posts, 'posts')

    const getCreatorInfo = async () => {
        try {
            const response = await fetch(`/api/users/${params.id}`)
            const data = await response.json()
            setUserInfo(data)
        } catch (error) {
            // handle error
        }
    }

    const getPosts = async () => {
        try {
            const response = await fetch("/api/posts");
            const data = await response.json();
            const filteredPosts = data.filter((post: Post) => post.user === params.id)
            setPosts(filteredPosts);
        } catch (error) {
            // handle error
        }
    }

    const getFollowedUsers = async () => {
        try {
            const userPromises: Promise<User>[] = userInfo.following.map(async (userId: string) => {
                const response = await fetch(`/api/users/${userId}`);
                return response.json();
            });

            const users: User[] = await Promise.all(userPromises);
            setFollowedUsers(users);
        } catch (error) {
            // handle error
        }
    };

    const getLoggedInUserInfo = async () => {
        try {
            // @ts-ignore
            const response = await fetch(`/api/users/${session?.user?.id}`)
            const data = await response.json()
            setLoggedInUserInfo(data)
            if (data.following.includes(params.id)) {
                setIsFollowed(true)
            } else {
                setIsFollowed(false)
            }
        } catch (error) {
            // handle error
        }
    }

    const getPodcasts = async () => {
        try {
            const response = await fetch("/api/podcasts");
            const data = await response.json();
            setPodcasts(data);
        } catch (error) {
            // handle error
        }
    }

    const getTimeSinceUserJoined = () => {
        const date1 = new Date(userInfo.createdAt)
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
        getPosts()
        getCreatorInfo()
        getPodcasts()
        getAllMessages(setMessages)
    }, [])

    useEffect(() => {
        if (messages && userInfo._id && loggedInUserInfo?._id) {
            const foundMessage = messages.find(message =>
                (message.user1 === userInfo._id && message.user2 === loggedInUserInfo._id) ||
                (message.user2 === userInfo._id && message.user1 === loggedInUserInfo._id)
            );
            setMessage(foundMessage);
        }
    }, [messages, userInfo._id, loggedInUserInfo?._id])

    useEffect(() => {
        getLoggedInUserInfo()
    }, [session])

    useEffect(() => {
        getFollowedUsers()
    }, [userInfo])

    const handleFollow = async () => {
        try {
            // @ts-ignore
            const response = await fetch(`/api/users/${session?.user?.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    followId: params.id
                })
            });
            setIsFollowed(prev => !prev)


        } catch (error) {
            // handle error
        }
    }

    if (!userInfo.image || !message) return null

    return (
        <div className="bg-backgroundLight1 dark:bg-backgroundDark1 h-auto">
            <Navbar setShowChatBox={setShowChatBox} />
            <div className='flex flex-col lg:flex-row lg:items-start p-5 lg:py-[30px] lg:px-10 gap-5 lg:justify-center pb-20'>
                <div className='bg-white dark:bg-backgroundDark2 rounded-2xl flex flex-col items-center lg:max-w-[210px]'>
                    <div className='relative w-full'>
                        <Image src='/assets/profile-bg.png' alt='background' width={335} height={106} className='w-full max-h-[106px] lg:h-[106px]' />
                        <div className='bg-white dark:bg-backgroundDark2 w-[130px] h-[130px] rounded-full absolute top-10 left-1/2 -translate-x-1/2 flex items-center justify-center'>
                            <Image src={userInfo.image} alt='user' width={120} height={120} className='rounded-full' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center px-5 pb-[30px]'>
                        <h1 className='mt-[80px] text-[26px] font-semibold'>{userInfo.username}</h1>
                        <h3 className='text-textLight3'>User Interface Designer</h3>
                        {(userInfo._id != loggedInUserInfo?._id) && <div className='flex gap-[10px] mt-5'>
                            <button className='py-[6px] w-[124px] rounded-md bg-backgroundAlt5 font-semibold text-white' onClick={handleFollow}>{isFollowed ? 'Following' : 'Follow'}</button>
                            <div className='bg-backgroundAlt4 dark:bg-backgroundDark3 flex items-center justify-center p-2 rounded-md shrink-0'>
                                <Image src='/assets/profile-message.png' alt='message' width={20} height={20} className='shrink-0 cursor-pointer' onClick={() => {
                                    setShowChatBox(true)
                                    dispatch(setMessageThread(message))
                                    dispatch(setUserToMessage(userInfo))
                                }} />
                            </div>
                        </div>}
                        <p className='font-semibold mt-5 dark:text-textDark2'>{userInfo.followers.length} Followers  •  0 Points</p>
                        <p className='font-semibold mt-5'>Following {userInfo.following.length}</p>
                        <div className='flex mt-[15px] gap-[14px] lg:flex-wrap'>
                            {followedUsers?.map((user) => (
                                <Image key={user._id} src={user.image} alt='user' width={30} height={30} className='rounded-full cursor-pointer' onClick={() => router.push(`/profile/${user._id}`)} />
                            ))}
                        </div>
                        <p className='mt-5 text-textLight3 text-center'>{userInfo?.description}</p>
                        <div className='flex lg:flex-col mt-5 items-center gap-[10px]'>
                            <Link href='https://www.derekprieur.dev/' target='_blank'>
                                <div className='flex items-center gap-[10px]'>
                                    <Image src={theme === 'dark' ? '/assets/world-dark.png' : '/assets/world.png'} alt='world' width={14} height={14} />
                                    <p className='lg:font-semibold'>www.derekprieur.dev</p>
                                </div>
                            </Link>
                            <div className='flex ml-[10px] lg:ml-0 gap-5'>
                                <Link href='https://twitter.com/derekprieur_' target='_blank'>
                                    <Image src={theme === 'dark' ? '/assets/twitter-outline-dark.png' : '/assets/twitter-outline.png'} alt='twitter' width={20} height={20} />
                                </Link>
                                <Link href='https://facebook.com' target='_blank'>
                                    <Image src={theme === 'dark' ? '/assets/facebook-outline-dark.png' : '/assets/facebook-outline.png'} alt='facebook' width={20} height={20} />
                                </Link>
                                <Link href='https://instagram.com/derekprieur' target='_blank'>
                                    <Image src={theme === 'dark' ? '/assets/instagram-outline-dark.png' : '/assets/instagram-outline.png'} alt='instagram' width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                        <div className='bg-backgroundLight3 h-[1px] w-[170px] mt-5' />
                        <p className='mt-5 font-semibold text-textLight3 dark:text-textDark2'>Joined {getTimeSinceUserJoined()}</p>
                    </div>
                </div>
                <Image src='/assets/profile-interview.png' alt='interview' width={325} height={168} className='rounded-2xl mx-auto flex lg:hidden' />
                <div className='flex flex-col gap-5'>
                    <div className='bg-white dark:bg-backgroundDark2 flex p-[10px] lg:py-5 lg:px-[50px] gap-10 rounded-[14px] overflow-x-scroll hide-scrollbar lg:justify-between'>
                        {categories.map((category, index) => (
                            <h2 key={category + index} className={`font-semibold py-1 px-[10px] lg:text-lg ${category === currentSelectedType ? 'text-white bg-textAlt1 rounded-3xl' : 'lg:text-textLight3 lg:dark:text-textDark2'}`}>{category}</h2>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        {posts.length === 0 &&
                            <div className='p-[14px] lg:p-5 bg-white dark:bg-backgroundDark2 rounded-[10px] flex items-start'>
                                <p className='text-textLight3'>No posts yet from {userInfo.username}</p>
                            </div>
                        }
                        {posts.slice(0, displayCount).map((post, index) => (
                            <PostCard key={index} post={post} />
                        ))}
                    </div>
                    {displayCount < posts.length &&
                        <div className="flex gap-[14px] items-center cursor-pointer" onClick={() => seeMorePosts(setDisplayCount, displayCount)}>
                            <p className="text-[10px] text-textLight3">See more</p>
                            <Image
                                src="/assets/arrow.png"
                                alt="arrow"
                                width={12}
                                height={10}
                                className="object-contain"
                            />
                        </div>}
                </div>
                <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 lg:mt-0 lg:hidden">
                    <Title title="Meetups" />
                    <div className="flex flex-col gap-5 mt-5">
                        {meetups.map((meetup, index) => (
                            <MeetupCard key={index} meetup={meetup} />
                        ))}
                    </div>
                </div>
                <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 mb-24 lg:hidden">
                    <Title title="Podcasts" />
                    <div className="flex flex-col gap-5 mt-5">
                        {podcasts.map((podcast, index) => (
                            <PodcastCard key={index} podcast={podcast} />
                        ))}
                    </div>
                </div>
                <div className='hidden lg:flex flex-col gap-5'>
                    <Image src='/assets/profile-interview.png' alt='interview' width={325} height={168} className='rounded-2xl mx-auto hidden lg:flex' />
                    <div className='bg-white dark:bg-backgroundDark2 rounded-2xl p-5'>
                        <h2 className='font-semibold text-lg'>Performance</h2>
                        <p className='text-textLight3'>Showing data from the last 30 days</p>
                        <div className='flex flex-col mt-[30px] gap-6'>
                            {posts.map((post, index) => (
                                <div key={post.title + index} className='flex'>
                                    <Image src={post.image} alt='post' width={50} height={50} className='rounded-md mr-[14px]' />
                                    <div className='flex flex-col mr-[25px] gap-1'>
                                        <h3 className='text-textLight3'>Views</h3>
                                        <p className='font-semibold'>{post.viewCount}</p>
                                    </div>
                                    <div className='flex flex-col mr-[25px] gap-1'>
                                        <h3 className='text-textLight3'>Likes</h3>
                                        <p className='font-semibold'>{post.viewCount}</p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-textLight3'>Comments</h3>
                                        <p className='font-semibold'>{post.viewCount}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {displayCount < posts.length &&
                            <div className="flex mt-3 gap-[14px] items-center cursor-pointer" onClick={() => seeMorePosts(setDisplayCount, displayCount)}>
                                <p className="text-[10px] text-textLight3">See more</p>
                                <Image
                                    src="/assets/arrow.png"
                                    alt="arrow"
                                    width={12}
                                    height={10}
                                    className="object-contain"
                                />
                            </div>}
                    </div>
                </div>
            </div>
            {showChatBox && <ChatBox setShowChatBox={setShowChatBox} />}
        </div>
    )
}

export default Profile