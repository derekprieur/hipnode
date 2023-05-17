"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  MeetupCard,
  MobileNav,
  Navbar,
  PostCard,
  SortCard,
  Title,
  PodcastCard,
  TagCard,
  GroupCard,
  ChatBox,
} from "../../components";
import {
  meetups,
  podcasts,
  popularTags,
  posts,
  sortTypes,
} from "../../constants/constants";

const Home = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="p-5 md:p-10 bg-backgroundLight1 dark:bg-backgroundDark1 h-max sm:h-screen md:h-max flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex flex-col gap-5 shrink-0">
          <div className="flex lg:flex-col bg-white dark:bg-backgroundDark2 p-[10px] rounded-[10px] justify-between gap-[10px] ">
            {sortTypes.map((sortType, index) => (
              <SortCard key={index} sortType={sortType} />
            ))}
          </div>
          <div className="hidden lg:flex md:flex-col bg-white dark:bg-backgroundDark2 p-[10px] md:p-5 rounded-[10px] justify-between">
            <div className="mb-5">
              <Title title="Popular Tags" />
            </div>
            <div className="flex flex-col gap-[12px]">
              {popularTags.map((tag, index) => (
                <TagCard key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className="hidden lg:flex md:flex-col bg-white dark:bg-backgroundDark2 p-[10px] md:p-5 rounded-[10px] justify-between">
            <div className="mb-5">
              <Title title="Popular Groups" />
            </div>
            <div className="flex flex-col gap-[12px]">
              {popularTags.slice(0, 4).map((tag, index) => (
                <GroupCard key={index} group={tag} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex p-[14px] lg:p-5 bg-white dark:bg-backgroundDark2 mt-5 lg:mt-0 rounded-[10px] gap-[10px] justify-between">
            <Image src="/assets/avatar-rounded.png" width={30} height={30} alt="avatar" className="flex lg:hidden object-contain shrink-0"
            />
            <Image src="/assets/avatar-rounded.png" width={40} height={40} alt="avatar" className="hidden lg:flex object-contain shrink-0"
            />
            <input
              type="text"
              placeholder="Let's share what is going on..."
              className="bg-backgroundLight3 dark:bg-backgroundDark3 rounded-md py-2 px-[10px] lg:p-3 text-xs
              lg:text-sm font-normal flex-1"
            />
            <button className="bg-textAlt1 text-white rounded-md py-2 px-3 lg:py-3 lg:px-4 font-semibold text-xs lg:text-sm">
              Create Post
            </button>
          </div>
          <div className="flex flex-col mt-5 gap-5">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
          <div className="flex mt-3 gap-[14px] items-center">
            <p className="text-[10px] text-textLight3">See more</p>
            <Image
              src="/assets/arrow.png"
              alt="arrow"
              width={12}
              height={10}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 mt-[22px] lg:mt-0">
            <Title title="Meetups" />
            <div className="flex flex-col gap-5 mt-5">
              {meetups.map((meetup, index) => (
                <MeetupCard key={index} meetup={meetup} />
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 mt-5 mb-24">
            <Title title="Podcasts" />
            <div className="flex flex-col gap-5 mt-5">
              {podcasts.map((podcast, index) => (
                <PodcastCard key={index} podcast={podcast} />
              ))}
            </div>
          </div>
        </div>
        {showChatBox && <ChatBox />}
      </div>
      <MobileNav />
    </div>
  );
};

export default Home;
