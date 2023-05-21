import Image from 'next/image'
import React from 'react'

type Props = {
    text: string
}

const Dropdown = ({ text }: Props) => {
    return (
        <div className='flex bg-backgroundLight1 py-[5px] px-[10px] rounded items-center gap-[10px]'>
            <p className='text-[9px]'>{text}</p>
            <Image src='/assets/dropdown.png' alt='dropdown' width={12} height={12} />
        </div>
    )
}

export default Dropdown