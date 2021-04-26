import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';

class ToggleButton extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container} >
                    <Text>Toggle Button</Text>
            </View>
         );
    }
}
 


export default ToggleButton;
const styles = StyleSheet.create({
    container:{

    }
})