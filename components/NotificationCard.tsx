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
        <div className='flex relative gap-5'>
            <Image src={notification.image} alt={notification.name} width={40} height={40} className='object-contain' />
            <div className='absolute -bottom-2 left-7 bg-white w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-notification'>
                <Image src={'/assets/comment.png'} alt={'comment'} width={16} height={16} className='object-contain' />
            </div>
        </div>
    )
}

export default NotificationCard