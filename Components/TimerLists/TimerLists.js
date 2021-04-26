import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import TimerForm from '../TimerForm/TimerForm';
import TimerList from '../TimerList/TimerList';

class TimerLists extends Component {
   
   constructor(props){
      

       super(props);
       this.state = { 
           openEdit: false,

     }
   }
   handleEdit = ()=>
   this.setState({
       openEdit:true
   })
   handleCancel =()=>{
       this.setState({
           openEdit:false
       })
   }
   handleUpdate = (val)=>{
       this.handleCancel();
       const{handleFormUpdate} = this.props;
       handleFormUpdate(val);
   }
      
   
  

    

    render() { 
        const{title, project, id, handleItemRemove} = this.props
            const {openEdit} = this.state

        return ( 
            <View style={styles.container} >
                {
                    !openEdit ? (
                 <View>
                   <TimerList
                   handleRemove={handleItemRemove}
                   handleEdit={this.handleEdit}
                    title={title}
                    project={project}
                    id={id}
                    />
                  
            </View>

            ): (
                 <TimerForm
                 onFormSubmit={this.handleUpdate}
                 onFormClose={this.handleCancel}
                    title={title}
                    project={project}
                    id={id}
                 />
            )

                }
            </View>
            
           
         );
    }
}
 0


export default TimerLists;
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:300,
        borderWidth:1,
        margin:5,
        
       
    },

})