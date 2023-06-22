import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'

import { ChatMessage } from './../components'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { useSession } from 'next-auth/react'

type Props = {
    setShowChatBox: React.Dispatch<React.SetStateAction<boolean>>
    userToBeMessaged?: User
}

const ChatBox = ({ setShowChatBox }: Props) => {
    const { theme } = useTheme()
    const { data: session } = useSession();

    const userToBeMessaged = useSelector((state: RootState) => state.newMessage.userToMessage)
    const messages = useSelector((state: RootState) => state.newMessage.messageThread.messages)

    console.log(userToBeMessaged, 'userToBeMessaged')
    console.log(messages, 'messages')
    console.log(session, 'session')

    const handleMessageSend = async () => {
        try {
            // @ts-ignore
            const res = await fetch(`/api/messages/${messages._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Hello'
                }),
            })
            const data = await res.json()
            console.log(data, 'data')
        } catch (error) {
            console.log(error, 'error')
        }
    }

    return (
        <div className='w-full max-w-[450px] h-[402px] lg:w-[450px] lg:h-[450px] bg-white dark:bg-backgroundDark3 rounded-2xl py-[23px] px-5 flex flex-col fixed bottom-[24px] right-5 z-10 justify-between'>
            <div>
                <div className='flex justify-between'>
                    <div className='flex gap-[10px] items-center'>
                        <Image src={userToBeMessaged.image} alt='user' width={30} height={30} className='object-cover flex lg:hidden rounded-full' />
                        <Image src={userToBeMessaged.image} alt='user' width={40} height={40} className='object-cover hidden lg:flex rounded-full' />
                        <div className='flex flex-col'>
                            <h2 className='text-textLight1 dark:text-textDark1 font-semibold text-sm lg:text-lg'>{userToBeMessaged?.username}</h2>
                            <p className='text-textAlt4 text-[9px] lg:text-[10px] font-semibold'>Online</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Image src={theme === 'dark' ? '/assets/expand-dark.png' : '/assets/expand.png'} alt='expand' width={20} height={20} className='object-contain' />
                        <Image src={theme === 'dark' ? '/assets/minimize-dark.png' : '/assets/minimize.png'} alt='minimize' width={20} height={20} className='object-contain cursor-pointer' onClick={() => setShowChatBox(false)} />
                    </div>
                </div>
                <div className='bg-backgroundLight3 h-[1px] mt-[15px] mb-5' />
            </div>
            <div className='flex flex-col justify-end'>
                <div className='flex flex-col gap-5 mb-5'>
                    {messages.map((message, index) => (
                        // @ts-ignore
                        <ChatMessage key={index} text={message.message} isSender={message.sender === session?.user.id} image={
                            // @ts-ignore
                            message.sender === session?.user?.id ? session?.user.image : userToBeMessaged.image
                        } />
                    ))}
                </div>
                <div className='flex w-full gap-5'>
                    <div className='flex border rounded-md border-textLight3 dark:border-textLight1 p-2 justify-between flex-1'>
                        <div className='flex gap-[14px]'>
                            <Image src='/assets/link.png' alt='link' width={12} height={12} className='object-contain' />
                            <input type="text" placeholder='Type your message here...' className='text-xs lg:text-sm outline-none' />
                        </div>
                        <Image src='/assets/voice.png' alt='voice' width={20} height={20} className='object-contain' />
                    </div>
                    <Image src={theme === 'dark' ? '/assets/send-dark.png' : '/assets/send.png'} alt='send' width={20} height={20} className='object-contain' onClick={handleMessageSend} />
                </div>
            </div>
        </div>
    )
}

export default ChatBox