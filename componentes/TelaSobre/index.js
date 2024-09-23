import React from "react";
import { Text, View, Image, ScrollView} from "react-native";

import estilos from "./estilo";

import capa from '../../assets/foto-capa.jpg';
import reidemonaco from '../../assets/rei-da-chuva.png';
import reidachuva from '../../assets/rei-de-monaco.png';
import silvastone from '../../assets/silvastone.png';
import preparacao from '../../assets/preparacao.png';


export default function TelaSobre () {
  return (
    <ScrollView>
    <View style={estilos.container}>
      <View style={estilos.containertopo}>
      <Text style={estilos.titulotopo}>Ayrton Senna</Text>
      <Image source={ capa } style={estilos.imgtopo}></Image>
      <Text style={estilos.descricaotopo}>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
      </View>
      </View>
      <View>
      
       <View style={estilos.containerScroll}>
        <Image source={ reidachuva } style={{width:100,height:100}}></Image>
        <View style={estilos.containerDescricao}>
          <Text style={estilos.noticiaTitulo}>Rei da chuva</Text>
          <Text>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação,garra e persistência.</Text>
        </View>
        </View> 

        <View style={estilos.containerScroll}>
        <Image source={ reidemonaco } style={{width:100,height:100}}></Image>
        <View style={estilos.containerDescricao}>
          <Text style={estilos.noticiaTitulo}>Rei de Mônaco</Text>
          <Text>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
        </View>
        </View> 

        <View style={estilos.containerScroll}>
        <Image source={ silvastone } style={{width:100,height:100}}></Image>
        <View style={estilos.containerDescricao}>
          <Text style={estilos.noticiaTitulo}>Silvastone</Text>
          <Text>Por seu currículo impressionante em Silvastone, Ayrton Senna recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
        </View>
        </View> 

        <View style={estilos.containerScroll}>
        <Image source={ preparacao } style={{width:100,height:100}}></Image>
        <View style={estilos.containerDescricao}>
          <Text style={estilos.noticiaTitulo}>Preparação</Text>
          <Text>Para vencer corridas e campeonatos o piloto precisava ter uma preparaçâo física de atleta.</Text>
        </View>
        </View> 

        </View>
      </ScrollView>
      
      
    
    
  )
}
