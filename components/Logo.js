import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Menu from './Menu';

export default function Logo() {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Image
                    style={styles.image}
                    source={require('../assets/alcohol.png')}
                />
                <Text style={styles.text}>Drinking Buddy</Text>
            </View>
            <Menu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffc300',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        paddingBottom: 10,
        borderBottomColor: '#001d3d',
        borderBottomWidth: 3,
        zIndex: 9
    },
    heading: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#000814'
    },
    image: {
        height: 40,
        width: 40,
        marginRight: 10,
        marginLeft: 20
    }
});