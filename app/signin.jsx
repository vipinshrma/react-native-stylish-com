import { View, Text, StyleSheet, TextInput, Switch, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

export default function Signin() {
    const [form, setForm] = useState({})
    let isEnabled = true
    return (
        <SafeAreaView>
            <View style={style.container}>
                <Text style={style.title}>Welcome</Text>
                <Text style={style.subtitle}>Please enter you data to continue</Text>
                <View style={style.form_area}>
                    <View style={style.form_field}>
                        <Text style={style.form_name}>Username</Text>
                        <TextInput
                            style={style.input}
                            onChangeText={(e) => setForm({ ...form, username: e })}
                            value={form?.username}
                        />
                    </View>
                    <View>
                        <Text style={style.form_name}>Password</Text>
                        <TextInput
                            style={style.input}
                            onChangeText={(e) => setForm({ ...form, password: e })}
                            value={form?.password}
                        />
                    </View>
                    <Text style={style.forgot_password}>Forgot Password</Text>
                    <View style={style.remember}>
                        <Text>Remember me</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#34C759' }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                            value={form?.remember || false}
                            onValueChange={(e) => setForm({ ...form, remember: !form?.remember })}
                        />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 165, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 10 }} >
                <Text style={{ textAlign: 'center', paddingLeft: 30, paddingRight: 30 }}>By connecting your account confirm that you agree with our <Text style={{ fontWeight: 'bold' }}> Term and Condition</Text></Text>
                <Pressable style={{ justifyContent: 'center', width: "100%", alignItems: 'center', padding: 30, backgroundColor: '#9775FA' }}>
                    <Text onPress={()=>router.replace('(tabs)')} style={{ color: 'white', fontWeight: 600 }}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E7E8EA',
        height: 40,
    },
    title: {
        fontSize: 40,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 50
    },
    form_name: {
        color: '#8F959E',
        marginTop: 20
    },
    form_area: {
        padding: 20,
        marginTop: 50
    },
    form_field: {
        // marginTop:40
    },
    remember: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50
    },
    subtitle: {
        textAlign: 'center',
        color: '#8F959E'
    },
    forgot_password: {
        textAlign: 'right',
        color: '#EA4335',
        marginTop: 20
    }
})