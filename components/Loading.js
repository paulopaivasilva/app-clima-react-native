import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Loading extends React.Component{
    render(){
        return(
            <View style={this.props.active ? styles.container : styles.inactive}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/gifs/loading.gif')} style={styles.image} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5eff1', 
        height: '100%', 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    inactive: {
        display: 'none'
    },
    imageContainer: {
        height: '40%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        width:'100%',
        height: '80%'
    }
})