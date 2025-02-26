import { View, Text, StyleSheet, Pressable } from "react-native";

function Footer(){
  return(
    <View>
      <Pressable style={styles.footer}>
        <Text style={styles.footerText}>Inicie sua jornada na DRM!</Text>
      </Pressable>

      <Text style={{ textAlign: "center", fontWeight: 500 }}>
        2024 EEEP Deputado Roberto Mesquita
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "lightblue",
    width: 310,
    padding: 12,
    alignSelf: "center",
    marginVertical: 10,
  },
  footerText: {
    textAlign: "center",
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
})

export default Footer;