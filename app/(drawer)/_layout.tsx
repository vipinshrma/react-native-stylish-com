import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { AntDesign } from '@expo/vector-icons';
import {Image,Pressable} from 'react-native'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
export default function Layout() {
  const navigation = useNavigation()
  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
            headerShown:false,
            drawerIcon:()=>{
              return <AntDesign name="home" size={20} color="black" />
            },
          }}
        />
         <Drawer.Screen
          name="wishlist/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Wishlist',
            title: 'Wishlist',
            // headerShown:false,
            headerTransparent:true,
            drawerIcon:()=>{
              return <AntDesign name="hearto" size={20} color="black" />
            },
            headerLeft: () => {
              return <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ padding: 15, marginLeft: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
                <Image source={require('../../assets/images/menu.png')} />
              </Pressable>
            },
            headerRight: () => {
              return <Pressable style={{ padding: 15, marginRight: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
                <Image source={require('../../assets/images/Bag.png')} />
              </Pressable>
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
