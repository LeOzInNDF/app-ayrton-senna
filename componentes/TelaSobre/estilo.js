import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  
  },
  containertopo: {
    padding: 20,
  },
  titulotopo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imgtopo: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  descricaotopo: {
    color: '#757575',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerScroll: {
    flexDirection: 'row',
    marginBottom: 20,
    borderTopColor: '#d5d5d5',
    borderBottomColor: '#d5d5d5',
    borderWidth: 1,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  containerDescricao: {
    flex: 1,
    padding: 10,
  },
  noticiaTitulo: {
    fontWeight: "bold",
    fontSize: 18,
  }
});

  export default estilos;