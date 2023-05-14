import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { DarkModeToggle, SearchInput } from './../components'
import { navOptions } from '../constants/constants'

type Props = {}

const Navbar = (props: Props) => {
    const { theme } = useTheme();
    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    const [largeLogoSrc, setLargeLogoSrc] = useState<string | null>(null);

    useEffect(() => {
        setLogoSrc(
            theme === "dark" ? "/assets/small-logo-dark.png" : "/assets/small-logo.png"
        );
        setLargeLogoSrc(
            theme === "dark" ? "/assets/logo.png" : "/assets/logo-light.png"
        );
    }, [theme]);

    if (!logoSrc || !largeLogoSrc) {
        return <div></div>;
    }

    return (
        <div className='py-[15px] lg:py-[25px] px-5 lg:px-10 flex justify-between items-center bg-white dark:bg-backgroundDark2 lg:gap-[58px]'>
            <div className='flex gap-5'>
                <Image src={logoSrc} alt={'logo'} width={30} height={30} className='object-contain lg:hidden' />
                <Image src={largeLogoSrc} alt='logo' width={146} height={38} className='hidden object-contain lg:flex' />
                <Image src={'/assets/search.png'} alt={'search'} width={20} height={20} className='object-contain xl:hidden' />
                <div className='hidden lg:flex gap-10 flex-1'>
                    {navOptions.map((navOption, index) => {
                        const icon = theme === 'dark' ? navOption.icon.replace('.png', '-dark.png') : navOption.icon;
                        return (
                            <Image key={index} src={icon} alt={navOption.type} width={20} height={20} className='object-contain' />
                        );
                    })}
                </div>
            </div>
            {/* <DarkModeToggle /> */}
            <div className='hidden lg:flex max-w-[440px] flex-1'>
                <SearchInput />
            </div>
            <div className='flex gap-5 lg:gap-[25px] shrink-0 '>
                <div className='flex items-center lg:p-[10px] lg:bg-backgroundLight3 lg:rounded-[7px]'>
                    <Image src={'/assets/message.png'} alt={'message'} width={20} height={20} className='object-contain' />
                </div>
                <div className='flex items-center lg:p-[10px] lg:bg-backgroundLight3 lg:rounded-[7px]'>
                    <Image src={'/assets/bell.png'} alt={'bell'} width={20} height={20} className='object-contain' />
                </div>
                <div className='flex items-center gap-[14px]'>
                    <Image src={'/assets/avatar.png'} alt={'avatar'} width={36} height={36} className='object-contain' />
                    <p className='hidden lg:flex text-textLight4 font-bold'>AR. Jakir</p>
                    <Image src={'/assets/arrow-down.png'} alt={'arrow-down'} width={20} height={20} className='object-contain hidden lg:flex' />
                </div>
            </div>
        </div>
    )
}

export default Navbar