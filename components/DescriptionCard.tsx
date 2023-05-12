import React from "react";

interface DescriptionCardProps {
  text: string;
  onClick: (text: string) => void;
  isSelected: boolean;
}

const DescriptionCard = ({
  text,
  onClick,
  isSelected,
}: DescriptionCardProps) => {
  const handleClick = () => {
    onClick(text);
  };

  return (
    <div
      onClick={handleClick}
      className={`${isSelected
        ? "bg-backgroundAlt2 text-textDark1"
        : "bg-backgroundLight2 dark:bg-backgroundDark2 lg:bg-backgroundLight3 lg:dark:bg-backgroundDark3 text-textLight1 dark:text-textDark2"
        } p-5 flex rounded-lg gap-5 items-center mb-5 cursor-pointer`}
    >
      <p className="font-semibold text-sm lg:text-lg">{text}</p>
    </div>
  );
};

export default DescriptionCard;
