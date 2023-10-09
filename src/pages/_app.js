import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@/styles/Header.module.css';
import '@/styles/HeroImageRight.module.css';
import '@/styles/UserInfoIcons.module.css';
import React from 'react';

export default function App({ Component, pageProps}) {
  return (
    <MantineProvider
    withGlobalStyle
    withNormalizeCSS
    theme={{
      colorScheme: 'light',
    }}
    >
      <Component { ...pageProps }/>
    </MantineProvider>
  )
}
