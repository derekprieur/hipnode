import React from 'react'

interface InputCardProps {
    text: string,
    placeholder: string
}

const InputCard = ({ text, placeholder }: InputCardProps) => {
    return (
        <>
            <h3 className="text-textLight1 dark:text-textDark1 font-semibold text-lg max-w-sm">
                {text}
            </h3>
            <input
                type="text"
                placeholder={placeholder}
                className="bg-backgroundLight2 dark:bg-backgroundDark2 py-3 px-5 rounded-lg w-full text-sm mt-[10px] lg:bg-backgroundLight3 dark:lg:bg-backgroundDark1 text-textLight1 dark:text-textDark1 outline-none"
            />
        </>
    )
}

export default InputCard