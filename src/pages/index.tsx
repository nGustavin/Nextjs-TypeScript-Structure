import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import playlistImage from '../pages/assets/playlistImage.jpg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className="leftbar">
        <div className="topContainer">
          <h1 className="topIcon">Apple Music</h1>
          <input type="text" name="search" placeholder="Buscar" />
        </div>
        <div className="middleContainer">
          <h1 className="middleListen">Ouca Agora</h1>
          <h2> Hip-hop </h2>
          <h2> Sertanejo </h2>
          <h2> Rock </h2>
          <h2> Funk </h2>
          <h2> Reggae </h2>
          <h2> Pop </h2>
          <h2> Eletronica </h2>
          <h2> Soul </h2>
          <h1 className="middleExplore">Explorar</h1>
          <h1 className="middleRadio">Radio</h1>
        </div>
        <div className="bottomContainer">
          <h1 className="bottomOpen">Abrir no iTunes </h1>
          <h1 className="bottomLeave">Sair do beta </h1>
          <h1 className="bottomFeedback">Dar feedback do beta</h1>
        </div>
      </div>
      <div className="principal">
        <div className="first1"></div>
        <div className="second1">
          <img src={playlistImage} />
        </div>
        <div className="second2">
          <img src={playlistImage} />
        </div>
        <div className="second3">
          <img src={playlistImage} />
        </div>
        <div className="second4">
          <img src={playlistImage} />
        </div>
        <div className="second5">
          <img src={playlistImage} />
        </div>
        <div className="second6">
          <img src={playlistImage} />
        </div>
        <div className="second7">
          <img src={playlistImage} />
        </div>
        <div className="second8">
          <img src={playlistImage} />
        </div>
        <div className="second9">
          <img src={playlistImage} />
        </div>
      </div>
    </Container>
  )
}

export default Home
