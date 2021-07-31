import type { AppProps } from 'next/app'

import { DepositContextProvider } from '@contexts/DepositContext'
import { RegisterContextProvider } from '@contexts/RegisterContext'

import { Provider } from 'next-auth/client';

import '@styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <RegisterContextProvider>
        <DepositContextProvider>
          <Component {...pageProps} />
        </DepositContextProvider>
      </RegisterContextProvider>
    </Provider>
  )
}
export default MyApp
