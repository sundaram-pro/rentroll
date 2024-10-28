import React, { FC } from "react";
import { Button } from "react-native";

// Define the prop types
type AcceptButtonProps = {
  title: string;
  onPress: () => void;
};

const SimpleButton2: FC<AcceptButtonProps> = ({ title, onPress }) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default SimpleButton2;
