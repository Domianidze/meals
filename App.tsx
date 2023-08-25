import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "@/screens/categories";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="categories"
            component={CategoriesScreen}
            options={{
              title: "Categories",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
