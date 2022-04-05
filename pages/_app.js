import Navbar from '../components/navbar'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return( 
    <>
    <Navbar />
    <Component {...pageProps} className="overflow-hidden" />
    </>
    )
}

export default MyApp
