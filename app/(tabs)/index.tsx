import { useAnimateBackgroundColor } from "@/hooks/useAnimateBackgroundColor";
import React from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

export default function HomeScreen() {
  const { handlePress, interpolatedColor } = useAnimateBackgroundColor();

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[styles.container, { backgroundColor: interpolatedColor }]}
      >
        <Text style={styles.text}>Click Me</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
