import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useContext, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import Auto from "../components/Auto";
import BrandList from "../components/BrandList";

import EditScreenInfo from "../components/EditScreenInfo";
import ParamsSelect from "../components/ParamsSelect";
import { Text, View } from "../components/Themed";
import { AutoCtx } from "../contexts/auto-context";
import { getCars } from "../queries/auto";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {

  const [showBrands, setShowBrands] = useState(false)
  const [showParamsSelect, setShowParamsSelect] = useState(false)
  const [cars, setCars] = useState([])
  const autoContext = useContext(AutoCtx)
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.inp} onPress={() => setShowBrands(true)}>
          <Text>марка, модель</Text>
        </TouchableOpacity>
        <View style={styles.second}>
          <TouchableOpacity style={styles.year}><Text>год</Text></TouchableOpacity>
          <TouchableOpacity style={styles.price}><Text>цена</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setShowParamsSelect(true)} style={styles.par}><Text>Параметры</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.third}>
          <Text>Казань</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText} onPress={() => {
          console.log('tap')
          getCars(autoContext?.query).then(data => setCars(data)).catch(e => console.log(e))
        }}>Показать результат</Text>
      </TouchableOpacity>
      <FlatList columnWrapperStyle={{flexGrow: 1, justifyContent: 'space-around', marginTop: 20}} numColumns={2} data={cars} renderItem={({item}) => <Auto auto={item}/>}/>
      <ParamsSelect show={showParamsSelect} setShow={setShowParamsSelect}/>
      <BrandList show={showBrands} setShow={setShowBrands}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  search: {
    marginTop: 15,
  },
  inp: {
    backgroundColor: "rgba(28, 28, 30, 1)",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    color: "white",
    marginBottom: 2
  },
  second: {
    flexDirection: "row",
  }, 
  year: {
    backgroundColor: "rgba(28, 28, 30, 1)",
    padding: 10,
    flex: 3,
    alignItems: "center"
  },
  price: {
    backgroundColor: "rgba(28, 28, 30, 1)",
    padding: 10,
    flex: 3,
    alignItems: "center",
    marginHorizontal: 2,
  },
  par: {
    backgroundColor: "rgba(28, 28, 30, 1)",
    padding: 10,
    flex: 6,
    alignItems: "center"
  },
  third: {
    backgroundColor: "rgba(28, 28, 30, 1)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
    color: "white",
    marginTop: 2
  },
  btn: {
    backgroundColor: "#1e2c46",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 10,
    
  },
  btnText: {
    color: "#667eb6"
  }
});
