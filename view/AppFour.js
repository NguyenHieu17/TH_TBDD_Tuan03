import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,TextInput} from 'react-native';




export default function AppFour() {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.text0]}>CODE</Text>
      <Text style={[styles.text, styles.text1]}>VERIFICATION</Text>
      <Text style={[styles.text, styles.text2]}>Enter ontime password sent on{'\n'}++849092605798</Text>
      
      <View style={styles.containerSquare}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
    </View>
      
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, styles.text]}>VERIFY CODE</Text>
        </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    alignItems:"center",
    paddingTop: '105px',
    // alignItems: 'center',canh giữa từ trái sang
    // justifyContent: 'center',canh giữa từ trên xuống
  },

  text0: {
    fontSize: '60px',
    marginTop:'83px',
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
   
  },

  text1: {
    marginTop: '62px',
    fontSize: '25px',
  },

  text2: {
    marginTop: '32px',
    fontSize: '15px',

  },

  containerSquare: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '32px',
  },

  square: {
    width: '50px',
    height: '50px',
    borderWidth: 1,
    borderColor: '#000',
  },

  button: {
    backgroundColor: '#E3C000',
    width: '305px',
    height:'45px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '34px',
  },

  buttonText: {
    fontSize: '18px',
  },
  
});
