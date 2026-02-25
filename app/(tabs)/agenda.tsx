import * as Calendar from "expo-calendar";
import React from "react";
import { Alert, Button, FlatList, Text, View } from "react-native";
import { schedule } from "../../constants/schedule";
import { sites } from "../../constants/sites";

export default function AgendaScreen() {
  const syncToCalendar = async (item: (typeof schedule)[0]) => {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === "granted") {
      const calendars = await Calendar.getCalendarsAsync(
        Calendar.EntityTypes.EVENT,
      );
      const defaultCalendar =
        calendars.find((c) => c.isPrimary) || calendars[0];

      await Calendar.createEventAsync(defaultCalendar.id, {
        title: item.title,
        startDate: new Date(item.date),
        endDate: new Date(new Date(item.date).getTime() + 60 * 60 * 1000),
        location: sites.find((s) => s.id === item.siteId)?.name,
      });
      Alert.alert("Synced", "Event added to your Google Calendar");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f3f4f6", padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        My Visits
      </Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              p: 15,
              borderRadius: 10,
              marginBottom: 10,
              borderLeftWidth: 5,
              borderLeftColor: "#f59e0b",
              padding: 15,
            }}
          >
            <Text style={{ color: "#6b7280" }}>
              {item.date} | {item.time}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Button
              title="Sync to Calendar"
              onPress={() => syncToCalendar(item)}
            />
          </View>
        )}
      />
    </View>
  );
}
