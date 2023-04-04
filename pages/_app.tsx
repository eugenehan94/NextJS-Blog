// `pages/_app.js`
// This file was changed from "_app.js" to "_app.tsx"
import "../styles/globals.css";

// Import for Typescript types
import { AppProps } from "next/app";

// Original code before changed to Typescript
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App