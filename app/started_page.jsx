import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
export default function StartedPage() {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.header}>Let's Get Started</Text>
      </View>
      {/* social  */}
      <View style={{ flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center', gap: 10, marginTop: 100 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: 10, paddingRight: 10 }}>
          <Pressable style={[style.social, style.facebook]}>
            <EvilIcons name="sc-facebook" size={24} color="white" />
            <Text style={{ color: 'white', fontWeight: 600 }}>Facebook</Text>
          </Pressable>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: 10, paddingRight: 10 }}>
          <Pressable style={[style.social, style.twitter]}>
            <FontAwesome name="twitter" size={24} color="white" />
            <Text style={{ color: 'white', fontWeight: 600 }}>Twitter</Text>
          </Pressable>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: 10, paddingRight: 10 }}>
          <Pressable style={[style.social, style.google]}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={{ color: 'white', fontWeight: 600 }}>Google</Text>
          </Pressable>
        </View>
      </View>
      {/* social  */}
      <View style={{ marginTop: 240,justifyContent:'center',alignItems:'center',flexDirection:'column',gap:10 }} >
        <Text onPress={()=>router.push('signin')}>Already have an account? Signin</Text>
        <Pressable onPress={()=>router.push('/signup')} style={{justifyContent:'center', width:"100%",alignItems:'center',padding:30,backgroundColor:'#9775FA'}}>
            <Text style={{ color: 'white', fontWeight: 600 }}>Create an account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  header: {
    color: 'black',
    fontSize: 35,
    fontWeight: '600'
  },
  container: {
    marginTop: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  social: {
    backgroundColor: '#4267B2',
    padding: 20,
    borderRadius: '10px',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',

  },
  facebook: {
    backgroundColor: '#4267B2',
  },
  twitter: {
    backgroundColor: '#1DA1F2',
  },
  google: {
    backgroundColor: '#EA4335',
  }
})