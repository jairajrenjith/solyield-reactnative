import { chartData } from "../constants/chartData";

export const getFlattenedBarData = () => {
  return chartData.flatMap((month) =>
    month.days.map((day) => ({
      value: day.energyGeneratedkWh,
      label: new Date(day.date).getDate().toString(),
      frontColor: "#1fb6ff", // Brand color
    })),
  );
};
