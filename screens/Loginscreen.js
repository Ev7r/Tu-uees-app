import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,Text,TouchableOpacity
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";






//navigation
import { useNavigation } from "@react-navigation/native";

const auth = getAuth();


const Loginscreen = () => {




      
  

  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      
        const unsubscribe = auth.onAuthStateChanged(user => {
          if(user){
            navigation.navigate("Home");
          }
        });

        return unsubscribe;
    })
  } ,[])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user.email);
    // ...
  })
  .catch((error) => {
    console.log(error);
  });
  }

  const handleCreateAccount = () => {
   
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user.email);
    })
    .catch((error) => {
    console.log(error);
    // ..
    });
  
  };



  return (
      
  
      
     
     <KeyboardAvoidingView style={styles.container} behavior="padding">

    
      <View style={styles.inputContainer}>
                

                {/* texto grande  a la izquierda */}
               
                
      
      <Text style={styles.texto}>   Iniciar sesion     </Text>   
      <Text style={styles.texto2}>  Iniciando sesion aceptas nuestros terminos y condiciones de servicios     </Text>  
      <Text style={styles.texto3}>  Login     </Text>  
      

                                            {/* // correo + icono  */}
      <View style={styles.correo} > 
      <Text> <AntDesign name="mail" style={styles.correo} > </AntDesign></Text>

        <TextInput
          
         placeholder= "Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}  
            /> 

      
      

      </View>
                                                          {/* // Password + icono  */}
      <View style={styles.contrasena} > 
      <Text> <AntDesign name="lock1" style={styles.contrasena} > </AntDesign></Text>

        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={styles.input} />

      </View>

 

                                                
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>  Ingresar
       
          </Text>

        </TouchableOpacity>
        </View>
    
    </KeyboardAvoidingView>
    
  );
};



export default Loginscreen;




const styles = StyleSheet.create({



  texto: {                                          //Texto Inicial
  
    paddingBottom: 25,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    position: "relative"
  },

  texto2: {                                         //Terminos y Condiciones
    paddingBottom:25,
    fontSize:12,
    fontStyle: "italic",
    position: "relative",
    top: -5,
  },

  texto3: {                                         //Login pequeno
    
    fontSize:12,
    position: "relative",
    textAlign: "center",
    color: "blue",
    fontWeight: "80",
    fontStyle: "bold",
    

  },
                                                  // correo + icono
    correo:{
      
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#000',
      paddingBottom: 10,
      marginBottom: 5,
      fontStyle: "italic",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center" ,
      marginVertical: 25,
    },
    inputStyle: {
      flex: 1,
    },
                                                   // contraseña + icono 
    contrasena:{
      
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#000',
      paddingBottom: 10,
      marginBottom: 5,
      fontStyle: "italic",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center" ,
      marginVertical: 25,
    },
    inputStyle: {
      flex: 1,
    },

    ingresar:{
      

   
      paddingBottom: 10,
  
  

    },







  container: {
     
    justifyContent: "center",
    alignItems: "center",
    flex: 1,

   
    borderradius: 20
   
    
  },
  inputContainer: {       //Margen externo
    
    paddingTop:50,
    
    paddingBottom: 320,
    borderBottomWidth: 3,

    paddingLeft: 90,
    borderLeftWidth: 3,
 
    paddingRight: 90,
    borderRightWidth: 3,

    borderTopWidth: 3,
   
    borderRadius: 15,
    position:"absolute",
    top: 50,

  },

  input: {   // email y password

    padding: 2
    
    
    

  },

  

  buttonContainer: {


  },
  button: {},
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 100,
    paddingVertical: 6 ,
    paddingHorizontal: 30,
    borderWidth: 2,
    fontWeight: "bold",
    borderRadius: 5 ,
    backgroundColor: "#0386D0"
  },
  
});
