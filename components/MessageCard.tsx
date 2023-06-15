import Image from 'next/image'
import React from 'react'

type Props = {
    message: {
        name: string
        image: string
        message: string
        time: string
    },
    setShowChatBox: React.Dispatch<React.SetStateAction<boolean>>
}

const MessageCard = ({ message, setShowChatBox }: Props) => {
    return (
        <div className='flex gap-[10px] max-w-[336px] w-full cursor-pointer' onClick={() => setShowChatBox(true)}>
            <Image src={message.image} alt='user' width={40} height={40} className='object-contain' />
            <div className='flex flex-col'>
                <h3 className='font-semibold text-textLight1 dark:text-textDark1'>{message.name} <span className='text-textLight3 text-xs'>{message.time}</span></h3>
                <p className='text-textLight3 text-xs'>{message.message}</p>
            </div>
        </div>
    )
}

export default MessageCard