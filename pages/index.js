import Head from 'next/head'

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Rafael Akiyoshi</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <h1 className="kanji">秋吉</h1>
        <h1 className="my-name">Rafael Akiyoshi</h1>
        <p className="my-desc">Software Engineer</p>
      </div>
    </div>
  )
}
