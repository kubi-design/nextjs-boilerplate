import '@root/styles/globals.css'
import type { AppProps } from 'next/app'
import { getProviders } from '@root/utils'

const Providers = getProviders()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
