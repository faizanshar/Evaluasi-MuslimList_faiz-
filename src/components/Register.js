import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {Styles} from '../components/Styleregister';
export default class Register extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}> 
        <Image style={Styles.back} source={require('../assets/Eye.png')} />
        </TouchableOpacity>
        <Text style={Styles.reset}>Registration</Text>
        <View style={Styles.view1}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={Styles.textlogin}> Log In</Text>
          </TouchableOpacity>
        </View>
        <Text style={Styles.email}>Email</Text>
        <TextInput style={Styles.textemail} placeholder={'  email'} />
        <Text style={Styles.mobile}>Mobile Number</Text>
        <View style={Styles.view3}>
          <View style={Styles.view2}>
            <Image
              style={Styles.indonesia}
              source={require('../assets/indonesia.png')}
            />
            <Text style={Styles.textindo}>+62 </Text>
            <Image
              style={Styles.arrow}
              source={require('../assets/arrowdown.png')}
            />
          </View>
          <TextInput style={Styles.number} placeholder={'  number'} />
        </View>
        <Text style={Styles.password}>Password</Text>
        <TextInput
          style={Styles.textpassword}
          placeholder={'  password'}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={Styles.signup}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={Styles.textsignup}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={Styles.textsocial}>
          ------------------------------Log in with social
          account-----------------------------
        </Text>

        <View style={Styles.view4}>
          <TouchableOpacity style={Styles.facebook}>
            <Image source={require('../assets/Inside.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={Styles.google}>
            <Image source={require('../assets/Google.png')} />
          </TouchableOpacity>
        </View>
        
        <View style={Styles.text}>
          <Text>By clicking sign up you are agreeing to the</Text>
          <View style={Styles.view5}>
            <TouchableOpacity onPress={()=>alert('mantap!')}>
              <Text style={Styles.textuse}>Term of use</Text>
            </TouchableOpacity>
            <Text>  and the</Text>
            <TouchableOpacity onPress={()=>alert('mantap!')}>
              <Text style={Styles.textprivasi}> Privacy Policy</Text>
            </TouchableOpacity>
          
          </View>
        </View>
      </View>
    );
  }
}
