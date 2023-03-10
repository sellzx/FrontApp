import React, { useState } from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setUserAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setUserAuthenticated(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{
      userAuthenticated,
      username,
      handleLogin,
      handleLogout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;