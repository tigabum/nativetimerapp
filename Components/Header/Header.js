import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.container} >
                <Text style={styles.text} >Timer</Text>
            </View>
         );
    }
}
 

export default Header;
const styles = StyleSheet.create({
    container:{
    },

    text:{  
textAlign: 'center',
fontSize: 72,
color: 'rgba(175, 47, 47, 0.25)',
fontWeight: '100'

    }   
}
)