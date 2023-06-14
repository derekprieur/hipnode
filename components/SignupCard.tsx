import Image from 'next/image'
import React, { FC, ReactElement, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { BsGoogle, BsDiscord, BsGithub } from 'react-icons/bs'

interface SignupCardProps {
    text: string,
    type: string
}

const SignupCard = ({ text, type }: SignupCardProps) => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) router.push('/')
    }, [session])

    const handleSignIn = () => {
        signIn(`${text.toLowerCase()}`)
        router.push('/')
    }

    return (
        <div className='text-textLight1 dark:text-textDark1 bg-backgroundLight2 lg:bg-backgroundLight3 dark:bg-backgroundDark3 text-center py-3 rounded-lg flex items-center justify-center gap-[10px] font-semibold w-full mx-auto cursor-pointer' onClick={handleSignIn} >
            {text === 'Google' ? <BsGoogle /> : text === 'Discord' ? <BsDiscord /> : <BsGithub />}
            {type} With {text}
        </div>
    )
}

export default SignupCard