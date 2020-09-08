import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 370px 1fr;
  grid-template-areas: 'LB MA';

  .leftbar {
    background-color: #7159c1;
    grid-area: LB;
    display: grid;
    grid-template-rows: 250px 1fr 50px;
    grid-template-areas:
      'TB'
      'MB'
      'BB';
    grid-gap: 7px;
  }

  input {
    height: 35px;
    width: 220px;
    border-radius: 8px;
    border: none;
    background: #191622;
    transition: 0.3s;
    padding: 15px;
  }
  input:hover {
    width: 270px;
    color: white;
    background-color: #282a36;
  }
  input:focus {
    width: 250px;
    background-color: #282a36;
    color: white;
    outline: none;
  }

  .topContainer {
    background-color: #201b2d;
    grid-area: TB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    border-radius: 8px;
    margin: -7px 7px 0px 7px;
  }

  .middleContainer {
    background-color: #201b2d;
    grid-area: MB;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    font-size: 10pt;
    border-radius: 8px;
    margin: 0px 7px 0px 7px;
  }

  .bottomContainer {
    background-color: #201b2d;
    grid-area: BB;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 4pt;
    gap: 30px;
    border-radius: 8px;
    margin: 0px 7px -7px 7px;
    overflow-y: hidden;
    color: #8d93ab;
  }

  .topIcon {
  }

  .topSearch {
  }

  .middleListen {
    margin: -54px 0px 0px 54px;
  }

  h2 {
    margin-left: 64px;
    margin-top: -50px;
    font-size: 12pt;
    color: #8d93ab;
    transition: 0.5s;
  }
  h2:hover {
    color: #7159c1;
    cursor: pointer;
  }

  .middleExplore {
    margin: -30px 0px 0px 54px;
    color: #8d93ab;
    transition: 0.5s;
    font-size: 16pt;
  }
  .middleExplore:hover {
    cursor: pointer;
    color: #fff;
  }

  .middleRadio {
    margin: -50px 0px -40px 54px;
    color: #8d93ab;
    font-size: 16pt;
    transition: 0.5s;
  }

  .middleRadio:hover {
    cursor: pointer;
    color: #fff;
  }

  .bottomOpen {
  }

  .bottomLeave {
  }

  .bottomFeedback {
  }

  .principal {
    grid-area: MA;
    background-color: #7159c1;
    display: grid;
    grid-template-rows: 100px 600px 250px 200px 400px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'AA AA AA AA AA AA'
      'AB AB BB BB CB CB'
      'AC BC CC DC EC FC'
      'AD BD CD DD ED FD'
      'AE BE CE DE EE FE';

    overflow-y: scroll;
    grid-gap: 15px;
    /* width */
    ::-webkit-scrollbar {
      width: 15px;
      margin-right: 1px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: #7159c1;
      margin-right: 10px;
      width: 5px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #201b2d;
      border-radius: 100px;
      border: 5px solid #7159c1;
    }
    .first1 {
      grid-area: AA;
      margin-top: -5px;
      background-color: #201b2d;
      border-radius: 8px;
    }

    .second1 {
      background-color: #201b2d;
      grid-area: AB;
      border-radius: 10px;
      margin: 5px 0px 7px 0px;
      position: relative;
    }
    .second2 {
      background-color: #201b2d;
      grid-area: BB;
      border-radius: 10px;
      margin: 5px 0px 7px 7px;
      position: relative;
    }

    .second3 {
      background-color: #201b2d;
      grid-area: CB;
      border-radius: 10px;
      margin: 5px 0px 7px 7px;
      position: relative;
    }
    .second4 {
      background-color: yellow;
      grid-area: AC;
      border-radius: 10px;
      margin: 5px 0px 7px 0px;
      position: relative;
    }

    .second5 {
      background-color: red;
      grid-area: BC;
      border-radius: 10px;
      margin: 5px 0px 7px 7px;
      position: relative;
    }
    .second6 {
      background-color: yellow;
      grid-area: CC;
      border-radius: 10px;
      margin: 5px 0px 7px 7px;
      position: relative;
    }
    .second7 {
      background-color: red;
      grid-area: DC;
      border-radius: 10px;
      margin: 5px 0px 7px 7px;
      position: relative;
    }

    .second8 {
      background-color: yellow;
      grid-area: EC;
      border-radius: 10px;
      margin: 5px 0px 7px 7px;
      position: relative;
    }

    .second9 {
      background-color: red;
      grid-area: FC;
      border-radius: 10px;
      margin: 5px 0px 7px 7px;
      position: relative;
    }

    img {
      width: 100%;
      position: absolute;
      border-radius: 10px;
      margin-top: -1px;
    }
  }
`
