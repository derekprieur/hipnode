import Image from 'next/image'
import React from 'react'

type Props = {}

const GroupAdminCard = (props: Props) => {
    return (
        <div className='bg-white dark:bg-backgroundDark2 w-full p-[10px] lg:p-5 rounded-2xl lg:max-w-[214px] flex flex-col lg:gap-5 gap-[14px]'>
            <h3 className='font-semibold'>Admins</h3>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <Image src='/assets/user1.png' alt='user' width={30} height={30} />
                        <h4 className='font-semibold text-sm'>Uiajmad</h4>
                    </div>
                    <Image src='/assets/add-user.png' alt='add user' width={30} height={30} />
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <Image src='/assets/user1.png' alt='user' width={30} height={30} />
                        <h4 className='font-semibold text-sm'>Uiajmad</h4>
                    </div>
                    <Image src='/assets/add-user.png' alt='add user' width={30} height={30} />
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <Image src='/assets/user1.png' alt='user' width={30} height={30} />
                        <h4 className='font-semibold text-sm'>Uiajmad</h4>
                    </div>
                    <Image src='/assets/add-user.png' alt='add user' width={30} height={30} />
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <Image src='/assets/user1.png' alt='user' width={30} height={30} />
                        <h4 className='font-semibold text-sm'>Uiajmad</h4>
                    </div>
                    <Image src='/assets/add-user.png' alt='add user' width={30} height={30} />
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <Image src='/assets/user1.png' alt='user' width={30} height={30} />
                        <h4 className='font-semibold text-sm'>Uiajmad</h4>
                    </div>
                    <Image src='/assets/add-user.png' alt='add user' width={30} height={30} />
                </div>
            </div>
        </div>
    )
}

export default GroupAdminCard