import { Stack } from "expo-router";
import "../global.scss";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
