import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";

import estilos from "./estilo";

import imgFundo from '../../assets/fundo.jpg';
import imgCapa from '../../assets/foto-capa.jpg';

export default function TelaInicio () {
  return (
      <ImageBackground 
        blurRadius={5}
        style={ estilos.container }
        source={ imgFundo } 
      >
      <Image 
      style={estilos.imgCapa}
      source={ imgCapa}></Image>
      <View style={estilos.boxcard}>
        <Text style={estilos.boxtitulo}>Ayrton Senna</Text>
        <Text style={estilos.boxsubtitulo}>Através desse APP, Voce vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
      </View>
      </ImageBackground>
  )
}
