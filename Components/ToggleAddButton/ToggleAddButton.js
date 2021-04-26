import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {Button } from 'react-native-paper';
import TimerForm from '../TimerForm/TimerForm';

class ToggleAddButton extends Component {
            constructor(props){
                super(props);
                this.state={
                    openForm: false,
                }
            }
            toggleHandler = ()=>
            this.setState({openForm:true})
            handleCancel=()=>
            this.setState({
                openForm:false,
            })
            handleCreate = (val)=>{
                const{onFormSubmit} = this.props
                onFormSubmit(val);
                this.setState({openForm:false})
            }

   
    render() { 
        const{openForm} = this.state;

        return ( 
            <View style={styles.container} >
                    {
                        openForm ? (
                            <TimerForm
                            onFormClose = {this.handleCancel}
                                onFormSubmit={this.handleCreate}
                            />
                        ): (
                             <Button
                            onPress={this.toggleHandler}
                mode="contained"
                style={styles.button}
               >
                   <Text style={styles.text} >
                       +

                   </Text>
                   
               </Button>

   )
                    }       
            </View>
         );
    }
}
 


export default ToggleAddButton;
const styles = StyleSheet.create({
   
    button:{
            width:40,
            marginLeft:110,
    },
    text:{
        fontSize:30,
        color:'white'

    }
})