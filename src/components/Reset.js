import React, {Component} from 'react';
import {Text, View,Image, TextInput, TouchableOpacity} from 'react-native';
import {Styles} from './Stylereset';
export default class Reset extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
        <Image
            style={Styles.back}
            source={require('../assets/Eye.png')}/>
        </TouchableOpacity>
        <Text style={Styles.reset}>Reset Password</Text>

        <Text style={Styles.text1}>Please enter your email below to receive your password reset instructions.</Text>

        <Text style={Styles.email}>Email</Text>
        <TextInput style={Styles.textemail} placeholder={'  email'}/>

        <TouchableOpacity style={Styles.send} onPress={()=>alert('Sudah dikirim!')}>
          <Text style={Styles.textsend}>Send Email</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
