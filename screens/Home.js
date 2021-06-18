import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Image, Button, Text, TouchableOpacity, View, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import { signOut } from '../redux/index';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

export default class _Home extends React.Component {

    render() {
        
        const { signOut } = this.props

        return (
            <SafeAreaView style={styles.container}>
<TouchableOpacity  onPress={() => {
                             this.props.navigation.navigate('Kids Home')
                         }}> 
    <View>
        <Image source={require('./backGroundImg/Kidsbackground.png')}  style={styles.backgroundImage}/>
 </View>
 </TouchableOpacity>
          <Text style={styles.text}>Pick your side</Text>
          <TouchableOpacity  onPress={() => {
                             this.props.navigation.navigate('Parent Home')
                         }}>
 <View>
        <Image source={require('./backGroundImg/Parentbackground.png')}  style={styles.backgroundImage}/>
        </View>
        </TouchableOpacity>
        <View >
                    <TouchableOpacity style={{
                        paddingVertical: 10,
                        paddingHorizontal: 50,
                        backgroundColor: 'white',
                        borderRadius: 25
                    }}
                        onPress={() => signOut()}
                    >
                        <Text>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
        </SafeAreaView>
    


//             <View >
//                   <ImageBackground source={require('./backGroundImg/Kidsbackground.png')} style={{width: '50%px', height: '50%'}}>
//     <Text>Kids Zone</Text>
//   </ImageBackground>

//       </View>
      
            // <View style={styles.container}>
            //     <LinearGradient
            //         // Background Linear Gradient
            //         colors={['rgba(46, 204, 113,1.0)', 'rgba(52, 152, 219,1.0)']}
            //         style={styles.background}
            //     />

            //     <View style={{
            //         alignItems: 'center',
            //         marginBottom: 30
            //     }}>
            //         <TouchableOpacity style={{
            //             backgroundColor: '#a29bfe',
            //             width: 150,
            //             height: 150,
            //             borderRadius: 100,
            //             marginBottom: 20
            //         }}
            //             onPress={() => {
            //                 this.props.navigation.navigate('Kids Home')
            //             }}
            //         >

            //         </TouchableOpacity>
            //         <Text style={styles.gender}>Kids Zone</Text>
            //     </View>

            //     <View style={{
            //         alignItems: 'center',
            //         justifyContent: 'center',
            //     }}>
            //         <TouchableOpacity style={{
            //             backgroundColor: '#a29bfe',
            //             width: 150,
            //             height: 150,
            //             borderRadius: 100,
            //             marginBottom: 20
            //         }}
            //             onPress={() => {
            //                 this.props.navigation.navigate('Parent Home')
            //             }}
            //         >

            //         </TouchableOpacity>
            //         <Text style={styles.gender}>PARENTS ZONE</Text>
            //     </View>

            //     <View style={{
            //         alignItems: 'center',
            //         justifyContent: 'center'
            //     }}>
            //         <TouchableOpacity style={{
            //             paddingVertical: 10,
            //             paddingHorizontal: 50,
            //             backgroundColor: 'white',
            //             borderRadius: 25
            //         }}
            //             onPress={() => signOut()}
            //         >
            //             <Text>Sign out</Text>
            //         </TouchableOpacity>
            //     </View>
            //     <StatusBar style="auto" />
            // </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const Home = connect(mapStateToProps, { signOut })(
    _Home
)

export { Home };


var styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'space-evenly',
         alignItems: 'center',
         backgroundColor: '#f9bff6',
         flexDirection: 'column',
    },
    text: {
        letterSpacing: 3 ,
        textTransform : 'uppercase',
        color : 'grey',
        borderWidth: 5, 
        borderRadius: 2,
        borderColor: '#f9c2bf',
       width: '80%',
       padding: 4,
       backgroundColor: '#bff6f9',
       textAlign : 'center'
        
   },
         backgroundImage:{
             display:'flex',
             justifyContent:'space-evenly',
         width:400,
         height:200,
         borderRadius:20,
       },
    

        backgroundImageparent: {
            width:410,
            height:300,
        },
            buttonSignup: {
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
    },
    buttonSignin: {
                padding: 15,
                paddingHorizontal: 61,
                marginBottom: 25,
                alignItems: 'center',
                borderRadius: 25,
            },
    })
       

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },

//     background: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         height: Dimensions.get('window').height
//     },

//     buttonSignin: {
//         padding: 15,
//         paddingHorizontal: 61,
//         marginBottom: 25,
//         alignItems: 'center',
//         borderRadius: 25,
//     },

//     buttonSignup: {
//         alignItems: 'center',
//         borderRadius: 25,
//         padding: 15,
//     },

//     text: {
//         backgroundColor: 'transparent',
//         fontSize: 22,
//         color: '#fff',
//     },
// });
