import { View, Text, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CourseItemProps {
  item: {
    id: string;
    image: any;
    title: string;
    price: string;
    rating: number;
  };
}
const CourseItem = ({ item }: CourseItemProps) => {
  // Log the image URL to the console
  console.log(item.image);
  const imageSource = { uri: item.image };
  return (
    <Pressable className="w-64 bg-gray-200 p-4 m-2 rounded-lg shadow-lg">
      <Image
        className="rounded-lg mt-2"
        style={{width: 240, height: 180}}
        source={item.image}
        resizeMode='cover'
      />
      <Text className="text-black text-lg font-bold">{item.title}</Text>
      <View className="flex-row items-center mt-1 justify-between">
        <Text className="text-gray-600 text-md font-bold">{item.price}</Text>
        <View className="flex-row items-center ml-2">
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text className="text-gray-600 text-sm ml-1">{item.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CourseItem;
