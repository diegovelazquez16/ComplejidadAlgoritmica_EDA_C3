function encontrarGanadorCuadratico(A) {
    let n = A.length;
    let maxVotos = 0;
    let ganador = -1;
    let iteraciones = 0;

    for (let i = 0; i < n; i++) {
        let candidato = A[i];
        let contador = 0;
        for (let j = 0; j < n; j++) {
            iteraciones++;
            if (A[j] === candidato) {
                contador++;
            }
        }
        if (contador > maxVotos) {
            maxVotos = contador;
            ganador = candidato;
        }
    }
    return { ganador, iteraciones };
}


function encontrarGanadorLogaritmico(A) {
    A.sort((a, b) => a - b);
    let maxVotos = 1;
    let votosActuales = 1;
    let ganador = A[0];
    let iteraciones = 0;

    for (let i = 1; i < A.length; i++) {
        iteraciones++;
        if (A[i] === A[i - 1]) {
            votosActuales++;
        } else {
            if (votosActuales > maxVotos) {
                maxVotos = votosActuales;
                ganador = A[i - 1];
            }
            votosActuales = 1;
        }
    }
    if (votosActuales > maxVotos) {
        ganador = A[A.length - 1];
    }
    return { ganador, iteraciones };
}


function encontrarGanadorLineal(A) {
    let conteoVotos = {};
    let maxVotos = 0;
    let ganador = -1;
    let iteraciones = 0;

    for (let voto of A) {
        iteraciones++;
        if (conteoVotos[voto] === undefined) {
            conteoVotos[voto] = 1;
        } else {
            conteoVotos[voto]++;
        }
        if (conteoVotos[voto] > maxVotos) {
            maxVotos = conteoVotos[voto];
            ganador = voto;
        }
    }
    return { ganador, iteraciones };
}


function probarAlgoritmos() {
    const votos = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]; 

    console.log("Probando 'contrarGanadorCuadratico:´");
    console.time("Tiempo de ejecución");
    let resultado = encontrarGanadorCuadratico(votos);
    console.timeEnd("Tiempo de ejecución");
    console.log("Ganador:", resultado.ganador);
    console.log("Iteraciones:", resultado.iteraciones);

    console.log("\nProbando 'encontrarGanadorLogaritmico':");
    console.time("Tiempo de ejecución");
    resultado = encontrarGanadorLogaritmico(votos);
    console.timeEnd("Tiempo de ejecución");
    console.log("Ganador:", resultado.ganador);
    console.log("Iteraciones:", resultado.iteraciones);

    console.log("\nProbando 'encontrarGanadorLineal´¿:");
    console.time("Tiempo de ejecución");
    resultado = encontrarGanadorLineal(votos);
    console.timeEnd("Tiempo de ejecución");
    console.log("Ganador:", resultado.ganador);
    console.log("Iteraciones:", resultado.iteraciones);


}

// Ejecutar las pruebas
probarAlgoritmos();
