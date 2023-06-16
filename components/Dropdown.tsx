'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { groups } from '../constants/createPost'
import { groupTypes } from '@constants/groups'
import GroupTypeCard from './GroupTypeCard'

type Props = {
    text: string
    toggleDropdown: () => void
    dropDownOpen: boolean
    selectedType?: string
    setSelectedType: (value: string) => void
}

const Dropdown = ({ text, toggleDropdown, dropDownOpen, selectedType, setSelectedType }: Props) => {
    const { theme } = useTheme()

    return (
        <div className='flex bg-backgroundLight1 dark:bg-backgroundDark3 py-[5px] px-[10px] rounded items-center gap-[10px] cursor-pointer relative' onClick={toggleDropdown}>
            <p className='text-[9px] lg:text-[10px] capitalize'>{text}</p>
            <Image src={theme === 'dark' ? '/assets/dropdown-dark.png' : '/assets/dropdown.png'} alt='dropdown' width={12} height={12} />
            {(dropDownOpen && text === 'Create post') && (
                <div className='absolute w-[213px] h-[264px] bg-white dark:bg-backgroundDark3 top-12 left-0 z-40 rounded-2xl p-5 drop-shadow-lg'>
                    <div className='flex flex-col gap-[10px]'>
                        {groups.map((item, index) => {
                            let fileName = item.image.slice(0, -4);
                            let updatedImage = theme === 'dark' ? fileName + '-dark.png' : item.image;
                            return <div key={item.name + index} className='flex gap-4 p-[10px] items-center shadow-groupSelect rounded-lg' onClick={() => setSelectedType(item.name)}>
                                <Image src={updatedImage} alt={item.name} width={20} height={20} />
                                <h3 className='text-lg font-semibold'>{item.name}</h3>
                            </div>
                        })}
                    </div>
                </div>
            )}
            {(dropDownOpen && text === 'Select Group') && (
                <div className='absolute h-[264px] dark:bg-backgroundDark3 top-8 left-[-120px] z-40 rounded-2xl p-5 drop-shadow-lg'>
                    <div className="bg-white dark:bg-backgroundDark2 min-w-[640px] p-[10px] rounded-2xl flex lg:gap-5">
                        {groupTypes.map((groupType, index) => (
                            <GroupTypeCard key={groupType.type + index} groupType={groupType} index={index} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown