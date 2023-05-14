import React from 'react'
import { useTheme } from 'next-themes'

import { navOptions } from '../constants/constants'
import Image from 'next/image'

type Props = {}

const MobileNav = (props: Props) => {
    const { theme } = useTheme()
    return (
        <div className='w-full bg-white dark:bg-backgroundDark2 py-[14px] px-[27px] flex justify-between fixed bottom-0'>
            {navOptions.map((navOption, index) => {
                const icon = theme === 'dark' ? navOption.icon.replace('.png', '-dark.png') : navOption.icon;

                return (
                    <Image key={index} src={icon} alt={navOption.type} width={20} height={20} className='object-contain' />
                );
            })}
        </div>
    )
}

export default MobileNav