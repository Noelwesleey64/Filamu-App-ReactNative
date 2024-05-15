import React from "react";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen";
import TicketScreen from "../screen/TicketScreen";
import UserAccountScreen from "../screen/UserAccountScreen";
import { COLORS, SPACING } from "../theme/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { Entypo, Feather, MaterialCommunityIcons, AntDesign    } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}]}>
                <Entypo name="video" size={30} color="white" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}]}>
                <Feather name="search" size={30} color="white" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
                        <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}]}>
                          <MaterialCommunityIcons name="ticket-confirmation-outline" size={30} color="white" />
                        </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={[styles.activeTabBackground, focused ? {backgroundColor: COLORS.Orange} : {}]}>
                <AntDesign name="user" size={30} color="white" />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
