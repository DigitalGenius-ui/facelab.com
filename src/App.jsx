import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./auth/signUp/SignUp";
import SignIn from "./auth/signIN/SignIn";
import SingleProfile from "./components/SingleProfile/SingleProfile";
import { FaceLabContext } from "./context/Context";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "./firbase/firebase";
import AlertMessage from "./components/Alert/AlertMessage";

const App = () =>{
  const { isAuth, setIsAuth } = FaceLabContext();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) setIsAuth(user);
      else setIsAuth(null);
    })
    return unsubscribe;
  })
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        {isAuth && <Route path="/" element={<Home/>}/>}
        {!isAuth && <Route path="/login" element={<SignIn/>}/>}
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/profile" element={<SingleProfile/>}/>
        <Route path="*" element={<Navigate to={isAuth ? "/" : "/login"}/>}/>
      </Routes>
      <AlertMessage/>
    </div>
  )
}

export default App
