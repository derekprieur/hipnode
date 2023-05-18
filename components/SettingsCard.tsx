import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'
import DarkModeToggle from './DarkModeToggle'

type Props = {}

const SettingsCard = (props: Props) => {
    const { theme } = useTheme();
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-[14px]'>
                <Image src={theme === 'dark' ? '/assets/profile-dark.png' : '/assets/profile.png'} alt='profile' width={20} height={20} className='object-contain' />
                <h4 className='font-semibold'>Profile</h4>
            </div>
            <div className='flex gap-[14px]'>
                <Image src={theme === 'dark' ? '/assets/settings-dark.png' : '/assets/settings.png'} alt='settings' width={20} height={20} className='object-contain' />
                <h4 className='font-semibold'>Settings</h4>
            </div>
            <div className='border border-backgroundLight1' />
            <div className='flex justify-between'>
                <h4 className='font-semibold'>Interface</h4>
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default SettingsCard