import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthwentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthwentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(" ");
   

    
    const auth = getAuth();
// google login
    const singInUsingGoogle = () =>{
       
        const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider)
         
    }

    const logOut = () => {
       
        signOut(auth)
        .then(() => {
            setUser({})
        })
       
    }

    //observe use state change

    useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed
    }, []);

    return{
        isLoading,
        user,
        singInUsingGoogle,
        logOut,
        error,
        setUser,
        setError         
    }
}
export default useFirebase;