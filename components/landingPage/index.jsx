import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';
import { SplashScreen, useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();


export default function LandingPage() {
    const router = useRouter()
    const [loaded] = useFonts({
        Sacramento: require('../../assets/fonts/Sacramento-Regular.ttf'),
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
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignContent: 'center' }}>
            <View style={styleSheet.container}>
                <Image
                    source={require('../../assets/images/dress_logo.png')}
                    style={styleSheet.logo}
                />
                <Text style={styleSheet.titleText}>Stylish</Text>
                <Text style={styleSheet.subtitle}>Find Your Style</Text>
            </View>
        </View>
    )
}


const styleSheet = StyleSheet.create({
    logo: {
        height: 200,
        width: 200
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#FFFFFF',
        letterSpacing: 3
    },

    subtitle: {
        fontSize: 40,
        letterSpacing: 3,
        fontFamily: "Sacramento",
        color:'#FFFFFF'
    }
})