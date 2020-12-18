//import Component from 'react';
import * as React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.State={emailid:' ', password:' '}
    }
    render() {
        return(
            <View>
                <TextInput
                keyboardType = "email-address"
                placeholder = "example@exampe.com"
                onChangeText = {(text)=>{
                    this.setState({
                        emailid: text
                    })
                }
            }
                />
                

                <TextInput
                secureTextEntry={true}
                placeholder="password"
                onChangeText = {(text)=>{
                    this.setState({
                        Password: text
                    })
                }
            }
                />

                <TouchableOpacity>
                    
                </TouchableOpacity>
            </View>            
        );
    }
}
