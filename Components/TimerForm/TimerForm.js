import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import FormButton from '../FormButton/FormButton';

class TimerForm extends Component {
    constructor(props){
        const{title, project, id,} = props;

        super(props);
        this.state={
            title: id? title:"",
            project:id? project:"",
        }
    }

    handleUpdate = ()=>{
        const{onFormSubmit,id} = this.props
        const{title, project} =  this.state
        onFormSubmit({
            title,
            project,
            id
        })


    }

    // onPress = ()=>{
    //     const {onPress,id} = this.props;
    //     const{title, project} = this.state;
        
    //     onPress({
    //         title,
    //         project,
    //         id
    //     })
    // }
    handelTitleChange = (val)=>
    this.setState({title:val})

    handleProjectChange = (val)=>
    this.setState({project:val})
    
   
    render() { 
        const{title,project}= this.state;
        const {id, onFormClose} = this.props;
        const submitText = id? "Update" : "Create"
        return ( 
            <View style={styles.container} >
                    <TextInput
                            placeholder="title"
                        style={styles.input}
                        value={title}
                        onChangeText={this.handelTitleChange}
                    />
                  <TextInput
                  placeholder="project"
                    style={styles.input}
                    value={project}
                    onChangeText={this.handleProjectChange}
                  />
                  <View style={styles.button} >
                      <FormButton onPress={this.handleUpdate} title={submitText} />
                       <FormButton onPress={onFormClose} title="cancel" />
                  </View>
            </View>
         );
    }
}
 
export default TimerForm;

const styles = StyleSheet.create({
    container:{
       borderWidth:1,
        flex:1,
        padding:5,
    
      
    },
    input:{
        margin:5,
        height:50,
    },
    button:{
        
        flexDirection:'row',
        justifyContent:'space-between',
     
    }
})