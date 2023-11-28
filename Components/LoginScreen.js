import { useState } from "react";
import { 
    StyleSheet,
    Text,
    Image,
    TextInput,
    ScrollView,
    Pressable,
    KeyboardAvoidingView
} from "react-native";

export default function LoginScreen(){
    const [username,onChangeUsername] = useState("")
    const [email,onChangeEmail] = useState("")
    const [password,onChangePassword] = useState("")

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
        Username
        </Text>
        <TextInput
            value={username}
            onChangeText={onChangeUsername}
            placeholder="Username"
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
        <Text style={styles.textInputText}>
        Password
        </Text>
        <TextInput
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            style= {styles.textInput}
            maxLength={64} 
        />
        <Pressable style={styles.signUpButton}>
            <Text style={styles.buttontext}>Signup</Text>
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
        fontSize:18,
        fontWeight:'500',
        paddingLeft:15,
        marginTop:8
    },
    textInput:{
        backgroundColor:'white',
        fontSize:18,
        color:'black',
        height:50,
        margin:12,
        borderWidth:2,
        borderColor:'grey',
        padding:10,
        borderRadius:12
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
        fontSize:24,
        fontWeight:'500',
        textAlign:'center',
        color:'black'
    }
})