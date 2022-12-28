import {View, Text, TouchableOpacity, Image, StyleSheet} from "react-native"
import { Brand } from "../types"
import { BASE_API_URL } from "../constants/api"
import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { AutoCtx } from "../contexts/auto-context"

const BrandItem = ({name, picture, _id}: Brand) => {
  const navigation = useNavigation();
  const autoContext = useContext(AutoCtx)
  console.log(autoContext?.query);
  
  const onPress = () => {
    autoContext?.setQuery({...autoContext.query, brand: _id})
    navigation.navigate("AutoModelsScreen", {brand: _id})
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: `${BASE_API_URL}/${picture}`}}/>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.5,
  },
  image: {
    width: 30,
    height: 20,
    marginRight: 20
  },
  text: {
    color: 'white',
  }
})

export default BrandItem