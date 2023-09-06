import * as React from 'react';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import { useBackHandler } from "@react-native-community/hooks"
import { useIsFocused } from '@react-navigation/native'


import Logo from '../components/Logo';
import Button from '../components/Button';

export default function Home({ navigation }) {

    const backActionHandler = () => {
        Alert.alert("Exit Drinking Buddy!", "Are you sure you want to exit this app?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    const isFocused = useIsFocused()

    React.useEffect(() => {
        if (isFocused) {
            BackHandler.addEventListener("hardwareBackPress", backActionHandler)
        }
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backActionHandler)
        }
    }, [isFocused])

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.content}>
                <View style={styles.consumptionBlock}>
                    <Text style={styles.consumptionBlockText}>8</Text>
                    <View>
                        <Text style={styles.consumptionBlockTitle}>Standard Drinks</Text>
                        <Text style={styles.consumptionBlockSubtitle}>consumed this week</Text>
                    </View>
                </View>
                <View style={styles.financeBlock}>
                    <View style={styles.shadowProp}>
                        <View style={styles.financeBlockCard}>
                            <Text style={styles.financeBlockText}>$17</Text>
                            <Text style={styles.financeBlockTitle}>Money Spent</Text>
                        </View>
                    </View>
                    <View style={styles.shadowProp}>
                        <View style={styles.financeBlockCard}>
                            <Text style={styles.financeBlockText}>$100</Text>
                            <Text style={styles.financeBlockTitle}>Weekly Budget</Text>
                        </View>
                    </View>
                </View>
                <Button title="Start your night!" onPress={() => navigation.navigate('Tracking')} />
                <Button title="View your progress" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc300',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 35,
    },
    financeBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    financeBlockCard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc300',
        borderRadius: 8,
        borderColor: '#ffc300',
        borderWidth: 1,
        padding: 10,
    },
    shadowProp: {
        shadowColor: '#001d3d',
        shadowOffset: { width: -10, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 8,
        elevation: 4,
        width: '45%',
    },
    financeBlockTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    financeBlockText: {
        fontSize: 32,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%',
        fontWeight: '100'
    },
    consumptionBlock: {
        borderColor: '#001d3d',
        borderWidth: 3,
        borderRadius: 100,
        height: 200,
        width: 200,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    consumptionBlockText: {
        fontSize: 48,
        textAlign: 'center',
        width: '100%',
        fontWeight: '100',
        padding: 0,
        margin: 0,
    },
    consumptionBlockTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    consumptionBlockSubtitle: {
        fontSize: 14,
        textAlign: 'center',
        width: '100%',
        marginBottom: 20
    }
});