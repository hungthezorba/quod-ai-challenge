import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme, Grid, GridItem } from '@chakra-ui/react';
import "@fontsource/athiti"
import { Provider } from 'react-redux'

import store from './store'

const theme = extendTheme({
  fonts: {
    body: 'Athiti'
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>


,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
