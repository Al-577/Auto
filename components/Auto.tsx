import { View, Text, Image, TouchableOpacity } from "react-native";
import { AutoType } from "../types";
import { FC } from "react";
import { BASE_API_URL } from "../constants/api";
import { useNavigation } from "@react-navigation/native";

type AutoProps = {
  auto: AutoType;
};

const Auto: FC<AutoProps> = ({ auto }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AutoPageScreen", { id: auto._id })}
    >
      <Image
        style={{
          width: 170,
          height: 130,
          borderRadius: 10,
          resizeMode: "center",
        }}
        source={{ uri: `${BASE_API_URL}/${auto.picture}` }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 15,
          fontWeight: "500",
          paddingTop: 4,
        }}
      >
        {auto.price.toString() + " ₽"}
      </Text>
      <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
        {auto.brand.name} {auto.model.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Auto;
