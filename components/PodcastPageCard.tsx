import Image from 'next/image'
import React from 'react'

type Props = {
    podcast: {
        title: string
        date: string
        description: string
        user: {
            name: string
            avatar: string
            location: string
        }
    }
}

const PodcastPageCard = ({ podcast }: Props) => {
    return (
        <div className='bg-white dark:bg-backgroundDark2 p-[14px] rounded-2xl lg:max-w-[382px]'>
            <h1 className='text-textLight1 lg:text-lg dark:text-white font-semibold'>{podcast.title}</h1>
            <p className='mt-[10px] text-xs lg:text-sm font-normal text-textLight3 dark:text-textDark2'>{podcast.date} - {podcast.description}</p>
            <div className='flex mt-5 gap-[10px] items-start'>
                <Image src={podcast.user.avatar} alt='podcast creator' width={30} height={30} />
                <div className='flex flex-col'>
                    <h3 className='text-textLight1 dark:text-white text-sm font-semibold'>{podcast.user.name}</h3>
                    <p className='text-textLight3 font-normal text-[10px]'>{podcast.user.location}</p>
                </div>
            </div>
        </div>
    )
}

export default PodcastPageCard