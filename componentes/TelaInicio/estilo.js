import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imgCapa: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: '#202020',
    borderWidth: 3,
    marginBottom: 50,

  },
  boxcard: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: 20,
    width: 340,
  },
  boxtitulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  boxsubtitulo: {
    color: '#a6a6a6',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default estilos;