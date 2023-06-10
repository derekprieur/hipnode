'use client'

import React, { useEffect, useState } from 'react'
import { MobileNav, Navbar, PostCommentCard } from '../../../components'
import Image from 'next/image'
import { additionalPosts, postComments, postContent, postDetails, postTags, reportOptions } from '../../../constants/post'
import { useSession } from 'next-auth/react'

const Posts = ({ params }: { params: { id: string } }) => {
    const [isFollowing, setIsFollowing] = useState(false)
    const [reportModalShowing, setReportModalShowing] = useState(false)
    const [postInfo, setPostInfo] = useState<Post>()
    const [creatorInfo, setCreatorInfo] = useState<User>()
    const [signedInUserInfo, setSignedInUserInfo] = useState<User>()
    const { data: session } = useSession()

    const handleReportToggle = () => {
        setReportModalShowing(prev => !prev)
    }

    const getPostInfo = async () => {
        console.log(params.id, 'params.id');
        try {
            const response = await fetch(`/api/posts/${params.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            console.log(data, 'data1')
            setPostInfo(data);
        } catch (error) {
            console.log(error, 'error7');
        }
    }

    const getCreatorInfo = async () => {
        console.log(postInfo?.user, 'postInfo?.user 123');
        if (!postInfo?.user) return;
        try {
            const response = await fetch(`/api/users/${postInfo?.user}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            console.log(data, 'data890');
            setCreatorInfo(data);
        } catch (error) {
            console.log(error, 'error1');
        }
    }

    const checkIfFollowing = async () => {
        console.log(session, 'session');
        if (!session?.user || !creatorInfo) return;
        try {
            // @ts-ignore
            const response = await fetch(`/api/users/${session?.user.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            console.log(data, 'data2');
            setSignedInUserInfo(data);

            console.log(creatorInfo, 'creatorInfo')

            if (data.following.includes(creatorInfo?._id)) {
                setIsFollowing(true);
                console.log('true');
            }
            else {
                setIsFollowing(false);
            }

        } catch (error) {
            console.log(error, 'error2');
        }
    }

    const handleFollow = async () => {
        try {
            // @ts-ignore
            const response = await fetch(`/api/users/${session?.user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    followId: creatorInfo?._id
                })
            });

            const data = await response.json();
            console.log(data, 'data');
            setIsFollowing(prev => !prev);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostInfo();
    }, [])

    useEffect(() => {
        getCreatorInfo();
    }, [postInfo])

    useEffect(() => {
        checkIfFollowing();
    }, [session, creatorInfo])

    return (
        <div className='relative'>
            <Navbar />
            <div className={`p-5 lg:px-10 bg-backgroundLight1 dark:bg-backgroundDark1 h-max sm:h-screen md:h-max lg:h-screen flex flex-col lg:flex-row justify-between gap-5 ${reportModalShowing && 'blur-sm'}`}>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='flex flex-col gap-5 lg:flex-row-reverse lg:items-start'>
                        <div>
                            <Image src='/assets/post-header.png' alt='post' width={335} height={117} className='object-contain w-full' />
                            <div className='flex flex-col bg-white dark:bg-backgroundDark2 p-5 lg:p-[30px] pl-[61px] lg:pl-[77px] gap-[14px] rounded-b-2xl'>
                                <h2 className='text-textLight1 dark:text-textDark1 font-semibold lg:text-[26px]'>{postInfo?.title}</h2>
                                <div className='flex gap-6'>
                                    {postInfo?.tags.map((tag, index) => (
                                        <p key={index} className='text-textAlt5 text-xs lg:text-base'>#{tag}</p>
                                    ))}
                                </div>
                                {postContent.map((content, index) => (
                                    <p key={index} className='text-textLight3 text-xs lg:text-base'>{content}</p>
                                ))}
                                <div className='mt-[16px] flex gap-4'>
                                    <Image src='/assets/user1.png' alt='user' width={40} height={40} className='object-contain flex lg:hidden' />
                                    <Image src='/assets/user1.png' alt='user' width={44} height={44} className='object-contain hidden lg:flex' />
                                    <div className='flex border px-4 py-2 rounded-full flex-1 justify-between'>
                                        <input type="text" placeholder='Say something...' className='placeholder:text-textDark3 bg-transparent flex lg:hidden w-full outline-none' />
                                        <input type="text" placeholder='Say something nice to follownishant...' className='placeholder:text-textDark3 bg-transparent hidden lg:flex w-full outline-none' />
                                        <Image src='/assets/smiley.png' alt='smiley' width={24} height={24} className='object-contain' />
                                    </div>
                                </div>
                                <div className='hidden flex-col gap-5 lg:gap-[30px] lg:flex lg:mt-[30px]'>
                                    {postComments.map((comment, index) => (
                                        <div key={comment.avatar + index} className='flex flex-col gap-5'>
                                            <PostCommentCard comment={comment} />
                                            <div className='pl-16'>
                                                <PostCommentCard comment={comment.reply} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col bg-white dark:bg-backgroundDark2 p-5 rounded-2xl gap-5 shrink-0 lg:min-w-[210px]'>
                            {postDetails.map((detail, index) => (
                                <div key={index} className='flex gap-[14px] items-center cursor-pointer' onClick={() => { detail.type.toLowerCase() === 'report' && handleReportToggle() }}>
                                    <div className='py-[5px] px-1 bg-backgroundLight1 dark:bg-backgroundDark3 rounded-md'>
                                        <Image src={detail.icon} alt={detail.type} width={20} height={20} className='object-contain' />
                                    </div>
                                    <p className='text-textLight3 lg:font-semibold'>{detail.type.toLowerCase() === 'likes' ? postInfo?.likeCount : detail.type.toLowerCase() === 'comments' ? postInfo?.commentCount : detail.type.toLowerCase() === 'shares' ? 0 : ''} {detail?.type}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-5 lg:hidden'>
                            {postComments.map((comment, index) => (
                                <div key={comment.avatar + index} className='flex flex-col gap-5'>
                                    <PostCommentCard comment={comment} />
                                    <div className='pl-16'>
                                        <PostCommentCard comment={comment.reply} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col bg-white dark:bg-backgroundDark2 py-[30px] px-[25px] items-center rounded-2xl'>
                            <Image src={creatorInfo?.image || '/assets/user1.png'} alt='user' width={100} height={100} className='object-contain rounded-full' />
                            <h2 className='font-semibold text-[26px] mt-5 text-textLight1 dark:text-textDark1'>{creatorInfo?.username}</h2>
                            <p className='mt-[2px] text-textLight3 font-semibold'>Web Developer</p>
                            <button className={`p-[10px] border ${isFollowing ? 'bg-white dark:bg-transparent border-backgroundLight4 text-textLight3' : 'bg-backgroundAlt5 border-backgroundAlt5 text-white'} w-full mt-5 font-semibold text-lg rounded-md`} onClick={() => setIsFollowing(prev => !prev)}>{isFollowing ? 'Following' : 'Follow'}</button>
                            {isFollowing && (
                                <div className={`p-[10px] border border-backgroundAlt5 bg-backgroundAlt5 text-white w-full mt-5 font-semibold text-lg rounded-md flex justify-center`}>
                                    <Image src='/assets/message-dark.png' alt='message' width={20} height={20} className='object-contain' />
                                    <p className='ml-5'>Message</p>
                                </div>
                            )}
                            <p className='mt-5 text-textLight3'>joined 6 months ago</p>
                        </div>
                        <div className='flex flex-col bg-white dark:bg-backgroundDark2 p-5 rounded-2xl mb-10 gap-[15px]'>
                            <h3 className='text-textLight1 dark:text-textDark1 font-semibold text-lg'>More from {creatorInfo?.username}</h3>
                            <div className='border border-backgroundLight3 dark:border-backgroundDark4' />
                            {additionalPosts.map((post, index) => (
                                <div key={post.title + index} className='flex flex-col font-semibold text-xs'>
                                    <p className='text-textLight1 dark:text-textDark1'>{post.title}</p>
                                    <div className='flex mb-[15px]'>
                                        {post.tags.map((tag, index) => (
                                            <p key={index} className='text-textLight3'>#{tag} &nbsp;</p>
                                        ))}
                                    </div>
                                    <div className='border border-backgroundLight3 dark:border-backgroundDark4' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <MobileNav />
            {reportModalShowing && (
                <div className='w-full max-w-[335px] lg:max-w-[477px] bg-white dark:bg-backgroundDark3 rounded-2xl absolute z-40 left-1/2 -translate-x-1/2 top-24 lg:top-32 p-5'>
                    <h3 className='font-semibold text-lg'>Why are you reporting this post by @Mansurul Haque?</h3>
                    <div className='mt-[30px] flex flex-wrap gap-5'>
                        {reportOptions.map((option, index) => (
                            <div key={option + index} className='py-[10px] px-5 bg-backgroundLight3 dark:bg-backgroundDark2 rounded-[20px] border border-backgroundLight4 dark:border-textLight1 text-xs'>{option}</div>
                        ))}
                    </div>
                    <div className='mt-[30px] flex gap-5'>
                        <button className='bg-backgroundAlt5 py-[10px] w-[160px] text-white rounded-md font-semibold text-lg'>Submit</button>
                        <button className='text-textLight3 text-lg' onClick={handleReportToggle}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Posts