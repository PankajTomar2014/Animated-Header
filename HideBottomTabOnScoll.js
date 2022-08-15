import React, { useState } from 'react';
import { Text, View, Button, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  const [ offset, setOffset ] = useState(0);

  const hideTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' },
    });
  };
  const showTabBar = () => {
    navigation.setOptions({
      tabBarStyle: { display: 'flex' },
    });
  };

  return (
    <View
      style={{
        flex: 1,       
      }}>
      <ScrollView
        // bounces={false}
        onScroll={(e) => {
            const currentOffset = e.nativeEvent.contentOffset.y;
            let direction = currentOffset > offset ? "down" : "up";
            if (direction === "down") {
                console.log("down")
                hideTabBar()
            } else {
                  console.log("up")
                  showTabBar()
            }
            setOffset(currentOffset)
          }
        }
      >
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
        <View style={{ width: '95%',marginVertical:5, height: 40, backgroundColor: 'green' }} />
      </ScrollView>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
