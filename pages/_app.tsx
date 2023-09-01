import type { AppProps } from 'next/app'

import { Layout } from '@/features'

import '../src/styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
