import NetInfo from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store/store";
import { setOnlineStatus } from "../store/visitSlice";

function RootLayoutNav() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Level 2.2: Sync-on-Reconnect monitoring
    const unsubscribe = NetInfo.addEventListener((state) => {
      dispatch(setOnlineStatus(!!state.isConnected));
    });
    return () => unsubscribe();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootLayoutNav />
    </Provider>
  );
}
