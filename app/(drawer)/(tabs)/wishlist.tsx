import { View, Text, SafeAreaView, ScrollView, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
const productSample = [
  {
    url: require('../../../assets/images/productImg1.png')
  },
  {
    url: require('../../../assets/images/productImg2.png')
  },
  {
    url: require('../../../assets/images/productImg1.png')
  },
  {
    url: require('../../../assets/images/productImg1.png')
  },
  {
    url: require('../../../assets/images/productImg2.png')
  }
]
export default function wishlist() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={{ padding: 20}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>365 Items</Text>
            <Text style={{ color: '#8F959E' }}>Available in stock</Text>
          </View>
          <Pressable style={{ padding: 10, backgroundColor: '#F5F6FA', flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 10 }}>
           <AntDesign name="edit" size={24} color="black" />
            <Text>Sort</Text>
          </Pressable>
        </View>
      </View>
      <View>  
        <FlatList
          // centerContent
          data={productSample}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => router.push('/product/13')} >
              <View style={{ padding:10 }}>
                <Image
                  source={item.url}
                  height={200}
                  width={100}
                  style={{ borderRadius: 10 }}
                />
              </View>
              <View style={{ marginLeft: 10, marginBottom: 10 }}>
                <Text>Nike Sportswear Club</Text>
                <Text>Fleece</Text>
                <Text style={{ fontWeight: '700' }} >$99</Text>
              </View>
            </Pressable>
          )}
          // keyExtractor={(item) => item}
          // horizontal
          numColumns={2}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}