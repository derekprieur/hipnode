import Image from 'next/image'
import React from 'react'

type Props = {}

const ChatBox = (props: Props) => {
    return (
        <div className='w-full max-w-[450px] h-[402px] lg:w-[450px] lg:h-[450px] bg-white rounded-2xl py-[23px] px-5 lg:py-5 lg:px-[60px] flex flex-col fixed bottom-[24px] right-5 z-10'>
            <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                    <Image src='/assets/user3.png' alt='user' width={30} height={30} className='object-contain' />
                    <div className='flex flex-col'>
                        <h2 className='text-textLight1 font-semibold text-sm'>Jonathon Swift</h2>
                        <p className='text-textAlt4 text-[9px] font-semibold'>Online</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <Image src='/assets/expand.png' alt='expand' width={20} height={20} className='object-contain' />
                    <Image src='/assets/minimize.png' alt='minimize' width={20} height={20} className='object-contain' />
                </div>
            </div>
            <div className='bg-backgroundLight3 h-[1px] mt-[15px] mb-5' />
        </div>
    )
}

export default ChatBox