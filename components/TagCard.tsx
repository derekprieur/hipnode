import Image from "next/image";
import React from "react";

type Props = {
  tag: {
    type: string;
    image: string;
    count: number;
  };
};

const TagCard = ({ tag }: Props) => {
  return (
    <div className="flex gap-[10px]">
      <Image
        src={tag.image}
        width={32}
        height={32}
        alt="tag"
        className="object-contain"
      />
      <div className="flex flex-col text-textLight2">
        <p className="font-semibold text-xs">#{tag.type}</p>
        <p className="text-[10px]">{tag.count} posted by this tag</p>
      </div>
    </div>
  );
};

export default TagCard;
