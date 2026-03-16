import { createServer } from 'node:http';

const server = createServer((req, res) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST',
    'Content-Type': 'application/json'
  };

  // manejar preflight de CORS
  if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/sumar") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {

      const datos = JSON.parse(body);

      const n1 = parseFloat(datos.a);
      const n2 = parseFloat(datos.b);

      const resultado = n1 + n2;

      res.writeHead(200, headers);
      res.end(JSON.stringify({ resultado }));

    });

  }

});

server.listen(3003, () => {
  console.log("Microservicio SUMA Body Params en puerto 3003");
});
