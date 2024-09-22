import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicio from "./componentes/TelaInicio";
import TelaSobre from "./componentes/TelaSobre";
import TelaVitorias from "./componentes/TelaVitorias";

const Abas = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Abas.Navigator>
        <Abas.Screen name='Ínício'
        component={ TelaInicio }
        />

        <Abas.Screen name='Sobre'
        component={ TelaSobre}
        />

        <Abas.Screen name='Vitórias'
        component={ TelaVitorias}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
