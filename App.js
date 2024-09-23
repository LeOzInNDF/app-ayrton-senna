import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5,  } from '@expo/vector-icons';

import TelaInicio from "./componentes/TelaInicio";
import TelaSobre from "./componentes/TelaSobre";
import TelaVitorias from "./componentes/TelaVitorias";

const Abas = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Abas.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#eecb01'
          },
          headerTitleStyle: {
            color: '#000',
            fontWeight: 'bold'
          },
          headerTitleAlign: 'left',

          tabBarStyle: {
            backgroundColor: '#eecb01',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold'
          },
          tabBarActiveTintColor: '#ba171a',
          tabBarInactiveTintColor: '#000',
          tabBarActiveBackgroundColor: '#fff',
          
        }}
      
        >
        <Abas.Screen name='Ínício'
        component={ TelaInicio }
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' color={ color } size={ 20 } />
          )
        }}
        />

        <Abas.Screen name='Sobre'
        component={ TelaSobre}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='question-circle' color={ color } size={ 20 } />
          )
        }}
        />

        <Abas.Screen name='Vitórias'
        component={ TelaVitorias}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='trophy' color={ color } size={ 20 } />
          )
        }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
