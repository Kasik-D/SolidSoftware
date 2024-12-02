import { useRef, useState } from "react";
import { Animated, Easing } from "react-native";

const getRandomColor = () =>
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

export const useAnimateBackgroundColor = () => {
  const backgroundColor = useRef(new Animated.Value(0)).current;
  const [previousColor, setPreviousColor] = useState(getRandomColor());
  const [currentColor, setCurrentColor] = useState(getRandomColor());

  const handlePress = () => {
    backgroundColor.stopAnimation();
    backgroundColor.setValue(0);
    setPreviousColor(currentColor);
    setCurrentColor(getRandomColor());
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    easing: Easing.exp,
    outputRange: [previousColor, currentColor],
  });

  return {
    interpolatedColor,
    handlePress,
  };
};
