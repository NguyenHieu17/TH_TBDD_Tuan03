import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity,TextInput} from 'react-native';


export default function AppSeven() {
  return (
    <View style={styles.container}>
        <View style={styles.loginContainer}>
            <Text style={[styles.textLogin]}>LOGIN</Text>
        </View>
        
        <View style={styles.inputContainer}>
            <Image source ={require("/image/avatar_user 1.png")} style={styles.imageInput}></Image>

            <TextInput
            style={styles.input1}
            placeholder="Name" 
            />
        </View>

            
        <View style={styles.inputContainer}>
            <Image source ={require("/image/lock-152879 1.png")} style={styles.imageInput} ></Image>

            <TextInput
                style={styles.input2}
                placeholder="Password" 
            />
            <Image source ={require("/image/eye 1.png")} style={styles.icon}></Image>
            
        </View>
      
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      

        <TouchableOpacity >
            <Text style={styles.text}>CREATE ACCOUNT</Text>
        </TouchableOpacity>   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%);',
    alignItems:"center",
    paddingTop: '70px',
    
  },

  loginContainer: {
    alignSelf: 'flex-start',
    marginBottom: '100px',
  },

  textLogin: {
    fontSize: '25px',
    fontWeight: 700,
    left: '30px',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.30)',
    marginBottom: '20px',
  },

  imageInput: {
    width: '32px', 
    height: '32px', 
    marginLeft: '10px'
  },

  input1: {
    width: '298px',
    height: '54px',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    paddingLeft:'15px'
  },

  input2: {
    width: '256px',
    height: '54px',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    paddingLeft:'15px'
  },

  icon: {
    width: '32px',
    height: '32px',
    marginRight: 10,
  },



  button: {
    backgroundColor: '#060000',
    width: '330px',
    height: '54px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    borderRadius: '2px',
  },

  buttonText: {
    fontSize: '20px',
    color: 'white',
    fontWeight: 700,
    fontFamily: 'Roboto',
  },

  text: {
    fontSize:'20px',
    marginTop: '50px',
    fontWeight: 700,
    fontFamily: 'Roboto',
  }
  
});
