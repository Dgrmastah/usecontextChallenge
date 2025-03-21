import React from 'react';
import { ThemeProvider, useTheme } from './themes/ThemeContext'; 
import RoutesApp from './routes/RoutesApp';
import './App.css'; 
const App = () => {

  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  );
};

const AppWithTheme = () => {
  const { theme } = useTheme();

  return (
    <section className={`App ${theme}`}>
      <RoutesApp />
    </section>
  );
};

export default App;
