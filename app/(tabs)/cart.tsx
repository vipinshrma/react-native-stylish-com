import { View, Text, SafeAreaView, Pressable, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { router, useNavigation } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function cart() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
  }, [navigation]);
  const productSample = [
    {
      url: require('../../assets/images/Rectangle 568.png')
    },
    {
      url: require('../../assets/images/Rectangle 575.png')
    },
    {
      url: require('../../assets/images/Rectangle 576.png')
    },
    {
      url: require('../../assets/images/Rectangle 577.png')
    },
    {
      url: require('../../assets/images/Rectangle 578.png')
    }
  ]
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }} >
      <ScrollView>
        {/* product card  */}
        <View style={{
          borderRadius: 10, shadowColor: '#8F959E', backgroundColor: '#FEFEFE', margin: 10, shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: {
            height: 6,
            width: 6
          }
        }}>
          <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
            <Image
              source={require('../../assets/images/Rectangle 568.png')}
              style={{ height: 100, width: 100 }}
              resizeMode='contain'
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <View>
                <Text style={{ fontSize: 18, color: '#1D1E20', fontWeight: '500' }}>Men's Tie-Dye T-Shirt</Text>
                <Text style={{ fontSize: 18, color: '#1D1E20', fontWeight: '500' }}>Nike Sportswear</Text>
                <Text style={{ color: '#8F959E', marginTop: 10 }}>$99 (+$4.00 Tax)</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 10, flexDirection: 'row', gap: 20 }}>
                  <AntDesign name="upcircleo" size={24} color="#8F959E" />
                  <Text style={{ fontSize: 18, color: '#1D1E20' }}>1</Text>
                  <AntDesign name="downcircleo" size={24} color="#8F959E" />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <MaterialCommunityIcons name="delete-outline" size={24} color="#8F959E" />
                </View>
              </View>
            </View>
          </View>

        </View>
        <View style={{
          borderRadius: 10, shadowColor: '#8F959E', backgroundColor: '#FEFEFE', margin: 10, shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: {
            height: 6,
            width: 6
          }
        }}>
          <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
            <Image
              source={require('../../assets/images/Rectangle 568.png')}
              style={{ height: 100, width: 100 }}
              resizeMode='contain'
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <View>
                <Text style={{ fontSize: 18, color: '#1D1E20', fontWeight: '500' }}>Men's Tie-Dye T-Shirt</Text>
                <Text style={{ fontSize: 18, color: '#1D1E20', fontWeight: '500' }}>Nike Sportswear</Text>
                <Text style={{ color: '#8F959E', marginTop: 10 }}>$99 (+$4.00 Tax)</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 10, flexDirection: 'row', gap: 20 }}>
                  <AntDesign name="upcircleo" size={24} color="#8F959E" />
                  <Text style={{ fontSize: 18, color: '#1D1E20' }}>1</Text>
                  <AntDesign name="downcircleo" size={24} color="#8F959E" />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <MaterialCommunityIcons name="delete-outline" size={24} color="#8F959E" />
                </View>
              </View>
            </View>
          </View>

        </View>
        <View style={{
          borderRadius: 10, shadowColor: '#8F959E', backgroundColor: '#FEFEFE', margin: 10, shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: {
            height: 6,
            width: 6
          }
        }}>
          <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
            <Image
              source={require('../../assets/images/Rectangle 568.png')}
              style={{ height: 100, width: 100 }}
              resizeMode='contain'
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <View>
                <Text style={{ fontSize: 18, color: '#1D1E20', fontWeight: '500' }}>Men's Tie-Dye T-Shirt</Text>
                <Text style={{ fontSize: 18, color: '#1D1E20', fontWeight: '500' }}>Nike Sportswear</Text>
                <Text style={{ color: '#8F959E', marginTop: 10 }}>$99 (+$4.00 Tax)</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 10, flexDirection: 'row', gap: 20 }}>
                  <AntDesign name="upcircleo" size={24} color="#8F959E" />
                  <Text style={{ fontSize: 18, color: '#1D1E20' }}>1</Text>
                  <AntDesign name="downcircleo" size={24} color="#8F959E" />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <MaterialCommunityIcons name="delete-outline" size={24} color="#8F959E" />
                </View>
              </View>
            </View>
          </View>

        </View>
        {/* product card  */}

        {/* address area  */}

        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Delivery Address</Text>
            <AntDesign onPress={()=>router.push('/address')} name="right" size={15} color="black" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Feather name="map-pin" size={30} color="black" />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: "#8F959E" }}>43, Electronics City Phase 1,
                </Text>
                <Text style={{ color: "#8F959E" }}>Electronic City</Text>
              </View>

            </View>
            <FontAwesome name="check-circle" size={24} color="#4AC76D" />
          </View>
        </View>

        {/* address area */}


        {/* payment method */}
        <View style={{ margin: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Payment Method</Text>
            <AntDesign onPress={()=>router.push('/(payments)')} name="right" size={15} color="black" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ padding: 10, backgroundColor: '#F5F6FA', borderRadius: 10 }}>
                <FontAwesome name="cc-visa" size={35} color="#3D93F8" />
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: "#8F959E" }}>Visa Classic
                </Text>
                <Text style={{ color: "#8F959E" }}>**** 7690</Text>
              </View>

            </View>
            <FontAwesome name="check-circle" size={24} color="#4AC76D" />
          </View>
        </View>
        {/* payment method */}

        {/* order info */}

        <View style={{ margin: 10,marginBottom:50 }}>
          <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Order Info</Text>
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#8F959E' }}>Subtotal</Text>
              <Text style={{ fontSize: 18, fontWeight: 500 }}>$110</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#8F959E' }}>Delivery Charge</Text>
              <Text style={{ fontSize: 18, fontWeight: 500 }}>$10</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#8F959E' }}>Total</Text>
              <Text style={{ fontSize: 18, fontWeight: 500 }}>$120</Text>
            </View>
          </View>
        </View>

        {/* order info end */}


      </ScrollView>
      {/* checkout button  */}

      <View style={{ width: '100%', position: 'absolute', bottom: 0, left: 0 }}>
        <Pressable style={{ height: 80, width: '100%', backgroundColor: '#9775FA', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Checkout</Text>
        </Pressable>
      </View>

      {/* checkoutbutton */}


    </SafeAreaView>
  )
}