import { View, Text, StyleSheet } from "react-native";

function Title(){

  return(
    <View>
    <Text style={styles.title}>
        Bem-vindo à EEEP Deputado Roberto Mesquita!
    </Text>

    <Text style={{marginHorizontal: 10}}>
      Venha fazer parte da escola que prepara profissionais para o mercado de trabalho
    </Text>
  </View>
  )
  
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "green",
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    padding: 11,
  }
})

export default Title;