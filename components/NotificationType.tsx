import Image from 'next/image'
import React from 'react'

type Props = {
    notificationType: {
        type: string,
        image?: string,
    },
    selectedNotificationType: string,
    setSelectedNotificationType: React.Dispatch<React.SetStateAction<string>>
}

const NotificationType = ({ notificationType, selectedNotificationType, setSelectedNotificationType }: Props) => {
    const currentColor = 'text-alt5'
    console.log(notificationType, 'notificationType')
    console.log(selectedNotificationType, 'selectedNotificationType')
    return (
        <div className={`flex cursor-pointer items-center gap-[9px] shrink-0 font-semibold text-sm lg:text-base ${selectedNotificationType === notificationType.type ? 'text-textAlt2' : 'text-textLight3'}`} onClick={() => { setSelectedNotificationType(notificationType.type) }}>
            {notificationType.image && <Image src={notificationType.image} alt={notificationType.type} width={20} height={20} className='object-contain' />}
            <p>{notificationType.type}</p>
        </div>
    )
}

export default NotificationType