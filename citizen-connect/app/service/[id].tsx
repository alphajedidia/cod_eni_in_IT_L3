import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors, Sizes } from "@/constants/Theme";
import { SERVICEDETAILS } from "@/constants/Mocks";

const Page = () => {
  const serviceDetail = SERVICEDETAILS;
  const router = useRouter();
  const colors = Colors;
  return (
    <View
      style={{
        padding: Sizes.padding,
        marginBottom: Sizes.sm,
        paddingBottom: 0,
        backgroundColor: Colors.white,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: Sizes.sm,
          paddingVertical: Sizes.padding,
          backgroundColor: colors.card,
          borderRadius: Sizes.cardRadius,
          padding: Sizes.cardPadding,
          shadowColor: colors.shadow,
          shadowOffset: {
            width: Sizes.shadowOffsetWidth,
            height: Sizes.shadowOffsetHeight,
          },
          shadowOpacity: Sizes.shadowOpacity,
          shadowRadius: Sizes.shadowRadius,
          elevation: Sizes.elevation,
        }}
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">{serviceDetail.name}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>{serviceDetail.description}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">
              Temps de traitement global :{" "}
            </ThemedText>
            {serviceDetail.treatment_duration}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">
              Centre de traitement :{" "}
            </ThemedText>
            {serviceDetail.treatment_center}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Infoline : </ThemedText>
            {serviceDetail.infoline}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Frais de service : </ThemedText>
            {serviceDetail.total_cost} Ar
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">Nombre d’étapes : </ThemedText>
            {serviceDetail.step_count}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            <ThemedText type="defaultSemiBold">
              Documents fournis au demandeur :{" "}
            </ThemedText>
            {serviceDetail.required_document.join(", ")}
          </ThemedText>
        </ThemedView>
        <TouchableOpacity
          onPress={() => router.push("/(modals)/confirmation")}
          activeOpacity={0.7}
          style={{
            backgroundColor: Colors.secondary,
            paddingVertical: 14,
            marginVertical: 25,
            borderRadius: 50,
          }}
        >
          <ThemedText
            style={{
              color: Colors.light,
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Faire une demande
          </ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
