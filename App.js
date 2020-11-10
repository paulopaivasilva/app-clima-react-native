import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native';
import { Tooltip, Card } from 'react-native-elements';
import axios from 'axios'
import Loading from './components/Loading'
import Error from './components/Error'
import { StatusClimate, StatusImageClimate, StatusHumidity } from './components/Status'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeCity: false,
      statusClimate: {},
      instructionsHumidity: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    this.getClima()
  }

  getClima = () => {
    axios.get('https://app-climate.herokuapp.com/api/clima')
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
              <Text style={styles.textLocation}>Diadema, SP</Text>
              <Text style={{ fontSize: 12, color: 'white', marginLeft: 16 }}>Alterar</Text>
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
                      popover={<Text style={{ color: 'white', fontSize: 11, lineHeight: 20 }}>Umidade BAIXA: &lt; 40%;{'\n'} Umidade NORMAL: 40% ~ 70%;{'\n'} Umidade ALTA: &gt; 70% {'\n'}
                    Quanto menor a Umidade no ar, mais riscos para a saúde.</Text>}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f2334',
    justifyContent: 'center',
  },
  location: {
    top: '13%',
    bottom: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  iconLocation: {
    width: 25,
    height: 25
  },
  textLocation: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 5
  },
  box1: {
    top: '8%',
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
    height: 50,
    width: 50,
    marginBottom: 5
  },
  infoClimate: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    width: '65%',
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
  },
  textStatus: {
    marginTop: 10,
    fontSize: 13,
    color: 'white'
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    backgroundColor: '#f3f3f6',
    alignItems: 'center',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  titleContent: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3e3fbb'
  },
  popoverImage: {
    height: '100%',
    width: '100%'
  },
  subtitleContent: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
    fontWeight: '300'
  },
  imageContent: {
    height: 80,
    width: 80,
    marginTop: 5,
    marginBottom: 5
  }
});
