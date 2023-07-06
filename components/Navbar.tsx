'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

import { MessageCard, NotificationCard, NotificationType, SearchInput, SettingsCard, Title } from './../components'
import { navOptions, notificationTypes, notifications } from '../constants/constants'
import { RootState } from '@redux/store'
import { getAllMessages } from '@utils/getAllMessages'
import { getUserInfo } from '@utils/getUserInfo'

type Props = {
    setShowChatBox: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setShowChatBox }: Props) => {
    const { theme } = useTheme();
    const router = useRouter();
    const { data: session } = useSession();
    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    const [largeLogoSrc, setLargeLogoSrc] = useState<string | null>(null);
    const [showingMessages, setShowingMessages] = useState(false)
    const [showingNotifications, setShowingNotifications] = useState(false)
    const [showingSettings, setShowingSettings] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [userInfo, setUserInfo] = useState<User>()
    const [selectedNotificationType, setSelectedNotificationType] = useState(notificationTypes[0].type)
    const [unreadNotifications, setUnreadNotifications] = useState<boolean>(false)
    const [notifications, setNotifications] = useState<Notification[]>([])
    const newMessage = useSelector((state: RootState) => state.newMessage.message)

    console.log(selectedNotificationType, 'selectedNotificationType')
    console.log(notifications, 'notifications')

    const toggleMessages = () => {
        if (!showingMessages) getAllMessages(setMessages)
        setShowingMessages(!showingMessages)
        setShowingNotifications(false)
        setShowingSettings(false)
    }

    const toggleNotifications = () => {
        setShowingNotifications(!showingNotifications)
        setShowingMessages(false)
        setShowingSettings(false)
    }

    const toggleSettings = () => {
        setShowingSettings(!showingSettings)
        setShowingMessages(false)
        setShowingNotifications(false)
    }

    const handleSignOut = () => {
        signOut()
        router.push('/')
    }

    const setNotificationsToRead = async () => {
        try {
            // @ts-ignore
            const res = await fetch(`/api/users/${session?.user.id}/notifications`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await res.json()
            setUserInfo(data)
        } catch (error) {
            // handle error
        }
    }

    const checkForUnreadNotifications = () => {
        const unread = userInfo?.notifications?.some((notification: any) => notification.isRead === false)
        setUnreadNotifications(unread || false)
    }

    const filterNotifications = () => {
        if (selectedNotificationType === 'All notifications') return setNotifications(userInfo?.notifications || [])
        if (selectedNotificationType === 'Reactions') return setNotifications(userInfo?.notifications?.filter((notification: any) => notification.type === 'like') || [])
        if (selectedNotificationType === 'Comments') return setNotifications(userInfo?.notifications?.filter((notification: any) => notification.type === 'comment') || [])
        if (selectedNotificationType === 'Mentions') return setNotifications(userInfo?.notifications?.filter((notification: any) => notification.type === 'mention') || [])
    }

    useEffect(() => {
        checkForUnreadNotifications()
    }, [userInfo])

    useEffect(() => {
        // @ts-ignore
        getUserInfo(session?.user.id, setUserInfo)
    }, [session])

    useEffect(() => {
        setNotifications(userInfo?.notifications || [])
    }, [userInfo])

    useEffect(() => {
        setLogoSrc(
            theme === "dark" ? "/assets/small-logo-dark.png" : "/assets/small-logo.png"
        );
        setLargeLogoSrc(
            theme === "dark" ? "/assets/logo.png" : "/assets/logo-light.png"
        );
    }, [theme]);

    useEffect(() => {
        filterNotifications()
    }, [selectedNotificationType])


    if (!logoSrc || !largeLogoSrc) {
        return <div></div>;
    }

    return (
        <div className='py-[15px] lg:py-[25px] px-5 lg:px-10 flex justify-between items-center bg-white dark:bg-backgroundDark2 lg:gap-[58px]'>
            <div className='flex gap-5'>
                <Image src={logoSrc} alt={'logo'} width={30} height={30} className='object-contain lg:hidden cursor-pointer' onClick={() => router.push('/')} />
                <Image src={largeLogoSrc} alt='logo' width={146} height={38} className='hidden object-contain lg:flex cursor-pointer' onClick={() => router.push('/')} />
                <Image src={'/assets/search.png'} alt={'search'} width={20} height={20} className='object-contain xl:hidden' />
                <div className='hidden lg:flex gap-10 flex-1'>
                    {navOptions.map((navOption, index) => {
                        const icon = theme === 'dark' ? navOption.icon.replace('.png', '-dark.png') : navOption.icon;
                        return (
                            <Image key={index} src={icon} alt={navOption.type} width={20} height={20} className='object-contain cursor-pointer' onClick={() => router.push(navOption.link)} />
                        );
                    })}
                </div>
            </div>
            <div className='hidden lg:flex max-w-[440px] flex-1'>
                <SearchInput />
            </div>
            <div className='flex gap-5 lg:gap-[25px] shrink-0 '>
                <div className='flex items-center lg:p-[10px] lg:bg-backgroundLight3 lg:dark:bg-backgroundDark3 lg:rounded-[7px] relative'>
                    <Image src={'/assets/message.png'} alt={'message'} width={20} height={20} className='object-contain flex dark:hidden cursor-pointer' onClick={toggleMessages} />
                    <Image src={'/assets/message-dark.png'} alt={'message'} width={20} height={20} className='object-contain hidden dark:flex cursor-pointer' onClick={toggleMessages} />
                    {(showingMessages && messages.length > 0) &&
                        <div className="bg-white dark:bg-backgroundDark3 absolute -left-[260px] lg:-left-[148px] w-[336px] top-12 rounded-lg p-5 z-50">
                            <div className="mb-5">
                                <Title title="Messages" />
                            </div>
                            <div className="flex flex-col gap-5">
                                {messages?.map((message: any, index) => (
                                    <MessageCard key={index} message={message} setShowChatBox={setShowChatBox} />
                                ))}
                            </div>
                            <button className='w-full text-center mt-5 text-textAlt3 font-semibold text-sm'>See all in Messenger</button>
                        </div>
                    }
                </div>
                <div className='flex items-center lg:p-[10px] lg:bg-backgroundLight3 lg:dark:bg-backgroundDark3 lg:rounded-[7px] relative'>
                    <Image src={unreadNotifications ? '/assets/bell-notification.png' : '/assets/bell.png'} alt={'bell'} width={20} height={20} className='object-contain flex dark:hidden cursor-pointer' onClick={toggleNotifications} />
                    <Image src={unreadNotifications ? '/assets/bell-dark-notification.png' : '/assets/bell-dark.png'} alt={'bell'} width={20} height={20} className='object-contain hidden dark:flex cursor-pointer' onClick={toggleNotifications} />
                    {(showingNotifications && userInfo) &&
                        <div className='bg-white dark:bg-backgroundDark3 absolute w-[335px] lg:w-[589px] top-12 rounded-lg p-5 lg:p-[30px] -left-[260px] lg:-left-[360px] z-50'>
                            <div className='flex justify-between items-center'>
                                <h3 className='font-semibold lg:text-[26px]'>{userInfo.notifications && userInfo?.notifications?.length} Notification{userInfo.notifications.length > 1 ? 's' : ''}</h3>
                                <div className={`flex p-[11px] gap-[11px] rounded-md font-semibold text-sm lg:text-base ${unreadNotifications ? 'bg-backgroundAlt4 dark:bg-backgroundDark2 text-textAlt2 cursor-pointer' : 'bg-backgroundLight1 dark:bg-backgroundDark2 text-textLight3'}`} onClick={setNotificationsToRead}>
                                    <Image src={unreadNotifications ? '/assets/check.png' : `/assets/check-grey.png`} alt={'check'} width={20} height={20} className='object-contain' />
                                    Mark All Read
                                </div>
                            </div>
                            <div className='border border-backgroundLight1 dark:border-backgroundDark2 my-5 lg:my-[30px]' />
                            <div className='flex overflow-x-scroll hide-scrollbar gap-[35px] mb-[11px]'>
                                {notificationTypes.map((notificationType, index) => (
                                    <NotificationType key={index} notificationType={notificationType} selectedNotificationType={selectedNotificationType} setSelectedNotificationType={setSelectedNotificationType} />
                                ))}
                            </div>
                            <div className='border border-backgroundLight1 dark:border-backgroundDark2' />
                            <div className='flex flex-col mt-[19px] gap-5'>
                                {notifications.length > 0 ? notifications?.map((notification, index) => (
                                    <NotificationCard key={index} notification={notification} />
                                )) : <p className='text-textLight3 dark:text-textDark2'>No notifications currently</p>}
                            </div>
                        </div>
                    }
                </div>
                {session ? <div className='flex items-center gap-[14px] relative'>
                    <Image src={session?.user?.image || '/assets/user1.png'} alt={'avatar'} width={36} height={36} className='object-contain cursor-pointer rounded-full' onClick={toggleSettings} />
                    {showingSettings &&
                        <div className='bg-white dark:bg-backgroundDark3 w-[182px] h-[189px] absolute top-12 rounded-lg -left-[140px] p-5 pt-8 z-50'>
                            <SettingsCard />
                        </div>
                    }
                    <p className='hidden lg:flex text-textLight4 dark:text-textDark1 font-bold'>{session.user?.name}</p>
                    <Image src={'/assets/arrow-down.png'} alt={'arrow-down'} width={20} height={20} className='object-contain hidden lg:flex cursor-pointer' onClick={handleSignOut} />
                </div> : <button className='flex bg-black text-white font-semibold text-sm px-5 py-2 rounded-md' onClick={() => router.push('/signin')}>Login</button>}
            </div>
        </div >
    )
}

export default Navbar