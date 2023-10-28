import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './pages';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IndexPage></IndexPage>
    </ThemeProvider>
  );
}

export default App;
