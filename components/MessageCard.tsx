import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMessageThread, setUserToMessage } from '@redux/newMessageSlice'

type Props = {
    message: Message,
    setShowChatBox: React.Dispatch<React.SetStateAction<boolean>>
}

const MessageCard = ({ message, setShowChatBox }: Props) => {
    const [mostRecentMessage, setMostRecentMessage] = useState<MessageContent>()
    const [user, setUser] = useState<User>()
    const { data: session } = useSession();
    const dispatch = useDispatch()

    const getMostRecentMessage = () => {
        if (!message.messages) return null
        const sortedMessages = message.messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        setMostRecentMessage(sortedMessages[0])
    }

    const getUserInfo = async () => {
        if (!session?.user || !message) return null
        try {
            // @ts-ignore
            const response = await fetch(`http://localhost:3000/api/users/${message.user1 === session?.user.id ? message.user2 : message.user1}`)
            const data = await response.json()
            setUser(data)
        } catch (error) {
            // handle error
        }
    }

    const getTimeSinceMessage = () => {
        if (!mostRecentMessage) return null
        const timeSinceMessage = new Date().getTime() - new Date(mostRecentMessage.date).getTime()
        const seconds = timeSinceMessage / 1000
        const minutes = seconds / 60
        const hours = minutes / 60
        const days = hours / 24
        const weeks = days / 7
        const months = weeks / 4
        const years = months / 12

        if (seconds < 60) return `${Math.floor(seconds)} seconds ago`
        if (minutes < 60) return `${Math.floor(minutes)} minutes ago`
        if (hours < 24) return `${Math.floor(hours)} hours ago`
        if (days < 7) return `${Math.floor(days)} days ago`
        if (weeks < 4) return `${Math.floor(weeks)} weeks ago`
        if (months < 12) return `${Math.floor(months)} months ago`
        if (years > 1) return `${Math.floor(years)} years ago`
    }

    useEffect(() => {
        getMostRecentMessage()
    }, [])

    useEffect(() => {
        getUserInfo()
    }, [session, message])

    if (!mostRecentMessage || !user) return null

    return (
        <div className='flex gap-[10px] max-w-[336px] w-full cursor-pointer items-start' onClick={() => {
            dispatch(setMessageThread(message))
            dispatch(setUserToMessage(user))
            setShowChatBox(true)
        }}>
            <Image src={user.image} alt='user' width={40} height={40} className='object-cover rounded-full' />
            <div className='flex flex-col'>
                <h3 className='font-semibold text-textLight1 dark:text-textDark1'>{user.username}
                    <span className='text-textLight3 text-xs'> {getTimeSinceMessage()}</span>
                </h3>
                <p className='text-textLight3 text-xs'>{mostRecentMessage.message}</p>
            </div>
        </div>
    )
}

export default MessageCard