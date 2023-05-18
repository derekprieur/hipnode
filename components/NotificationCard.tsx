import Image from 'next/image'
import React from 'react'

type Props = {
    notification: {
        name: string,
        image: string,
        type: string,
        title: string,
        date: string,
        message?: string,
    }
}

const NotificationCard = ({ notification }: Props) => {
    return (
        <div className='flex gap-7 items-start'>
            <div className='relative shrink-0'>
                <Image src={notification.image} alt={notification.name} width={40} height={40} className='object-contain flex lg:hidden' />
                <Image src={notification.image} alt={notification.name} width={50} height={50} className='object-contain hidden lg:flex' />
                <div className='absolute -bottom-2 left-7 lg:left-9 bg-white dark:bg-backgroundDark2 w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-notification'>
                    <Image src={'/assets/comment.png'} alt={'comment'} width={16} height={16} className='object-contain' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-semibold text-xs lg:text-sm text-textLight3 lg:text-textLight1 lg:dark:text-textLight3'><span className='text-sm lg:text-lg'>{notification.name}</span> commented on your post</p>
                {notification.type === 'comment' && <div className='bg-backgroundLight1 dark:bg-backgroundDark2 rounded py-4 lg:py-[13px] px-[10px] lg:px-[14px] mt-2 font-normal text-xs text-textLight3 lg:text-textLight1 lg:dark:text-textLight3 lg:text-base'>"Great ebook & giveaway!"</div>}
                <p className='mt-2 text-textAlt1 font-semibold text-sm lg:text-lg'>{notification.title}</p>
                <p className='mt-1 text-textLight3 text-[10px] lg:text-textLight1 lg:text-sm lg:dark:text-textLight3'>{notification.date}</p>
            </div>
        </div>
    )
}

export default NotificationCard