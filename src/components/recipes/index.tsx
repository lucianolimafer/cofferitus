import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons'; 



export default function Recipes() {
    return (
        <View>
            <Text style={styles.topic}>
                Rituais recentes
            </Text>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.lisCard}
            >

                <View style={styles.card}>
                    <View style={styles.contentRecipes}>
                        <View style={styles.textAreaRecipes}>
                            <Text style={styles.titleRecipes}>Prensa Francesa</Text>
                            <Text style={styles.textRecipes}>Lorem ipsum dolor sit elit. Sunt reprehenderit molestias vvoluptas fugit cupiditate magni sint molestiae recusandae eos.</Text>
                        </View>
                        <View>
                            <Image style={styles.iconRecips} source={require('../../assets/icons/icons8-french-press-64.png')}/>
                        </View>
                    </View>
                    <View style={styles.cardBtn}>
                        <Entypo style={styles.icons} name="back-in-time" size={30} color="#13a69d" />
                        <Text style={styles.params}>2-4'</Text>
                        <FontAwesome5 style={styles.icons} name="thermometer-quarter" size={30} color="#13a69d" />
                        <Text style={styles.params}>100°</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.contentRecipes}>
                        <View style={styles.textAreaRecipes}>
                            <Text style={styles.titleRecipes}>Prensa Aerea</Text>
                            <Text style={styles.textRecipes}>Lorem ipsum dolor sit elit. Sunt reprehenderit molestias vvoluptas fugit cupiditate magni sint molestiae recusandae eos.</Text>
                        </View>
                        <View>
                            <Image style={styles.iconRecips} source={require('../../assets/icons/press-64.png')}/>
                        </View>
                    </View>
                    <View style={styles.cardBtn}>
                        <Entypo style={styles.icons} name="back-in-time" size={30} color="#13a69d" />
                        <Text style={styles.params}>2-4'</Text>
                        <FontAwesome5 style={styles.icons} name="thermometer-quarter" size={30} color="#13a69d" />
                        <Text style={styles.params}>100°</Text>
                    </View>
                    <View style={styles.cardBtn}>
                        <Entypo style={styles.icons} name="back-in-time" size={30} color="#13a69d" />
                        <Text style={styles.params}>2-4'</Text>
                        <FontAwesome5 style={styles.icons} name="thermometer-quarter" size={30} color="#13a69d" />
                        <Text style={styles.params}>100°</Text>

                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.contentRecipes}>
                        <View style={styles.textAreaRecipes}>
                            <Text style={styles.titleRecipes}>Prensa Francesa</Text>
                            <Text style={styles.textRecipes}>Lorem ipsum dolor sit elit. Sunt reprehenderit molestias vvoluptas fugit cupiditate magni sint molestiae recusandae eos.</Text>
                        </View>
                        <View>
                            <Image style={styles.iconRecips} source={require('../../assets/icons/icons8-french-press-64.png')}/>
                        </View>
                    </View>
                    <View style={styles.cardBtn}>
                        <Entypo style={styles.icons} name="back-in-time" size={30} color="#13a69d" />
                        <Text style={styles.params}>2-4'</Text>
                        <FontAwesome5 style={styles.icons} name="thermometer-quarter" size={30} color="#13a69d" />
                        <Text style={styles.params}>100°</Text>
                    </View>
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
    },
    contentRecipes:{
        flexDirection: "row",
    },
    textAreaRecipes: {
        width: '60%'
    },
    titleRecipes: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10
    },
    textRecipes: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 11
    },
    iconRecips: {
        marginTop: 30,
        height: 120
    }
})