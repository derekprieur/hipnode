import Image from 'next/image';
import React from 'react'

type Props = {
    group: {
        type: string;
        image: string;
        count: number;
        group?: string;
    }
}

const GroupCard = ({ group }: Props) => {
    console.log(group)
    return (
        <div className="flex gap-[10px]">
            {group.group &&
                <Image
                    src={group.group}
                    width={32}
                    height={32}
                    alt="tag"
                    className="object-contain"
                />
            }
            <div className="flex flex-col text-textLight2">
                <p className="font-semibold text-xs dark:text-textDark1">#{group.type}</p>
                <p className="text-[10px] dark:text-textLight3">{group.count} posted by this tag</p>
            </div>
        </div>
    )
}

export default GroupCard