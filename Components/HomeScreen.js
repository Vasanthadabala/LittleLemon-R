import { StyleSheet, Text, View , Image, TextInput, FlatList} from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen(){

    const [searchText,onChangesearchText] = useState("")
    const categories = ["Menu","Mains","Starters","Desserts"]

    const renderItem = ({item})=>(
        <View style = {[styles.categoryButton,Platform.OS === 'android' && { marginLeft:14}]}>
            <Text style= {[styles.categoryButtonText,Platform.OS === 'android' && { fontWeight:'900'}]}>{item}</Text>
        </View>);

    return(
        <View style = {styles.container}>
            <Image 
            style = {styles.logoImage} 
            source={require('../assets/logo.png')}
            />

            <View style = {styles.upperPanel}>
                <Text style = {[styles.upperHeader1,Platform.OS === 'android' && { fontFamily: 'serif' }]}>
                    Little lemon
                </Text>
                <Text style = {[styles.upperHeader2,Platform.OS === 'android' && { fontFamily: 'serif' }]}>
                    Chicago
                </Text>
                <View style = {styles.upperRowStyle}>
                    <Text style = {[styles.upperRowText,Platform.OS === 'android' && { fontFamily: 'sans-serif' }]}>
                        We are a family owned Mediterranean restaurant,focused on traditional 
                        recipes served with a modern twist.
                    </Text>
                    <Image 
                    style = {styles.upperRowImage} 
                    source={require('../assets/upperpanelimage.jpg')}
                    />
                </View>
                <View style = {styles.searchContainer}>
                    <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
                    <TextInput
                    value={searchText}
                    onChangeText={onChangesearchText}
                    placeholder="Search Phrase"
                    style= {styles.SearctInputText}
                    maxLength={48} 
                />
                </View>
            </View>

            <View>
                <Text style = {[styles.oderText,Platform.OS === 'android' && { fontWeight:'bold' }]}>ORDER FOR DELIVERY</Text>
                <FlatList data = {categories} renderItem={renderItem} horizontal = {true}/>
                <FlatList data={categories} renderItem={renderItem} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upperPanel:{
        backgroundColor:'#41544E',
        padding:15
    },
    logoImage:{
        height:50,
        width:200,
        marginTop:40,
        marginStart:100
    },
    upperHeader1:{
        fontSize:32,
        fontWeight:'bold',
        color:'yellow',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 5
    },
    upperHeader2:{
        fontSize:26,
        fontWeight:'bold',
        color:'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 5
    },
    upperRowStyle:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-evenly'
    },
    upperRowText:{
        fontSize:19,
        color:'white',
        fontWeight:'500',
        flex:1
    },
    upperRowImage:{
        height:130,
        width:20,
        borderRadius:10,
        flex:.5,
        marginStart:10
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 20,
        marginBottom: 10,
        padding:5,
        position: 'relative',
        backgroundColor:'white'
      },
    SearctInputText:{
        flex: 1,
        height: 40,
        fontSize: 18,
        color: 'black',
        paddingLeft: 40,
        fontWeight:'500'
    },
    searchIcon:{
        position: 'absolute',
        left: 12,
        zIndex: 1,
    },
    oderText:{
        fontSize:18,
        fontWeight:'500',
        padding:10,
        marginTop:10
    },
    categoryButton:{
        backgroundColor:'lightgrey',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        fontSize:1,
        margin:10,
        borderRadius:14,
    },
    categoryButtonText:{
        color:'#41544E',
        fontWeight:'700'
    }
})