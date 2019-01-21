var miImage = document.querySelector('img');
miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/logo-hack-abos-horizontal.png') {
      miImage.setAttribute('src','images/firefox2.png');
    } else {
      miImage.setAttribute('src', 'images/logo-hack-abos-horizontal.png');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, pon tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Esta es la vida real,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Has repetido,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}