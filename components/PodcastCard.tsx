import Image from 'next/image'
import React from 'react'

type Props = {
    podcast: {
        title: string
        image: string
        author: string
    }
}

const PodcastCard = ({ podcast }: Props) => {
    return (
        <div className='flex gap-[14px]'>
            <Image src={podcast.image} alt='podcast' width={58} height={58} className='object-contain' />
            <div className='flex flex-col gap-[6px] w-full'>
                <div className='flex justify-between gap-1 items-end'>
                    <h3 className='text-textLight1 dark:text-textDark1 text-xs font-semibold'>{podcast.title}</h3>
                    <Image src='/assets/arrow.png' alt='arrow' width={12} height={10} className='object-contain shrink-0' />
                </div>
                <p className='text-textLight3 text-[10px]'>by {podcast.author}</p>
            </div>
        </div>
    )
}

export default PodcastCard