import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'

import { setSelectedTag } from '@redux/selectedTagSlice'

type Props = {
    tag: string
}

const TagBubble = ({ tag }: Props) => {
    const dispatch = useDispatch()
    const selectedTag = useSelector((state: RootState) => state.selectedTag.value)

    const toggleTag = () => {
        if (selectedTag === tag) dispatch(setSelectedTag(''))
        else dispatch(setSelectedTag(tag))
    }

    return (
        <div className={`cursor-pointer capitalize py-1 px-[10px] rounded-[20px] text-[9px] lg:text-[10px] ${selectedTag === tag ? 'text-textAlt2 bg-backgroundAlt4' : 'text-textLight2 dark:text-textDark3 bg-backgroundLight3 dark:bg-backgroundDark3'}`} onClick={toggleTag}>{tag}</div>
    )
}

export default TagBubble