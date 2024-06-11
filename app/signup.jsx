import { View, Text, StyleSheet, TextInput, Switch, SafeAreaView, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { createUser, signIn } from '../lib/appwrite'

export default function Signup() {
    const [form, setForm] = useState({})
    let isEnabled = true

    const singupHandler = async () => {
        if (!form?.username || !form?.password || !form?.email) {
            Alert.alert('Error', 'Please fill required fields')
            return;
        }
        try {
            const res = await createUser({ email: form?.email, password: form?.password, username: form?.username })
            if (res) {
                signIn({ email: form?.email, password: form?.password }).then((res => {
                    router.replace('(tabs)')
                })).catch((err => {
                    Alert.alert('Error', err)
                }))
            }
        } catch (error) {
            console.log("err", error)
        }

    }
    return (
        <>
            <SafeAreaView>
                <View style={style.container}>
                    <Text style={style.title}>Sign Up</Text>
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
                            <Text style={style.form_name}>Email Address</Text>
                            <TextInput
                                style={style.input}
                                onChangeText={(e) => setForm({ ...form, email: e })}
                                value={form?.email}
                                keyboardType='email-address'
                            />
                        </View>
                        {/* <View>
                            <Text style={style.form_name}>Phone</Text>
                            <TextInput
                                style={style.input}
                                onChangeText={(e) => setForm({ ...form, phone: e })}
                                value={form?.phone}
                                keyboardType='number-pad'
                            />
                        </View> */}
                        <View>
                            <Text style={style.form_name}>Password</Text>
                            <TextInput
                                style={style.input}
                                onChangeText={(e) => setForm({ ...form, password: e })}
                                value={form?.password}
                                keyboardType='visible-password'
                            />
                        </View>
                        <View style={style.remember}>
                            <Text >Remember me</Text>
                            <Switch
                                trackColor={{ false: '#767577', true: '#34C759' }}
                                thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                                value={form?.remember || false}
                                onValueChange={(e) => setForm({ ...form, remember: !form?.remember })}
                            // ios_backgroundColor="#34C759"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <View style={{ width: '100%', position: 'absolute', bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                <Text onPress={() => router.push('/signin')}>Already have an account? Signin</Text>
                <Pressable onPress={singupHandler} style={{ justifyContent: 'center', width: "100%", alignItems: 'center', padding: 30, backgroundColor: '#9775FA' }}>
                    <Text style={{ color: 'white', fontWeight: 600 }}>Signup</Text>
                </Pressable>
            </View>
        </>


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
    }
})