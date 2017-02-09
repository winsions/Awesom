/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TextInput,
    ListView,
} from 'react-native';


import FirstPage from './first';
import MyScene from './MyScene';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}



class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }
}

class Awesom extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {text: ' '};
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.data = {
              dataSource: ds.cloneWithRows([
                  'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
              ])
          };

      }

  render() {

      let pic = {
          url: `https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg`
      };
    return (
        <View style={{
            flex: 1,
            //flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        }}>
            <Text style={styles.bigBlu}>Hello ffdfworld!</Text>
            <Image source = {pic} style = {{width: 400, height: 400}} />
            <Greeting name="rexfffffxx"/>
            <Blink text="I Love You"/>
            <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            <View style={{flex: 3, backgroundColor: 'steelblue'}} />

            <TextInput style={{height: 30}}
                       placeholder='请输入'
                       onChangeText={(text) => this.setState({text})}

            />
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((worfdsssd) => worfdsssd && 'WZC').join(' ')}
            </Text>
            <ListView
                dataSource={this.data.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
       </View>
    );
  }
}

const styles = StyleSheet.create({
   red:{
       color: 'red',
   },
    bigBlu:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});


AppRegistry.registerComponent('Awesom', () => Awesom);
