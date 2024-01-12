import { useState,useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet,Text,Image,TextInput,ScrollView,Pressable,KeyboardAvoidingView} from "react-native";

export default function LoginScreen({navigation}){
    const [email,onChangeEmail] = useState("")
    const [firstName,onChangefirstName] = useState("")
    const [lastName,onChangeLastName] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    const user = {firstName,lastName,email};

    useEffect(() => {
        const firstname = firstName?.length > 3;
        const lastname = lastName?.length > 3;
        const emailValid = email?.length > 6 && email?.includes("@");
        if (firstname && lastname && emailValid) setIsButtonDisabled(false);
        else setIsButtonDisabled(true);
      }, [email, firstName,lastName]);

    const storeData = async()=>{
        try{
            await AsyncStorage.setItem("user",JSON.stringify(user));
            navigation.replace("Welcome")
        }catch(e){
            console.error("Error",e)
        }
    };

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : 'height'}
        style={styles.container}
      >
        <ScrollView keyboardDismissMode="on-drag">
        <Image 
            style = {styles.image} 
            source={require('../assets/logo.png')}
        />
        <Text style = {styles.headerText}>
        Lets get to know you
        </Text>
        <Text style={styles.semiHeaderText}>
        Personal Information
        </Text>

        <Text style={styles.textInputText}>
            Firstname
        </Text>
        <TextInput
            value={firstName}
            onChangeText={onChangefirstName}
            placeholder="Firstname"
            style= {styles.textInput}
            maxLength={64} 
        />
        <Text style={styles.textInputText}>
            Lastname
        </Text>
        <TextInput
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder="Lastname"
            style= {styles.textInput}
            maxLength={64} 
        />
        <Text style={styles.textInputText}>
        Email
        </Text>
        <TextInput
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Email"
            style= {styles.textInput}
            maxLength={64} 
        />
        <Pressable style={[styles.nextButton, isButtonDisabled && styles.disabledButton]} disabled={isButtonDisabled} onPress={() => {storeData()}}>
            <Text style={styles.buttontext}>Next</Text>
        </Pressable>
    </ScrollView>
    </KeyboardAvoidingView>
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
    semiHeaderText:{
        fontSize:24,
        fontWeight:'500',
        paddingLeft:12,
        marginTop:60,
        marginBottom:20
    },
    textInputText:{
        fontSize:16,
        fontWeight:'500',
        marginTop:5,
        marginLeft:12
    },
    textInput:{
        backgroundColor:'white',
        fontSize:18,
        color:'black',
        height:50,
        margin:10,
        borderWidth:2,
        borderColor:'grey',
        padding:10,
        borderRadius:12
    },
    nextButton:{
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
    },
    disabledButton: {
        backgroundColor: "#D3D3D3",
      },
})