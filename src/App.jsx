import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {
  Route,
  Routes,
} from "react-router-dom";
import SignUp from "./auth/signUp/SignUp";
import SignIn from "./auth/signIN/SignIn";

const App = () =>{
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default App
