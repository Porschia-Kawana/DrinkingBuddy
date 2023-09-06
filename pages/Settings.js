import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Settings</Text>
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
});