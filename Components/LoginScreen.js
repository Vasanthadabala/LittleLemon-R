import { StyleSheet, View ,Text, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function LoginScreen(){
    return(
        <View>
        <Image 
            style = {styles.image} 
            source={require('../assets/logo.png')}
        />
        <Text style = {styles.headerText}>
            Welcome Back
        </Text>
        <Text style={styles.semiHeaderText}>
            Sigin information
        </Text>
    </View>
    )
}
const styles = StyleSheet.create({
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
        fontSize:22,
        fontWeight:'500',
        padding:10,
        marginTop:60
    }
})