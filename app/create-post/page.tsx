'use client'

import Image from 'next/image'
import { Dropdown, MobileNav, Navbar } from '../../components'

type Props = {}

const CreatePost = (props: Props) => {
    return (
        <div className='bg-backgroundLight1 dark:bg-backgroundDark1'>
            <Navbar />
            <div className='bg-white rounded-2xl m-5 p-5'>
                <input placeholder='Title...' className='bg-backgroundLight1 py-[11px] px-5 rounded-lg placeholder:text-textLight3 outline-none text-textLight3 text-lg w-full' />
                <div className='flex mt-5 gap-[14px]'>
                    <div className='flex bg-backgroundLight1 py-[5px] px-[10px] rounded items-center gap-[10px]'>
                        <Image src='/assets/cover.png' alt='cover' width={20} height={20} />
                        <p className='text-[9px]'>Set Cover</p>
                    </div>
                    <Dropdown text='Select Group' />
                    <Dropdown text='Create Post' />
                </div>
            </div>
            <MobileNav />
        </div>
    )
}

export default CreatePost