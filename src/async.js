function funcaoPesada() {
    let exec = 0;

    for (let i = 0; i < 1000000000; i++) {
        exec++;
    }
    return exec;
}

console.log('inicio')
funcaoPesada();
console.log('fim')

//async
const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let exec = 0;
        for (let i = 0; i < 1000000000; i++) {
            exec++;
        }
        resolve(exec);
    }catch {
        reject('deu erro');
    }
})

console.log('inicio')
funcaoPesadaPromise.then(resultado => console.log(resultado));
console.log('fim')

//await
async function execucaoPrincipal() {
    console.log('inicio')
    //await funcaoPesadaPromise.then(resultado => console.log(resultado));
    const resultado = await funcaoPesadaPromise;
    console.log('fim')
}

execucaoPrincipal();


const promiseParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Logado coim sucesso')
        }, 3000)
    })
}