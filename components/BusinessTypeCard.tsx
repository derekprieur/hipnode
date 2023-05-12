import React from 'react'

interface BusinessTypeCardProps {
    text: string,
    onClick: (text: string) => void,
    isSelected: boolean
}

const BusinessTypeCard = ({ text, onClick, isSelected }: BusinessTypeCardProps) => {
    const handleClick = () => {
        onClick(text);
    };

    return (
        <div
            onClick={handleClick}
            className={`${isSelected
                ? "bg-backgroundAlt2 text-textDark1"
                : "bg-backgroundLight2 dark:bg-backgroundDark2 lg:bg-backgroundLight3 lg:dark:bg-backgroundDark3 text-textLight1 dark:text-textDark2"
                } p-4 flex rounded-lg gap-5 items-center cursor-pointer`}
        >
            <p className="font-semibold text-lg">{text}</p>
        </div>
    )
}

export default BusinessTypeCard