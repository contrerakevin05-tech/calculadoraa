const display = document.getElementById('resultado');

function sumaPath() {

  const n1 = document.getElementById('numA').value;
  const n2 = document.getElementById('numB').value;

  fetch(`https://calculadoraa-production.up.railway.app/sumar/${n1}/${n2}`)
    .then(res => res.json())
    .then(data => {
      display.innerText = "Resultado: " + data.resultado;
    })
    .catch(err => {
      display.innerText = "Error al conectar con el microservicio Path";
    });

}

function sumaQuery() {

  const n1 = document.getElementById('numA').value;
  const n2 = document.getElementById('numB').value;

  fetch(`https://calculadoraa.onrender.com/sumar?a=${n1}&b=${n2}`)
    .then(res => res.json())
    .then(data => {
      display.innerText = "Resultado: " + data.resultado;
    })
    .catch(err => {
      display.innerText = "Error al conectar con el microservicio Query";
    });

}

function sumaBody() {

  const n1 = document.getElementById('numA').value;
  const n2 = document.getElementById('numB').value;

  fetch(`http://127.0.0.1:3003/sumar`, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      a: n1,
      b: n2
    })

  })
    .then(res => res.json())
    .then(data => {
      display.innerText = "Resultado: " + data.resultado;
    })
    .catch(err => {
      display.innerText = "Error al conectar con el microservicio Body";
    });

}
