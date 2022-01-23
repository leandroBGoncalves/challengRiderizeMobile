import React from 'react';
import { Routes } from '../Routes';
import { NavigationContainer } from '@react-navigation/native';


const App = (props) => {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
 }

 export default App