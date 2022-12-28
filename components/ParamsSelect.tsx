import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import AutoContext, { AutoCtx } from "../contexts/auto-context";

const ParamsSelect = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (b: boolean) => void;
}) => {
  const autoContext = useContext(AutoCtx)
  
  const bottomHeight = Dimensions.get("window").height - 120;
  const bottom = useRef(new Animated.Value(-bottomHeight)).current;
  const [open, setOpen] = useState(show);
  const [openD, setOpenD] = useState(false);
  const [fuel, setFuel] = useState(null);
  const [items, setItems] = useState([
    { label: "бензин", value: "бензин" },
    { label: "дизель", value: "дизель" },
  ]);
  const [openTrans, setOpenTrans] = useState(false);
  const [trans, setTrans] = useState(null);
  const [treansItems, setTransItems] = useState([
    { label: "автомат", value: "автомат" },
    { label: "вариатор", value: "вариатор" },
    { label: "механика", value: "механика" },
  ]);

  const [openDrive, setOpenDrive] = useState(false);
  const [drive, setDrive] = useState(null);
  const [driveItems, setDriveItems] = useState([
    { label: "передний", value: "передний" },
    { label: "задний", value: "задний" },
    { label: "полный", value: "полный" },
  ]);

  const [openColor, setOpenColor] = useState(false);
  const [color, setColor] = useState(null);
  const [colorItems, setColorItems] = useState([
    { label: "белый", value: "белый" },
    { label: "чёрный", value: "чёрный" },
    { label: "красный", value: "красный" },
  ]);

  useEffect(() => {
    if (show) {
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
      style={[styles.root, { height: bottomHeight, bottom: bottom }]}
    >
      <TouchableOpacity onPress={() => setShow(false)}>
        <Entypo name="cross" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.items}>
        <DropDownPicker
          open={openTrans}
          value={trans}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          placeholder={"Коробка передач"}
          placeholderStyle={{ color: "white" }}
          items={treansItems}
          setOpen={setOpenTrans}
          onSelectItem={(item) => autoContext?.setQuery({...autoContext.query, transmission: item.value})}
          setValue={setTrans}
          setItems={setItems}
          labelStyle={{color: 'white'}}
          containerStyle={{marginBottom: 10}}
        />
        <DropDownPicker
          open={openDrive}
          value={drive}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          zIndex={1000}
          onSelectItem={(item) => autoContext?.setQuery({...autoContext.query, drive: item.value})}
          placeholder={"Привод"}
          containerStyle={{marginBottom: 10}}
          placeholderStyle={{ color: "white" }}
          items={driveItems}
          setOpen={setOpenDrive}
          labelStyle={{color: 'white'}}
          setValue={setDrive}
          setItems={setDriveItems}
        />
        <DropDownPicker
          open={openD}
          value={fuel}
          zIndex={801}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          placeholder={"Топливо"}
          
          placeholderStyle={{ color: "white" }}
          items={items}
          setOpen={setOpenD}
          onSelectItem={(item) => autoContext?.setQuery({...autoContext.query, engine: item.value})}
          setValue={setFuel}
          containerStyle={{marginBottom: 10}}
          setItems={setItems}
          labelStyle={{color: 'white'}}
        />
        <DropDownPicker
          open={openColor}
          value={color}
          zIndex={800}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          placeholder={"цвет"}
          onSelectItem={(item) => autoContext?.setQuery({...autoContext.query, color: item.value})}
          placeholderStyle={{ color: "white" }}
          items={colorItems}
          setOpen={setOpenColor}
          setValue={setColor}
          containerStyle={{marginBottom: 10}}
          setItems={setColorItems}
          labelStyle={{color: 'white'}}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "black",
    padding: 20,
  },
  items: {
    borderRadius: 10,
    backgroundColor: "rgba(28, 28, 30, 1)",
    padding: 10,
  },
  item: {
    color: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
    padding: 10,
  },
});

export default ParamsSelect;
