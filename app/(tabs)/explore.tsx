import React from 'react';
import { View, Text, TextInput, FlatList, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { coursesData } from '@/data/coursesData';

const ExploreScreen = () => {
  return (
    <View className='bg-[#FFFFFF] flex-1'>
      {/* Header */}
      <View className='bg-[#01353B] pt-12 p-4'>
        <View className="flex-row items-center">
          <Text className="text-white text-xl mr-2">Explore</Text>
          <Feather name="search" size={24} color="#FFFFFF" />
        </View>
        {/* Search Box */}
        <View className="mt-6 flex-row items-center rounded-lg border-2 border-gray-400 px-4 py-4">
          <Feather name="search" size={20} color="#FFFFFF" />
          <TextInput
            className="ml-4 flex-1 text-gray-400 bg-transparent"
            placeholder="Search topics, courses, and more"
            placeholderTextColor="#A0A0A0"
          />
        </View>
      </View>

      {/* Explore Courses Section */}
      <View className="pt-8 p-4">
        <Text className="text-black text-lg font-bold">Explore Courses</Text>
      </View>

      {/* Courses Grid */}
      <FlatList
        data={coursesData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 4 }}
        renderItem={({ item }) => (
          <Pressable className="w-[48%] bg-gray-100 p-4 rounded-lg m-2">
            <Image source={item.image} className="w-full h-32 rounded-md" resizeMode="cover" />
            <Text className="text-black text-lg font-bold mt-2">{item.title}</Text>
            <Text className="text-gray-500">{item.price}</Text>
            <Text className="text-[#FFD700] mt-1">⭐ {item.rating}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ExploreScreen;
