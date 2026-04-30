import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { spawn } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const backendDir = resolve(__dirname, '../../backend');

let backendProcess;

BeforeAll({ timeout: 120_000 }, async function () {
  backendProcess = spawn('./mvnw', ['spring-boot:run'], {
    cwd: backendDir,
    stdio: 'inherit',
  });

  const deadline = Date.now() + 90_000;
  while (Date.now() < deadline) {
    try {
      await fetch('http://localhost:8080/api/todos');
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  throw new Error('Backend did not start within 90 seconds');
});

AfterAll(async function () {
  backendProcess?.kill();
});
