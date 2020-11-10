import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, NativeModules, TouchableHighlight } from 'react-native';
import CodePush from 'react-native-code-push';

export default class Error extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.box1}>
                        <Text style={styles.textClimate}>Poxa tivemos um problema aqui</Text>
                        <Text style={styles.textClimate}>Tente novamente daqui a pouco!</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f2334',
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center"
    },
    box1: {
        flex: 1,
        backgroundColor: "#3e3fbb",
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center"

    },
    textClimate: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: '10%'
    },
});
