import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <Image style={styles.icon} source={require('./assets/icons/sun.png')} />
        <Text style={styles.textClimate}>Hoje o dia está ensolarado</Text>
        <View style={styles.infoClimate}>
          <View style={styles.viewInfo}>
            <Image style={styles.iconCLimate} source={require('./assets/icons/temperature.png')} />
            <Text style={styles.textClimate}>28º C</Text>
          </View>
          <View style={styles.viewInfo}>
            <Image style={styles.iconCLimate} source={require('./assets/icons/humidity.png')} />
            <Text style={styles.textClimate}>80%</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f2334',
    justifyContent: 'center',
  },
  box1: {
    top: '15%',
    flex: 1,
    backgroundColor: "#3e3fbb",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontWeight: "bold"
  },
  icon: {
    marginTop: 10,
    height: 60,
    width: 60,
    marginBottom: 5
  },
  infoClimate: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    width: '70%',
  },
  viewInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconCLimate: {
    width: 45,
    height: 45,
    marginBottom: 5
  },
  textClimate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});
