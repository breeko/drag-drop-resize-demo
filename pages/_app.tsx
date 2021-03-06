import { AppProps } from 'next/app'
import 'antd/dist/antd.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App