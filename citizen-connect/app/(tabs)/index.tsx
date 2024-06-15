import { useEffect, useState, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

import { Colors, Sizes } from "@/constants/Theme";
import { CATEGORIES, SERVICES } from "@/constants/Mocks";

const ShimmerPlaceholder = createShimmerPlaceholder();

const Page = () => {
  const categories = CATEGORIES;
  const services = SERVICES;
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(categories[0]);

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
          headerLeft: () => (
            <Image
              source={require("@/assets/images/app-logo.png")}
              style={styles.logo}
            />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={Colors.grey}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 8,
          paddingHorizontal: 16,
          paddingVertical: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelected(category);
            }}
          >
            <Text
              style={
                selected === category
                  ? styles.categoryBtnTextSelected
                  : styles.categoryBtnText
              }
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView>
        {categories.map((category, index) => (
          <Fragment key={index}>
            {selected === category && (
              <Animated.View
                style={styles.category}
                entering={FadeIn.duration(600).delay(400)}
                exiting={FadeOut.duration(400)}
              >
                <ShimmerPlaceholder width={160} height={20} visible={!loading}>
                  <Text style={styles.title}>{selected.name}</Text>
                </ShimmerPlaceholder>
                <ShimmerPlaceholder
                  width={280}
                  height={20}
                  visible={!loading}
                  shimmerStyle={{ marginVertical: 10 }}
                >
                  <Text style={styles.label}>{selected.description}</Text>
                </ShimmerPlaceholder>

                {services.map(
                  (
                    { name, description, category_name, duration, total_cost },
                    index
                  ) => (
                    <Link key={index} href={`/service/${index}`} asChild>
                      <TouchableOpacity activeOpacity={0.7} style={styles.card}>
                        <View style={{ flexShrink: 1, gap: 4 }}>
                          <ShimmerPlaceholder
                            width={160}
                            height={20}
                            visible={!loading}
                          >
                            <Text style={styles.cardTitle}>{name}</Text>
                          </ShimmerPlaceholder>

                          <ShimmerPlaceholder
                            width={160}
                            height={20}
                            visible={!loading}
                          >
                            <Text style={styles.cardDesc}>{description}</Text>
                          </ShimmerPlaceholder>

                          <ShimmerPlaceholder
                            width={250}
                            height={20}
                            visible={!loading}
                          >
                            <View
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                              }}
                            >
                              <Text style={styles.cardCategory}>
                                {category_name}
                              </Text>
                              {total_cost && (
                                <Text style={styles.cardCategory}>
                                  {total_cost} Ar
                                </Text>
                              )}
                              {duration && (
                                <Text style={styles.cardCategory}>
                                  {duration}
                                </Text>
                              )}
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
                    </Link>
                  )
                )}
              </Animated.View>
            )}
          </Fragment>
        ))}
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
    marginBottom: 16,
  },
  categoryBtnText: {
    color: "#000",
    fontWeight: "500",
    backgroundColor: Colors.card,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  categoryBtnTextSelected: {
    backgroundColor: Colors.grey,
    color: "#fff",
    fontWeight: "500",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
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
