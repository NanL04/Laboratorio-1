function contarLetras(texto) {
    const contador = {};

    texto = texto.replace(/\s/g, '').toLowerCase();

    for (let letra of texto) {
        contador[letra] = (contador[letra] || 0) + 1;
    }

    return contador;
}

let par = `Lorem ipsum dolor sit amet consectetur adipiscing elit
Curabitur eget bibendum turpis Curabitur scelerisque eros
ultricies venenatis mi at tempor nisl Integer tincidunt accumsan
cursus`;

console.log(contarLetras(par));
