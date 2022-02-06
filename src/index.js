import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const videoJsOptions = {
    controls: true,
    bigPlayButton: false,
    width: 600,
    height: 300,
    fluid: false,
    plugins: {
        wavesurfer: {
            backend: 'MediaElement',
            displayMilliseconds: true,
            debug: true,
            waveColor: '#163b5b',
            progressColor: 'black',
            cursorColor: 'black',
            hideScrollbar: true
        }
    }
};

ReactDOM.render(
  <React.StrictMode>
    <App { ...videoJsOptions }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();