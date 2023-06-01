'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import store from '@redux/store'

const Providers = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <Provider store={store}>
            <ThemeProvider>{children}</ThemeProvider>
        </Provider>
    )
}

export default Providers