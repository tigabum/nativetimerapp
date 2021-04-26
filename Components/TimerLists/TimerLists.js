import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';

class TimerLists extends Component {
   
   constructor(props){
       super(props);
       this.state = { 

     }
   }
    

    render() { 
        const{title, project, id} = this.props

        return ( 
            <View style={styles.container} >
                    <Text>{title} </Text>
                    <Text>{project} </Text>
            </View>
         );
    }
}
 


export default TimerLists;
const styles = StyleSheet.create({
    container:{

    }
})