import Image from "next/image";
import React from "react";

import { FeatureCard, Header, SignupCard } from "../../components";

const features = [
  {
    icon: "/assets/feature1.png",
    text: "Connect with other indie hackers running online businesses.",
  },
  {
    icon: "/assets/feature2.png",
    text: "Get feedback on your business ideas, landing pages, and more.",
  },
  {
    icon: "/assets/feature3.png",
    text: "Get the best new stories from founders in your inbox.",
  },
];

const signupOptions = [
  {
    text: "Google",
    icon: "/assets/google.png",
  },
  {
    text: "Facebook",
    icon: "/assets/facebook.png",
  },
  {
    text: "Twitter",
    icon: "/assets/twitter.png",
  },
];

const Signup = () => {
  return (
    <div className="bg-backgroundDark1 h-auto lg:h-screen pt-8 px-6 lg:pt-11 lg:px-10 flex flex-col lg:flex-row">
      <div className="flex-1">
        <Image
          src={"/assets/logo.png"}
          width={146}
          height={38}
          alt="logo"
          className="mb-[60px]"
        />
        <div className="flex flex-col">
          <Header text="Join a thriving community of entrepreneurs and developers." />
          <div className="flex flex-col gap-5 mb-20 mt-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 lg:mt-[98px]">
        <Header text="Choose a username" />
        <input
          type="text"
          placeholder="e.g. Hipnode123"
          className="bg-backgroundDark2 py-3 px-5 rounded-lg w-full text-sm mt-[10px]"
        />
        <button className="bg-backgroundAlt1 text-textLight1 py-[10px] px-10 rounded-lg mt-5 text-lg font-semibold">
          Next
        </button>
        <p className="text-textLight1 mt-5 text-sm mb-[30px]">
          Already have an account?{" "}
          <span className="text-textAlt1 font-semibold">Sign in.</span>
        </p>
        <div className="flex items-center gap-5 mb-[30px]">
          <div className="bg-backgroundDark4 w-full h-[1px]" />
          <p className="text-textLight1 text-lg font-semibold">or</p>
          <div className="bg-backgroundDark4 w-full h-[1px]" />
        </div>
        <div className="flex flex-col gap-5 pb-[30px]">
          {signupOptions.map((option, index) => (
            <SignupCard key={index} text={option.text} icon={option.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Signup;
