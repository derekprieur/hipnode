'use client'

import React from 'react'

interface HeaderProps {
    text: string
}

const Header = ({ text }: HeaderProps) => {
    return (
        <h3 className='text-textLight1 dark:text-textDark1 font-semibold text-lg lg:text-3xl max-w-sm'>{text}</h3>
    )
}

export default Header