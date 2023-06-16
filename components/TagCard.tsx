import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";

import { setSelectedTag } from "@redux/selectedTagSlice";

type Props = {
  tag: {
    type: string;
    image: string;
    count: number;
  };
  posts: Post[];
};

const TagCard = ({ tag, posts }: Props) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const selectedTag = useSelector((state: RootState) => state.selectedTag.value);

  const iconSrc = theme === 'dark' ? tag.image.replace('.png', '-dark.png') : tag.image;

  const getTagCount = () => {
    let count = 0;
    posts.forEach((post) => {
      if (post.tags.includes(tag.type)) count++;
    });
    return count;
  }

  return (
    <div className="flex gap-[10px] cursor-pointer" onClick={() => {
      if (selectedTag === tag.type) dispatch(setSelectedTag(''))
      else dispatch(setSelectedTag(tag.type))
    }}>
      <Image
        src={iconSrc}
        width={32}
        height={32}
        alt="tag"
        className="object-contain"
      />
      <div className="flex flex-col text-textLight2">
        <p className={`font-semibold text-xs ${selectedTag === tag.type ? 'text-textAlt2' : 'dark:text-textDark1'}`}>#{tag.type}</p>
        <p className={`text-[10px] ${selectedTag === tag.type ? 'text-textAlt2' : 'dark:text-textLight3'}`}>{getTagCount()} posted by this tag</p>
      </div>
    </div>
  );
};

export default TagCard;
