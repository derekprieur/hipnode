import React from 'react'

type Props = {
    tag: string
}

const TagBubble = ({ tag }: Props) => {
    return (
        <div className='capitalize bg-backgroundLight3 dark:bg-backgroundDark3 py-1 px-[10px] rounded-[20px] text-[9px] lg:text-[10px] text-textLight2 dark:text-textDark3'>{tag}</div>
    )
}

export default TagBubble