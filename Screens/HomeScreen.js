import { StyleSheet, Text, View , Image, TextInput, FlatList, Touchable, TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({navigation}){

    const [searchText,onChangesearchText] = useState("")
    const categories = ["Menu","Mains","Starters","Desserts"]
    const [apiData,setApiData] = useState([])

    // const getMenu = async()=>{
    //     try{
    //         const response = await fetch(
    //             'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json'
    //             );
    //             const json = await response.json();
    //             setApiData(json.menu);
    //         }catch(err){
    //             console.error(err)
    //         }
    //     }

    //     useEffect(()=>{
    //         getMenu();
    //     },[]);

    //     const apiRenderItem = ({item}) => 
    //     <Item name={item.name} description={item.description} price={item.price} image={item.image}/>;

    //     const Item=({ name,description,price,image})=>{
    //         return(
    //             <View style={styles.menuContainer}>
    //                 <Text style={styles.menuTextItem1}>{name}</Text>
    //                 <Text style={styles.menuTextItem2}>{description}</Text>
    //                 <Text style={styles.menuTextItem3}>{price}</Text>
    //             </View>
    //         )
    //     }

    const renderItem = ({item})=>(
        <View style = {[styles.categoryButton,Platform.OS === 'android' && { marginLeft:14}]}>
            <Text style= {[styles.categoryButtonText,Platform.OS === 'android' && { fontWeight:'900'}]}>{item}</Text>
        </View>
        );

    return(
        <View style = {styles.container}>
            <View style = {styles.headerBar}>
                <Image 
                style = {styles.logoImage} 
                source={require('../assets/logo.png')}
                />
                <TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
                    <Image 
                    style = {styles.profileImage} 
                    source={require('../assets/person1.jpeg')}
                    />
                </TouchableOpacity>
            </View>
            

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
                {/* <FlatList data={apiData} renderItem={apiRenderItem}/> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerBar:{
        flexDirection:'row',
        marginBottom:5
    },
    logoImage:{
        height:50,
        width:200,
        marginTop:40,
        marginStart:100
    },
    profileImage:{
        height:40,
        width:40,
        marginTop:45,
        marginStart:60,
        resizeMode:'center',
        borderRadius:20
    },
    upperPanel:{
        backgroundColor:'#41544E',
        padding:12
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
    },
    menuContainer:{
        padding:5,
        marginTop:10
    },
    menuTextItem1:{
        fontSize:18,
        fontWeight:'600',
        padding:5
    },
    menuTextItem2:{
        fontSize:16,
        fontWeight:'400',
        color:'#41544E',
        padding:5
    },
    menuTextItem3:{
        fontSize:18,
        fontWeight:'700',
        color:'#41544E',
        padding:5
    }
})