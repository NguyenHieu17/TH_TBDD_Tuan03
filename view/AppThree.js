import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,TextInput} from 'react-native';




export default function AppThree() {
  return (
    <View style={styles.container}>
      <Image source ={require("/image/lock-152879 1.png")} style={{ width: '105px', height: '117px' }}></Image>
      <Text style={[styles.text, styles.text1]}>FORGET {'\n'}PASSWORD</Text>
      <Text style={[styles.text, styles.text2]}>Provide your account’s email for which you {'\n'}want to reset your password</Text>
      
      <View style={styles.inputContainer}>
        <Image source ={require("/image/mail-2935365 1.png")} style={{ width: '48px', height: '45px', flex:1 }}></Image>
        <TextInput
            style={styles.input}
            placeholder="Email" 
        />
        </View>
      
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, styles.text]}>NEXT</Text>
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

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
   
  },

  text1: {
    marginTop: '37px',
    fontSize: '25px',
  },

  text2: {
    marginTop: '32px',
    fontSize: '15px',

  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor:'#C4C4C4',
    marginTop: '10px',
  },
  
  input: {
    width: '242px',
    height:'45px',
  },

  button: {
    backgroundColor: '#E3C000',
    width: '305px',
    height:'45px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '43px'
  },

  buttonText: {
    fontSize: '18px',
  },
  
});
