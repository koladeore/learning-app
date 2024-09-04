import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { coursesData as initialData } from '@/data/coursesData'; // Assuming the wishlist uses the same course data for demo

const WhistListScreen = () => {
  // State to hold the wishlist data
  const [wishlist, setWishlist] = useState(initialData);

  // Logic to remove item from wishlist
  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <View className='bg-[#FFFFFF] flex-1'>
      {/* Header */}
      <View className='bg-[#01353B] pt-12 p-4'>
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-xl">Your Wishlist</Text>
          <Feather name="bell" size={24} color="#FFFFFF" />
        </View>
      </View>

      {/* Wishlist Section */}
      <View className="pt-8 px-4">
        <Text className="text-black text-lg font-bold">Courses in your Wishlist</Text>
      </View>

      {wishlist.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-500 text-lg">Your Wishlist is empty!</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 4 }}
          renderItem={({ item }) => (
            <Pressable className="bg-gray-100 rounded-lg p-4 m-2 flex-row items-center">
              <Image source={item.image} className="w-20 h-20 rounded-lg" resizeMode="cover" />
              <View className="ml-4 flex-1">
                <Text className="text-black text-lg font-bold">{item.title}</Text>
                <Text className="text-gray-500 text-sm mt-1">{item.price}</Text>
                <Text className="text-gray-400 text-sm">Rating: {item.rating}</Text>
              </View>
              <Pressable
                onPress={() => handleRemoveFromWishlist(item.id)}
                className="ml-4 p-2 rounded-lg bg-red-500"
              >
                <Feather name="trash" size={24} color="#FFFFFF" />
              </Pressable>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default WhistListScreen;
