'use client'

import React, { useEffect, useState } from 'react'
import { ChatBox, MobileNav, Navbar, PostCommentCard } from '../../../components'
import Image from 'next/image'
import { additionalPosts, postContent, postDetails, reportOptions } from '../../../constants/post'
import { useSession } from 'next-auth/react'
import { getCommentCount } from '@utils/getCommentCount'
import { getPostInfo } from '@utils/getPostInfo'

const Posts = ({ params }: { params: { id: string } }) => {
    const [isFollowing, setIsFollowing] = useState(false)
    const [reportModalShowing, setReportModalShowing] = useState(false)
    const [comment, setComment] = useState('')
    const [postInfo, setPostInfo] = useState<Post>()
    const [creatorInfo, setCreatorInfo] = useState<User>()
    const [signedInUserInfo, setSignedInUserInfo] = useState<User>()
    const [isReplyingTo, setIsReplyingTo] = useState<User>()
    const [commentBeingRepliedToId, setCommentBeingRepliedToId] = useState('')
    const [showChatBox, setShowChatBox] = useState(false)
    const { data: session } = useSession()

    const handleReportToggle = () => {
        setReportModalShowing(prev => !prev)
    }

    const getCreatorInfo = async () => {
        if (!postInfo?.user) return;
        try {
            const response = await fetch(`/api/users/${postInfo?.user}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            setCreatorInfo(data);
        } catch (error) {
            // handle error
        }
    }

    const checkIfFollowing = async () => {
        if (!session?.user || !creatorInfo) return;
        try {
            // @ts-ignore
            const response = await fetch(`/api/users/${session?.user.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            setSignedInUserInfo(data);


            if (data.following.includes(creatorInfo?._id)) {
                setIsFollowing(true);
            }
            else {
                setIsFollowing(false);
            }

        } catch (error) {
            // handle error
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
            setIsFollowing(prev => !prev);
        } catch (error) {
            // handle error
        }
    }

    const handleSubmitComment = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        // @ts-ignore
        if (session === null || session.user === undefined || !session?.user.id) return;

        try {
            const response = await fetch(`/api/comments`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                // @ts-ignore
                body: JSON.stringify({ comment, postId: params.id, userId: session.user.id, replyingTo: isReplyingTo, commentBeingRepliedToId }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            setComment('');
            getPostInfo(params.id, setPostInfo);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const incrementViewCount = async () => {
        try {
            const response = await fetch(`/api/posts/${params.id}/views`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getPostInfo(params.id, setPostInfo);
        incrementViewCount();
    }, [])

    useEffect(() => {
        getCreatorInfo();
    }, [postInfo])

    useEffect(() => {
        checkIfFollowing();
    }, [session, creatorInfo])

    if (!signedInUserInfo || !creatorInfo) return null;

    return (
        <div className='relative'>
            <Navbar setShowChatBox={setShowChatBox} />
            <div className={`p-5 lg:px-10 bg-backgroundLight1 dark:bg-backgroundDark1 h-max sm:h-screen md:h-max lg:h-auto flex flex-col lg:flex-row justify-between gap-5 ${reportModalShowing && 'blur-sm'}`}>
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='flex flex-col gap-5 lg:flex-row-reverse lg:items-start'>
                        <div>
                            <Image src={'/assets/post-header.png'} alt='post' width={335} height={117} className='object-contain w-full' />
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
                                    <Image src={`${signedInUserInfo?.image}`} alt='user' width={40} height={40} className='object-cover flex lg:hidden rounded-full' />
                                    <Image src={`${signedInUserInfo?.image}`} alt='user' width={44} height={44} className='object-cover hidden lg:flex rounded-full' />
                                    <div className='flex border px-4 py-2 rounded-full flex-1 justify-between'>
                                        <form onSubmit={handleSubmitComment} className='w-full'>
                                            <input type="text" placeholder={`${isReplyingTo ? 'Replying to ' + isReplyingTo.username : 'Say something... '}`} className={`placeholder:text-textDark3 bg-transparent flex lg:hidden w-full outline-none ${isReplyingTo && 'placeholder:text-backgroundDark4'}`} value={comment} onChange={e => setComment(e.target.value)} />
                                            <input type="text" placeholder={`${isReplyingTo ? 'Replying to ' + isReplyingTo.username : 'Say something nice to ' + signedInUserInfo?.username}`} className={`placeholder:text-textDark3 bg-transparent hidden lg:flex min-w-full w-full outline-none flex-1 ${isReplyingTo && 'placeholder:text-backgroundDark4'}`} onKeyDown={(e) => { if (e.key === 'Enter') { handleSubmitComment(e) } }} value={comment} onChange={e => setComment(e.target.value)} />
                                            <button type='submit' className='hidden'>Submit</button>
                                        </form>
                                        <Image src='/assets/smiley.png' alt='smiley' width={24} height={24} className='object-contain' />
                                    </div>
                                </div>
                                <div className='hidden flex-col gap-5 lg:gap-[30px] lg:flex lg:mt-[30px]'>
                                    {postInfo?.comments.map((comment, index) => (
                                        <div key={comment.content + index} className='flex flex-col gap-5'>
                                            <PostCommentCard comment={comment} setIsReplyingTo={setIsReplyingTo} setCommentBeingRepliedToId={setCommentBeingRepliedToId} />
                                            <div className='pl-16'>
                                                {comment.replies?.map((reply, index) => (
                                                    <PostCommentCard key={reply.content + index} comment={reply} isReply={true} setIsReplyingTo={setIsReplyingTo} setCommentBeingRepliedToId={setCommentBeingRepliedToId} />
                                                ))}
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
                                    <p className='text-textLight3 lg:font-semibold'>{detail.type.toLowerCase() === 'likes' ? postInfo?.likeCount : detail.type.toLowerCase() === 'comments' ? getCommentCount(postInfo) : detail.type.toLowerCase() === 'shares' ? 0 : ''} {detail?.type}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-5 lg:hidden'>
                            {postInfo?.comments.map((comment, index) => (
                                <div key={comment.content + index} className='flex flex-col gap-5'>
                                    <PostCommentCard comment={comment} setIsReplyingTo={setIsReplyingTo} setCommentBeingRepliedToId={setCommentBeingRepliedToId} />
                                    <div className='pl-16'>
                                        {comment.replies?.map((reply, index) => (
                                            <PostCommentCard key={reply.content + index} comment={reply} isReply={true} setIsReplyingTo={setIsReplyingTo} setCommentBeingRepliedToId={setCommentBeingRepliedToId} />
                                        ))}
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
                            <button className={`p-[10px] border ${isFollowing ? 'bg-white dark:bg-transparent border-backgroundLight4 text-textLight3' : 'bg-backgroundAlt5 border-backgroundAlt5 text-white'} w-full mt-5 font-semibold text-lg rounded-md`} onClick={handleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
                            {isFollowing && (
                                <div className={`p-[10px] border border-backgroundAlt5 bg-backgroundAlt5 text-white w-full mt-5 font-semibold text-lg rounded-md flex justify-center cursor-pointer`} onClick={() => setShowChatBox(prev => !prev)}>
                                    <Image src='/assets/message-dark.png' alt='message' width={20} height={20} className='object-contain' />
                                    <p className='ml-5'>Message</p>
                                </div>
                            )}
                            <p className='mt-5 text-textLight3'>Joined 6 months ago</p>
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
                {showChatBox && <ChatBox setShowChatBox={setShowChatBox} userToBeMessaged={creatorInfo} />}
            </div>
            <MobileNav />
            {reportModalShowing && (
                <div className='w-full max-w-[335px] lg:max-w-[477px] bg-white dark:bg-backgroundDark3 rounded-2xl absolute z-40 left-1/2 -translate-x-1/2 top-24 lg:top-32 p-5'>
                    <h3 className='font-semibold text-lg'>Why are you reporting this post by @{creatorInfo?.username}?</h3>
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