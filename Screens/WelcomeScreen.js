import { View,Text,Image,StyleSheet,Pressable} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WelcomeScreen({navigation}){

    const [firstName,onChangefirstName] = useState("")
    const [lastName,onChangeLastName] = useState("")

    useEffect(()=>{
        loadData();
    },[]);
    
    const loadData = async () => {
        try {
            const jsonString = await AsyncStorage.getItem("user");
            if (jsonString) {
                const userData = JSON.parse(jsonString);
                onChangefirstName(userData.firstName);
                onChangeLastName(userData.lastName);
                // You may need to add the logic for loading other data such as the switch state
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    return(
        <View style = {styles.container}>
            <Image 
            style = {styles.image} 
            source={require('../assets/logo.png')}
            />
             <Text style = {styles.headerText}>
                Welcome
            </Text>
            <Text style={styles.text}>Welcome <Text style={styles.welcomeText}> {firstName} {lastName} </Text></Text>
            <Pressable style={styles.signUpButton} onPress={() => {navigation.replace("Home")}}>
            <Text style={styles.buttontext}>Home</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        height:50,
        width:200,
        marginTop:40,
        marginStart:100
    },
    headerText:{
        fontSize:28,
        textAlign:"center",
        marginTop:20,
        backgroundColor:'#41544E',
        padding:40,
        color:'white',
        fontWeight:'500'
    },
    text:{
        fontSize:24,
        paddingTop:40,
        paddingBottom:20,
        textAlign:'center',
        fontWeight:'500'
    },
    welcomeText:{
        fontSize:24,
        fontWeight:'bold',

    },
    signUpButton:{
        backgroundColor:'yellow',
        height:50,
        margin:12,
        padding:10,
        borderRadius:12,
        marginTop:40,
        elevation:2
    },
    buttontext:{
        fontSize:22,
        fontWeight:'600',
        textAlign:'center',
        color:'black'
    }
})