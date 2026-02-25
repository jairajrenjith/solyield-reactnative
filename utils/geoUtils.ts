export const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => {
  const R = 6371e3; // Earth radius in meters
  const p = Math.PI / 180;
  const a =
    0.5 -
    Math.cos((lat2 - lat1) * p) / 2 +
    (Math.cos(lat1 * p) *
      Math.cos(lat2 * p) *
      (1 - Math.cos((lon2 - lon1) * p))) /
      2;
  return 12742 * Math.asin(Math.sqrt(a)) * 1000; // Returns meters
};

export const validateCheckIn = (
  userLat: number,
  userLng: number,
  siteLat: number,
  siteLng: number,
) => {
  const distance = getDistance(userLat, userLng, siteLat, siteLng);
  return distance <= 500; // Requirement: 500m radius [cite: 44]
};
