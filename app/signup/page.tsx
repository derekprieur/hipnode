"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
    FeatureCard,
    Header,
    SignupCard,
    DarkModeToggle,
    DescriptionCard,
    BusinessTypeCard,
    InputCard,
} from "../../components";
import {
    features,
    signupOptions,
    descriptions,
    businessTypes,
} from "../../constants/constants";
import Link from "next/link";

const Signup = () => {
    const { theme } = useTheme();
    const [signupStep, setSignupStep] = useState(1);
    const [logoSrc, setLogoSrc] = useState<string | null>(null);
    const [selectedDescription, setSelectedDescription] = useState<string | null>(
        null
    );
    const [selectedBusinessType, setSelectedBusinessType] = useState<string[]>([])

    const handleDescriptionSelection = (description: string) => {
        setSelectedDescription(description);
    };

    const handleBusinessTypeSelection = (businessType: string) => {
        if (selectedBusinessType.includes(businessType)) {
            setSelectedBusinessType((prev) => prev.filter((type) => type !== businessType));
        } else {
            setSelectedBusinessType((prev) => [...prev, businessType]);
        }
    }

    useEffect(() => {
        setLogoSrc(
            theme === "dark" ? "/assets/logo.png" : "/assets/logo-light.png"
        );
    }, [theme]);

    if (!logoSrc) {
        return <div></div>;
    }

    const handleClick = () => {
        if (signupStep < 5) {
            setSignupStep((prev) => prev + 1);
        }
    };

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
                        {signupStep === 1 ? (
                            <Header text="Join a thriving community of entrepreneurs and developers." />
                        ) : signupStep < 5 ? (
                            <Header text="Tell us a little about yourself!" />
                        ) : (
                            <Header text="Almost done!" />
                        )}
                        <div className="flex flex-col gap-5 mb-20 mt-10">
                            {features
                                .slice(signupStep === 1 ? 0 : signupStep < 5 ? 3 : 5, signupStep === 1 ? 3 : signupStep < 5 ? 5 : 7)
                                .map((feature, index) => (
                                    <FeatureCard
                                        key={index}
                                        icon={feature.icon}
                                        text={feature.text}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-backgroundLight1 dark:bg-backgroundDark1 lg:bg-backgroundLight2 dark:lg:bg-backgroundDark2 lg:w-1/2 px-6 lg:px-10 lg:pt-11 xl:pl-[86px] xl:pr-[126px]">
                <div
                    className={`lg:bg-backgroundLight2 lg:dark:bg-backgroundDark2 flex-1 lg:mt-[98px] md:px-16 lg:px-0 2xl:px-32 xl:pt-16 `}
                >
                    {signupStep === 1 ? (
                        <InputCard text='Choose a username' placeholder="e.g. Hipnode123" />
                    ) : signupStep === 2 ? (
                        <div className="mb-10">
                            <Header text="Which best describes the stage you're at right now?" />
                        </div>
                    ) : signupStep === 3 ? (
                        <div className="mb-10">
                            <Header text="Do you know how to code?" />
                        </div>
                    ) : signupStep === 4 ? (
                        <div className="mb-5">
                            <Header text="What types of businesses are you most interested in running?" />
                            <p className="mt-5 text-textAlt2 font-semibold">Choose as many as you like.</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-5">
                                <InputCard text="Email" placeholder="Enter email address" />
                            </div>
                            <InputCard text="Password" placeholder="Choose password" />
                        </>
                    )}
                    {(signupStep === 2 || signupStep === 3) &&
                        descriptions.slice(signupStep === 2 ? 0 : 5, signupStep === 2 ? 5 : 10).map((description, index) => (
                            <DescriptionCard
                                key={index}
                                text={description}
                                onClick={handleDescriptionSelection}
                                isSelected={selectedDescription === description}
                            />
                        ))}
                    {signupStep === 4 && (
                        <div className="flex flex-row flex-wrap gap-5">
                            {businessTypes.map((businessType, index) => (
                                <BusinessTypeCard key={index} text={businessType} onClick={handleBusinessTypeSelection}
                                    isSelected={selectedBusinessType.includes(businessType)}
                                />
                            ))}
                        </div>
                    )}
                    <button
                        onClick={handleClick}
                        className="bg-backgroundAlt1 text-textDark1 py-[10px] px-10 rounded-lg mt-5 text-lg font-semibold"
                    >
                        Next
                    </button>
                    <p className="text-textLight1 dark:text-textDark1 mt-5 text-sm mb-[30px]">
                        Already have an account?{" "}
                        <Link href='/signin'>
                            <span className="text-textAlt1 font-semibold">Sign in.</span>
                        </Link>
                    </p>
                    {(signupStep === 1 || signupStep === 5) && (
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signup;
