import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home({ navigation }) {

    setTimeout(() => { navigation.navigate('Home') }, 2000)

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Drinking Buddy</Text>
            <Image
                style={styles.image}
                source={require('../assets/alcohol.png')}
            />
            <ActivityIndicator style={styles.loading} size="large" color="#001d3d" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc300',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 38,
        color: '#001d3d',
        fontWeight: 'bold'
    },
    image: {
        width: 250,
        height: 250,
        margin: 40,
    },
    loading: {
        bottom: -40
    }
});
