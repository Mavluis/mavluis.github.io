let miImage = document.querySelector("img");
miImage.onclick = function() {
  var miSrc = miImage.getAttribute("src");
  if (miSrc === "images/logo-hack-abos-horizontal.png") {
    miImage.setAttribute("src", "images/firefox2.png");
  } else {
    miImage.setAttribute("src", "images/logo-hack-abos-horizontal.png");
  }
};

function calc() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let oper = document.getElementById("operators").value;
  if (oper === "+") {
    document.getElementById("result").value = (n1 + n2).toFixed(2);
  }

  if (oper === "-") {
    document.getElementById("result").value = (n1 - n2).toFixed(2);
  }

  if (oper === "*") {
    document.getElementById("result").value = (n1 * n2).toFixed(2);
  }

  if (oper === "/") {
    document.getElementById("result").value = (n1 / n2).toFixed(2);
  }
}

let miBoton = document.querySelector("button1");
let miTitulo = document.querySelector("h3");
function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, pon tu nombre:");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Esta es la vida real, " + miNombre;
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Has repetido, " + nombreAlmacenado;
}
miBoton.onclick = function() {
  estableceNombreUsuario();
};

function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "Has pinchado en el botón!!!";
  document.body.appendChild(para);
}

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("onclick", createParagraph);
}
