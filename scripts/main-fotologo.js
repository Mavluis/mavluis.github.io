var miImage = document.querySelector('img');
miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/logo-hack-abos-horizontal.png') {
      miImage.setAttribute('src','images/firefox2.png');
    } else {
      miImage.setAttribute('src', 'images/logo-hack-abos-horizontal.png');
    }
}