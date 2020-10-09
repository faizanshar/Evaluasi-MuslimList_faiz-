import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import {Styles} from './Styleintro'


export default class Intro extends Component {
    render() {
        return (
            <View style={Styles.view1}>
                <Image 
                    style={Styles.orang}
                    source={require('../assets/orang.png')}/>
                
                <Text style={Styles.text1}>Mari List Target Antum</Text>
            
                <Text style={Styles.text2}>Merapikan Target Antum dengan aplikasi Muslim List</Text>
            
                <TouchableOpacity style={Styles.get} onPress={()=> this.props.navigation.navigate('Login')}>
                    <Text style={Styles.textget}>Get Started</Text>
                </TouchableOpacity>    
            </View>
        )
    }
}
