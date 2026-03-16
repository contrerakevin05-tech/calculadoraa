import { createServer } from 'node:http';

const server = createServer((req, res) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  const partes = req.url.split('/'); // ejemplo: /sumar/5/9

  if (partes[1] === "sumar") {

    const n1 = parseFloat(partes[2]);
    const n2 = parseFloat(partes[3]);

    const resultado = n1 + n2;

    res.writeHead(200, headers);
    res.end(JSON.stringify({ resultado }));

  } else {

    res.writeHead(404, headers);
    res.end(JSON.stringify({ error: "Endpoint no encontrado" }));

  }

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
 console.log(`Microservicio SUMA path Params en puerto ${PORT}`);
});
