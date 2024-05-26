
import { router, Stack, Tabs } from 'expo-router';
import React from 'react';
import { Image, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function TabLayout() {

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerTransparent: true, // Makes the header transparent
                //  headerTintColor: '#fff', // Sets the header text color to white,
                headerStyle: {
                    backgroundColor: '#fff'
                },
                headerShown: true,
                title: "Payment",
                headerLeft: ({ canGoBack }) => {
                    return <Pressable onPress={() => canGoBack ? router.back() : ''} style={{ padding: 10, marginLeft: 10, borderRadius: "50%", backgroundColor: '#F5F6FA' }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                },
            }} />
        </Stack>
    );
}
