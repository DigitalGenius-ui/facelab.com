import React, { useState, createContext, useContext } from 'react'

const FaceLab = createContext();

const Context = (props) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    type : "success",
    message : "Login Successfully",
    open : false
  })
  return (
    <FaceLab.Provider value={{
      isAuth, setIsAuth, show, setShow,
      loading, setLoading, alert, setAlert
    }}>
        {props.children}
    </FaceLab.Provider>
  );
}

export default Context
export const FaceLabContext = () => useContext(FaceLab);