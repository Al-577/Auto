import {View, Text, Image} from "react-native"
import {FC, useEffect, useState} from "react"
import { BASE_API_URL } from "../constants/api"
import { AutoType } from "../types"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 

import { getCarById } from "../queries/auto"

const AutoPageScreen = () => {
  const route = useRoute()
  const [auto, setAuto] = useState<AutoType|null>(null)
  const navigation = useNavigation()
  useEffect(() => {
    getCarById(route.params?.id).then(data => setAuto(data)).catch(e => console.log(e))
  }, [])
  if (auto == null) return null;
  return (
    <View style={{padding: 20}}>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: 'center'}}>
      <Ionicons onPress={() => navigation.goBack()} name="chevron-back" size={35} color="white" />
      <FontAwesome name="star-o" size={24} color={"white"} />
      </View>
      <Text style={{color: 'white', fontSize: 25, fontWeight: "500"}}>{auto.brand.name} {auto.model.name}</Text> 
      <View style={{width: "100%", justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
      <Image style={{width: 370, height: 250, borderRadius: 10, resizeMode: "center"}} source={{uri: `${BASE_API_URL}/${auto.picture}`}}/> 
      </View>
      <Text style={{color: 'white', fontSize: 20}}>Характеристики</Text>
      <View style={{paddingHorizontal: 50}}>
      <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 10}}>
      <Text style={{color: "grey"}}>Год выпуска</Text>
      <Text style={{color: "white"}}>{auto.year}</Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 10}}>
      <Text style={{color: "grey"}}>Цвет</Text>
      <Text style={{color: "white"}}>{auto.color}</Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 10}}>
      <Text style={{color: "grey"}}>Двигатель</Text>
      <Text style={{color: "white"}}>{auto.engine}</Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 10}}>
      <Text style={{color: "grey"}}>Коробка</Text>
      <Text style={{color: "white"}}>{auto.transmission}</Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 10}}>
      <Text style={{color: "grey"}}>Привод</Text>
      <Text style={{color: "white"}}>{auto.drive}</Text>
      </View>
      <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 10}}>
      <Text style={{color: "grey"}}>Регион</Text>
      <Text style={{color: "white"}}>{auto.region}</Text>
      </View>
      </View>
    </View>
  )
}

export default AutoPageScreen