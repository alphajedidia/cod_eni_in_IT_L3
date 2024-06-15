import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Tabs from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Theme";
import { defaultStyles } from "@/constants/Styles";
import BoxedIcon from "@/components/BoxedIcon";
import { useRouter } from "expo-router";

const settings = [
  {
    name: "Information Personelle",
    icon: "person-outline",
  },
  {
    name: "Connection & Sécurité",
    icon: "shield-outline",
  },
  {
    name: "Payements",
    icon: "card-outline",
  },
  {
    name: "Notifications",
    icon: "notifications-outline",
  },
  {
    name: "Confidencialité",
    icon: "lock-closed-outline",
  },
];

const support = [
  {
    name: "Centre d'aide",
    icon: "chatbubble-outline",
  },
  {
    name: "Comment marche CitizenConnect",
    icon: "star-outline",
  },
  {
    name: "Donnez nous des feedbacks",
    icon: "pencil-outline",
  },
];

const legal = [
  {
    name: "Term d'utilisation",
    icon: "book-outline",
  },
  {
    name: "Politique de confidencialité",
    icon: "book-outline",
  },
  {
    name: "Licence",
    icon: "book-outline",
  },
];

const Page = () => {
  const router = useRouter();
  const user = {
    firstName: "John",
    lastName: "Doe",
    createdAt: new Date(),
    emailAddresses: "johnDoe@gmail.com",
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={defaultStyles.container}
    >
      <Tabs.Screen
        options={{
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

      {user && (
        <View style={styles.card}>
          <TouchableOpacity>
            <Image
              source={require("@/assets/images/icon.png")}
              style={styles.avatar}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 22 }}>
            {user.firstName} {user.lastName}
          </Text>
          <Text>{user.emailAddresses}</Text>
          <Text>Since {user?.createdAt!.toLocaleDateString()}</Text>
        </View>
      )}

      <View style={defaultStyles.block}>
        <FlatList
          data={settings}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <View style={defaultStyles.separator} />
          )}
          renderItem={({ item }) => (
            <View style={defaultStyles.item}>
              <BoxedIcon name={item.icon} backgroundColor={Colors.black} />

              <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
            </View>
          )}
        />
      </View>

      <View style={defaultStyles.block}>
        <FlatList
          data={support}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <View style={defaultStyles.separator} />
          )}
          renderItem={({ item }) => (
            <View style={defaultStyles.item}>
              <BoxedIcon name={item.icon} backgroundColor={Colors.black} />

              <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
            </View>
          )}
        />
      </View>

      <View style={defaultStyles.block}>
        <FlatList
          data={legal}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <View style={defaultStyles.separator} />
          )}
          renderItem={({ item }) => (
            <View style={defaultStyles.item}>
              <BoxedIcon name={item.icon} backgroundColor={Colors.black} />

              <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
            </View>
          )}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: Colors.dark,
          paddingVertical: 14,
          marginHorizontal: 24,
          marginVertical: 50,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            color: Colors.light,
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  header: {
    fontSize: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  logoutBtn: {
    marginHorizontal: 24,
  },
});

export default Page;
