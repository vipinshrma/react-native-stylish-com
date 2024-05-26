import { View, Text, SafeAreaView, Image, Pressable, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import proudctImg2 from '../../assets/images/productImg2.png'
import { router } from 'expo-router';


const productSize = ['S', 'M', 'L', 'XL', '2XL']
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
const productSample2 = [
  '../../assets/images/Rectangle 568.png',
  '../../assets/images/Rectangle 575.png'

]

export default function SingleProductPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Pressable onPress={()=>router.back()} style={{ marginRight: 10, height: 60, width: 60, borderRadius: "50%", backgroundColor: '#F5F6FA', justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Pressable style={{ marginRight: 10, height: 60, width: 60, borderRadius: "50%", backgroundColor: '#F5F6FA', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/images/Bag.png')}
            />
          </Pressable>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/productImg1.png')}
            // source={{uri:'https://plus.unsplash.com/premium_photo-1715876234545-88509db72eb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'}}
            style={{ height: 350, width: 350 }}
            resizeMode='contain'
          />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#8F959E' }}>Men's Printed Pullover Hoodie</Text>
              <Text style={{ color: '#8F959E' }}>Price</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>Nike Club Fleece</Text>
              <Text style={{ fontSize: 20, fontWeight: 600 }}> $99</Text>
            </View>
          </View>
          <View style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>
            <FlatList
              data={productSample}
              renderItem={({ item }) => {
                return <View style={{ marginRight: 10, backgroundColor: '#FEFEFE' }}>
                  <Image
                    source={item?.url}
                    style={{ height: 100, width: 100, resizeMode: 'contain' }}
                  />
                </View>
              }}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
          </View>
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>Size</Text>
              <Text style={{ color: '#8F959E' }}> Size Guide</Text>
            </View>
          </View>
          <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <FlatList
              data={productSize}
              renderItem={({ item }) => {
                return <Pressable style={{ marginLeft: 10, marginBottom: 10, height: 65, width: 65, backgroundColor: "#F5F6FA", borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20 }}>{item}</Text>
                </Pressable>
              }}
              horizontal
              scrollEnabled={false}
            />
          </View>
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Description</Text>
            <Text style={{color:"#8F959E",marginTop:10}}>The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with  <Text style={{fontWeight:700}}> Read More..</Text></Text>
          </View>
          <View style={{ marginLeft: 20, marginRight: 20,marginTop:10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 600 }}>Reviews</Text>
              <Text style={{ color: '#8F959E' }}> View All</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}