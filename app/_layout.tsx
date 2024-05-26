import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Image, Pressable, View } from 'react-native'

import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // Sacramento:require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <Stack  >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name="(payments)" options={{ headerShown: false }} />
        <Stack.Screen name='address' options={{
          headerTransparent: true, // Makes the header transparent
          //  headerTintColor: '#fff', // Sets the header text color to white,
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerShown: true, title: "Address", headerLeft: ({ canGoBack }) => {
            return <Pressable onPress={() => canGoBack ? router.back() : ''} style={{ padding: 15, marginLeft: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          },
        }} />
        {/* <Stack.Screen name='payments' options={{
          headerTransparent: true, // Makes the header transparent
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerShown: true, title: "Address", headerLeft: ({ canGoBack }) => {
            return <Pressable onPress={() => canGoBack ? router.back() : ''} style={{ padding: 15, marginLeft: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          },
        }} /> */}
        <Stack.Screen name="started_page" options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name='signin' options={{ headerShown: false }} />
        <Stack.Screen name='product/[productId]' options={{
          headerShown: false,
        }} />
        <Stack.Screen name='brandproductscreen/[productBrandId]' options={{
          headerTransparent: true, // Makes the header transparent
          //  headerTintColor: '#fff', // Sets the header text color to white,
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerShown: true, title: "", headerTitle(props) {
            return  <View style={{padding:10,backgroundColor:'#F5F6FA',flexDirection:'row',alignItems:'center',gap:10,borderRadius:10,width:80,height:50}}>
            <Image 
            source={require('../assets/images/Adidas.png')}
            style={{height:'100%',width:'100%'}}
            resizeMode='contain'
            accessibilityLanguage=''
            
            />
          </View>
          }, headerLeft: ({ canGoBack }) => {
            return <Pressable onPress={() => canGoBack ? router.back() : ''} style={{ padding: 15, marginLeft: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
          },
          headerRight: ({ canGoBack }) => {
            return <Pressable onPress={() => canGoBack ? router.back() : ''} style={{ padding: 15, marginLeft: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
            <Ionicons name="bag-outline" size={24} color="black" />
            </Pressable>
          }
        }} />
      </Stack>
    </ThemeProvider>
  );
}
