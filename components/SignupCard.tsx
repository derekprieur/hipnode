import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'

interface SignupCardProps {
    text: string,
    icon: string,
}

const SignupCard = ({ text, icon }: SignupCardProps) => {
    const { theme } = useTheme()
    const iconSrc = theme === "dark" ? icon : icon.replace(".png", "-light.png");
    return (
        <div className='text-textLight1 dark:text-textDark1 bg-backgroundLight2 lg:bg-backgroundLight3 dark:bg-backgroundDark3 text-center py-3 rounded-lg flex items-center justify-center gap-[10px] font-semibold w-full mx-auto'>
            <Image src={iconSrc} width={20} height={20} alt='icon' />
            Sign Up With {text}
        </div>
    )
}

export default SignupCard