import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
	return (
		<>
			<Stack screenOptions={{ headerShown: false, animation: "fade" }} />
			<StatusBar translucent={true} backgroundColor="transparent" />
		</>
	);
}
