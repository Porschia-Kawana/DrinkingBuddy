import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Menu() {
    const [showMenu, setShowMenu] = React.useState(false)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
                <Image
                    style={styles.image}
                    source={require('../assets/menu.png')}
                />
            </TouchableOpacity>
            {showMenu && (
                <View style={styles.dropdown}>
                    <View style={styles.dropdownItem}>
                        <Text>Profile</Text>
                        <Image
                            style={styles.dropdownItemImage}
                            source={require('../assets/employee.png')}
                        />
                    </View>
                    <View style={styles.dropdownItem}>
                        <Text>Calendar</Text>
                        <Image
                            style={styles.dropdownItemImage}
                            source={require('../assets/calendar.png')}
                        />
                    </View>
                    <View style={styles.dropdownItem}>
                        <Text>Calculator</Text>
                        <Image
                            style={styles.dropdownItemImage}
                            source={require('../assets/calculator.png')}
                        />
                    </View>
                    <View style={styles.dropdownItem}>
                        <Text>Settings</Text>
                        <Image
                            style={styles.dropdownItemImage}
                            source={require('../assets/gear.png')}
                        />
                    </View>
                    <View style={styles.dropdownItem}>
                        <Text>Drinks</Text>
                        <Image
                            style={styles.dropdownItemImage}
                            source={require('../assets/alcohol.png')}
                        />
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        flex: 1,
        alignItems: 'flex-end',
        bottom: 15
    },
    image: {
        height: 30,
        width: 30,
        marginRight: 20
    },
    dropdown: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#003566',
        flexWrap: 'wrap',
        top: 45,
        flex: 1,
        width: '100%',
        borderBottomColor: '#003566',
        borderBottomWidth: 1,
        borderTopColor: '#003566',
        borderTopWidth: 1,
        right: 0,
    },
    dropdownItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        width: '30%',
        borderColor: '#003566',
        borderWidth: 2,
        backgroundColor: '#ffc300',
    },
    dropdownItemImage: {
        height: 30,
        width: 30,
    }
});