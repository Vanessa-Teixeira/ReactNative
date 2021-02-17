import  React from 'react';
import {Text,View,Button,Alert,StyleSheet,Image} from 'react-native';


export default function produtos ()
{



    return (
        <View style={styles.container}>
            <Text style={styles.txt}> Feminino</Text>
            
            
            <View style={styles.line}
            />

            <View style= {styles.cadeg}>
            <View style= {styles.cadeg1}>
                
                
            <Image source={require('../assets/1.jpg')}
            style ={styles.img}
            
            />
            <Text> Sapato Rosa 34/35</Text>
            <Text><p>R$45.00</p></Text>
                
            </View> 
            <View style={styles.cadeg1}> 
            <Image source={require('../assets/2.jpg')}
            style ={styles.img}
            />
           <Text> Sapato Preto piano 33/35</Text>
            <Text><p>R$80.00</p></Text>
             </View>
            </View>

            <View style={styles.line}
            />


            <View style= {styles.cadeg}>
            <View style= {styles.cadeg1}>
            <Image source={require('../assets/3.png')}
            style ={styles.img}
            />
            <Text> Sapato Preto  36/39</Text>
            <Text><p>R$100.00</p></Text>
            
            
            
            </View> 
            <View style={styles.cadeg1}> 
            <Image source={require('../assets/4.jpg')}
            style ={styles.img}
            /> 
            <Text> Sapato Piano</Text>
            <Text><p>R$200,00</p></Text>
            
            
            </View>
            </View>

            <View style={styles.line}
            />

            <View style= {styles.cadeg}>
            <View style= {styles.cadeg1}>
                <Image source={require('../assets/5.jpg')}
            style ={styles.img}
            />
            <Text> Sapato Preto 34/35</Text>
            <Text><p>R$ 45.00</p></Text>
            
            </View> 
            <View style={styles.cadeg1}>
            <Image source={require('../assets/6.jpg')}
            style ={styles.img}
            />
            <Text> Sapato varmelho 34/35</Text>
            <Text><p>R$75.00</p></Text>
             </View>
            </View>

            <View style={styles.line}
            />

            <View style= {styles.cadeg}>
            <View style= {styles.cadeg1}>
            <Image source={require('../assets/7.jpg')}
            style ={styles.img}
            />
            <Text> Sapato Rosa chiclete 34/35</Text>
            <Text><p>R$300.00</p></Text>
            
            
            </View> 
            <View style={styles.cadeg1}>
                 <Image source={require('../assets/8.png')}
            style ={styles.img}
            /> 
            <Text> Sapato Rosa 34/35</Text>
            <Text><p>R$123.00</p></Text>
            
            
            </View>
            </View>

           



            </View>
                
                
                
                
                
                
                
    )
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        //backgroundColor:",
        
    },

txt:{
    marginTop:10,
    fontFamily:"arial",
    fontSize:30,
    fontStyle:"italic"
    
},

line :{
    borderBottomColor:"#000",
    borderBottomWidth:2
},

cadeg: {
    flexDirection:"row",
    justifyContent:"space-around",
    marginLeft:5,
    marginTop:5,
    marginRight:5,
    //width:350,
    //height:350
    

    
},

cadeg1:{
    width:180,
    height:180,
    //backgroundColor:'red'
},

img: {
    width:100,
    height:100,
    alignItems:"center",
    marginVertical:10,
    marginLeft:8
    
    
}









})