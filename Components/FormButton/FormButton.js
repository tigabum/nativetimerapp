import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

class  FormButton extends Component {

    state = {  }
    render() { 

        const{title, onPress} = this.props;

        return ( 
           <Button 
           onPress={onPress}
            style={styles.container}
            mode="outlined">
                {title}
  </Button>
         );
    }
}
 
export default  FormButton;

const styles = StyleSheet.create({
   
    container:{
        margin:4,
        width:100,
        
        
    }
})