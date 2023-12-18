import { 
    StyleSheet,
    Text, 
    View , 
    Image, 
    TextInput, 
    FlatList,
    TouchableOpacity,
    Pressable,
    ScrollView,
    Switch,
    SafeAreaView,
} from "react-native";
import { useState } from "react";
import Checkbox from 'expo-checkbox';

export default function ProfileScreen({navigation}){
    const [firstName,onChangefirstName] = useState("")
    const [lastName,onChangeLastName] = useState("")
    const [email,onChangeEmail] = useState("")
    const [phoneNumber,onChangePhonenumber] = useState("")

    const [isSwitchOn, setISSwitchOn] = useState(false);
    
    return(
        <View style = {styles.container}>
            <ScrollView style = {{padding:5}}>
            <Text style={styles.headerText}>Personal Information</Text>
            <View style = {styles.rowTop}>
                <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
                    <Image 
                    style = {styles.profileImage} 
                    source={require('../assets/person1.jpeg')}
                    />
                </TouchableOpacity>
                <Pressable style={styles.changeButton} onPress={()=> navigation.navigate("Home")}>
                    <Text style={styles.changeButtontext}>Change</Text>
                </Pressable>
                <Pressable style={styles.removeButton} onPress={()=> navigation.navigate("Home")}>
                    <Text style={styles.removeButtontext}>Remove</Text>
                </Pressable>
            </View>
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
                placeholder="Password"
                style= {styles.textInput}
                maxLength={64} 
            />
            <Text style={styles.textInputText}>
                Phonenumber
            </Text>
            <TextInput
                value={phoneNumber}
                onChangeText={onChangePhonenumber}
                placeholder="Phonenumber"
                style= {styles.textInput}
                maxLength={14} 
            />
            <Text style={styles.chechBoxTextHeader}>
                Email notifications
            </Text>
            <View style = {styles.checBoxRow}>
            <Checkbox
                value ={isSwitchOn}
                onValueChange={setISSwitchOn}
                color={isSwitchOn ? '#41544E': undefined}
                style={styles.checkBox}
            />
            <Text style={styles.checkBoxText}>Order status</Text>
            </View>
            <View style = {styles.checBoxRow}>
            <Checkbox
                value ={isSwitchOn}
                onValueChange={setISSwitchOn}
                color={isSwitchOn ? '#41544E': undefined}
                style={styles.checkBox}
            />
            <Text style={styles.checkBoxText}>Password changes</Text>
            </View>
            <View style = {styles.checBoxRow}>
            <Checkbox
                value ={isSwitchOn}
                onValueChange={setISSwitchOn}
                color={isSwitchOn ? '#41544E': undefined}
                style={styles.checkBox}
            />
            <Text style={styles.checkBoxText}>Special offers</Text>
            </View>
            <View style = {styles.checBoxRow}>
            <Checkbox
                value ={isSwitchOn}
                onValueChange={setISSwitchOn}
                color={isSwitchOn ? '#41544E': undefined}
                style={styles.checkBox}
            />
            <Text style={styles.checkBoxText}>Newsletter</Text>
            </View>
            <Pressable style={styles.logOutButton} onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.buttontext}>Log out</Text>
            </Pressable>
            <View style = {styles.rowBottom}>
                <Pressable style={styles.discardButton} onPress={()=> navigation.navigate("Home")}>
                    <Text style={styles.discardButtonText}>Discard Changes</Text>
                </Pressable>
                <Pressable style={styles.saveButton} onPress={()=> navigation.navigate("Home")}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </Pressable>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        margin:5,
        marginLeft:8
    },
    rowTop:{
        flexDirection:'row',
        margin:5,
        marginLeft:8,
        marginBottom:5
    },
    profileImage:{
        height:90,
        width:90,
        borderRadius:60,
        resizeMode:'center'
    },
    changeButton:{
        backgroundColor:'#41544E',
        height:50,
        width:110,
        padding:10,
        borderRadius:12,
        elevation:2,
        marginTop:30,
        marginLeft:20,
        borderColor:'#41544E',
        borderWidth:2
    },
    changeButtontext:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        color:'white'
    },
    removeButton:{
        backgroundColor:'white',
        height:50,
        width:110,
        padding:10,
        borderRadius:12,
        elevation:2,
        marginTop:30,
        marginLeft:20,
        borderColor:'#41544E',
        borderWidth:2
    },
    removeButtontext:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        color:'#41544E'
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
    chechBoxTextHeader:{
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        marginLeft:12,
    },
    checBoxRow:{
        flexDirection:'row',
        marginLeft:12,
        margin:10
    },
    checkBox:{
        padding:12
    },
    checkBoxText:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:12
    },
    logOutButton:{
        backgroundColor:'yellow',
        height:50,
        margin:12,
        padding:10,
        borderRadius:12,
        marginTop:10,
        elevation:2
    },
    buttontext:{
        fontSize:22,
        fontWeight:'600',
        textAlign:'center',
        color:'black'
    },
    rowBottom:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-evenly'
    },
    discardButton:{
        backgroundColor:'white',
        height:50,
        width:150,
        padding:10,
        borderRadius:12,
        elevation:2,
        borderColor:'#41544E',
        borderWidth:2
    },
    discardButtonText:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        color:'#41544E'
    },
    saveButton:{
        backgroundColor:'#41544E',
        height:50,
        width:150,
        padding:10,
        borderRadius:12,
        elevation:2,
        borderColor:'#41544E',
        borderWidth:2
    },
    saveButtonText:{
        fontSize:18,
        fontWeight:'600',
        textAlign:'center',
        color:'white'
    },
})