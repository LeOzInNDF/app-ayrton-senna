import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  boxtopo: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: 20,
    width: 340,
    marginBottom: 50,
  },
  boxTitulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragrafo: {
    color: '#a6a6a6',
    textAlign: 'center',
    marginBottom: 25,
  },
  boxDescricao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  numeros: {
    color: '#eecb01',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 5,
  },
  descricao: {
    color: '#a6a6a6',
    fontSize: 16,
  },
  cardImagem: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginBottom: 20
  },
  cardParagrafo: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    padding: 15,
  },
  imagem: {
    width: 300,
    height: 200,
  },
});
export default estilos;