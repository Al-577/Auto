import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import Auto from "../components/Auto";
import { AutoType } from "../types";

const FavoritesScreen = () => {
  const [cars, setCars] = useState<AutoType[]>([{
    "picture": "4214acf5-0c95-4062-b663-a1b574be5471.jpg",
    "brand":  {
      "_id": "639ab7525a08176a25492b6f",
      "name": "LADA (ВАЗ)",
      "picture": "4a865949-ea32-4447-a4e2-a10351abda23.jpg",
  },
    "model": {
      "name": "XRAY",
      "_id": "639ab9115a08176a25492b8d",
  },
    "drive": "передний",
    "transmission": "механика",
    "engine": "дизель",
    "color": "белый",
    "price": 735000,
    "region": "Казань",
    "_id": "639abbcd83c8e031783eeff9",
    "createdAt": "2022-12-15T06:16:45.937Z",
    "updatedAt": "2022-12-15T06:16:45.937Z",
    "__v": 0
},
{
  "_id": "639abae283c8e031783eeff7",
  "picture": "1d0b406a-780e-4cef-8998-d83e94b552b2.jpg",
  "brand": {
      "_id": "639ab7525a08176a25492b6f",
      "name": "LADA (ВАЗ)",
      "picture": "4a865949-ea32-4447-a4e2-a10351abda23.jpg",
      "createdAt": "2022-12-15T05:57:38.969Z",
      "updatedAt": "2022-12-15T05:57:38.969Z",
      "__v": 0
  },
  "model": {
      "_id": "639ab9115a08176a25492b8d",
      "name": "XRAY",
      "brand": "639ab7525a08176a25492b6f",
      "createdAt": "2022-12-15T06:05:05.397Z",
      "updatedAt": "2022-12-15T06:05:05.397Z",
      "__v": 0
  },
  "drive": "передний",
  "transmission": "механика",
  "engine": "дизель",
  "power": 106,
  "clearance": 20,
  "color": "белый",
  "price": 735000,
  "year": 2018,
  "region": "Казань",
  "createdAt": "2022-12-15T06:12:50.750Z",
  "updatedAt": "2022-12-15T06:12:50.750Z",
  "__v": 0
},
])
  return (
    <View>
      <FlatList columnWrapperStyle={{flexGrow: 1, justifyContent: 'space-around', marginTop: 20}} numColumns={2} data={cars} renderItem={({item}) => <Auto auto={item}/>}/>
    </View>
  );
};

export default FavoritesScreen;
