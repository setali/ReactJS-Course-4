import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {


    return (
        <div>
            <Header />

            <section style={{display: 'flex'}}>
                <Sidebar />

                <article>
                    <Component {...pageProps} />
                </article>
            </section>


            <Footer />
        </div>
    )
}

export default MyApp