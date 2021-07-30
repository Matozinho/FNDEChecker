import { DepositContextProvider } from '@contexts/DepositContext'
import '@styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <DepositContextProvider>
      <Component {...pageProps} />
    </DepositContextProvider>
  )
}
export default MyApp
