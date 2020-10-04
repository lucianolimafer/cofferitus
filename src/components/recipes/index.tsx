import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons'; 



export default function Recipes() {
    return (
        <View>
            <Text style={styles.topic}>
                Nossos rituais
            </Text>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.lisCard}
            >

                <View style={styles.card}>
                    <View style={styles.cardBtn}>
                        <Entypo style={styles.icons} name="back-in-time" size={30} color="#13a69d" />
                        <Text style={styles.params}>2-4'</Text>
                        <FontAwesome5 style={styles.icons} name="thermometer-quarter" size={30} color="#13a69d" />
                        <Text style={styles.params}>100°</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardBtn}>
                        <Entypo style={styles.icons} name="back-in-time" size={30} color="#13a69d" />
                        <Text style={styles.params}>2-4'</Text>
                        <FontAwesome5 style={styles.icons} name="thermometer-quarter" size={30} color="#13a69d" />
                        <Text style={styles.params}>100°</Text>

                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardBtn}>
                        <Entypo style={styles.icons} name="back-in-time" size={30} color="#13a69d" />
                        <Text style={styles.params}>2-4'</Text>
                        <FontAwesome5 style={styles.icons} name="thermometer-quarter" size={30} color="#13a69d" />
                        <Text style={styles.params}>100°</Text>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    topic: {
        marginTop: 290,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 40,
        marginBottom: 15,
        color: '#13a69d'
    },
    lisCard: {
        padding: 10,
        bottom: 15,
        marginLeft: 30

    },
    card: {
        width: 160,
        height: 250,
        backgroundColor: '#f6af41',
        borderRadius: 10,
        marginRight: 20,
    },
    cardBtn: {
        backgroundColor: '#4e2e2e',
        height: 70,
        width: 160,
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    },
    params: {
        color: '#fff',
        margin: 5
    },
    icons: {
        marginLeft: 10
    }
})