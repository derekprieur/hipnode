import React from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { navOptions } from '../constants/constants'

const MobileNav = () => {
    const { theme } = useTheme()
    const router = useRouter()

    return (
        <div className='w-full bg-white dark:bg-backgroundDark2 py-[14px] px-[27px] flex lg:hidden justify-between fixed bottom-0'>
            {navOptions.map((navOption, index) => {
                const icon = theme === 'dark' ? navOption.icon.replace('.png', '-dark.png') : navOption.icon;

                return (
                    <Image key={index} src={icon} alt={navOption.type} width={20} height={20} className='object-contain cursor-pointer' onClick={() => router.push(navOption.link)} />
                );
            })}
        </div>
    )
}

export default MobileNav