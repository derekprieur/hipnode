import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

type Props = {
  tag: {
    type: string;
    image: string;
    count: number;
  };
};

const TagCard = ({ tag }: Props) => {
  const { theme } = useTheme();

  const iconSrc = theme === 'dark' ? tag.image.replace('.png', '-dark.png') : tag.image;

  return (
    <div className="flex gap-[10px]">
      <Image
        src={iconSrc}
        width={32}
        height={32}
        alt="tag"
        className="object-contain"
      />
      <div className="flex flex-col text-textLight2">
        <p className="font-semibold text-xs dark:text-textDark1">#{tag.type}</p>
        <p className="text-[10px] dark:text-textLight3">{tag.count} posted by this tag</p>
      </div>
    </div>
  );
};

export default TagCard;
