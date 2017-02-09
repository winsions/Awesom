/**
 * Created by winsion on 2017/2/8.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class FirstPage extends Component {
    constructor(props){
        super(props);
        this.state={
            myname:'刘成',
            age:28,
            QQ:null,
        }
    }
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.welcome}>
                    第一页，我要把我的姓名、年龄传递给第二个页面，再从第二个页面把我的QQ号传回来
                </Text>
                <Text style={styles.instructions}>
                    我的姓名：{this.state.myname}
                </Text>
                <Text style={styles.instructions}>
                    我的年龄：{this.state.age}
                </Text>


                <Text style={{color:'blue',fontSize:20}}>
                    我的QQ：{this.state.QQ}
                </Text>
                <Text style={{color:'red',fontSize:30}} onPress={this.gotoSecondPage}>
                    点击我查询我的QQ
                </Text>
            </View>
        );
    }
    gotoSecondPage=()=>{
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name:'next',
                component:Next,
                params:{
                    myname:this.state.myname,
                    age:this.state.age,
                    getQQ:(qq)=>{
                        this.setState({
                            QQ:qq
                        })
                    }
                }
            })
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});