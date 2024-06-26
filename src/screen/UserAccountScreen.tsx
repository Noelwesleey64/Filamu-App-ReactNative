import React from "react";
import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { COLORS, FONTSIZE, SPACING } from "../theme/theme";
import AppHeader from "../components/AppHeader";
import SettingComponent from "../components/SettingComponent";

const UserAccountScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="closecircleo"
          header={"My Profile"}
          action={() => navigation.goBack()}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/image/profile.jpg")}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>Noel Wesley</Text>
      </View>
      <View style={styles.profileContainer}>
        <SettingComponent
          icon='user'
          heading="Account"
          subheading="Edit Profile"
          subtitle="Change Password"
        />
        <SettingComponent
          icon='setting'
          heading="Settings"
          subheading="Theme"
          subtitle="Permissions"
        />
        <SettingComponent
          icon='dollar'
          heading="Offers & Refferals"
          subheading="Offer"
          subtitle="Refferrals"
        />
        <SettingComponent
          icon='info'
          heading="About"
          subheading="About Movies"
          subtitle="more"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  profileContainer: {
    alignItems: "center",
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_16,
    color: COLORS.White,
  },
});

export default UserAccountScreen;
