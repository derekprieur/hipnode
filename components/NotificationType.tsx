import Image from 'next/image'
import React from 'react'

type Props = {
    notificationType: {
        type: string,
        image?: string,
    }
}

const NotificationType = ({ notificationType }: Props) => {
    return (
        <div className='flex items-center gap-[9px] shrink-0 text-textLight3 font-semibold text-sm'>
            {notificationType.image && <Image src={notificationType.image} alt={notificationType.type} width={20} height={20} className='object-contain' />}
            <p>{notificationType.type}</p>
        </div>
    )
}

export default NotificationType