import React from 'react';
import Game from "./components/Game";
import MIDISounds from 'midi-sounds-react';

const App = () =>  {
  return (
    <div className="App">
      <div className="stage-background">
        <Game />
      </div>
      <MIDISounds id="hidden-sound-player" ref={(ref) => (window.midiSounds = ref)} appElementName="root" drums={[36]} />	
    </div>
  );
}

function onElementHeightChange(elm, callback) {
  var lastHeight = elm.clientHeight, newHeight;
  (function run() {
    newHeight = elm.clientHeight;
    if (lastHeight !== newHeight)
      callback(newHeight)
    lastHeight = newHeight

    if (elm.onElementHeightChangeTimer)
      clearTimeout(elm.onElementHeightChangeTimer)

    elm.onElementHeightChangeTimer = setTimeout(run, 200)
  })()
}




onElementHeightChange(document.body, function (h) {
  // console.log('Body height changed:', h);
  h = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;
  let cols = Array.from(document.getElementsByClassName("column-container"));
  // console.log(cols);
  document.body.height = h + "px";
  if (cols.length > 0) {
    cols.forEach(col => {
      col.height = h + "px";
    })
  }
  document.getElementById("root").style.height = window.innerHeight + "px";
  let stageSelectMain = Array.from(document.getElementsByClassName("stage-select-main"));
  if (stageSelectMain.length > 0) {
    stageSelectMain[0].style.height = h + "px";
  }
  let selectPageContainer = Array.from(document.getElementsByClassName("stage-select-page-container"));
  if (selectPageContainer.length > 0) {
    selectPageContainer[0].style.height = h + "px";
  }
  let showScoreModal = document.getElementById("show-score-playing");
  if (showScoreModal) {
    showScoreModal.style.height = (h - 140) + "px";
  }
  let gameMain = Array.from(document.getElementsByClassName("game-main"));
  if (gameMain.length > 0) {
    gameMain[0].style.height = h + "px";
  }
});


export default App;
