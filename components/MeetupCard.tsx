import Image from 'next/image'
import React from 'react'

type Props = {
    meetup: {
        title: string
        tags: string[]
        image: string
        organizer: string
        location: string
        date: string
    }
}

const MeetupCard = ({ meetup }: Props) => {
    return (
        <div className='flex gap-[14px]'>
            <div className='border border-backgroundLight3 py-1 px-[10px] rounded-md shadow-meetup flex flex-col items-center'>
                <h3 className='text-textLight1 text-[14px] font-semibold uppercase'>{meetup.date.split(' ')[0]}</h3>
                <h3 className='text-textAlt2 font-bold text-[26px]'>{meetup.date.split(' ')[1]}</h3>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-textLight1 font-semibold text-[14px]'>{meetup.title}</h1>
                <div className='mt-[2px] flex items-center gap-[6px]'>
                    <Image src={meetup.image} alt='meetup' width={16} height={16} className='object-contain' />
                    <div className='font-semibold text-[10px] text-textLight3 flex'>
                        <p>{meetup.organizer} &nbsp; • &nbsp;</p>
                        <p>{meetup.location}</p>
                    </div>
                </div>
                <div className='flex gap-[10px] mt-[10px]'>
                    {meetup.tags.map((tag, index) => (
                        <div className='bg-backgroundLight3 py-[2px] px-2 rounded-[20px] text-textLight2 text-[9px]' key={index}>{tag}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MeetupCard