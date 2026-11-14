import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold">Kerb</Text>
      <Text className="mt-2 text-base text-neutral-500">
        Built from an empty folder
      </Text>
    </View>
  );
}
