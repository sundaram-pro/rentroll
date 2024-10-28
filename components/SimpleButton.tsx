import React, { FC } from "react";

type SimpleButton = {
  title: string;
  onPress?: () => void;
  color?: string;
};

const SimpleButton: FC<SimpleButton> = ({ title, onPress, color = "bg-purple-500" }) => {
  return (
    <button
      onClick={onPress}
      className={`px-4 py-2 rounded ${color} text-white mx-4`}
      aria-label="Learn more about this button"
    >
      {title} 
    </button>
  );
};

export default SimpleButton;
