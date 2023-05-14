"use client";

import React from "react";
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
} from "../../components";
import {
  meetups,
  podcasts,
  popularTags,
  posts,
  sortTypes,
} from "../../constants/constants";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5 md:p-10 bg-backgroundLight1 dark:bg-backgroundDark1 h-max sm:h-screen flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex md:flex-col bg-white dark:bg-backgroundDark2 p-[10px] rounded-[10px] justify-between gap-[10px]">
            {sortTypes.map((sortType, index) => (
              <SortCard key={index} sortType={sortType} />
            ))}
          </div>
          <div className="hidden md:flex md:flex-col bg-white dark:bg-backgroundDark2 p-[10px] md:p-5 rounded-[10px] justify-between">
            <div className="mb-5">
              <Title title="Popular Tags" />
            </div>
            <div className="flex flex-col gap-[12px]">
              {popularTags.map((tag, index) => (
                <TagCard key={index} tag={tag} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex p-[14px] bg-white dark:bg-backgroundDark2 mt-5 rounded-[10px] gap-[10px] justify-between">
            <Image src="/assets/avatar-rounded.png" width={30} height={30} alt="avatar" className="object-contain shrink-0"
            />
            <input
              type="text"
              placeholder="Let's share what is going on..."
              className="bg-backgroundLight3 dark:bg-backgroundDark3 rounded-md py-2 px-[10px] text-xs font-normal flex-1"
            />
            <button className="bg-textAlt1 text-white rounded-md py-2 px-3 font-semibold text-xs">
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
          <div className="bg-white dark:bg-backgroundDark2 rounded-[10px] p-5 mt-[22px]">
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
      </div>
      <MobileNav />
    </div>
  );
};

export default Home;