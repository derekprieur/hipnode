'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { FeatureCard, Header, SignupCard, DarkModeToggle } from "../../components";
import { features, signupOptions } from "../../constants/constants";

const Signup = () => {
    const { theme } = useTheme();
    const [signupStep, setSignupStep] = useState(1)
    const [logoSrc, setLogoSrc] = useState<string | null>(null);

    useEffect(() => {
        setLogoSrc(theme === 'dark' ? '/assets/logo.png' : '/assets/logo-light.png');
    }, [theme]);

    if (!logoSrc) {
        return <div></div>;
    }

    const handleClick = () => {
        setSignupStep(prev => prev + 1)
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen bg-backgroundLight1 dark:bg-backgroundDark1">
            <div className="bg-backgroundLight1 dark:bg-backgroundDark1 h-auto lg:h-screen pt-8 px-6 lg:pt-11 lg:px-10 flex flex-col lg:flex-row lg:w-1/2">
                <div className="flex-1">
                    <div className="flex justify-between">
                        <Image src={logoSrc} width={146} height={38} alt="logo" className="mb-[60px]"
                        />
                        <DarkModeToggle />
                    </div>
                    <div className="flex flex-col xl:pl-[104px] xl:pr-[86px] md:px-16 lg:px-0 xl:pt-16">
                        {signupStep === 1 ? (
                            <Header text="Join a thriving community of entrepreneurs and developers." />
                        ) : (
                            <Header text="Tell us a little about yourself!" />
                        )}
                        <div className="flex flex-col gap-5 mb-20 mt-10">
                            {features
                                .slice(signupStep === 1 ? 0 : 3, signupStep === 1 ? 3 : 5)
                                .map((feature, index) => (
                                    <FeatureCard key={index} icon={feature.icon} text={feature.text} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-backgroundLight1 dark:bg-backgroundDark1 lg:bg-backgroundLight2 dark:lg:bg-backgroundDark2 lg:w-1/2 px-6 lg:px-10 lg:pt-11 lg:pl-[86px] lg:pr-[126px]">
                <div className={`lg:bg-backgroundLight2 lg:dark:bg-backgroundDark2 flex-1 lg:mt-[98px] md:px-16 lg:px-0 2xl:px-32 xl:pt-16 `}>
                    {signupStep === 1 ?
                        <h3 className='text-textLight1 dark:text-textDark1 font-semibold text-lg max-w-sm'>Choose a username</h3> :
                        <Header text="Which best describes the stage you're at right now?" />}
                    < input type="text" placeholder="e.g. Hipnode123" className="bg-backgroundLight2 dark:bg-backgroundDark2 py-3 px-5 rounded-lg w-full text-sm mt-[10px] lg:bg-backgroundLight3 dark:lg:bg-backgroundDark1 text-textLight1 dark:text-textDark1 outline-none"
                    />
                    <button onClick={handleClick} className="bg-backgroundAlt1 text-textDark1 py-[10px] px-10 rounded-lg mt-5 text-lg font-semibold">
                        Next
                    </button>
                    <p className="text-textLight1 dark:text-textDark1 mt-5 text-sm mb-[30px]">
                        Already have an account?{" "}
                        <span className="text-textAlt1 font-semibold">Sign in.</span>
                    </p>
                    {signupStep === 1 && <div className="flex flex-col gap-5 pb-[30px]">
                        <div className="flex items-center gap-5 mb-[30px]">
                            <div className="bg-backgroundLight4 dark:bg-backgroundDark4 w-full h-[1px]" />
                            <p className="text-textLight1 dark:text-textDark1 text-lg font-semibold">or</p>
                            <div className="bg-backgroundLight4 dark:bg-backgroundDark4 w-full h-[1px]" />
                        </div>
                        {signupOptions.map((option, index) => (
                            <SignupCard key={index} text={option.text} icon={option.icon} />
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Signup;
