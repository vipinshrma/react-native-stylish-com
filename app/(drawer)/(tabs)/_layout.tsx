
import { router, Tabs, useNavigation, usePathname } from 'expo-router';
import React from 'react';
import { Image, Pressable} from 'react-native'
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation()
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? <Entypo name="home" size={24} color="black" /> : <AntDesign name="home" size={24} color="black" />
          },
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            display: 'none'
          },
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
          },
          title: 'Home',
          headerLeft: () => {
            return <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ padding: 15, marginLeft: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
              <Image source={require('../../../assets/images/menu.png')} />
            </Pressable>
          },
          headerRight: () => {
            return <Pressable style={{ padding: 15, marginRight: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
              <Image source={require('../../../assets/images/Bag.png')} />
            </Pressable>
          },
        }}

      />
      <Tabs.Screen
        name='wishlist'
        options={{
          headerLeftContainerStyle: {
            padding: 20
          },
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? <AntDesign name="heart" size={24} color="black" /> : <AntDesign name="hearto" size={24} color="black" />
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return <Pressable onPress={() => router.back()} style={{ marginRight: 10, height: 50, width: 50, borderRadius: "50%", backgroundColor: '#F5F6FA', justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          },
          headerRight: () => {
            return <Pressable onPress={() => router.back()} style={{ marginRight: 10, height: 50, width: 50, borderRadius: "50%", backgroundColor: '#F5F6FA', justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="bag-outline" size={24} color="black" />
            </Pressable>
          },
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
          },
          tabBarLabelStyle: {
            display: 'none'
          },
          tabBarShowLabel: false,
         
        }}

      />
      <Tabs.Screen
        name='cart'
        options={{
          headerLeftContainerStyle: {
            padding: 20
          },
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? <FontAwesome5 name="shopping-bag" size={24} color="black" /> : <SimpleLineIcons name="handbag" size={24} color='black' />
          },
          headerShadowVisible: false,
          headerLeft: () => {
            return <Pressable onPress={() => router.back()} style={{ marginRight: 10, height: 50, width: 50, borderRadius: 50, backgroundColor: '#F5F6FA', justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          },
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
          },
          tabBarLabelStyle: {
            display: 'none'
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name='wallet'
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? <Entypo name="wallet" size={24} color="black" /> : <Ionicons name="wallet-outline" size={24} color="black" />
          },
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIconStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
          }
        }}
      />
    </Tabs>
  );
}
