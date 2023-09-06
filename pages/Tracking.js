import * as React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Keyboard, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Button from '../components/Button';
import { Image } from 'react-native';

export default function Tracking({ navigation }) {
    const [openAddDrink, setOpenAddDrink] = React.useState(false)
    const today = new Date()
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    const data = [
        { volume: 0.570, percentage: 4.8, title: 'Pirate Life', vessel: 'Pint', type: 'beer' },
        { volume: 0.425, percentage: 4.8, title: 'Pirate Life', vessel: 'Schooner', type: 'beer' },
        { volume: 0.285, percentage: 4.8, title: 'Pirate Life', vessel: 'Pot', type: 'beer' },
        { volume: 0.150, percentage: 15.5, title: 'Shiraz', vessel: 'Glass', type: 'wine' },
        { volume: 0.750, percentage: 15.5, title: 'Shiraz', vessel: 'Bottle', type: 'wine' },
        { volume: 0.045, percentage: 40, title: 'Espresso Martini', vessel: null, type: 'cocktail' },
    ];

    return (
        <View style={styles.container} onPress={Keyboard.dismiss}>
            <Logo />
            <View style={styles.content}>
                <Text style={styles.heading}>{new Intl.DateTimeFormat("en-US", options).format(today)}</Text>
                <View style={styles.block}>
                    <View style={styles.shadowProp}>
                        <View style={styles.blockCard}>
                            <Text style={styles.blockText}>8</Text>
                            <Text style={styles.blockTitle}>Standard Drinks</Text>
                        </View>
                    </View>
                    <View style={styles.shadowProp}>
                        <View style={styles.blockCard}>
                            <Text style={styles.blockText}>$100</Text>
                            <Text style={styles.blockTitle}>Money Spent</Text>
                        </View>
                    </View>
                    <View style={styles.shadowProp}>
                        <View style={styles.blockCard}>
                            <Text style={styles.blockText}>4 hrs</Text>
                            <Text style={styles.blockTitle}>Length of Time</Text>
                        </View>
                    </View>
                    <View style={styles.shadowProp}>
                        <View style={styles.blockCard}>
                            <Text style={styles.blockText}>9 hrs</Text>
                            <Text style={styles.blockTitle}>Amount of Sleep</Text>
                        </View>
                    </View>
                    <View style={styles.shadowProp}>
                        <View style={styles.blockCard}>
                            <Text style={styles.blockText}>🙃</Text>
                            <Text style={styles.blockTitle}>Hangover</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.fullWidthContent}>
                <Text style={styles.heading}>Your Favourites</Text>
                <View style={styles.favoritesBlock}>
                    <FlatList
                        style={styles.favoritesList}
                        horizontal
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.listShadowProp}>
                                <View style={styles.listCard}>
                                    {item.vessel && (<Text style={styles.listSubtitle}>{item.vessel}</Text>)}
                                    <Text style={styles.listTitle}>{item.title}</Text>
                                    <Text style={styles.listText}>{((item.percentage * item.volume) * 0.789).toFixed(1)} ABV</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <Button title="Add new drink" onPress={() => setOpenAddDrink(!openAddDrink)} />
            </View>
            {openAddDrink && (
                <View style={styles.modalContent}>
                    <View style={styles.addDrinkForm}>
                        <View style={styles.modalHeading}>
                            <Text>ADD DRINK</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                            >
                                <Image
                                    style={styles.closeButtonImage}
                                    source={require('../assets/delete.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder={"item"}
                        />
                    </View>
                </View>
            )}
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
        justifyContent: 'space-between',
        padding: 35,
    },
    fullWidthContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10,
        width: '100%',
    },
    blockCard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc300',
        borderRadius: 8,
        borderColor: '#ffc300',
        borderWidth: 1,
        padding: 5,
        height: 100
    },
    shadowProp: {
        shadowColor: '#001d3d',
        shadowOffset: { width: -10, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 8,
        elevation: 4,
        width: '30%',
        height: 100
    },
    blockTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    blockText: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%',
        fontWeight: '100'
    },
    favoritesBlock: {
        height: 120,
        marginBottom: 20
    },
    favoritesList: {
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    listCard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc300',
        borderRadius: 8,
        borderColor: '#ffc300',
        borderWidth: 1,
        padding: 5,
        height: '100%',
    },
    listShadowProp: {
        shadowColor: '#001d3d',
        shadowOffset: { width: -10, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 8,
        elevation: 4,
        width: 100,
        height: 100,
        marginHorizontal: 10
    },
    listSubtitle: {
        fontSize: 12,
        textAlign: 'center',
        width: '100%',
    },
    listTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    listText: {
        fontSize: 18,
        fontWeight: '100',
        textAlign: 'center',
        width: '100%',
    },
    modalContent: {
        position: 'absolute',
        width: '100%',
        height: '90%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalHeading: {
        width: '100%',
        height: 50,
        borderBottomWidth: 2,
        borderBlockColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    closeButtonImage: {
        height: 30,
        width: 30,
    },
    addDrinkForm: {
        position: 'absolute',
        width: '80%',
        height: '60%',
        backgroundColor: '#fff',
        zIndex: 9,
        borderRadius: 10,
        opacity: 1
    },
    input: {
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 4,
        borderWidth: 1,
        margin: 2,
        width: '30%'
    }
});