import { useState } from "react";
import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const App = () => {
  const [user, setUser] = useState(null);
  const googleSignInHangler = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
      console.log(result.user);
        setUser(result.user)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <h1>Firebase + React</h1>
      <button onClick={googleSignInHangler}>Google Sign In</button>
      {
        user && <div>
          <h5>User: {user.displayName}</h5>
        </div>
      }
    
    </div>
  );
};

export default App;
