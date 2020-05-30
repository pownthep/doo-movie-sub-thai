import '../styles/global.css'
import '../styles/plyr.css'
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}