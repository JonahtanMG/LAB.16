const jsonOriginal = '{"nombre":"Ana","edad":25,"ciudad":"Lima"}';

const objetoJS = JSON.parse(jsonOriginal);
objetoJS.edad = 26;

const jsonActualizado = JSON.stringify(objetoJS);

console.log("JSON original:", jsonOriginal);
console.log("JSON actualizado:", jsonActualizado);