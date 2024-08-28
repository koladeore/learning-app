import React from 'react';
import { View, Text, TextInput, Pressable, FlatList, Image } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import CourseItem from '../../components/CourseItem';
import { coursesData } from '@/data/coursesData';

const HomeScreen = () => {
  return (
  <View className='bg-[#FFFFFF] flex-1'>
    <View className='bg-[#01353B] pt-12 p-4'>
      {/* Header */}
      <View>
        <View className="flex-row items-center">
          <Text className="text-gray-400 text-xl mr-2">Good morning</Text>
          <FontAwesome name="cloud" size={24} color="#FFFFFF" /> 
        </View>
        <View className="flex-row justify-between items-center py-4">
          <Text className="text-white text-xl mr-2">Marisson Kalao</Text>
          <Feather name="bell" size={24} color="#FFFFFF" />
        </View>
        {/* Search Box */}
        <View className="mt-6 flex-row items-center rounded-lg border-2 border-gray-400 px-4 py-4">
          <Feather name="search" size={20} color="#FFFFFF" />
          <TextInput
            className="ml-4 flex-1 text-gray-400 bg-transparent"
            placeholder="What do you want to learn?"
            placeholderTextColor="#A0A0A0"
          />
        </View>
      </View> 
    </View>
    {/* Explore Topics Section */}
    <View className="pt-8 p-4 rounded-lg">
      <View className="flex-row justify-between items-center">
        <Text className="text-black text-lg font-bold">Explore topics</Text>
        <Text className="text-[#32CD32] text-lg">See more</Text>
      </View>
    </View>
    {/* Icons Section */}
    <View className="flex-row justify-between items-center p-4">
      <Pressable className="flex-col items-center">
        <FontAwesome name="briefcase" size={32} color="#01353B" />
        <Text className="text-gray-400 text-sm mt-2">Business</Text>
      </Pressable>
      <Pressable className="flex-col items-center">
        <FontAwesome name="paint-brush" size={32} color="#01353B" />
        <Text className="text-gray-400 text-sm mt-2">Design</Text>
      </Pressable>
      <Pressable className="flex-col items-center">
        <FontAwesome name="money" size={32} color="#01353B" />
        <Text className="text-gray-400 text-sm mt-2">Finance</Text>
      </Pressable>
      <Pressable className="flex-col items-center">
        <FontAwesome name="bullhorn" size={32} color="#01353B" />
        <Text className="text-gray-400 text-sm mt-2">Marketing</Text>
      </Pressable>
    </View>
    {/* Recommended Topics Section */}
    <View className="p-4 rounded-lg">
      <View className="flex-row justify-between items-center">
        <Text className="text-black text-lg font-bold">Recommended for you</Text>
        <Text className="text-[#32CD32] text-lg">See more</Text>
      </View>
      <FlatList
      data={coursesData}
      renderItem={({ item }) => <CourseItem item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>
  </View> 
  );
};

export default HomeScreen;
