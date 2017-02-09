/**
 * Created by winsion on 2017/2/7.
 */


import React  from 'react'

import {
    Text,
    View
} from 'react-native'


const hahaha = () => (
    <View style={styles.loading}>
        <ActivityIndicator
            size="large"
            color="#3e9ce9"
        />
        <Text style={styles.loadingText}>数据加载中...</Text>
    </View>
);




class Blink extends react.comment {

    // 构造
       constructor(props) {
           super(props);
           // 初始状态
           this.state = {showText: true};

           setInterval(() => {
               this.setState({ showText: !this.state.showText });
           }, 1000);
       }
       render() {
           let display = this.state.showText ? this.props.text : '';
           return (
               <Text>{display}</Text>
           );
   }
}
export default hahaha;