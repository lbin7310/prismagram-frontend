import React from 'react';
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from '../Styles/Theme';
import AuthRouter from './Router';
import { useQuery } from 'react-apollo-hooks';
import Footer from './Footer';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {

  const { 
    data: {
      isLoggedIn
    }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <AuthRouter isLoggedIn={isLoggedIn}/>
        <Footer />
      </Wrapper> 
    </ThemeProvider>
  )
}
