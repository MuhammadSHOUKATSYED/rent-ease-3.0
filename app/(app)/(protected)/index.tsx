import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import {FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import car from '../../../assets/car.png';
import house from '../../../assets/house.png';
import mobile from '../../../assets/mobile.png';
import vehicle from '../../../assets/vehicle.png';
import electronics from '../../../assets/responsive.png';
import fashion from '../../../assets/brand.png';
import appliances from '../../../assets/blender.png';
import stationary from '../../../assets/svg.png';

const categoryImages = {
  motors: car,
  property: house,
  mobiles: mobile,
  vehicles: vehicle,
  electronics: electronics,
  fashion: fashion,
  appliances: appliances,
  stationary: stationary
};

const HomePage = () => {
	const router = useRouter();

  return (
    <View className="flex-1 bg-background mb-3">
      <View className="items-center p-7 bg-[#9455f4]">
        <View className='flex-row'>
        <FontAwesome name="search" size={20} color="white" style = {{ padding: 7 , marginTop: 20}} />
          <TextInput
        style={styles.searchBar}
        placeholder="Search RentEase"
          />
        </View>
      </View>
      
      <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        
      {/* Features Section */}
      <View style={{ padding: 15 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {[
                { icon: 'user-check', title: 'Verification', route: 'verification' },
                { icon: 'robot', title: 'Assistant Chatbot', route: 'chatbot' },
                { icon: 'hands-helping', title: 'Donation Center', route: 'donation' },
                { icon: 'wallet', title: 'Digital Wallet', route:'digitalWallet'},
                { icon: 'history', title: 'Track Product History', route: 'trackHistory' },
                { icon: 'tools', title: 'Report Any Damage', route: 'reportDamage' },
                { icon: 'award', title: 'Get Rewards', route: 'getRewards'},
                { icon: 'globe', title: 'Get Multilingual Support', route: 'getMultilingualSupport'},
                { icon: 'users', title: 'Product Shared Ownership', route: 'sharedOwnership'}    
            ].map((feature) => (
              <TouchableOpacity
              key={feature.title}
              onPress={() => router.push(`/(app)/${feature.route}`)}
              style={{ width: '30%', alignItems: 'center', marginBottom: 10 }}
              >
              <FontAwesome5 name={feature.icon} size={30} color="#311465" />
              <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 5 }}>{feature.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

        {/* Browse Categories */}
        <Text style={{ margin: 15, fontSize: 20, fontWeight: 'bold' }}>Browse Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10}}>
          {['motors', 'property', 'mobiles', 'vehicles', 'electronics', 'fashion', 'appliances', 'stationary'].map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => router.push(`/(app)/${category}`)}
              style={{ alignItems: 'center', marginRight: 15 }}
            >
              <Image source={categoryImages[category]} style={{ width: 50, height: 50, borderRadius: 8 }} />
              <Text style={{ fontSize: 12, marginTop: 5 }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        
      {/* Product Sections */}
      {['Top Picks for You', 'Recently Viewed', 'Popular in Islamabad', "Motors", "Property", "Mobiles","Vehicles", "Stationary"].map((section) => (
        <View key={section} style={{ marginTop: 20, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{section}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity
                key={item}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 10,
                  padding: 10,
                  marginRight: 15,
                  width: 150,
                  height: 150,
                }}
              >
                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: '100%', height: 100, borderRadius: 8 }} />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>Item {item}</Text>
                <Text style={{ fontSize: 12, color: '#888' }}>Rs. {item * 1000}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    width: '100%',
    maxWidth: 320, // Limit the width on larger screens
  },
})