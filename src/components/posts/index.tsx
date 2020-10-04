import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image,
    TouchableOpacity 
} from 'react-native';



export default function Posts() {
    return (
        <View>
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
            <View style={{flexDirection: 'row', alignSelf: 'center', padding: 10}}>
                <TouchableOpacity style={styles.btnLM}>
                    <Text style={styles.textBTN}>
                        Ler mais
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLM2}>
                    <Text style={styles.textBTN2}>
                        Preparar
                    </Text>
                </TouchableOpacity>
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
    },
    btnLM: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fceac7',
        borderWidth: 3,
        borderColor: '#f6af41',
        borderRadius: 20,
        width: 150,
        height: 35,
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    btnLM2: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#f6af41',
        borderWidth: 3,
        borderColor: '#f6af41',
        borderRadius: 20,
        width: 150,
        height: 35,
        alignItems: "center",
        justifyContent: "center"
    },
    textBTN: {
        fontWeight: 'bold',
        color: '#f6af41'
    },
    textBTN2: {
        fontWeight: 'bold',
        color: '#fff'
    }
})