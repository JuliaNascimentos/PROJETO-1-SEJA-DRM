import { View, Text, StyleSheet, Pressable } from "react-native";

import Footer from './components/Footer.jsx'
import Title from './components/Title.jsx'
import Subtitle from './components/Subtitle.jsx'

function App() {
  return (
    <View>
      <Title/>
      <Subtitle/>
      <Footer/>
    </View>
  );
}


export default App;
