import React from "react";
import { Text, View, ScrollView, Image, ImageBackground } from "react-native";
import { FontAwesome5,  } from '@expo/vector-icons';

import estilos from "./estilo";

import imgfundo from '../../assets/corrida1.jpg';
import vitoria1 from '../../assets/vitoria1.jpg';
import vitoria2 from '../../assets/vitoria2.jpg';
import vitoria3 from '../../assets/vitoria3.jpg';

export default function TelaVitorias () {
  return (
    <ScrollView>
      <ImageBackground source={imgfundo}  blurRadius={5} style={estilos.container}>
        <View style={estilos.boxtopo}>
          <Text style={estilos.boxTitulo}>Senna em Números</Text>
          <Text style={estilos.paragrafo}>Ele conquistou três campeonatos mundiais em 1988,1990 e 1991 e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
         
        <View style={estilos.boxDescricao}>
          <FontAwesome5 name='trophy' size={ 25 } color='#ceb105' />
          <Text style={estilos.numeros}>161</Text>
          <Text style={estilos.descricao}>GPS DISPUTADOS</Text>
        </View>

          <View style={estilos.boxDescricao}>
            <FontAwesome5 name='trophy' size={ 25 } color='#ceb105' />
            <Text style={estilos.numeros}>65</Text>
            <Text style={estilos.descricao}> POLE POSITIONS</Text>
          </View>

          <View style={estilos.boxDescricao}>
            <FontAwesome5 name='trophy' size={ 25 } color='#ceb105' />
            <Text style={estilos.numeros}>41</Text>
            <Text style={estilos.descricao}>VITÓRRIAS</Text>
            </View>

          <View style={estilos.boxDescricao}>
            <FontAwesome5 name='trophy' size={ 25 } color='#ceb105' />
          <Text style={estilos.numeros}>3x</Text>
          <Text style={estilos.descricao}>CAMPEÃO MUNDIAL</Text>
          </View>
          </View>
          <View style={ estilos.cardImagem }>
          <Text style={ estilos.cardParagrafo }>Campeonato Mundial – 1988</Text>
          <Image source={ vitoria1 } style={ estilos.imagem } />
        </View>

        <View style={ estilos.cardImagem }>
          <Text style={ estilos.cardParagrafo }>Campeonato Mundial – 1990</Text>
          <Image source={ vitoria2 } style={ estilos.imagem } />
        </View>

        <View style={ estilos.cardImagem }>
          <Text style={ estilos.cardParagrafo }>Campeonato Mundial – 1991</Text>
          <Image source={ vitoria3 } style={ estilos.imagem } />
        </View>
     </ImageBackground>
    </ScrollView>
  )
}

