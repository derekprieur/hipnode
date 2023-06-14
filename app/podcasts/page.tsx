'use client'

import { MeetupCard, Navbar, PodcastFilter, PodcastPageCard, Title } from '@components'
import { meetups } from '@constants/constants'
import { podcasts } from '@constants/podcasts'
import Image from 'next/image'
import React from 'react'

const Podcasts = () => {
    return (
        <div className='bg-backgroundLight1 dark:bg-backgroundDark1 h-auto lg:h-screen'>
            <Navbar />
            <div className='p-5 lg:py-[30px] lg:px-10 flex flex-col lg:flex-row lg:items-start lg:gap-5 justify-center'>
                <Image src='/assets/podcast-cover.png' alt='start podcast' width={335} height={168} className='mx-auto flex lg:hidden' />
                <div className='hidden lg:flex'>
                    <PodcastFilter />
                </div>
                <div>
                    <div className='mt-5 lg:mt-0 gap-5 w-full flex flex-col lg:flex-row lg:flex-wrap lg:max-w-5xl lg:mx-auto'>
                        {podcasts.map((podcast, index) => (
                            <PodcastPageCard key={podcast.title + index} podcast={podcast} />
                        ))}
                    </div>
                    <div className="flex mt-3 gap-[14px] items-center cursor-pointer">
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
                <div className='flex flex-col gap-5'>
                    <Image src='/assets/podcast-cover.png' alt='start podcast' width={335} height={168} className='mx-auto hidden lg:flex' />
                    <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 mt-[22px] lg:mt-0">
                        <Title title="Meetups" />
                        <div className="flex flex-col gap-5 mt-5">
                            {meetups.map((meetup, index) => (
                                <MeetupCard key={index} meetup={meetup} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Podcasts