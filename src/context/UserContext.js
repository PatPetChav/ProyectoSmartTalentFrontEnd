// Importando Hooks
import { useState, createContext } from "react";


export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const storeUser = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
    setUser(dataUser);
  };

  const deleteUser = () => {
    localStorage.removeItem("user");
    setUser("");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        storeUser,
        deleteUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
