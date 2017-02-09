/**
 * Created by winsion on 2017/2/8.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

  class MyScene extends Component {
    static defaultProps = {
        title: 'MyScene'
    };

    render() {
        return (
            <View>
                <Text>Hi my name is {this.props.title}</Text>
            </View>
        )
    }
}


export default MyScene;