import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState, useContext } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { AutoCtx } from '../contexts/auto-context';
import { getModels } from '../queries/auto';

const AutoModelsScreen = () => {
  const route = useRoute();
  const [models, setModels] = useState([]);
  const autoContext = useContext(AutoCtx)
  const navigation = useNavigation()
  useEffect(() => {
    getModels(route.params?.brand).then(data => setModels(data)).catch(e => console.log(e))
  }, [])
  return (
    <View style={styles.root}>
      <FlatList 
        data={models}
        renderItem={({item}) => <TouchableOpacity onPress={() => {
          autoContext?.setQuery({...autoContext.query, model: item._id})
          navigation.navigate("Root")
        }} style={styles.model}><Text style={styles.text}>{item.name}</Text></TouchableOpacity>}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 20,

  },
  model: {
    padding: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: "500"
  }
})

export default AutoModelsScreen