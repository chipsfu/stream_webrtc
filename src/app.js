/* eslint-disable import/no-extraneous-dependencies */
const Peer = require('simple-peer');
const $ = require('jquery');
const openStream = require('./openStream');
const playVideo = require('./playVideo');
// call functrion openStream tu file js
// neu viet openStream thi no se hieu module trong node module
// stream nhan tham so la function co tham so la stream
// Thuc thi open stream nhan tham so stream
openStream((stream) => {
  playVideo(stream, 'localStream');
  // tao ra token tu #1
  // eslint-disable-next-line no-restricted-globals
  const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });
  p.on('signal', (token) => {
    $('#txtMySignal').val(JSON.stringify(token));
  });

  // p.on('connect', () => {
  //     setInterval(() => p.send(Math.random()), 2000);
  // });
  // p.on('data', data => console.log('Nhan du lieu: ' + data));
  p.on('stream', friendStream => playVideo(friendStream, 'friendStream'));

  // Tu offer token sinh ra ansewe
  $('#btnConnect').click(() => {
    const friendSignal = JSON.parse($('#txtFriendSignal').val());
    p.signal(friendSignal);
  });
});
