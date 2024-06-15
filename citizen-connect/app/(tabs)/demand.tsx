import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";

import { Colors, Sizes } from "@/constants/Theme";
import { DEMANDS } from "@/constants/Mocks";

const ShimmerPlaceholder = createShimmerPlaceholder();

const Page = () => {
  const demands = DEMANDS;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Ionicons name="search" size={24} color={Colors.grey} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView>
        <Animated.View
          style={styles.category}
          entering={FadeIn.duration(600).delay(400)}
          exiting={FadeOut.duration(400)}
        >
          <ShimmerPlaceholder width={160} height={20} visible={!loading}>
            <Text style={styles.title}>Listes des demandes</Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            width={280}
            height={20}
            visible={!loading}
            shimmerStyle={{ marginVertical: 10 }}
          >
            <Text style={styles.label}>
              Vous pouvez consulter ici tout les demandes que vous avez déjà
              initier.
            </Text>
          </ShimmerPlaceholder>

          {demands.map(({ nom_service, status, time_elapsed }, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={styles.card}
            >
              <View style={{ flexShrink: 1, gap: 4 }}>
                <ShimmerPlaceholder width={160} height={20} visible={!loading}>
                  <Text style={styles.cardTitle}>{nom_service}</Text>
                </ShimmerPlaceholder>

                <ShimmerPlaceholder width={250} height={20} visible={!loading}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                    }}
                  >
                    <Text
                      style={{
                        ...styles.cardCategory,
                        backgroundColor:
                          status === "refusée" ? Colors.red : Colors.primary,
                      }}
                    >
                      {status}
                    </Text>
                    <Text style={styles.cardCategory}>{time_elapsed}</Text>
                  </View>
                </ShimmerPlaceholder>
              </View>
              <ShimmerPlaceholder
                width={20}
                height={20}
                shimmerStyle={{ borderRadius: 30 }}
                visible={!loading}
              >
                <Ionicons
                  name={"chevron-forward"}
                  size={18}
                  color={Colors.icon}
                />
              </ShimmerPlaceholder>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  category: {
    padding: 16,
  },
  logo: {
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    paddingHorizontal: Sizes.sm,
    paddingVertical: Sizes.padding,
    backgroundColor: Colors.card,
    borderRadius: Sizes.cardRadius,
    padding: Sizes.cardPadding,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: Sizes.shadowOffsetWidth,
      height: Sizes.shadowOffsetHeight,
    },
    shadowOpacity: Sizes.shadowOpacity,
    shadowRadius: Sizes.shadowRadius,
    elevation: Sizes.elevation,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  cardDesc: {
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
  cardCategory: {
    fontSize: 14,
    backgroundColor: Colors.primary,
    color: "#fff",
    fontWeight: "500",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  cardCost: {
    fontSize: 14,
  },
});
