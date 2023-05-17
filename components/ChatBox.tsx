import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'

import { ChatMessage } from './../components'

type Props = {}

const ChatBox = (props: Props) => {
    const { theme } = useTheme()
    return (
        <div className='w-full max-w-[450px] h-[402px] lg:w-[450px] lg:h-[450px] bg-white dark:bg-backgroundDark3 rounded-2xl py-[23px] px-5 flex flex-col fixed bottom-[24px] right-5 z-10'>
            <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                    <Image src='/assets/user3.png' alt='user' width={30} height={30} className='object-contain flex lg:hidden' />
                    <Image src='/assets/user3.png' alt='user' width={40} height={40} className='object-contain hidden lg:flex' />
                    <div className='flex flex-col'>
                        <h2 className='text-textLight1 dark:text-textDark1 font-semibold text-sm lg:text-lg'>Jonathon Swift</h2>
                        <p className='text-textAlt4 text-[9px] lg:text-[10px] font-semibold'>Online</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <Image src={theme === 'dark' ? '/assets/expand-dark.png' : '/assets/expand.png'} alt='expand' width={20} height={20} className='object-contain' />
                    <Image src={theme === 'dark' ? '/assets/minimize-dark.png' : '/assets/minimize.png'} alt='minimize' width={20} height={20} className='object-contain' />
                </div>
            </div>
            <div className='bg-backgroundLight3 h-[1px] mt-[15px] mb-5' />
            <div className='flex flex-col gap-5 mb-5'>
                <ChatMessage text="What's the update?" isSender={false} />
                <ChatMessage text='Did you check the last update?' isSender={true} />
                <ChatMessage text='voice' isSender={false} />
                <ChatMessage text="Yep, it's completed!" isSender={true} />
            </div>
            <div className='flex w-full gap-5'>
                <div className='flex border rounded-md border-textLight3 dark:border-textLight1 p-2 justify-between flex-1'>
                    <div className='flex gap-[14px]'>
                        <Image src='/assets/link.png' alt='link' width={12} height={12} className='object-contain' />
                        <input type="text" placeholder='Type your message here...' className='text-xs lg:text-sm' />
                    </div>
                    <Image src='/assets/voice.png' alt='voice' width={20} height={20} className='object-contain' />
                </div>
                <Image src={theme === 'dark' ? '/assets/send-dark.png' : '/assets/send.png'} alt='send' width={20} height={20} className='object-contain' />
            </div>
        </div>
    )
}

export default ChatBox