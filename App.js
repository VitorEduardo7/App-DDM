import { StyleSheet, View, Pressable, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  async function abrirCamera() {
    // Pede permissão para a câmera
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    // Se permitiu, abre a câmera
    if (permissao.granted) {
      await ImagePicker.launchCameraAsync();
    } else {
      alert("Permissão negada!");
    }
  }

  return (
    <View style={estilos.tela}>
      <Pressable style={estilos.botao} onPress={abrirCamera}>
        <Text style={estilos.texto}>CLIQUE AQUI</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  botao: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10
  },
  texto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});