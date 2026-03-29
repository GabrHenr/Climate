import Header from "@/components/header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Header />
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
}
