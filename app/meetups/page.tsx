'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Navbar, PodcastCard, Title } from '../../components'
import { categories, meetups } from '../../constants/meetups'
import { podcasts } from '../../constants/constants'

type Props = {}

const Meetups = (props: Props) => {
    const { theme } = useTheme()
    return (
        <div className='bg-backgroundLight1 dark:bg-backgroundDark1 h-auto'>
            <Navbar />
            <div className='flex flex-col lg:flex-row items-center lg:items-start p-5 lg:py-[30px] lg:px-10 gap-5 lg:justify-center'>
                <Image src='/assets/meetup-banner.png' alt='banner' width={335} height={168} className='shrink-0 object-contain flex lg:hidden' />
                <div className='bg-white dark:bg-backgroundDark2 flex flex-col w-full p-5 rounded-2xl lg:max-w-[210px]'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold text-lg'>Categories</h3>
                        <Image src={theme === 'dark' ? '/assets/minimize-dark.png' : '/assets/minimize.png'} alt='minimize' width={16} height={16} className='shrink-0 object-contain' />
                    </div>
                    <div className='flex flex-col gap-3 mt-5'>
                        {categories.map((category, index) => (
                            <div key={category + index} className='flex justify-between items-center'>
                                <h4 className='font-semibold text-xs'>{category}</h4>
                                <div className='w-4 h-4 bg-backgroundAlt6 flex justify-center items-center'>
                                    <Image src='/assets/check-filter.png' alt='check-filter' width={8} height={6} className='shrink-0 object-contain' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col w-full gap-5 max-w-[785px]'>
                        {meetups.map((meetup, index) => (
                            <div key={meetup.title + index} className='bg-white dark:bg-backgroundDark2 rounded-2xl w-full flex flex-col p-[14px] lg:p-5 gap-4'>
                                <div className='flex items-start justify-between'>
                                    <div className='flex'>
                                        <Image src={meetup.image} alt={meetup.title} width={48} height={48} className='shrink-0 flex lg:hidden' />
                                        <Image src={meetup.image} alt={meetup.title} width={72} height={72} className='shrink-0 hidden lg:flex' />
                                        <div className='flex flex-col ml-3 mr-[10px] gap-1'>
                                            <h2 className='font-semibold text-xs lg:text-lg'>{meetup.title}</h2>
                                            <p className='font-semibold text-[10px] text-textLight3 lg:text-sm lg:font-normal'>{meetup.organizer} • {meetup.location}</p>
                                        </div>
                                    </div>
                                    <div className='border border-backgroundLight4 dark:border-backgroundDark2 dark:bg-backgroundDark3 flex flex-col justify-center items-center py-[5px] px-4 rounded-md'>
                                        <p className='font-semibold text-xs lg:text-base'>{meetup.date.split(' ')[0]}</p>
                                        <p className='text-textAlt3 font-semibold lg:font-bold lg:text-[26px]'>{meetup.date.split(' ')[1]}</p>
                                    </div>
                                </div>
                                <p className='text-xs lg:text-sm'>{meetup.description}</p>
                                <div className='flex gap-[10px] lg:mt-[5px]'>
                                    {meetup.tags.map((tag, index) => (
                                        <div className='bg-backgroundLight3 dark:bg-backgroundDark3 py-[2px] px-2 rounded-[20px] text-textLight2 text-[10px] lg:text-xs' key={tag + index}>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-[14px] items-center w-full mt-3">
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
                    <Image src='/assets/meetup-banner.png' alt='banner' width={335} height={168} className='shrink-0 object-contain hidden lg:flex' />
                    <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 mt-1 mb-24 lg:max-w-[335px]">
                        <Title title="Podcasts" />
                        <div className="flex flex-col gap-5 mt-5">
                            {podcasts.map((podcast, index) => (
                                <PodcastCard key={index} podcast={podcast} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meetups