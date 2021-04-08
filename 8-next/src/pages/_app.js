import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { random as getRandom } from 'lodash'
// import NextNprogress from 'nextjs-progressbar'
import Header from 'cmp/Header'
import Sidebar from 'cmp/Sidebar'
import Footer from 'cmp/Footer'
import 'styles/global.css'

// function getRandom (min, max) {
//   min = Math.ceil(min)
//   max = Math.floor(max)

//   return Math.floor(Math.random() * (max - min) + min)
// }

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [random, setRandom] = useState()

  function loadingOn () {
    setLoading(true)
  }

  function loadingOff () {
    setLoading(false)
  }

  useEffect(() => {
    setRandom(getRandom(0, 20))
    router.events.on('routeChangeStart', loadingOn)
    router.events.on('routeChangeComplete', loadingOff)

    return () => {
      router.events.off('routeChangeStart', loadingOn)
      router.events.off('routeChangeComplete', loadingOff)
    }
  }, [])

  return (
    <div>
      {loading && 'Loading .....'}

      {random}

      {/* <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height='3'
      /> */}

      <Header />

      <section style={{ display: 'flex' }}>
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
