import React from 'react';
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme';
import AuthRouter from './Router';

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <AuthRouter isLoggedIn={!false}/>
    </>
  </ThemeProvider>
)
