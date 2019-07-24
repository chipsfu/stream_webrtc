
const playVideo = require('./playVideo');

function openCamera(){
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(stream => playVideo(stream , 'localStream'))
    .catch(err => console.log(err));
}

// export ra openCamera ( object, var, ...)
module.exports = openCamera;