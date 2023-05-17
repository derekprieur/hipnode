import Image from 'next/image'
import React from 'react'

type Props = {
    text: string
    isSender: boolean
}

const ChatMessage = ({ text, isSender }: Props) => {
    return (
        <div className={`${isSender ? 'flex-row-reverse' : 'flex'} flex gap-[10px] items-start`}>
            <Image src='/assets/user3.png' alt='user' width={30} height={30} className='object-contain flex lg:hidden' />
            <Image src='/assets/user3.png' alt='user' width={40} height={40} className='object-contain hidden lg:flex' />
            <div className={`${isSender ? 'bg-backgroundAlt2 text-white' : 'bg-backgroundAlt3 text-textAlt1'} p-[10px] lg:p-[14px] rounded-lg rounded-tl-sm font-semibold text-sm lg:text-base`}>
                {text === 'voice' ?
                    <div className='flex gap-4 items-center'>
                        <Image src='/assets/voice-play.png' alt='voice' width={20} height={20} className='object-contain flex lg:hidden' />
                        <Image src='/assets/voice-play.png' alt='voice' width={30} height={30} className='object-contain hidden lg:flex' />
                        <Image src='/assets/voice-time.png' alt='voice' width={65} height={24} className='object-contain' />
                        <p>2:26</p>
                    </div>
                    : text}
            </div>
        </div>
    )
}

export default ChatMessage