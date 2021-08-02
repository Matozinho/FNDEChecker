import type { AppProps } from 'next/app'

import { DepositContextProvider } from '@contexts/DepositContext'
import { RegisterContextProvider } from '@contexts/RegisterContext'

import '@styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RegisterContextProvider>
      <DepositContextProvider>
        <Component {...pageProps} />
      </DepositContextProvider>
    </RegisterContextProvider>
  )
}
export default MyApp
