import { View, Text, SafeAreaView, Pressable, TextInput, ScrollView, Switch } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { router } from 'expo-router'
export default function address() {
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <ScrollView style={{ height: '100%' }}>
                <View style={{ marginTop: 10, padding: 25 }}>
                    <View>
                        <Text style={{ marginBottom: 10 }}>Name</Text>
                        <TextInput
                            style={{ backgroundColor: '#F5F6FA', color: '#8F959E', height: 50, padding: 10, borderRadius: 10 }}
                            value="Vipan Sharma"
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginTop: 10,
                        gap: 10
                    }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ marginBottom: 10 }}>Country</Text>
                            <TextInput
                                style={{
                                    backgroundColor: '#F5F6FA', color: '#8F959E',
                                    height: 50,
                                    padding: 10,
                                    borderRadius: 10,
                                    width: '100%',
                                }}
                                value="India"
                            />
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text style={{ marginBottom: 10 }}>City</Text>
                            <TextInput
                                style={{
                                    backgroundColor: '#F5F6FA', color: '#8F959E',
                                    height: 50,
                                    padding: 10,
                                    borderRadius: 10,
                                    width: '100%',
                                }}
                                value="Chandigarh"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Phone Number</Text>
                        <TextInput
                            style={{
                                backgroundColor: '#F5F6FA', color: '#8F959E',
                                height: 50,
                                padding: 10,
                                borderRadius: 10,
                                width: '100%',
                            }}
                            keyboardType='number-pad'
                            value="8557936869"
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Address</Text>
                        <TextInput
                            style={{
                                backgroundColor: '#F5F6FA', color: '#8F959E',
                                height: 50,
                                padding: 10,
                                borderRadius: 10,
                                width: '100%',
                            }}
                            value="43, Electronics City Phase 1, Electronic City"
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <Text>Remember me</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#34C759' }}
                        // thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                        // value={form?.remember || false}
                        // onValueChange={(e) => setForm({ ...form, remember: !form?.remember })}
                        />
                    </View>
                </View>

            </ScrollView>

            <View style={{ width: '100%', position: 'absolute', bottom: 0, left: 0 }}>
                <Pressable onPress={()=>router.back()} style={{ height: 80, width: '100%', backgroundColor: '#9775FA', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Save Address</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}