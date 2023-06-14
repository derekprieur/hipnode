import { podcastFilters } from '@constants/podcasts'
import Image from 'next/image'
import React from 'react'

type Props = {}

const PodcastFilter = (props: Props) => {
    return (
        <div className='bg-white dark:bg-backgroundDark2 rounded-2xl p-5 w-[210px]'>
            <h1 className='text-textLight1 dark:text-white font-semibold text-lg mb-3'>Filter By Show</h1>
            <div className='flex flex-col gap-3'>
                {podcastFilters.map((filter, index) => (
                    <div key={filter + index} className='flex justify-between items-center'>
                        <h4 className='text-textLight1 dark:text-white font-semibold text-xs'>{filter}</h4>
                        <div className='w-4 h-4 bg-backgroundAlt6 flex justify-center items-center'>
                            <Image src='/assets/check-filter.png' alt='check-filter' width={8} height={6} className='shrink-0 object-contain' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PodcastFilter