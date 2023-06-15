import Image from 'next/image'
import React from 'react'

type Props = {
    sortType: {
        text: string
        icon: string
        subtext: string
    },
    currentSortType: string
    setCurrentSortType: (sortType: string) => void
}

const SortCard = ({ sortType, currentSortType, setCurrentSortType }: Props) => {
    return (
        <div className={`flex gap-[6px] text-textLight1 dark:text-white font-semibold text-xs items-center p-[5px] cursor-pointer ${sortType.text === currentSortType && 'bg-backgroundLight3 dark:bg-backgroundDark3 rounded-md'}`} onClick={() => setCurrentSortType(sortType.text)}>
            <div className='bg-backgroundLight3 dark:bg-backgroundDark3 p-1 rounded-md'>
                <Image src={sortType.icon} width={20} height={20} alt='sort' className='object-contain' />
            </div>
            <p className='flex lg:hidden'>{sortType.text.split(' ')[0]}</p>
            <div className='hidden lg:flex flex-col gap-[2px]'>
                <p>{sortType.text}</p>
                <p className='text-[9px] font-normal dark:text-textLight3'>{sortType.subtext}</p>
            </div>
        </div>
    )
}

export default SortCard