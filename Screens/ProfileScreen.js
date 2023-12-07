import { 
    StyleSheet,
    Text, 
    View , 
    Image, 
    TextInput, 
    FlatList,
    TouchableOpacity
} from "react-native";

export default function ProfileScreen(){
    return(
        <View style = {styles.container}>
            <Text style={styles.headerText}>Profile Information</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
                    <Image 
                    style = {styles.profileImage} 
                    source={require('../assets/person1.jpeg')}
                    />
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    headerText:{
        fontSize:28
    },
    profileImage:{
        height:100,
        width:100,
        borderRadius:60,
        resizeMode:'center',
        marginTop:10
    }
})