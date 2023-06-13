import Image from 'next/image'
import React, { useState, useEffect } from 'react'

type Props = {
    comment: {
        user: string,
        date: string,
        content: string,
        _id: string
    },
    isReply?: boolean,
    isReplyingTo?: User,
    setIsReplyingTo: any,
    setCommentBeingRepliedToId: any
}

const PostCommentCard = ({ comment, isReply, isReplyingTo, setIsReplyingTo, setCommentBeingRepliedToId }: Props) => {
    const [commenterInfo, setCommenterInfo] = useState<User>()
    const formattedDate = new Date(comment.date).toLocaleString()
    console.log(isReplyingTo, 'isReplyingTo')
    console.log(isReply, 'isReply')

    const getCommenterInfo = async () => {
        try {
            const response = await fetch(`/api/users/${comment.user}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            setCommenterInfo(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCommenterInfo()
    }, [])

    if (!commenterInfo) return null

    return (
        <div className='flex gap-5 items-start'>
            <Image src={commenterInfo.image} alt='user' width={45} height={45} className='object-contain rounded-full shrink-0' />
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col border border-backgroundLight4 py-6 px-4 rounded-2xl gap-[15px]'>
                    <p className='text-sm lg:text-base font-semibold '>{commenterInfo.username} • <span className='text-xs lg:text-sm font-normal'>{formattedDate} • Edited on {formattedDate}</span></p>
                    <p className='text-sm lg:text-base text-textLight3'>{comment.content}</p>
                </div>
                <div className='flex gap-5 px-4'>
                    <Image src='/assets/heart-light.png' alt='like' width={20} height={20} className='object-contain cursor-pointer' />
                    <Image src='/assets/reply.png' alt='reply' width={20} height={20} className='object-contain cursor-pointer' onClick={() => {
                        setIsReplyingTo(commenterInfo)
                        setCommentBeingRepliedToId(comment._id)
                    }} />
                    <Image src='/assets/more.png' alt='more' width={20} height={20} className='object-contain cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default PostCommentCard