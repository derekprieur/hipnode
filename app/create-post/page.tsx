'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import { Dropdown, MobileNav, Navbar } from '../../components'
import { textOptions } from '../../constants/createPost'

type Props = {}

const CreatePost = (props: Props) => {
    const { theme } = useTheme()
    const [groupDropdownOpen, setGroupDropdownOpen] = useState(false)
    const [createDropdownOpen, setCreateDropdownOpen] = useState(false)

    const toggleGroupDropdown = () => {
        setGroupDropdownOpen(!groupDropdownOpen)
    }

    const toggleCreateDropdown = () => {
        setCreateDropdownOpen(!createDropdownOpen)
    }

    return (
        <div className='bg-backgroundLight1 dark:bg-backgroundDark1 h-auto pb-10'>
            <Navbar />
            <div className='bg-white dark:bg-backgroundDark2 rounded-2xl m-5 lg:mt-[30px] p-5 lg:p-[30px] max-w-[900px] mx-auto'>
                <input placeholder='Title...' className='bg-backgroundLight1 dark:bg-backgroundDark3 py-[11px] px-5 rounded-lg placeholder:text-textLight3 outline-none text-lg lg:text-[26px] lg:font-bold w-full font-semibold' />
                <div className='flex mt-5 gap-[14px] lg:gap-5'>
                    <div className='flex bg-backgroundLight1 dark:bg-backgroundDark3 py-[5px] px-[10px] rounded items-center gap-[10px]'>
                        <Image src={theme === 'dark' ? '/assets/cover-dark.png' : '/assets/cover.png'} alt='cover' width={20} height={20} />
                        <p className='text-[9px] lg:text-[10px]'>Set Cover</p>
                    </div>
                    <Dropdown text='Select Group' toggleDropdown={toggleGroupDropdown} dropDownOpen={groupDropdownOpen} />
                    <Dropdown text='Create Post' toggleDropdown={toggleCreateDropdown} dropDownOpen={createDropdownOpen} />
                </div>
                <Image src='/assets/post-banner.png' alt='post-banner' width={285} height={118} className='rounded-lg mt-5 w-full max-h-[340px]' />
                <div className='flex flex-col rounded-lg mt-10'>
                    <div className='bg-backgroundLight1 dark:bg-backgroundDark3 p-4 lg:py-5 lg:px-[22px] rounded-t-lg'>
                        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='flex gap-5 lg:gap-[30px]'>
                                    <div className='flex items-center gap-[10px]'>
                                        <Image src='/assets/pencil.png' alt='write' width={20} height={20} />
                                        <h3 className='text-textAlt2 font-semibold text-sm lg:text-base'>Write</h3>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <Image src={theme === 'dark' ? '/assets/eye-dark.png' : '/assets/eye.png'} alt='preview' width={20} height={20} />
                                        <h3 className='font-semibold text-sm lg:text-base'>Preview</h3>
                                    </div>
                                </div>
                                <h4 className='mt-3 lg:mt-0 lg:ml-[30px] text-sm font-semibold lg:text-base'>Code of Conduct</h4>
                            </div>
                            <div className='flex mt-5 lg:mt-0 gap-2 flex-wrap'>
                                {textOptions.map((item, index) => {
                                    let fileName = item.slice(0, -4);
                                    let updatedFileName = theme === 'dark' ? fileName + 'Dark.png' : item;
                                    return <Image key={index} src={updatedFileName} alt='text-option' width={20} height={20} className='cursor-pointer' />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='border border-backgroundLight1 dark:border-backgroundDark3 rounded-b-lg'>
                        <textarea placeholder='Tell your story...' className='w-full outline-none p-4 placeholder:text-xs placeholder:lg:text-sm text-sm text-textLight3 min-h-[222px] lg:min-h-[316px] resize-none dark:bg-backgroundDark2' />
                    </div>
                    <p className='font-semibold text-xs lg:text-sm mt-5'>Add or change tags (up to 5) so readers know what your story is about</p>
                    <input placeholder='Add a tag...' className='border border-backgroundLight1 dark:border-backgroundDark3 dark:bg-backgroundDark2 rounded-lg p-4 text-xs lg:text-sm mt-4' />
                    <div className='flex gap-5 mt-5'>
                        <button className='bg-backgroundAlt5 text-backgroundAlt4 py-[10px] px-10 rounded-lg font-semibold text-sm lg:text-base'>Publish</button>
                        <button className='text-textLight3 text-sm lg:text-base'>Cancel</button>
                    </div>
                </div>
            </div>
            <MobileNav />
        </div>
    )
}

export default CreatePost