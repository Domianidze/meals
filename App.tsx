import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { store } from "@/store";
import CategoriesScreen from "@/screens/categories";
import CategoryScreen from "@/screens/category";
import MealScreen from "@/screens/meal";
import BookmarksScreen from "@/screens/bookmarks";

export type HomeStackParamList = {
  categories: undefined;
  category: { categoryId: string };
  meal: { mealId: string };
};

export type RootTabParamList = {
  home: undefined;
  bookmarks: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
        }}
      />
      <Stack.Screen
        name="category"
        component={CategoryScreen}
        options={{
          title: "Category",
        }}
      />
      <Stack.Screen
        name="meal"
        component={MealScreen}
        options={{
          title: "Meal",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="home"
              component={Home}
              options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarIcon: ({ focused, size, color }) => (
                  <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="bookmarks"
              component={BookmarksScreen}
              options={{
                headerTitle: "Bookmarks",
                tabBarLabel: "Bookmarks",
                tabBarIcon: ({ focused, size, color }) => (
                  <Ionicons
                    name={focused ? "bookmark" : "bookmark-outline"}
                    size={size}
                    color={color}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
