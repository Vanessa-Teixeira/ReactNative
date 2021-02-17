import  React from 'react';
import {Text,View,Button,Alert,Image,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';


export default function Login (props)
{



    return (
        <View style={styles.container}>

            <Image source={require('../assets/logo.jpg')}
            style ={styles.logo}
            />
            <Text style={styles.txt}> Faça seu Login</Text>

            <TextInput placeholder="Digite seu E-mail"
            style={styles.input1}
            />

            <TextInput placeholder="Digite sua senha"
            style={styles.input1} secureTextEntry={true}/>

            <TouchableOpacity style = {styles.btncadastro} onPress={()=>props.navigation.navigate('Home')}>

                        <Text>Acessar</Text>
            </TouchableOpacity>
                

           



            
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#EE82EE"
    },

    logo:{
    width:150,
    height:150,
    borderRadius:100
    
},

input1: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#FFFFE0',
    fontSize: 15,
    borderRadius: 20
},

txt:{
    marginTop:10,
    //fontFamily:"arial",
    fontSize:16,
    fontStyle:"italic"
    
},

btncadastro: {
    width:100,
    height:50,
    backgroundColor:"#FFFFE0",
    borderRadius:70,
    justifyContent:"center",
    textAlign:"center",
    marginTop:20,
}



})