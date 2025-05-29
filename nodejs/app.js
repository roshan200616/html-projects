const crypto = require('crypto');
console.log('demo0')
// Generate Diffie-Hellman group
const dh = crypto.createDiffieHellman(512);
dh.generateKeys(); // Don't forget this line
console.log("Prime (p):", dh.getPrime('hex'));
console.log("Generator (g):", dh.getGenerator('hex'));