import React from 'react'

type Props = {}

const GroupAboutCard = (props: Props) => {
    return (
        <div className='bg-white dark:bg-backgroundDark2 w-full p-[10px] lg:p-5 rounded-2xl lg:max-w-[214px] flex flex-col lg:gap-5 gap-[14px]'>
            <h3 className='font-semibold'>About</h3>
            <p className='text-xs dark:text-textDark1'>Download thousands of free & premium web design, illustration, bootstrap template, flutter app, icon, 3d illustration, and graphic assets for your UI, UX design project</p>
        </div>
    )
}

export default GroupAboutCard