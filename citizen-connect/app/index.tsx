import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import * as LocalAuthentication from "expo-local-authentication";
import * as Haptics from "expo-haptics";

import { Colors } from "@/constants/Theme";

const Page = () => {
  const [firstName, setFirstName] = useState("John");
  const [code, setCode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);
  const router = useRouter();

  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const OFFSET = 20;
  const TIME = 80;

  useEffect(() => {
    if (code.length === 6) {
      if (code.join("") === "111111") {
        router.canGoBack() ? router.back() : router.replace("(tabs)");
        setCode([]);
      } else {
        offset.value = withSequence(
          withTiming(-OFFSET, { duration: TIME / 2 }),
          withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
          withTiming(0, { duration: TIME / 2 })
        );
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        setCode([]);
      }
    }
  }, [code]);

  const onNumberPress = (number: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode([...code, number]);
  };

  const numberBackspace = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode(code.slice(0, -1));
  };

  const onBiometricAuthPress = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    if (success) {
      router.canGoBack() ? router.back() : router.replace("(tabs)");
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.greeting}>Welcome back, {firstName}</Text>

      <Animated.View style={[styles.codeView, style]}>
        {codeLength.map((_, index) => (
          <View
            key={index}
            style={[
              styles.codeEmpty,
              {
                backgroundColor: code[index]
                  ? Colors.primary
                  : Colors.lightGray,
              },
            ]}
          />
        ))}
      </Animated.View>

      <View style={styles.numbersView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
              style={styles.touchNumber}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
              style={styles.touchNumber}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
              style={styles.touchNumber}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.touchNumber}
            onPress={onBiometricAuthPress}
          >
            <MaterialCommunityIcons
              name="face-recognition"
              size={26}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onNumberPress(0)}
            style={styles.touchNumber}
          >
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>

          <View style={{ minWidth: 30 }}>
            <TouchableOpacity
              onPress={numberBackspace}
              style={{
                opacity: code.length > 0 ? 1 : 0,
                ...styles.touchNumber,
              }}
            >
              <Text style={styles.number}>
                <MaterialCommunityIcons
                  name="backspace-outline"
                  size={26}
                  color="black"
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: Colors.primary,
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Forgot your passcode?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 70,
    alignSelf: "center",
  },
  codeView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 80,
  },
  codeEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  numbersView: {
    marginHorizontal: 50,
    gap: 40,
  },
  touchNumber: {
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 999,
  },
  number: {
    fontSize: 32,
  },
});
