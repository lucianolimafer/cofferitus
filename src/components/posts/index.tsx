import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';



export default function Posts() {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={styles.areaOne}>
                <Text style={styles.titleOne}>
                    Ritual do dia
                </Text>

                <Text style={styles.titleTwo}>
                    Café passado
                </Text>

                <Text style={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut rerum obcaecati laborum dolorum neque repudiandae doloribus libero voluptatum. Eum ducimus culpa repellendus cumque quam illo delectus? Dolorem laudantium quo nemo.
                </Text>
            </View>
            <View>
                <Image style={styles.imgOne} source={require('../../assets/icons/icons8-pour-100.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    areaOne:{
        width: '65%'
    },
    titleOne: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13a69d',
        marginTop: 50,
        marginLeft: 30
    },
    titleTwo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#452a28',
        marginLeft: 30
    },
    text: {
        fontSize: 12,
        fontWeight: '900',
        color: '#452a28',
        marginTop: 10,
        marginLeft: 30
    },
    imgOne: {
        marginTop: 80,
        marginRight: 20
    }
})