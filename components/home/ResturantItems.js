import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Rating from "./Rating";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: [{ title: "Cafe" }, { title: "Bar" }],
    price: "$$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: [{ title: "Thai" }, { title: "Comfort Food" }],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    categories: [{ title: "Indian" }, { title: "Bar" }],
    price: "$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function ResturantItems({ navigation, ...props }) {
  return (
    <>
      {props.resturantData.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 10 }}
          key={index}
          onPress={() =>
            navigation.navigate("ResturantDetail", {
              title: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <ResturantImage url={restaurant.image_url} />
            <ResturantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const ResturantImage = (props) => (
  <>
    <Image
      source={{ uri: props.url }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 15 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const ResturantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>{props.name}</Text>
      <Text style={{ color: "grey", fontSize: 13 }}>30-45 mins </Text>
    </View>
    <Rating number={props.rating} color={"#f8e825"} />
  </View>
);
