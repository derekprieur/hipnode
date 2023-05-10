'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const handleChange = (e: any) => {
        const selectedTheme = e.target.value;

        if (selectedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        setTheme(selectedTheme);
    };

    return (
        <select value={theme} onChange={handleChange} className='max-h-8'>
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    )
}

export default DarkModeToggle