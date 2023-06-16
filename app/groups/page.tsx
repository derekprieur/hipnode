'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChatBox, GroupTypeCard, MeetupCard, MobileNav, Navbar, PodcastCard, Title } from "../../components"
import { groups, groupTypes } from "../../constants/groups"
import { meetups } from "../../constants/constants"

const Groups = () => {
    const [showChatBox, setShowChatBox] = useState(false)
    const [podcasts, setPodcasts] = useState<Podcast[]>()

    console.log(podcasts, 'podcasts')

    const getPodcasts = async () => {
        try {
            const res = await fetch('/api/podcasts')
            const podcasts = await res.json()
            setPodcasts(podcasts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPodcasts()
    }, [])

    return (
        <div className="bg-backgroundLight1 dark:bg-backgroundDark1 h-auto">
            <Navbar setShowChatBox={setShowChatBox} />
            <div className='flex flex-col lg:flex-row lg:items-start p-5 lg:py-[30px] lg:px-10 gap-5 lg:justify-center'>
                <div className="bg-white dark:bg-backgroundDark2 w-full p-[10px] rounded-2xl lg:max-w-[214px] flex flex-col lg:gap-5">
                    {groupTypes.map((groupType, index) => (
                        <GroupTypeCard key={groupType.type + index} groupType={groupType} index={index} />
                    ))}
                </div>
                <div className="flex flex-col">
                    <div className="gap-5 flex flex-col lg:flex-row lg:flex-wrap">
                        {groups.map((group, index) => (
                            <div key={group.title + index} className="bg-white dark:bg-backgroundDark2 w-full p-[10px] rounded-2xl flex flex-col lg:max-w-[248px]">
                                <div className="flex gap-[10px]">
                                    <Image src={group.avatar} alt={group.organizer} width={34} height={34} />
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-xs">{group.type}</h3>
                                        <p className="text-[10px]">{group.organizer}</p>
                                    </div>
                                </div>
                                <Image src={group.image} alt={group.organizer} width={315} height={146} className="rounded-[10px] mt-[10px] w-full" />
                                <div className="flex mt-[10px] gap-5">
                                    <Image src='/assets/heart-group.png' alt="heart" width={20} height={20} />
                                    <Image src='/assets/comments.png' alt="comments" width={20} height={20} />
                                    <Image src='/assets/share-group.png' alt="share" width={20} height={20} />
                                </div>
                                <h2 className="mt-[10px] text-sm font-semibold">{group.title}</h2>
                                <p className="mt-[10px] text-xs">{group.description}</p>
                                <p className="mt-[10px] text-xs text-textLight3">{group.date}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-3 gap-[14px]">
                        <p className="text-[10px] text-textLight3">See more</p>
                        <Image
                            src="/assets/arrow.png"
                            alt="arrow"
                            width={12}
                            height={10}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:max-w-[325px]">
                    <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 lg:mt-0">
                        <Title title="Meetups" />
                        <div className="flex flex-col gap-5 mt-5">
                            {meetups.map((meetup, index) => (
                                <MeetupCard key={index} meetup={meetup} />
                            ))}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 mb-24">
                        <Title title="Podcasts" />
                        <div className="flex flex-col gap-5 mt-5">
                            {podcasts?.map((podcast, index) => (
                                <PodcastCard key={index} podcast={podcast} />
                            ))}
                        </div>
                    </div>
                </div>
                {showChatBox && <ChatBox setShowChatBox={setShowChatBox} />}
            </div>
            <MobileNav />
        </div>
    )
}

export default Groups