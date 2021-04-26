import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import FormButton from '../FormButton/FormButton';
class TimerList extends Component {
    constructor(props){
        super(props);
        this.state={
          

        }

    }
    handleRemove = ()=>{
        const{id,handleRemove}= this.props;
        handleRemove(id);
    }
   
    
    render() { 
        const {openEdit} = this.state;
        const {title, project, id, handleEdit,} = this.props;

        return (
            <View style={styles.container} >
               <View style={styles.text_container}  >
                    <Text style={styles.title} >
                   {title}
                </Text>
                <Text style={styles.project} >{project} </Text>

               </View>
               <View style={styles.button} >
                    <FormButton onPress={handleEdit} title="Edit" />
               <FormButton onPress={this.handleRemove} title="Remove" />

               </View>
              
               
            </View>
          );
    }
}
 
export default TimerList;
const styles = StyleSheet.create({
    container:{
        position:'relative',
        backgroundColor:"#fefefe",
        flex:1,
        padding:5,
        marginBottom:5,  
        height:200,
      
    },
    title:{
            fontSize:30,
            fontWeight:'bold',
            marginBottom:10,
    },
    project:{
        fontSize:15,
    },
    text_container:{
        padding:10,
    },
    button:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        display:'flex',
        flexDirection:'row',
       justifyContent:'space-between',
   
    }
})