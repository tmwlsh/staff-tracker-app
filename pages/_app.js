import '../sass/globals.scss';

import { AppWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
  let test = true;
  return (
    <AppWrapper>
      { test === true ? <Component {...pageProps} /> : <h1>NOPE</h1> }
    </AppWrapper>
  )
}

export default MyApp
