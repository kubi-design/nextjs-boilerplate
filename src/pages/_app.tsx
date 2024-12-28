import '@root/styles/globals.css'
import type { AppProps } from 'next/app'
import { getProviders } from '@root/utils'
import { SWRConfig } from 'swr'

const Providers = getProviders()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then(res => res.json()),
      }}
    >
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </SWRConfig>
  )
}
