import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Easing, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { getBrands } from '../queries/auto';
import BrandItem from './BrandItem';
import { Brand } from '../types';
import AutoContext, { AutoCtx } from '../contexts/auto-context';

const BrandList = ({show, setShow}: {show: boolean, setShow: (b: boolean) => void}) => {
  const bottomHeight = Dimensions.get("window").height - 110;
  const bottom = useRef(new Animated.Value(-bottomHeight)).current;
  const [open, setOpen] = useState(show);
  const [brands, setBrands] = useState<Array<Brand> | null>(null)
  useEffect(() => {
    if (show) {
      getBrands().then(data => setBrands(data)).catch(e => console.log(e));
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }
  return (
    <Animated.View
    style={[styles.root, { height: bottomHeight, bottom: bottom }]}>
      <TouchableOpacity style={{paddingTop: 20}} onPress={() => setShow(false)}>
        <Entypo name="cross" size={30} color="white" />
        <FlatList
          data={brands}
          renderItem={({item}) => <BrandItem picture={item.picture} name={item.name} _id={item._id}/>}
          
        />
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'black',
    padding: 20
  }
})

export default BrandList