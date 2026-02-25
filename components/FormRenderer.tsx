import React from "react";
import { Text, TextInput, View } from "react-native";

export const FormField = ({ field }: { field: any }) => {
  return (
    <View className="mb-4">
      <Text className="font-bold mb-1">{field.label}</Text>
      {field.type === "text" || field.type === "number" ? (
        <TextInput
          placeholder={field.placeholder}
          className="border border-gray-300 p-2 rounded bg-white"
          keyboardType={field.type === "number" ? "numeric" : "default"}
        />
      ) : (
        <Text className="text-gray-400">
          Input type: {field.type} (Placeholder)
        </Text>
      )}
    </View>
  );
};
