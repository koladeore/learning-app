import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { coursesData } from '@/data/coursesData';
import * as Progress from 'react-native-progress';

const MyClassScreen = () => {
  const watchingCourse = coursesData[0];

  return (
    <View className='bg-[#FFFFFF] flex-1'>
      {/* Header */}
      <View className='bg-[#01353B] pt-12 p-4'>
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-xl">My Classes</Text>
          <Feather name="bell" size={24} color="#FFFFFF" />
        </View>
      </View>

      {/* Currently Watching Section */}
      <View className="pt-8 px-4">
        <Text className="text-black text-lg font-bold">Currently Watching</Text>
        <View className="bg-gray-100 rounded-lg p-4 mt-4 flex-row items-center">
          <Image
            source={watchingCourse.image}
            className="w-24 h-24 rounded-lg"
            resizeMode="cover"
          />
          <View className="ml-4 flex-1">
            <Text className="text-black text-lg font-bold">{watchingCourse.title}</Text>
            <Text className="text-gray-500">{watchingCourse.price}</Text>
            <View className="flex-row items-center mt-2">
              <Text className="text-gray-500 text-sm">45 mins watched</Text>
              <Text className="text-gray-500 text-sm mx-2">•</Text>
              <Text className="text-gray-500 text-sm">65% completed</Text>
            </View>
            <Progress.Bar 
              progress={0.65} 
              width={null}
              color="#01353B"
              borderRadius={4}
              height={10}
            />
          </View>
        </View>
      </View>

      {/* Active Progress Section */}
      <View className="pt-8 px-4">
        <Text className="text-black text-lg font-bold">Active Courses</Text>
      </View>
      <FlatList
        data={coursesData} 
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 4 }}
        renderItem={({ item }) => (
          <Pressable className="bg-gray-100 rounded-lg p-4 m-2 flex-row items-center">
            <Image source={item.image} className="w-20 h-20 rounded-lg" resizeMode="cover" />
            <View className="ml-4 flex-1">
              <Text className="text-black text-lg font-bold">{item.title}</Text>
              <Text className="text-gray-500 text-sm mt-1">{item.price}</Text>
              <View className="flex-row items-center mt-2">
                <Text className="text-gray-500 text-sm">Progress: 40%</Text>
              </View>
              <Progress.Bar 
                progress={0.65} 
                width={null}
                color="#01353B"
                borderRadius={4}
                height={10}
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default MyClassScreen;
