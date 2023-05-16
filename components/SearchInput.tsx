import Image from 'next/image'
import React from 'react'

type Props = {}

const SearchInput = (props: Props) => {
    return (
        <div className='justify-between bg-backgroundLight3 dark:bg-backgroundDark3 rounded-[8px] py-[10px] px-5 w-full hidden xl:flex'>
            <input type='text' placeholder='Type here to search...' className='bg-backgroundLight3 dark:bg-backgroundDark3 rounded-[8px]' />
            <Image src={'/assets/search.png'} alt={'search'} width={20} height={20} className='object-contain' />
        </div>
    )
}

export default SearchInput