import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import {auth} from "../../firebase";
import { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = (props)=>{
    const [user, setUser] = useState(false);
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            console.log(user);
            if(user){
                const {email, photoURL, displayName, uid} = user;
                setUser({email, photoURL, displayName, uid});
            }else
            {
                setUser(null);
            }
        });
        return ()=> unsubscribe();
    },[])

    const regUser = (email,password)=>createUserWithEmailAndPassword(auth, email, password);
    
    const loginUser = (email,password) =>signInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => signOut(auth);
    return(
        <UserContext.Provider value={{user, setUser,regUser,loginUser,signOutUser}}>
            {props.children}
        </UserContext.Provider>
    )
}


  module.exports = { UserProvider};