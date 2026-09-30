const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Parse da URL e dos parâmetros da querystring
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Rota principal de cálculo de média
  if (pathname === '/media') {
    const p1Raw = query.p1;
    const p2Raw = query.p2;

    // Tratamento básico para notas não informadas
    if (p1Raw === undefined || p2Raw === undefined) {
      res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>Erro 400: Requisição Inválida</h1><p>É necessário informar as notas P1 e P2 na URL. Exemplo: <code>/media?p1=7.5&p2=5.0</code></p>');
    }

    const p1 = parseFloat(p1Raw);
    const p2 = parseFloat(p2Raw);

    // Tratamento para valores inválidos
    if (isNaN(p1) || isNaN(p2) || p1 < 0 || p1 > 10 || p2 < 0 || p2 > 10) {
      res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>Erro 400: Valores Inválidos</h1><p>As notas P1 e P2 devem ser números válidos entre 0.0 e 10.0.</p>');
    }

    // Cálculo da média
    const media = (p1 + p2) / 2;
    const aprovado = media >= 6.0;
    const situacao = aprovado ? 'APROVADO' : 'REPROVADO';

    // Definição da página correspondente
    const arquivoHtml = aprovado ? 'aprovado.html' : 'reprovado.html';
    const caminhoArquivo = path.join(__dirname, 'public', arquivoHtml);

    // Leitura da página HTML e substituição dos placeholders pelos valores calculados
    fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end('<h1>Erro 500: Erro interno no servidor</h1>');
      }

      // Injeção dos dados dinâmicos no template HTML
      let respostaHtml = data
        .replace(/{{P1}}/g, p1.toFixed(1))
        .replace(/{{P2}}/g, p2.toFixed(1))
        .replace(/{{MEDIA}}/g, media.toFixed(1))
        .replace(/{{SITUACAO}}/g, situacao);

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(respostaHtml);
    });

  } else {
    // Tratamento de rotas inexistentes (Página 404)
    const caminho404 = path.join(__dirname, 'public', '404.html');
    
    fs.readFile(caminho404, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end('<h1>Erro 404: Página Não Encontrada</h1>');
      }
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});