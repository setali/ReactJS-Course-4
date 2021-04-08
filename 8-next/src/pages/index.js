import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>ReactJS | HomePage</title>
      </Head>
      <div>Homepage</div>
      <h3>Hi {process.env.myName}</h3>
    </>
  )
}
