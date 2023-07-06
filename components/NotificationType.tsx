import Image from 'next/image'
import React from 'react'

type Props = {
    notificationType: {
        type: string,
        image?: React.FC<{ fill?: string }>
    },
    selectedNotificationType: string,
    setSelectedNotificationType: React.Dispatch<React.SetStateAction<string>>
}

const NotificationType = ({ notificationType, selectedNotificationType, setSelectedNotificationType }: Props) => {
    const IconComponent = notificationType.image
    const currentColor = selectedNotificationType === notificationType.type ? '#347AE2' : '#97989D'

    return (
        <div className={`flex cursor-pointer items-center gap-[9px] shrink-0 font-semibold text-sm lg:text-base ${selectedNotificationType === notificationType.type ? 'text-textAlt2' : 'text-textLight3'}`} onClick={() => { setSelectedNotificationType(notificationType.type) }}>
            {IconComponent && <IconComponent fill={currentColor} />}
            <p>{notificationType.type}</p>
        </div>
    )
}

export default NotificationType