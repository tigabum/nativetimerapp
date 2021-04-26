import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header/Header';
import TimerLists from './Components/TimerLists/TimerLists';
import ToggleButton from './Components/ToggleButton/ToggleButton';



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
      ]
      }

      }

    render() { 
      const {lists} = this.state
      return ( 
         <View style={styles.container}>
     
      <StatusBar style="auto" />
      <Header/>

      <ScrollView>
        <ToggleButton/>

          {
          lists.map(({title,project,id})=>(
            <TimerLists
            key={id}
            title={title}
            project={project}
            id={id}
            />
          ))
          }

      </ScrollView>
      
    </View>
       );
    }
  }
  export default App;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:40,
  },
});
