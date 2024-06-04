import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import { router } from 'expo-router';
import useAppWrite from '@/hooks/useAppwrite';
import {getAllProduct} from '../../../lib/appwrite'


const header = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 600 }}>Vipan Sharma</Text>
      <Text style={{ fontSize: 18, color: '#8F959E' }}>Welcome to laza</Text>
    </View>
  );
};


let array2 = [require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg2.png'), require('../../../assets/images/productImg2.png'), require('../../../assets/images/productImg2.png'), require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg1.png'), require('../../../assets/images/productImg2.png'), require('../../../assets/images/productImg2.png'), require('../../../assets/images/productImg2.png')]
let array = [1, 2, 4, 5, 6, 6, 6]


export default function HomeScreen() {
  const { isLoading, refetch, data }= useAppWrite(getAllProduct)

  console.log("data",data)
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ marginBottom: 20, marginTop: 20, marginLeft: 10, marginRight: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Vipan Sharma</Text>
          <Text style={{ fontSize: 18, color: '#8F959E', marginTop: 5 }}>Welcome to laza</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.search}>
              <TextInput
                placeholder='Search...'
                style={{
                  backgroundColor: '#F5F6FA',
                  padding: 20,
                  marginRight: 10,
                  marginTop: 20,
                  borderRadius: 10,
                  position: 'relative',
                }}
                underlineColorAndroid='transparent'
              />
              <AntDesign name="search1" size={24} color="black" style={styles.icon} />
            </View>
          </View>
        </View>

        {/* chooose brand  */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
            <Text style={{ fontWeight: 600 }}>Choose Brands</Text>
            <Text style={{ color: '#8F959E' }}>See all</Text>
          </View>
          <FlatList
            data={array}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => router.push(`/brandproductscreen/${455}`)} style={{ backgroundColor: 'white', marginLeft: 10 }}>
                <View style={{ backgroundColor: '#F5F6FA', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <View style={{ backgroundColor: '#FEFEFE', padding: 15, borderRadius: 10 }} >
                    <Image source={require('../../../assets/images/Adidas.png')} />
                  </View>
                  <Text style={{ fontWeight: '500' }}>Adidas</Text>
                </View>
              </Pressable>
            )}
            // keyExtractor={(item) => item}
            horizontal
          />
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
              <Text style={{ fontWeight: 600 }}>Choose Brands</Text>
              <Text style={{ color: '#8F959E' }}>See all</Text>
            </View>
          </View>
        </View>

        {/* chooose brand  */}

        {/* product list  */}
        <View style={{ flex: 1 }}>
          <FlatList
            data={array2}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={{ padding: 10 }}>
                <Pressable onPress={() => router.push('/product/13')} >
                  <View>
                    <Image
                      source={item}
                      height={200}
                      width={165}
                      style={{ borderRadius: 10 }}
                    />
                  </View>
                  <View style={{ marginLeft: 10, marginBottom: 10 }}>
                    <Text>Nike Sportswear Club</Text>
                    <Text>Fleece</Text>
                    <Text style={{ fontWeight: '700' }} >$99</Text>
                  </View>
                </Pressable>
              </View>
            )}
            // keyExtractor={(item,idx) => idx}
            // horizontal
            numColumns={2}
          />
        </View>
      </View>

    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  search: {
    position: 'relative',
    width: '100%'
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 40
  }
})