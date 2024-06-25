// Importa bibliotecas e componentes necessários do React, React Native e React Native Slider
import React, { useState } from "react"; // Importa React e o hook useState para gerenciamento de estado
import { View, StyleSheet, Text } from "react-native"; // Importa componentes de layout e estilização do React Native
import Slider from "@react-native-community/slider"; // Importa o componente Slider da biblioteca @react-native-community/slider

// Componente principal da aplicação
export default function App() {
  // Declara um estado chamado valor, com valor inicial de 50
  const [valor, setValor] = useState(50);

  // Retorna o layout da aplicação
  return (
     //Contêiner principal 
    <View style={styles.container}> 

      {/* Componente Slider para selecionar um valor numérico */}
      <Slider 
        minimumValue={0} // Valor mínimo do slider
        maximumValue={100} // Valor máximo do slider
        value={valor} // Valor inicial do slider
        onValueChange={(valorSelecionado) => setValor(valorSelecionado)} // Atualiza o estado valor quando o slider é movido
        minimumTrackTintColor="#000fff" // Cor da faixa mínima do slider
        maximumTrackTintColor="#ff0000" // Cor da faixa máxima do slider
        thumbTintColor="#121212" // Cor da bolinha do slider
      />

      {/* Exibe o valor selecionado no slider */}
      <Text>Valor: {valor.toFixed(0)}</Text>
      
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    marginTop: 35 // Adiciona margem no topo
  },
});
