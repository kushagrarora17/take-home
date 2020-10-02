import React from 'react';
import Main from './components/Main';
import AuthContextProvider from "./contexts/authContext";
import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
