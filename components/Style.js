import { StyleSheet } from 'react-native'

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

export default styles
  