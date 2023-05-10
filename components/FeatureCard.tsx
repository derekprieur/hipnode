import Image from 'next/image'
import React from 'react'

interface FeatureCardProps {
    icon: string,
    text: string
}

const FeatureCard = ({ icon, text }: FeatureCardProps) => {
    return (
        <div className='text-textLight1 dark:text-textDark2 bg-backgroundLight2 dark:bg-backgroundDark2 p-5 flex rounded-lg gap-5 items-center'>
            <div className='bg-backgroundLight3 dark:bg-backgroundDark3 flex justify-center items-center rounded-lg p-5 shrink-0 max-h-[60px]'>
                <Image src={icon} alt='icon' width={20} height={20} />
            </div>
            <p className='font-semibold text-sm lg:text-lg'>{text}</p>
        </div>
    )
}

export default FeatureCard