import * as Location from "expo-location";
import React from "react";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { useDispatch } from "react-redux";
import { sites } from "../../constants/sites";
import { setCheckIn } from "../../store/visitSlice";
import { validateCheckIn } from "../../utils/geoUtils";

export default function MapScreen() {
  const dispatch = useDispatch();

  const handleCheckIn = async (site: any) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "Location is needed for check-in.");
      return;
    }

    const userLoc = await Location.getCurrentPositionAsync({});
    const isValid = validateCheckIn(
      userLoc.coords.latitude,
      userLoc.coords.longitude,
      site.location.lat,
      site.location.lng,
    );

    if (isValid) {
      dispatch(setCheckIn(site.id));
      Alert.alert("Success", `Checked into ${site.name}`);
    } else {
      Alert.alert("Error", "You are not at the site! (Must be within 500m)");
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}
      >
        {sites.map((site) => (
          <Marker
            key={site.id}
            coordinate={{
              latitude: site.location.lat,
              longitude: site.location.lng,
            }}
          >
            <Callout>
              <View style={{ padding: 10, width: 180 }}>
                <Text style={{ fontWeight: "bold" }}>{site.name}</Text>
                <Text>Cap: {site.capacity}</Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      `https://www.google.com/maps/dir/?api=1&destination=${site.location.lat},${site.location.lng}`,
                    )
                  }
                  style={styles.btnNav}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Navigate
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleCheckIn(site)}
                  style={styles.btnCheck}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    Check-In
                  </Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
  btnNav: {
    backgroundColor: "#1fb6ff",
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
  },
  btnCheck: {
    backgroundColor: "#4ade80",
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
  },
});
