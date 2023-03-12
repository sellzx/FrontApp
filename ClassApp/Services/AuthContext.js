import React, { useState } from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [pokemon, setPokemon] = useState('');

  const handleLogin = (username) => {
    setUserAuthenticated(true);
    setUsername(username);
    const poke = Math.floor(Math.random() * 150) + 1 ;
    setPokemon(poke.toString())
  };

  const handleLogout = () => {
    setUserAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{
      userAuthenticated,
      username,
      pokemon,
      handleLogin,
      handleLogout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;