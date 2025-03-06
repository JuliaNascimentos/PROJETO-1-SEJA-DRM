import { View, Text, StyleSheet, Pressable } from "react-native";

function Subtitle(){
  return(
    <View>
      <Text style={styles.subtitle}>
        Escolha um curso e faça sua história!
      </Text>

      <Text style={{marginHorizontal: 10}}>
        Aqui você pode escolher cursar Administração, Desenvolvimento de Sistemas ou Redes de Computadores.
      </Text>

      <Text style={{marginHorizontal: 10}}>
        Todos eles possuem alta demanda no mercado atual.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    backgroundColor: "orange",
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 19,
    height: 50, 
    padding: 15,
  },
})
export default Subtitle;