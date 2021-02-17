import  React from 'react';
import {Text,View,Button,Alert,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';


export default function Home (props)
{
console.log(props)


    return (
        <View style={styles.container}>
           
            <ImageBackground source={require('../assets/LOGO.png')}
            style={styles.bks}> 

           
            
            <TouchableOpacity style = {styles.btncadastro} onPress={()=>props.navigation.navigate('Produtos')}>

            <Text>Feminino</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btncadastro}>

            <Text>Masculino</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btncadastro}>

            <Text>Meninos</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btncadastro}>

            <Text>Meninas</Text>
            </TouchableOpacity>


            <Text><h1> Sua Loja Virtual </h1> </Text>

            </ImageBackground>
                    
                
        
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
   // fontFamily:"arial",
    fontSize:16,
    fontStyle:"italic"
    
},

btncadastro: {
    width:100,
    height:100,
    backgroundColor:"#fff",
    borderRadius:70,
    justifyContent:"center",
    textAlign:"center",
    marginTop:20,
},
txs:{
    fontSize:25,
    fontStyle:"italic",
    color:"#fff",
    alignItems:'center'


},

bks:{
    width:'100%',
    height:'100%'
},





})