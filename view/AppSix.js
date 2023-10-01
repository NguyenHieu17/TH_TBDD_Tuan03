import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,TextInput} from 'react-native';


export default function AppSix() {
    
  return (
    <View style={styles.container}>

        <Text style={[styles.text, styles.textRegister]}>REGISTER</Text>
        
        <TextInput
        style={styles.input}
        placeholder="Name" 
        />
        <TextInput
        style={styles.input}
        placeholder="Phone" 
        />
        <TextInput
        style={styles.input}
        placeholder="Email" 
        />
     
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.input}
                placeholder="Password" 
            />
            <Image source ={require("/image/eye 1.png")} style={styles.icon}></Image>
            
        </View>

        <View>
            
        </View>
      
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      
        <Text style={styles.text}>When you agree to terms and conditions</Text>
        <TouchableOpacity>
            <Text style={[styles.text, styles.text1]}>For got your password?</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Or login with</Text>

    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(49, 170, 82, 0.19)',
    alignItems:"center",
    paddingTop: '40px',
  },

  textRegister: {
    fontSize: '25px',
    fontWeight: 700,
    marginBottom: '40px'
  },

  input: {
    backgroundColor: 'rgba(196, 196, 196, 0.30)',
    width: '330px',
    height: '54px',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    paddingLeft:'15px',
    marginBottom: '20px',
  },

  passwordContainer: {
    position: 'relative',
    justifyContent: 'center'
  },

  icon: {
    width: '38px',
    height: '36px',
    position: 'absolute',
    right: '15px',
    bottom: '30px',
  },

  button: {
    backgroundColor: '#E53935',
    width: '330px',
    height: '54px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '70px',
    borderRadius: '2px',
  },

  buttonText: {
    fontSize: '25px',
    color: 'white',
    fontWeight: 700,
    fontFamily: 'Roboto',
  },

  text: {
    textAlign: 'center',
    fontWeight: 400,
    fontFamily: 'Roboto',
    fontSize: '14px',
    marginTop: '20px',
  },

  text1: {
    color: '#5D25FA',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '40px',
    
  },

  
  
  
});
