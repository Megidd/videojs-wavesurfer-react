/* eslint-disable */
import React, { Component } from 'react';

import './App.css';

import 'video.js/dist/video-js.css';
import videojs from 'video.js';

import WaveSurfer from 'wavesurfer.js';

/*
// the following imports are only needed when you're using
// the microphone plugin
import 'webrtc-adapter';

import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
WaveSurfer.microphone = MicrophonePlugin;
*/

// register videojs-wavesurfer plugin with this import
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';

class App extends Component {
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.audioNode, this.props, () => {
            // print version information at startup
            const version_info = 'Using video.js ' + videojs.VERSION +
                ' with videojs-wavesurfer ' + videojs.getPluginVersion('wavesurfer') +
                ', wavesurfer.js ' + WaveSurfer.VERSION + ' and React ' + React.version;
            videojs.log(version_info);

            // load file
            this.player.src({src: 'hal.wav', type: 'audio/wav'});
        });

        this.player.on('waveReady', (event) => {
            console.log('waveform: ready!');
        });

        this.player.on('playbackFinish', (event) => {
            console.log('playback finished.');
        });

        // error handling
        this.player.on('error', (element, error) => {
            console.error(error);
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }
    render() {
        return (
        <div data-vjs-player>
            <audio id="myAudio" ref={node => this.audioNode = node} className="video-js vjs-default-skin"></audio>
        </div>
        );
    }
}

export default App;