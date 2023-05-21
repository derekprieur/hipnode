import Image from 'next/image'
import React from 'react'

type Props = {
    comment: {
        name: string,
        avatar: string,
        date: string,
        comment: string,
        reply?: {
            name: string,
            avatar: string,
            date: string,
            comment: string,
        }
    }
}

const PostCommentCard = ({ comment }: Props) => {
    return (
        <div className='flex gap-5 items-start'>
            <Image src={comment.avatar} alt='user' width={45} height={45} className='object-contain rounded-full shrink-0' />
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col border border-backgroundLight4 py-6 px-4 rounded-2xl gap-[15px]'>
                    <p className='text-sm lg:text-base font-semibold '>{comment.name} • <span className='text-xs lg:text-sm font-normal'>{comment.date} • Edited on {comment.date}</span></p>
                    <p className='text-sm lg:text-base text-textLight3'>{comment.comment}</p>
                </div>
                <div className='flex gap-5 px-4'>
                    <Image src='/assets/heart-light.png' alt='like' width={20} height={20} className='object-contain' />
                    <Image src='/assets/reply.png' alt='reply' width={20} height={20} className='object-contain' />
                    <Image src='/assets/more.png' alt='more' width={20} height={20} className='object-contain' />
                </div>
            </div>
        </div>
    )
}

export default PostCommentCard