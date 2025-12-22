import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#ffd33d",
    }}
    >
      <Tabs.Screen 
        name = "index" 
        options={{
          headerShown: false, 
          tabBarLabel: "Home",
          tabBarIcon: ({focused, color}) => (
            <Ionicons 
              name={focused ? "home-sharp" : "home-outline"} 
              color={color} 
              size={30} 
            />
          ),
        }}
      />

      <Tabs.Screen 
        name = "zetamac" 
        options={{
          headerShown: false,
          tabBarLabel: "Zetamac",
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? "speedometer-sharp" : "speedometer-outline"}
              color={color}
              size={30}
            />
          )
        }} 
      />

      <Tabs.Screen name="+not-found" options={{}} />
    </Tabs>
  );
}
