import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = resolve(__dirname, '../../');

setDefaultTimeout(15_000);

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
};

function startServer() {
  return new Promise((res) => {
    const server = createServer((req, reply) => {
      const filePath = projectRoot + (req.url === '/' ? '/index.html' : req.url);
      try {
        const body = readFileSync(filePath);
        reply.writeHead(200, { 'Content-Type': MIME[extname(filePath)] ?? 'text/plain' });
        reply.end(body);
      } catch {
        reply.writeHead(404);
        reply.end('Not found');
      }
    });
    server.listen(0, '127.0.0.1', () => res(server));
  });
}

Before(async function () {
  this.server = await startServer();
  this.baseUrl = `http://127.0.0.1:${this.server.address().port}`;
  this.browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] });
  this.page = await this.browser.newPage();
});

After(async function () {
  await this.browser?.close();
  await new Promise((res) => this.server?.close(res));
});
