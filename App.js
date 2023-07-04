import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Touchable, Keyboard } from 'react-native';
import Task from './components/Tasks';
import { useState } from 'react';
export default function App() {
  const [char, setChar] = useState('')
  const [tasks, setTask] = useState([])

  const inputRender = (e) => {
    setChar(e.nativeEvent.text)
  }
  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.item}>
          {/* Tasks */}
          {tasks.map((element, i) =>
          <TouchableOpacity key={i} onPress={()=>{let newArray =[...tasks] ;newArray.splice(i,1);setTask(newArray)}}>
            <Task text={element} />
           </TouchableOpacity>
           )}
        </View >

        {/* writeTaskWrapper */}
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
            <TextInput value={char} onChange={inputRender} style={styles.input} placeholder={'Write a task'}></TextInput>
            <TouchableOpacity onPress={() =>{
              if(char){
                Keyboard.dismiss();
                setTask([char,...tasks]);
                setChar(null)
              }}
            }>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAD',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    top: 20,
    // bottom:0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {}
});
