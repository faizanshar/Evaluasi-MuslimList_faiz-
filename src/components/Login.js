import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {Styles} from './Stylelogin';
export default class Login extends Component {
  render() {
    return (
      <View style={Styles.view1}>
        <Text style={Styles.text1}>Welcome back!</Text>

        <Text style={Styles.email}>Email</Text>
        <TextInput style={Styles.textemail} placeholder={'  email'} />

        <Text style={Styles.password}>Password</Text>
        <TextInput style={Styles.textpassword} placeholder={'  password'} secureTextEntry={true} />

        <TouchableOpacity style={Styles.login} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={Styles.textlogin}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.forgot} onPress={() => this.props.navigation.navigate('Reset')}>
          <Text style={Styles.textforgot}>Forget Password?</Text>
        </TouchableOpacity>

        <Text style={Styles.textsocial}>
          ------------------------------Log in with social
          account-----------------------------
        </Text>
        
        <View style={Styles.view2}>
          <TouchableOpacity style={Styles.facebook}>
            <Image source={require('../assets/Inside.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={Styles.google}>
            <Image source={require('../assets/Google.png')} />
          </TouchableOpacity>
        </View>
        
        <View style={Styles.view3}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                <Text style={Styles.textsignup}> Sign Up</Text>
            </TouchableOpacity>
        </View>
      
      
      </View>
    );
  }
}
