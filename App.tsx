import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Images from './assets/icons';
import FavoriteContextProvider from './store/context/favorite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#794223',
        drawerInactiveBackgroundColor: '#351401',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({color}) => (
            <View style={styles.imageContainerStyle}>
              <Image
                style={[styles.imageStyle, {tintColor: color}]}
                source={Images.list}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color}) => (
            <View style={styles.imageContainerStyle}>
              <Image
                style={[styles.imageStyle, {tintColor: color}]}
                source={Images.star}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle={'light-content'} />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              options={{title: 'About The Meal'}}
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  imageContainerStyle: {
    height: 20,
    width: 20,
  },
});
