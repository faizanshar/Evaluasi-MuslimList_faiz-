import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Styles} from './Stylehome';

export default class Home extends Component {
  render() {
    return (
      <View style={Styles.view2}>
        <View style={Styles.view1}>
          <Image
            style={Styles.image1}
            source={require('../assets/human.png')}
          />
          <View>
            <Text style={Styles.textfaiz}>Hi Faiz</Text>
            <Text style={Styles.texthow}>How're you today?</Text>
          </View>
        </View>
        <View style={Styles.view3}>
          <Image
            style={Styles.imagesearch}
            source={require('../assets/search.png')}
          />
          <TextInput
            style={Styles.textsearch}
            placeholder={'  Search your target'}
          />
        </View>

        <Text style={Styles.target}>Your Target</Text>
        <ScrollView>
          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>

          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>
          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>
          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>
          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>
          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>
          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>
          <View style={Styles.view4}>
            <Image
              style={Styles.imagepen}
              source={require('../assets/pen1.png')}
            />

            <TextInput
              style={Styles.textmuslim}
              placeholder={'  Membuat Aplikasi Muslim List'}
            />
            <Image
              style={Styles.imagechecklist}
              source={require('../assets/checklist.png')}
            />
            <Image
              style={Styles.imagetrash}
              source={require('../assets/trash.png')}
            />
          </View>
        </ScrollView>
        <TouchableOpacity>
          <Image
            style={Styles.imagefloating}
            source={require('../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
