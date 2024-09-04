import React, { useState } from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { coursesData } from '@/data/coursesData';

const ProfileScreen = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPreferredVideos, setShowPreferredVideos] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleTogglePreferredVideos = () => {
    setShowPreferredVideos(!showPreferredVideos);
  };

  const handleToggleDownloads = () => {
    setShowDownloads(!showDownloads);
  };

  return (
    <View className='flex-1 bg-[#FFFFFF]'>
      {/* Profile Header */}
      <View className="bg-[#01353B] p-4 items-center pt-10">
        <Image
          source={require('../../assets/images/profile.jpg')}
          className="w-24 h-24 rounded-full border-4 border-white"
          resizeMode="cover"
        />
        <Text className="text-white text-2xl mt-2">John Doe</Text>
        <Text className="text-gray-300 text-sm">john.doe@example.com</Text>
      </View>

      {/* Toggle Sections */}
      <View className="p-4">
        {/* Personal Details */}
        <Pressable onPress={handleToggleDetails} className="flex-row justify-between items-center bg-gray-100 p-4 rounded-lg">
          <Text className="text-lg text-black">Personal Details</Text>
          <Feather name={showDetails ? 'chevron-up' : 'chevron-down'} size={24} color="#000000" />
        </Pressable>
        {showDetails && (
          <View className="bg-gray-100 p-4 mt-2 rounded-lg">
            <Text className="text-lg text-black">Full Name: John Doe</Text>
            <Text className="text-lg text-black">Email: john.doe@example.com</Text>
            <Text className="text-lg text-black">Phone: +123 456 7890</Text>
          </View>
        )}

        {/* Preferred Video */}
        <Pressable onPress={handleTogglePreferredVideos} className="flex-row justify-between items-center bg-gray-100 p-4 mt-4 rounded-lg">
          <Text className="text-lg text-black">Preferred Video</Text>
          <Feather name={showPreferredVideos ? 'chevron-up' : 'chevron-down'} size={24} color="#000000" />
        </Pressable>
        {showPreferredVideos && (
          <View className="bg-gray-100 p-4 mt-2 rounded-lg">
            <FlatList
              data={coursesData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex-row items-center mt-2">
                  <Image source={item.image} className="w-20 h-20 rounded-lg" resizeMode="cover" />
                  <View className="ml-4 flex-1">
                    <Text className="text-black text-lg font-bold">{item.title}</Text>
                    <Text className="text-gray-500 text-sm mt-1">{item.price}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}

        {/* Your Downloads */}
        <Pressable onPress={handleToggleDownloads} className="flex-row justify-between items-center bg-gray-100 p-4 mt-4 rounded-lg">
          <Text className="text-lg text-black">Your Downloads</Text>
          <Feather name={showDownloads ? 'chevron-up' : 'chevron-down'} size={24} color="#000000" />
        </Pressable>
        {showDownloads && (
          <View className="bg-gray-100 p-4 mt-2 rounded-lg">
            <FlatList
              data={coursesData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex-row items-center mt-2">
                  <Image source={item.image} className="w-20 h-20 rounded-lg" resizeMode="cover" />
                  <View className="ml-4 flex-1">
                    <Text className="text-black text-lg font-bold">{item.title}</Text>
                    <Text className="text-gray-500 text-sm mt-1">{item.price}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
