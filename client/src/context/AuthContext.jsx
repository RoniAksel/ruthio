import axios from "axios";
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [allUsers, setAllUsers] = useState([])


  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:5000/auth/logged");
    setLoggedIn(loggedInRes.data);
    if (loggedIn === true) {
      const userRes = await axios.get("http://localhost:5000/auth/getUserData", {
        responseType: 'json'
      })
      const usersRes = await axios.get("http://localhost:5000/auth/getAllUsers", {
        responseType: 'json'
      })
      setAllUsers(usersRes.data)
      setUser(userRes.data)
    } else {
      setUser("No Data")
      setAllUsers("")
    }
  }

  useEffect(() => {
      getLoggedIn();
  }, [loggedIn]);


  return (
    <AuthContext.Provider value={{ loggedIn, user, allUsers, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };