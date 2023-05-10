import Image from 'next/image'
import React from 'react'

interface SignupCardProps {
    text: string,
    icon: string
}

const SignupCard = ({ text, icon }: SignupCardProps) => {
    return (
        <div className='text-textLight1 bg-backgroundDark3 text-center py-3 rounded-lg flex items-center justify-center gap-[10px] font-semibold'>
            <Image src={icon} width={20} height={20} alt='icon' />
            Sign Up With {text}
        </div>
    )
}

export default SignupCard