import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';


export default function AppOne() {
  return (
    <View style={styles.container}>
      <Image source ={require("/image/Ellipse 8.png")} style={{ width: '140px', height: '140px' }}></Image>
      <Text style={styles.text1}>GROW{'\n'}YOUR BUSINESS</Text>
      <Text style={[styles.text1, styles.text2]}>We will help you to grow your business using {'\n'}online server</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #00CCF9 0%, #00CCF9 100%)',
    alignItems:"center",
    paddingTop: '105px',
    // alignItems: 'center',canh giữa từ trái sang
    // justifyContent: 'center',canh giữa từ trên xuống
  },

  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '52px',
    fontFamily: 'Roboto',
    fontSize: '25px',
  },

  text2: {
    marginTop: '62px',
    fontSize: '15px',

  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '52px'
    
  },
  button: {
    backgroundColor: '#E3C000',
    borderRadius: '10px',
    marginHorizontal: '28px',
    width:'119px',
    height:'48px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: '20px',
  },
  
});
