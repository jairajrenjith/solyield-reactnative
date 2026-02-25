import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";
import { performanceData } from "../../constants/performanceData";
import { getFlattenedBarData } from "../../utils/dataTransformer";
import { generateReportPDF } from "../../utils/pdfGenerator";

export default function ReportScreen() {
  const barData = getFlattenedBarData();
  const pieData = [
    { value: performanceData.normalDays, color: "#4ade80", text: "Normal" },
    {
      value: performanceData.underPerformingDays,
      color: "#f87171",
      text: "Low",
    },
    {
      value: performanceData.overPerformingDays,
      color: "#60a5fa",
      text: "High",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Arjun's Site Analytics</Text>

      <Text style={styles.subtitle}>Energy Generation (kWh)</Text>
      <BarChart
        data={barData}
        barWidth={20}
        noOfSections={3}
        frontColor="#1fb6ff"
      />

      <View style={{ height: 40 }} />

      <Text style={styles.subtitle}>Performance Status</Text>
      <View style={{ alignItems: "center" }}>
        <PieChart
          data={pieData}
          donut
          radius={80}
          innerRadius={50}
          showText
          textColor="black"
        />
      </View>

      <View style={{ marginTop: 40, marginBottom: 60 }}>
        <Button
          title="Download PDF Report"
          onPress={() => generateReportPDF("Arjun", "Bhadla Solar Park")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#374151",
  },
});
