
function openStream(cb) {
  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then((stream) => {
      cb(stream);
      // fc openstream co tham so 'cb' goi cb() thi cb chac chan la function.
      // khi thuc thi thi truyen vao gia tri stream
    })
    .catch(err => console.log(err));
}

// export ra openStream ( object, var, ...)
module.exports = openStream;
