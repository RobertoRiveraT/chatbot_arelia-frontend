const fs = require('fs');
const path = require('path');
require('dotenv').config({
    path: `.env.${process.env['NODE_ENV']}`
});

// write-env.js para que NO se ejecute si NODE_ENV === production
if (process.env.NODE_ENV === 'production') {
    console.log('🛑 Skipping env.js generation in production');
    process.exit(0);
}

// Asegúrate de que la carpeta exista
const outDir = path.join(__dirname, '../src/assets');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Genera el archivo
const content = `window.__env = { baseUrl: '${process.env['BASE_URL']}' };`;
fs.writeFileSync(path.join(outDir, 'env.js'), content, { encoding: 'utf8' });
console.log('✅  assets/env.js generado:', content);
