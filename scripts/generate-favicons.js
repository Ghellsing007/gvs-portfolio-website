// Script para generar favicons
// Ejecutar: node scripts/generate-favicons.js

const fs = require('fs');
const path = require('path');

// Crear el directorio de scripts si no existe
const scriptsDir = path.dirname(__filename);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

console.log('🎨 Generador de Favicons para GVS Portfolio');
console.log('==========================================');
console.log('');
console.log('Para generar todos los favicons necesarios, sigue estos pasos:');
console.log('');
console.log('1. Ve a https://realfavicongenerator.net/');
console.log('2. Sube el archivo /public/favicon.svg');
console.log('3. Configura las opciones:');
console.log('   - iOS: Usa el diseño por defecto');
console.log('   - Android: Usa el diseño por defecto');
console.log('   - Windows: Color de fondo #64748b');
console.log('   - macOS Safari: Color de tema #64748b');
console.log('4. Genera y descarga el paquete');
console.log('5. Extrae todos los archivos en la carpeta /public/');
console.log('');
console.log('Archivos que necesitas generar:');
console.log('- favicon.ico');
console.log('- favicon-16x16.png');
console.log('- favicon-32x32.png');
console.log('- apple-touch-icon.png');
console.log('- android-chrome-192x192.png');
console.log('- android-chrome-512x512.png');
console.log('');
console.log('✅ El favicon.svg ya está creado en /public/favicon.svg');
console.log('✅ Los metadatos ya están configurados en app/layout.tsx');
console.log('✅ El manifest.ts ya está configurado');