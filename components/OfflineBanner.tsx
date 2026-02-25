import React from "react";
import { Text, View } from "react-native";

export const OfflineBanner = ({ isOnline }: { isOnline: boolean }) => {
  if (isOnline) return null;
  return (
    <View className="bg-red-500 p-1 items-center">
      <Text className="text-white font-bold">
        OFFLINE MODE - Local Saving Enabled
      </Text>
    </View>
  );
};
