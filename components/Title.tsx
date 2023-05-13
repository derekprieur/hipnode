import Image from 'next/image'
import React from 'react'

type Props = {
    title: string
}

const Title = ({ title }: Props) => {
    return (
        <div className='flex text-textLight1 font-semibold gap-[7px] items-center'>
            <h2>{title}</h2>
            <Image src='/assets/arrow-dark.png' alt='arrow' width={12} height={10} className='object-contain' />
        </div>
    )
}

export default Title