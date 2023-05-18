'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const handleChange = () => {
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            setTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        }
    };

    return (
        <div className='w-[60px] h-[30px] bg-backgroundLight1 dark:bg-backgroundDark2 rounded-[15px] items-center justify-between flex p-1 cursor-pointer' onClick={handleChange}>
            <div className='bg-white dark:bg-backgroundDark1 rounded-full p-1'>
                <Image src={theme === 'dark' ? '/assets/sun-dark.png' : '/assets/sun.png'} alt='sun' width={16} height={16} className='object-contain' />
            </div>
            <div className='dark:bg-backgroundDark3 rounded-full p-1'>
                <Image src='/assets/moon.png' alt='moon' width={16} height={16} className='object-contain' />
            </div>
        </div>
    )
}

export default DarkModeToggle