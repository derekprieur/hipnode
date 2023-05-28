'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { DarkModeToggle, FeatureCard, Header, InputCard, SignupCard } from '../../components';
import { features, signupOptions } from '../../constants/constants';
import Link from 'next/link';

const Signin = () => {
    const { theme } = useTheme();
    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    const [email, setEmail] = useState('dprieur123@gmail.com');
    const [password, setPassword] = useState('test');

    useEffect(() => {
        setLogoSrc(
            theme === "dark" ? "/assets/logo.png" : "/assets/logo-light.png"
        );
    }, [theme]);

    if (!logoSrc) {
        return <div></div>;
    }

    const handleClick = async () => {
        try {
            const response = await axios.post('/api/signin', { email, password })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-backgroundLight1 dark:bg-backgroundDark1">
            <div className="bg-backgroundLight1 dark:bg-backgroundDark1 h-auto lg:h-screen pt-8 px-6 lg:pt-11 lg:px-10 flex flex-col lg:flex-row lg:w-1/2">
                <div className="flex-1">
                    <div className="flex justify-between">
                        <Image
                            src={logoSrc}
                            width={146}
                            height={38}
                            alt="logo"
                            className="mb-[60px]"
                        />
                        <DarkModeToggle />
                    </div>
                    <div className="flex flex-col xl:pl-[104px] xl:pr-[86px] md:px-16 lg:px-0 xl:pt-16">
                        <Header text="Sign in to Hipnode." />
                        <div className="flex flex-col gap-5 mb-20 mt-10">
                            {features.slice(7, 9).map((feature, index) => (
                                <FeatureCard key={index} text={feature.text} icon={feature.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-backgroundLight1 dark:bg-backgroundDark1 lg:bg-backgroundLight2 dark:lg:bg-backgroundDark2 lg:w-1/2 px-6 lg:px-10 lg:pt-11 xl:pl-[86px] xl:pr-[126px]">
                <div
                    className={`lg:bg-backgroundLight2 lg:dark:bg-backgroundDark2 flex-1 lg:mt-[98px] md:px-16 lg:px-0 2xl:px-32 xl:pt-16 `}
                >
                    <div className="mb-5">
                        <InputCard text="Email" placeholder="Enter email address" />
                    </div>
                    <InputCard text="Password" placeholder="Choose password" />
                    <button
                        onClick={handleClick}
                        className="bg-backgroundAlt1 text-textDark1 py-[10px] px-10 rounded-lg mt-5 text-lg font-semibold"
                    >
                        Next
                    </button>
                    <p className="text-textLight1 dark:text-textDark1 mt-5 text-sm mb-[30px]">
                        Don't have an account yet?{" "}
                        <Link href='/signup'>
                            <span className="text-textAlt1 font-semibold">Join the community!</span>
                        </Link>
                    </p>
                    <div className="flex flex-col gap-5 pb-[30px]">
                        <div className="flex items-center gap-5 mb-[30px]">
                            <div className="bg-backgroundLight4 dark:bg-backgroundDark4 w-full h-[1px]" />
                            <p className="text-textLight1 dark:text-textDark1 text-lg font-semibold">
                                or
                            </p>
                            <div className="bg-backgroundLight4 dark:bg-backgroundDark4 w-full h-[1px]" />
                        </div>
                        {signupOptions.map((option, index) => (
                            <SignupCard key={index} text={option.text} icon={option.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin