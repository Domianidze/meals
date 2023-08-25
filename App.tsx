import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "@/screens/categories";
import CategoryScreen from "./screens/category";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  categories: undefined;
  category: { categoryId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
          <Stack.Screen name="category" component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
