import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1fb6ff" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Report",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="file-text" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
