import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { DarkModeToggle, MessageCard, NotificationCard, NotificationType, SearchInput, Title } from './../components'
import { messages, navOptions, notificationTypes, notifications } from '../constants/constants'

type Props = {}

const Navbar = (props: Props) => {
    const { theme } = useTheme();
    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    const [largeLogoSrc, setLargeLogoSrc] = useState<string | null>(null);
    const [showingMessages, setShowingMessages] = useState(false)
    const [showingNotifications, setShowingNotifications] = useState(true)

    const toggleMessages = () => {
        setShowingMessages(!showingMessages)
    }

    const toggleNotifications = () => {
        setShowingNotifications(!showingNotifications)
    }

    useEffect(() => {
        setLogoSrc(
            theme === "dark" ? "/assets/small-logo-dark.png" : "/assets/small-logo.png"
        );
        setLargeLogoSrc(
            theme === "dark" ? "/assets/logo.png" : "/assets/logo-light.png"
        );
    }, [theme]);

    if (!logoSrc || !largeLogoSrc) {
        return <div></div>;
    }

    return (
        <div className='py-[15px] lg:py-[25px] px-5 lg:px-10 flex justify-between items-center bg-white dark:bg-backgroundDark2 lg:gap-[58px]'>
            <div className='flex gap-5'>
                <Image src={logoSrc} alt={'logo'} width={30} height={30} className='object-contain lg:hidden' />
                <Image src={largeLogoSrc} alt='logo' width={146} height={38} className='hidden object-contain lg:flex' />
                <Image src={'/assets/search.png'} alt={'search'} width={20} height={20} className='object-contain xl:hidden' />
                <div className='hidden lg:flex gap-10 flex-1'>
                    {navOptions.map((navOption, index) => {
                        const icon = theme === 'dark' ? navOption.icon.replace('.png', '-dark.png') : navOption.icon;
                        return (
                            <Image key={index} src={icon} alt={navOption.type} width={20} height={20} className='object-contain' />
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
                    {showingMessages &&
                        <div className="bg-white dark:bg-backgroundDark3 absolute -left-[158px] lg:-left-[148px] w-[336px] top-12 rounded-lg p-5">
                            <div className="mb-5">
                                <Title title="Messages" />
                            </div>
                            <div className="flex flex-col gap-5">
                                {messages.map((message, index) => (
                                    <MessageCard key={index} message={message} />
                                ))}
                            </div>
                            <button className='w-full text-center mt-5 text-textAlt3 font-semibold text-sm'>See all in Messenger</button>
                        </div>
                    }
                </div>
                <div className='flex items-center lg:p-[10px] lg:bg-backgroundLight3 lg:dark:bg-backgroundDark3 lg:rounded-[7px] relative'>
                    <Image src={'/assets/bell.png'} alt={'bell'} width={20} height={20} className='object-contain flex dark:hidden' />
                    <Image src={'/assets/bell-dark.png'} alt={'bell'} width={20} height={20} className='object-contain hidden dark:flex' />
                    {showingNotifications &&
                        <div className='bg-white absolute w-[335px] top-12 rounded-lg p-5 -left-[158px]'>
                            <div className='flex justify-between items-center'>
                                <h3 className='font-semibold'>3 Notifications</h3>
                                <div className='flex p-[11px] bg-backgroundAlt4 text-textAlt2 gap-[11px] rounded-md font-semibold text-sm'>
                                    <Image src={'/assets/check.png'} alt={'check'} width={20} height={20} className='object-contain' />
                                    Mark All Read
                                </div>
                            </div>
                            <div className='border border-backgroundLight1 my-5' />
                            <div className='flex overflow-x-scroll hide-scrollbar gap-[35px] mb-[11px]'>
                                {notificationTypes.map((notificationType, index) => (
                                    <NotificationType key={index} notificationType={notificationType} />
                                ))}
                            </div>
                            <div className='border border-backgroundLight1' />
                            <div className='flex flex-col mt-[19px] gap-5'>
                                {notifications.map((notification, index) => (
                                    <NotificationCard key={index} notification={notification} />
                                ))}
                            </div>
                        </div>
                    }
                </div>
                <div className='flex items-center gap-[14px]'>
                    <Image src={'/assets/avatar.png'} alt={'avatar'} width={36} height={36} className='object-contain' />
                    <p className='hidden lg:flex text-textLight4 dark:text-textDark1 font-bold'>AR. Jakir</p>
                    <Image src={'/assets/arrow-down.png'} alt={'arrow-down'} width={20} height={20} className='object-contain hidden lg:flex' />
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Navbar