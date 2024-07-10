import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import customTheme from './Theme';
import initI18n from './i18next';

initI18n();

const container = document.getElementById('root');

if (container !== null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root container not found');
}
