import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LandingPage from '../components/landingPage'
import { useRouter } from 'expo-router'

import { NativeWindStyleSheet } from "nativewind";
import { getCurrentUser } from '@/lib/appwrite'

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function MainPage() {
  const router = useRouter()

  useEffect(() => {
    getCurrentUser().then((res=>{
      router.replace('(tabs)')
    })).catch((err)=>{
      console.log("err",err)
      router.replace('/started_page')
    })
    // setTimeout(() => {
    //   router.replace('/started_page')
    // }, 1000)
  }, [])


  return (
    <SafeAreaView style={styleSheet.mainContainer}>
      <LandingPage />
    </SafeAreaView>
  )
}

const styleSheet = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#9775FA',
    flex: 1
  }
})