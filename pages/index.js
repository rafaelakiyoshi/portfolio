import Head from 'next/head'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
        <div className="icons-list">
          <a href="https://github.com/rafaelakiyoshi">
            <GitHubIcon  style={{ fontSize: 20 }} className="logo"/>
          </a>
          <a href="https://www.linkedin.com/in/rafaelakiyoshi/">
            <LinkedInIcon  style={{ fontSize: 25 }} className="logo"/>
          </a>
        </div>
      </div>
    </div>
  )
}
