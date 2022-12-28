import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Text, View } from '../components/Themed'

export default function TabTwoScreen() {
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
  const [openModel, setOpenModel] = useState(false);
  const [model, setModel] = useState(null);
  const [modelItems, setModelItems] = useState([
    { label: "bmw", value: "bmw" },
    { label: "lada", value: "lada" },
    { label: "ВАЗ", value: "ВАЗ" },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.items}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Загрузить изображение</Text>
      </TouchableOpacity>
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
          setValue={setTrans}
          setItems={setItems}
          labelStyle={{color: 'white'}}
          containerStyle={{marginBottom: 10}}
        />
        <DropDownPicker
          open={openModel}
          value={model}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          placeholder={"Выберите модель"}
          placeholderStyle={{ color: "white" }}
          items={modelItems}
          setOpen={setOpenModel}
          setValue={setModel}
          zIndex={1000}
          setItems={setModelItems}
          labelStyle={{color: 'white'}}
          containerStyle={{marginBottom: 10}}
        />
        <DropDownPicker
          open={openModel}
          value={model}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          placeholder={"Год"}
          placeholderStyle={{ color: "white" }}
          items={modelItems}
          setOpen={setOpenModel}
          setValue={setModel}
          zIndex={1000}
          setItems={setModelItems}
          labelStyle={{color: 'white'}}
          containerStyle={{marginBottom: 10}}
        />
        <DropDownPicker
          open={openModel}
          value={model}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          placeholder={"Цена автомобиля"}
          placeholderStyle={{ color: "white" }}
          items={modelItems}
          setOpen={setOpenModel}
          setValue={setModel}
          zIndex={1000}
          setItems={setModelItems}
          labelStyle={{color: 'white'}}
          containerStyle={{marginBottom: 10}}
        />
        <DropDownPicker
          open={openModel}
          value={model}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          placeholder={"Описание"}
          placeholderStyle={{ color: "white" }}
          items={modelItems}
          setOpen={setOpenModel}
          setValue={setModel}
          zIndex={1000}
          setItems={setModelItems}
          labelStyle={{color: 'white'}}
          containerStyle={{marginBottom: 10}}
        />
        <DropDownPicker
          open={openDrive}
          value={drive}
          style={{
            backgroundColor: "rgba(28, 28, 30, 1)",
          }}
          zIndex={900}
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
          placeholderStyle={{ color: "white" }}
          items={colorItems}
          setOpen={setOpenColor}
          setValue={setColor}
          containerStyle={{marginBottom: 10}}
          setItems={setColorItems}
          labelStyle={{color: 'white'}}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  items: {
    borderRadius: 10,
    backgroundColor: "rgba(28, 28, 30, 1)",
    padding: 10,
  },
  btn: {
    backgroundColor: "#1e2c46",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 10
  },
  btnText: {
    color: "#667eb6"
  }
});
