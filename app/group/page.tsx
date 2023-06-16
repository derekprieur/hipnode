'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { ChatBox, GroupAboutCard, GroupAdminCard, MobileNav, Navbar, PostCard, TagCard, Title } from '../../components'
import { popularTags } from '../../constants/constants'

type Props = {}

const Group = (props: Props) => {
    const { theme } = useTheme()
    const [showChatBox, setShowChatBox] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])

    const getPosts = async () => {
        try {
            const response = await fetch("/api/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            // handle error
        }
    }

    return (
        <div className="bg-backgroundLight1 dark:bg-backgroundDark1 h-auto">
            <Navbar setShowChatBox={setShowChatBox} />
            <div className='flex flex-col lg:flex-row lg:items-start p-5 lg:py-[30px] lg:px-10 gap-5 lg:justify-center pb-20'>
                <div className='hidden lg:flex lg:flex-col gap-5'>
                    <GroupAboutCard />
                    <GroupAdminCard />
                    <div className="hidden lg:flex md:flex-col bg-white dark:bg-backgroundDark2 p-[10px] md:p-5 rounded-[10px] justify-between">
                        <div className="mb-5">
                            <Title title="Popular Tags" />
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            {popularTags.map((tag, index) => (
                                <TagCard key={index} tag={tag} posts={posts} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className="bg-white dark:bg-backgroundDark2 w-full p-[10px] rounded-2xl flex flex-col lg:gap-5 gap-[14px]">
                        <Image src='/assets/group-banner.png' alt="group banner" width={315} height={72} className="rounded-[10px] w-full object-cover" />
                        <div className='flex items-start justify-between lg:items-center px-[10px]'>
                            <div className='flex gap-[14px] lg:pb-[10px] items-center'>
                                <Image src='/assets/groupType1.png' alt="group" width={40} height={40} className='flex lg:hidden' />
                                <Image src='/assets/groupType1.png' alt="group" width={70} height={70} className='hidden lg:flex' />
                                <div className='flex flex-col'>
                                    <h2 className='font-semibold lg:text-[26px]'>Design Discussion</h2>
                                    <p className='text-[10px] lg:text-sm lg:text-textLight3'>Created by <span className='font-semibold text-xs lg:text-black lg:dark:text-textDark1'>AR Jakir</span></p>
                                </div>
                            </div>
                            <div className='p-[10px] bg-backgroundLight1 dark:bg-backgroundDark3 flex items-center justify-center gap-[10px] rounded'>
                                <Image src='/assets/leave.png' alt="leave" width={20} height={20} />
                                <p className='font-semibold text-textLight3'>Leave</p>
                            </div>
                        </div>
                    </div>
                    <Image src='/assets/group-create.png' alt="group create" width={335} height={168} className="rounded-[10px]  object-cover mx-auto flex lg:hidden" />
                    <div className='bg-white dark:bg-backgroundDark2 w-full p-[10px] lg:p-5 rounded-2xl flex lg:gap-5 gap-[14px] items-center justify-between'>
                        <h2 className='font-semibold'>Explore</h2>
                        <div className='flex gap-[14px]'>
                            <div className='flex gap-[10px] items-center bg-backgroundLight1 dark:bg-backgroundDark3 p-[6px] rounded'>
                                <Image src={theme === 'dark' ? '/assets/groupSort1Dark.png' : '/assets/groupSort1.png'} alt="group sort" width={20} height={20} />
                                <p className='font-semibold text-xs'>New</p>
                            </div>
                            <div className='flex gap-[10px] items-center bg-backgroundAlt3 p-[6px] rounded'>
                                <Image src='/assets/groupSort2.png' alt="group sort" width={20} height={20} />
                                <p className='font-semibold text-xs text-textAlt1'>Popular</p>
                            </div>
                        </div>
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
                <div className='flex flex-col gap-5'>
                    <Image src='/assets/group-create.png' alt="group create" width={325} height={168} className="rounded-[10px]  object-cover mx-auto hidden lg:flex" />
                    <div className='bg-white dark:bg-backgroundDark2 w-full p-5 rounded-2xl lg:max-w-[325px] flex flex-col lg:gap-5 gap-[14px]'>
                        <h3 className='font-semibold'>Active Members</h3>
                        <div className='flex flex-wrap gap-5'>
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                            <Image src='/assets/user1.png' alt='user' width={40} height={40} />
                        </div>
                    </div>
                    <div className='bg-white dark:bg-backgroundDark2 w-full p-5 rounded-2xl lg:max-w-[325px] flex flex-col lg:gap-5 gap-[14px]'>
                        <h3 className='font-semibold'>Recent Media</h3>
                        <div className='flex flex-wrap '>
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                            <Image src='/assets/group-media.png' alt='media' width={88} height={88} className='rounded object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 lg:hidden'>
                        <GroupAboutCard />
                        <GroupAdminCard />
                    </div>
                </div>
                {showChatBox && <ChatBox setShowChatBox={setShowChatBox} />}
            </div>
            <MobileNav />
        </div>
    )
}

export default Group