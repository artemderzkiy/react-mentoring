import React, { Component } from 'react';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import TextInput from './components/Input/Input';

class ToDoApp extends Component {
  render() {
    return (
      <div>
      	<Button label={'hello'}/> 
      	<Checkbox label={'hello'}/>
      	<TextInput placeholder={'hello'}/>
      </div>
    );
  }
}

export default ToDoApp;
