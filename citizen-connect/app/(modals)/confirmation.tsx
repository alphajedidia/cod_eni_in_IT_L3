import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";
import { Colors, Sizes } from "@/constants/Theme";
import CheckedIcon from "@/components/CheckedIcon";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const colors = Colors;
  return (
    <View style={{ padding: Sizes.padding, marginBottom: Sizes.sm }}>
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
          <ThemedText type="title">Bienvenue !</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Etapes gérer par{" "}
            <Text style={{ color: Colors.primary }}>CitizenConnect</Text>
          </ThemedText>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Constitution des dossier</ThemedText>
            <CheckedIcon />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Enregistrement des vos dossier</ThemedText>
            <CheckedIcon />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Identification et contrôle</ThemedText>
            <CheckedIcon />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Passeport livrée</ThemedText>
            <CheckedIcon />
          </View>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Details du prix</ThemedText>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Service passeport</ThemedText>
            <ThemedText>190 000 ar</ThemedText>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Commission</ThemedText>
            <ThemedText>10 000 ar</ThemedText>
          </View>
          <View
            style={{
              borderColor: Colors.black,
              borderWidth: 1,
              borderStyle: "solid",
              width: 200,
              marginHorizontal: "auto",
              marginVertical: 10,
            }}
          ></View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ThemedText>Total</ThemedText>
            <ThemedText>200 000 ar</ThemedText>
          </View>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Payer avec</ThemedText>
          <View style={{ gap: 20, marginBottom: 50 }}>
            <TouchableOpacity
              style={{ ...styles.btnOutline, backgroundColor: "#FFE101" }}
            >
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                style={defaultStyles.btnIcon}
              />
              <Text style={styles.btnOutlineText}>MVola</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btnOutline, backgroundColor: "#E90000" }}
            >
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                style={defaultStyles.btnIcon}
              />
              <Text style={styles.btnOutlineText}>Airtel Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btnOutline, backgroundColor: "#FF5B00" }}
            >
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                style={defaultStyles.btnIcon}
              />
              <Text style={styles.btnOutlineText}>Orange Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.btnOutline, backgroundColor: "#15195A" }}
            >
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                style={{ ...defaultStyles.btnIcon, color: Colors.white }}
              />
              <Text style={{ ...styles.btnOutlineText, color: Colors.white }}>
                Visa
              </Text>
            </TouchableOpacity>
          </View>
        </ThemedView>
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
    marginBottom: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
  },
});
