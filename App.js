import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header/Header';
import TimerForm from './Components/TimerForm/TimerForm';
import TimerLists from './Components/TimerLists/TimerLists';
import ToggleAddButton from './Components/ToggleAddButton/ToggleAddButton';

let idGenerator=10;

  class App extends Component {
      constructor(props){
        super(props);
        
    this.state = {
      lists:[
        {
          title:"Life",
          project:"What mean life",
          id:1,
        },
        {
          title:"Meaning",
          project:"What's the purpose of life",
          id:2,
        },
         {
          title:"Meaning",
          project:"What's the purpose of life",
          id:3,
        },
         {
          title:"Meaning",
          project:"What's the purpose of life",
          id:4,
        },
         {
          title:"Meaning",
          project:"What's the purpose of life",
          id:5,
        },
      ]
      }

      }
      handleFormUpdate = ({title, project,id}) =>{
        const{lists}= this.state;
        this.setState({
          lists: lists.map((list)=>{
            if(list.id === id){
             
              return {
                ...list,
                title,
                project,
                
                
              }
            }
            return list;
          })
        })
      }
      handleFormCreate = (val)=>{
        const list = {
          title:val.title || "title",
          project: val.project || "project",
          id:idGenerator,
        }
        const{lists} = this.state;
        this.setState({
          lists:[list, ...lists]
        })
          idGenerator++;
      }
      handleRemove = (id)=>
        this.setState({
          lists:this.state.lists.filter((item)=> item.id != id)
        })
      

    render() { 
      const {lists} = this.state
      return ( 
         <KeyboardAvoidingView style={styles.container}>
           <ScrollView style={styles.scroll} >
     
      <StatusBar style="auto" />
           <Header/>
          <KeyboardAvoidingView>
      
        <ToggleAddButton
            onFormSubmit ={this.handleFormCreate}
        />

          {
          lists.map(({title,project,id})=>(
            <TimerLists
            handleItemRemove={this.handleRemove}
            handleFormUpdate = {(val)=> this.handleFormUpdate(val)}
            key={id}
            title={title}
            project={project}
            id={id}
            />
          ))
          }

      
       </KeyboardAvoidingView>
       </ScrollView>
      
    </KeyboardAvoidingView>
       );
    }
  }
  export default App;
  

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    flex: 1,
    alignItems:'center',
    margin:25,
  },
  scroll:{

  }
});
