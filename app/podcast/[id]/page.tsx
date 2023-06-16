'use client'

import { ChatBox, Navbar } from '@components'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Podcast = ({ params }: { params: { id: string } }) => {
    const { theme } = useTheme()
    const [showChatBox, setShowChatBox] = useState(false)
    const [podcast, setPodcast] = useState<Podcast>()

    const getPodcast = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/podcasts/${params.id}`)
            const data = await res.json()
            setPodcast(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPodcast()
    }, [])

    if (!podcast) return null

    return (
        <div className='bg-backgroundLight1 dark:bg-backgroundDark1 h-auto lg:h-screen'>
            <Navbar setShowChatBox={setShowChatBox} />
            <div className='p-5 flex flex-col gap-5 max-w-[785px] lg:mx-auto'>
                <div className='bg-white dark:bg-backgroundDark2 p-[14px] rounded-2xl'>
                    <div className='flex gap-5 items-start'>
                        <Image src={podcast.image} alt='podcast image' width={80} height={50} className='flex lg:hidden' />
                        <Image src={podcast.image} alt='podcast image' width={245} height={150} className='hidden lg:flex' />
                        <div className='flex flex-col w-full'>
                            <p className='text-textLight1 dark:text-textDark1 font-normal text-[9px] lg:text-xs'>Hipnod • Episode 243</p>
                            <h4 className='text-textLight1 dark:text-textDark1 font-semibold text-sm lg:text-lg'>by {podcast.author}</h4>
                            <div className='flex gap-[14px] items-center mt-3'>
                                <div className='h-1 lg:h-[10px] bg-textLight2 dark:bg-backgroundDark3 min-w-[140px] lg:min-w-[375px] rounded-md' />
                                <p className='font-normal text-[10px]'>00:00 | 63:37</p>
                            </div>
                            <div className='flex gap-5 items-center mt-4'>
                                <div className='flex items-center gap-[10px] bg-backgroundAlt5 rounded-[20px] py-2 px-[14px]'>
                                    <Image src='/assets/play.png' alt='play' width={12} height={12} className='object-contain' />
                                    <p className='text-white font-semibold text-sm lg:text-base'>Play Now</p>
                                </div>
                                <div className='rounded-full border border-textLight3 p-[11px]'>
                                    <Image src={theme === 'dark' ? '/assets/share-social-dark.png' : '/assets/share-social.png'} alt='share' width={16} height={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white dark:bg-backgroundDark2 p-[14px] lg:p-5 rounded-2xl mb-10'>
                    <h1 className='text-textLight1 dark:text-textDark1 font-semibold text-[26px]'>{podcast.title}</h1>
                    <p className='text-textLight3 font-normal mt-5'>EPISODE DETAILS <br />

                        In this episode I'm chat with Rob Walling (@robwalling) about a wide range of topics including metal health, how to find a business idea and the relevance of bootstrapping today. <br /> <br />

                        SHOW NOTES <br />
                        In this episode I'm chat with Rob Walling about a wide range of topics including metal health, how to find a business idea and the relevance of bootstrapping today. <br /> <br />

                        Follow Rob on Twitter: https://twitter.com/robwalling <br />
                        Apply to TinySeed: https://tinyseed.com/apply <br />
                        Listen to Startups for the Rest of Us: https://www.startupsfortherestofus.com/ <br /> <br />

                        WHAT IS INDIE HACKERS? <br />
                        Courtland Allen interviews the ambitious indie hackers who are turning their ideas and side projects into profitable online businesses. Explore the latest strategies and tools founders are using to capitalize on new opportunities, escape the 9-to-5 grind, and create their own personal revenue-generating machines. The future is indie!</p>
                </div>
            </div>
            {showChatBox && <ChatBox setShowChatBox={setShowChatBox} />}
        </div>
    )
}

export default Podcast