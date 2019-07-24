
const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');
function openStream() {
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(stream => {
            playVideo(stream, 'localStream')

            //tao ra token tu #1            
            const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });
            p.on('signal', token => {
                $('#txtMySignal').val(JSON.stringify(token))
            });

            // p.on('connect', () => {
            //     setInterval(() => p.send(Math.random()), 2000);
            // });
            // p.on('data', data => console.log('Nhan du lieu: ' + data));
            p.on('stream', friendStream => playVideo(friendStream,  'friendStream'))

            //Tu offer token sinh ra ansewe 
            $('#btnConnect').click(() => {
                const friendSignal = JSON.parse($('#txtFriendSignal').val());
                p.signal(friendSignal);
            });
        })
        .catch(err => console.log(err));
}

// export ra openStream ( object, var, ...)
module.exports = openStream;