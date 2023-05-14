import Image from 'next/image'
import React from 'react'

type Props = {
    sortType: {
        text: string
        icon: string
        subtext: string
    }
}

const SortCard = ({ sortType }: Props) => {
    return (
        <div className='flex gap-[6px] text-textLight1 dark:text-white font-semibold text-xs items-center'>
            <div className='bg-backgroundLight3 dark:bg-backgroundDark3 p-1 rounded-md'>
                <Image src={sortType.icon} width={20} height={20} alt='sort' className='object-contain' />
            </div>
            <p className='flex lg:hidden'>{sortType.text.split(' ')[0]}</p>
            <div className='hidden lg:flex flex-col gap-[2px]'>
                <p>{sortType.text}</p>
                <p className='text-[9px] font-normal'>{sortType.subtext}</p>
            </div>
        </div>
    )
}

export default SortCard