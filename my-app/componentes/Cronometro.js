import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function Cronometro() {
    const [display, setDisplay] = useState('00;00;00')
    const [botaoTexto, setBotaoTexto] = useState('Iniciar')
    const [ultimoTempo, setUltimoTempo] = useState(null)

    function start() {
        if (timer != null) {
            clearInterval(timer);
            timer = null;
            setBotaoTexto('Iniciar')
        } else {
            timer = setInterval(()=>{
                ss++
                if (ss == 60) {
                    mm++
                    ss = 0
                }
                if (mm == 60) {
                    hh++
                    mm = 0
                }

                let format = (hh<10?'0':'') + hh
                 + ':' + (mm<10?'0':'') + mm 
                 + ':' + (ss<10?'0':'') + ss;

                setDisplay(format)

            },100)

            setBotaoTexto('Parar')

        }
    }



    function clear() {
        if (timer != null) {
            clearInterval(timer);
            timer = null;

        }

        ss = 0;
        mm = 0;
        hh = 0;
        
        setUltimoTempo(display)

        setDisplay('00:00:00')
        setBotaoTexto('Iniciar')
    }


        
    return (
        <View style={styles.container}>
            <Image style={styles.img} 
            source={require('../assets/clock.png')}
            />

            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>

            <View style={styles.botaoArea}>

                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={start}
                >
                    <Text style={styles.botaoTexto}>{botaoTexto}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={clear}
                >
                    <Text style={styles.botaoTexto}>Limpar</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.ultimoTempoArea}>
                <Text style={styles.ultimoTempoTexto}>{ultimoTempo ? ultimoTempo : '00:00:00'}
                </Text>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        gap:30
    },
    img:{
        width:400,
        height:800,
    },
    display:{
        backgroundColor:'blue',
        paddingLeft:20,
        paddingRight:20,
        borderRadius:50,
    },
    displayText:{
        fontSize:60,
        color:'#f1f0ba'
    },
    botaoArea:{
        flexDirection:'row',
        height:100,
        gap:20,
        marginLeft:20,
        marginRight:20,
    },
    botao:{
        flex:1,
        borderWidth:1,
        borderColor:'#8e3343',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#c6cd78',
        borderRadius:50,
    },
    botaoTexto:{
        fontSize:30,
        color:'green',
        fontWeight:'bold',
    },
    ultimoTempoArea:{
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    ultimoTempoTexto:{
        flex:1,
        fontSize:30,
        color:'green',
        fontStyle:'italic',
        backgroundColor:'#c6cd78',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,

    }
})
