import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@redux/store'
import { setSearchValue } from '@redux/searchValueSlice'

const SearchInput = () => {
    const searchValue = useSelector((state: RootState) => state.searchValue.value);
    const dispatch = useDispatch();
    console.log(searchValue, 'searchValue');
    return (
        <div className='justify-between bg-backgroundLight3 dark:bg-backgroundDark3 rounded-[8px] py-[10px] px-5 w-full hidden xl:flex'>
            <input type='text' placeholder='Type here to search...' className='bg-backgroundLight3 dark:bg-backgroundDark3 rounded-[8px] outline-none' value={searchValue} onChange={e => dispatch(setSearchValue(e.target.value))} />
            <Image src={'/assets/search.png'} alt={'search'} width={20} height={20} className='object-contain' />
        </div>
    )
}

export default SearchInput