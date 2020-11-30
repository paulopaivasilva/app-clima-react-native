import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Tooltip, Card } from 'react-native-elements';
import axios from 'axios'
import Loading from './components/Loading'
import Error from './components/Error'
import { StatusClimate, StatusImageClimate, StatusHumidity } from './components/Status'
import styles from './components/Style'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusClimate: {},
      instructionsHumidity: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    SplashScreen.preventAutoHideAsync();
    this.getLocation()
  }

  getLocation = () => {
    let location;
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        location = { lat: latitude, long: longitude};
        this.getClima(location);
      }
    )
  }

  getClima = (location) => {
    axios.get('https://app-climate.herokuapp.com/api/clima', { params: { latitude: location.lat, longitude: location.lon}})
      .then(res => {
        this.setState({ statusClimate: res.data.climate, instructionsHumidity: res.data.instructions, loading: false })
      })
      .catch(err => this.setState({ error: true }))
  }

  setStatusClimate = (status) => {
    return StatusClimate(status)
  }

  renderCard = ({ item }) => (
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>{item.text}</Text>
    </Card>
  )

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.error ? <Error /> : this.state.loading ? <Loading active={this.state.loading} /> :
          <View style={{flex: 1}}>
            <View style={styles.location}>
              <Image style={styles.iconLocation} source={require('./assets/icons/placeholder.png')} />
              <Text style={styles.textLocation}>{this.state.statusClimate.city_name}</Text>
            </View>
            <View style={styles.box1}>
              <Image style={styles.icon} source={StatusImageClimate(this.state.statusClimate.condition_slug)} />
              <Text style={styles.textClimate}>No momento {StatusClimate(this.state.statusClimate.condition_slug)}!</Text>
              <View style={styles.infoClimate}>
                <View style={styles.viewInfo}>
                  <Image style={styles.iconCLimate} source={require('./assets/icons/temperature.png')} />
                  <Text style={styles.textClimate}>{this.state.statusClimate.temp}°C</Text>
                </View>
                <View style={styles.viewInfo}>
                  <Image style={styles.iconCLimate, { height: 85, width: 85 }} source={require('./assets/draws/refreshing_beverage.png')} />
                </View>
                <View style={styles.viewInfo}>
                  <Image style={styles.iconCLimate} source={require('./assets/icons/humidity.png')} />
                  <Text style={styles.textClimate}>{this.state.statusClimate.humidity}%</Text>
                </View>
              </View>
              <Text style={styles.textStatus}>Fonte: HG Brasil</Text>
              <View style={styles.content}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.titleContent}>A umidade do ar está {StatusHumidity(this.state.statusClimate.humidity)}!</Text>
                  <View style={{ marginTop: 14, marginLeft: 5, width: 20, height: 20 }}>
                    <Tooltip
                      popover={<Text style={{ color: 'white', fontSize: 11, lineHeight: 20 }}>Umi. BAIXA: &lt; 40%;{'\n'} Umi. NORMAL: 40% ~ 70%;{'\n'} Umi. ALTA: &gt; 70% {'\n'}
                      O melhor status da umidade para o nosso corpo é quando ela está NORMAL.</Text>}
                      height={160} overlayColor="none" backgroundColor="#3e3fbb">
                      <Image style={styles.popoverImage} source={require('./assets/icons/info.png')} />
                    </Tooltip>
                  </View>
                </View>
                <Text style={styles.subtitleContent}>Veja abaixo algumas dicas para se cuidar</Text>
                <FlatList
                  contentContainerStyle={{ paddingBottom: 75 }}
                  data={this.state.instructionsHumidity}
                  renderItem={this.renderCard}
                  keyExtractor={item => item.id} />
              </View>
            </View>
          </View>
        }
      </SafeAreaView>
    );
  }
}