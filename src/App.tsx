import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './pages';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { RouterProvider, useRoutes, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EmailForm from './pages/EmailForm';
import WaitlistMessage from './pages/WaitlistMessage';
import WaitlistDatabase from './pages/WaitlistDatabase';
import Test from './pages/Test';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: (<IndexPage />),
      children: [
        {
          path: '',
          element: (<LandingPage />)
        },
        {
          path: '/join-now',
          element: (<EmailForm />)
        },
        {
          path: '/cheers',
          element: (<WaitlistMessage />)
        },
        {
          path: '/waitlist-database',
          element: (<WaitlistDatabase />)
        },
        {
          path: '/test',
          element: (<Test />)
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <IndexPage></IndexPage> */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
