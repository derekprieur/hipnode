import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'

type Props = {
    title: string
}

const Title = ({ title }: Props) => {
    const { theme } = useTheme()

    return (
        <div className='flex text-textLight1 dark:text-textDark1 font-semibold gap-[7px] items-center'>
            <h2>{title}</h2>
            <Image src={theme === 'dark' ? '/assets/arrow-light.png' : '/assets/arrow-dark.png'} alt='arrow' width={12} height={10} className='object-contain' />
        </div>
    )
}

export default Title