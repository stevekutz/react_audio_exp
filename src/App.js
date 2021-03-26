
import React, { useEffect, useState } from 'react';
import longBeep from './assets/sounds/longbeep.mp3';
import click from './click.mp3'

function App() {

  // use Audio constructor to create HTMLAudioElement
// const audioTune = new Audio(click);    //  click  plays sound

const audioTune = new Audio(click); //    'click' does not play sound
  console.log("audioTune obj >> ", audioTune);

  // variable to play audio in loop
  const [playInLoop, setPlayInLoop] = useState(false);

  // load audio file on component load
  useEffect(() => {
    audioTune.load();
  })

  // set the loop of audio tune
    // uses Boolean attribute
  useEffect(() => {
    audioTune.loop = playInLoop;
  });

  // play audio sound
  const playSound = () => {
    audioTune.play();
  }

  // pause audio sound
  const pauseSound = () => {
    audioTune.pause();
  }

  // stop audio sound
  const stopSound = () => {
    audioTune.pause();
    audioTune.currentTime = 0;
  }

  return (
    <div className="App">
      
      <div style = {{border: "1px solid green"}} >
        <h1> Using Audio constructor inherited from HTMLAudioElement</h1>
        <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound}></input>
        <input type="button" className="btn btn-warning mr-2" value="Pause" onClick={pauseSound}></input>
        <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound}></input>

        <label><input type="checkbox" checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)} /> Play in Loop</label>
      </div>

      
    </div>
  );
}

export default App;
