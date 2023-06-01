'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { MeetupCard, Navbar, PodcastCard, PostCard, Title } from '../../../components'
import Image from 'next/image'
import { categories } from '../../../constants/profile'
import { meetups, podcasts, posts } from '../../../constants/constants'

type Props = {}

const Profile = ({ params }: { params: { id: string } }) => {
    const { theme } = useTheme()
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        _id: '',
        image: '',
        description: '',
    })
    console.log(params, 'params')

    const getCreatorInfo = async () => {
        try {
            const response = await fetch(`/api/users/${params.id}`)
            const data = await response.json()
            setUserInfo(data)
        } catch (error) {
            console.log(error, 'error');
        }
    }

    useEffect(() => {
        getCreatorInfo()
    }, [])

    console.log(userInfo, 'userInfo')

    return (
        <div className="bg-backgroundLight1 dark:bg-backgroundDark1 h-auto">
            <Navbar />
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
                        <div className='flex gap-[10px] mt-5'>
                            <button className='py-[6px] px-[38px] rounded-md bg-backgroundAlt5 font-semibold text-white'>Follow</button>
                            <div className='bg-backgroundAlt4 dark:bg-backgroundDark3 flex items-center justify-center p-2 rounded-md'>
                                <Image src='/assets/profile-message.png' alt='message' width={20} height={20} />
                            </div>
                        </div>
                        <p className='font-semibold mt-5 dark:text-textDark2'>33 Followers  •  501 Points</p>
                        <p className='font-semibold mt-5'>Following 47</p>
                        <div className='flex mt-[15px] gap-[14px] lg:flex-wrap'>
                            <Image src='/assets/user1.png' alt='user' width={30} height={30} className='rounded-full' />
                            <Image src='/assets/user1.png' alt='user' width={30} height={30} className='rounded-full' />
                            <Image src='/assets/user1.png' alt='user' width={30} height={30} className='rounded-full' />
                            <Image src='/assets/user1.png' alt='user' width={30} height={30} className='rounded-full' />
                            <Image src='/assets/user1.png' alt='user' width={30} height={30} className='rounded-full' />
                            <Image src='/assets/user1.png' alt='user' width={30} height={30} className='rounded-full' />
                            <Image src='/assets/user1.png' alt='user' width={30} height={30} className='rounded-full' />
                        </div>
                        <p className='mt-5 text-textLight3 text-center'>{userInfo?.description}</p>
                        <div className='flex lg:flex-col mt-5 items-center gap-[10px]'>
                            <div className='flex items-center gap-[10px]'>
                                <Image src={theme === 'dark' ? '/assets/world-dark.png' : '/assets/world.png'} alt='world' width={14} height={14} />
                                <p className='lg:font-semibold'>www.uikit.to</p>
                            </div>
                            <div className='flex ml-[10px] lg:ml-0 gap-5'>
                                <Image src={theme === 'dark' ? '/assets/twitter-outline-dark.png' : '/assets/twitter-outline.png'} alt='twitter' width={20} height={20} />
                                <Image src={theme === 'dark' ? '/assets/facebook-outline-dark.png' : '/assets/facebook-outline.png'} alt='facebook' width={20} height={20} />
                                <Image src={theme === 'dark' ? '/assets/instagram-outline-dark.png' : '/assets/instagram-outline.png'} alt='instagram' width={20} height={20} />
                            </div>
                        </div>
                        <div className='bg-backgroundLight3 h-[1px] w-[170px] mt-5' />
                        <p className='mt-5 font-semibold text-textLight3 dark:text-textDark2'>joined 2 years ago</p>
                    </div>
                </div>
                <Image src='/assets/profile-interview.png' alt='interview' width={325} height={168} className='rounded-2xl mx-auto flex lg:hidden' />
                <div className='flex flex-col gap-5'>
                    <div className='bg-white dark:bg-backgroundDark2 flex p-[10px] lg:py-5 lg:px-[50px] gap-10 rounded-[14px] overflow-x-scroll hide-scrollbar lg:justify-between'>
                        {categories.map((category, index) => (
                            <h2 key={category + index} className='font-semibold lg:text-textLight3 lg:dark:text-textDark2 lg:text-lg'>{category}</h2>
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        {posts.map((post, index) => (
                            <PostCard key={index} post={post} />
                        ))}
                    </div>
                    <div className="flex gap-[14px] items-center">
                        <p className="text-[10px] text-textLight3">See more</p>
                        <Image
                            src="/assets/arrow.png"
                            alt="arrow"
                            width={12}
                            height={10}
                            className="object-contain"
                        />
                    </div>
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
                        <button className='mt-[10px] text-textAlt3 font-semibold text-sm'>see more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile