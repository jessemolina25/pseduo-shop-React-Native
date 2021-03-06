import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import HomeDrawer from './HomeDrawer';
import FavoritesStack from './FavoritesStack';
import { RootStateOrAny, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const { darkMode } = useSelector((state: RootStateOrAny) => state.ui);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: darkMode ? '#3c3c3c' : '#fff',
          alignItems: 'center',
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <FontAwesomeIcon
                name="home"
                size={30}
                color={
                  focused && darkMode
                    ? '#d1b3ff'
                    : focused && !darkMode
                    ? '#6800ff'
                    : 'gray'
                }
              />
              <Text
                style={{
                  color:
                    focused && darkMode
                      ? '#d1b3ff'
                      : focused && !darkMode
                      ? '#6800ff'
                      : 'gray'
                }}
              >
                Home
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tab}>
              <FontAwesomeIcon
                name={focused ? 'heart' : 'heart-o'}
                size={30}
                color={
                  focused && darkMode
                    ? '#d1b3ff'
                    : focused && !darkMode
                    ? '#6800ff'
                    : 'gray'
                }
              />
              <Text
                style={{
                  color:
                    focused && darkMode
                      ? '#d1b3ff'
                      : focused && !darkMode
                      ? '#6800ff'
                      : 'gray'
                }}
              >
                Favorites
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

export default AppTabs;
