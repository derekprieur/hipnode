import Image from 'next/image'
import React from 'react'

type Props = {
    groupType: {
        type: string
        groups: {
            type: string
            title: string
            image: string
        }[]
    }
    index: number
}

const GroupTypeCard = ({ groupType, index }: Props) => {
    return (
        <div className={`${index > 0 && 'hidden lg:flex lg:flex-col lg:items-start'}`}>
            <div className={`bg-backgroundAlt7 flex p-[10px] rounded-[10px] items-center justify-between ${index > 0 && 'hidden lg:flex'}`}>
                <div className="flex flex-col">
                    <div className="flex gap-[6px] items-center">
                        <Image src='/assets/grow.png' alt="grow" width={20} height={20} />
                        <h3 className="font-semibold dark:text-black lg:text-lg">{groupType.type}</h3>
                    </div>
                    <p className="text-[10px] lg:text-xs text-textLight3">List updated daily at midnight PST.</p>
                </div>
                <Image src='/assets/minimize.png' alt="minimize" width={20} height={20} className="flex lg:hidden" />
            </div>
            <div className='mt-[10px] hidden lg:flex lg:flex-col gap-[10px]'>
                {groupType.groups.map((group, index) => (
                    <div className='flex items-start gap-2'>
                        <Image src={group.image} alt={group.title} width={34} height={34} className="rounded-full" />
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-xs'>{group.type}</h3>
                            <p className='text-[10px] text-textLight3'>{group.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='hidden lg:flex bg-backgroundAlt8 rounded-[10px] px-1 text-textAlt6 font-semibold text-[9px] mt-[10px]'>see all</button>
        </div>
    )
}

export default GroupTypeCard