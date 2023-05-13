import Image from 'next/image'
import React from 'react'

type Props = {
    text: string
    icon: string
}

const SortCard = ({ text, icon }: Props) => {
    return (
        <div className='flex gap-[6px] text-textLight1 dark:text-white font-semibold text-xs items-center'>
            <div className='bg-backgroundLight3 dark:bg-backgroundDark3 p-1 rounded-md'>
                <Image src={icon} width={20} height={20} alt='sort' className='object-contain' />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default SortCard