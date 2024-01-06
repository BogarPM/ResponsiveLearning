import React from "react"
import "../styles/responsive/mobile.css"
import "../styles/responsive/tablet.css"
import "../styles/responsive/desktop.css"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
      <Component {...pageProps} />
  )
}
export default MyApp