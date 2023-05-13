import React from 'react'

import { navOptions } from '../constants/constants'
import Image from 'next/image'

type Props = {}

const MobileNav = (props: Props) => {
    return (
        <div className='w-full bg-white py-[14px] px-[27px] flex justify-between'>
            {navOptions.map((navOption, index) => (
                <Image key={index} src={navOption.icon} alt={navOption.type} width={20} height={20} className='object-contain' />
            ))}
        </div>
    )
}

export default MobileNav