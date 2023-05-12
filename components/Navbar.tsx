import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { DarkModeToggle } from './../components'

type Props = {}

const Navbar = (props: Props) => {
    const { theme } = useTheme();
    const [logoSrc, setLogoSrc] = useState<string | null>(null);

    useEffect(() => {
        setLogoSrc(
            theme === "dark" ? "/assets/small-logo-dark.png" : "/assets/small-logo.png"
        );
    }, [theme]);

    if (!logoSrc) {
        return <div></div>;
    }

    return (
        <div className='py-[15px] px-5 flex justify-between items-center bg-white dark:bg-backgroundDark2'>
            <div className='flex gap-5'>
                <Image src={logoSrc} alt={'logo'} width={30} height={30} className='object-contain' />
                <Image src={'/assets/search.png'} alt={'search'} width={20} height={20} className='object-contain' />
            </div>
            <DarkModeToggle />
            <div className='flex gap-5'>
                <Image src={'/assets/message.png'} alt={'message'} width={20} height={20} className='object-contain' />
                <Image src={'/assets/bell.png'} alt={'bell'} width={20} height={20} className='object-contain' />
                <Image src={'/assets/avatar.png'} alt={'avatar'} width={36} height={36} className='object-contain' />
            </div>
        </div>
    )
}

export default Navbar