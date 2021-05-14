function reto3(arr) {
  var raiz = Math.sqrt(arr.length);
  var suma2 = 0;
  var suma1 = 0;
  if (Number.isInteger(raiz)) {
    console.log("Si puede convertirse en matriz");
    var partes = raiz;
    matriz = [];
    for (let i = 0; i < arr.length; i += partes) {
      let partess = arr.slice(i, i + partes);
      matriz.push(partess);
    }
    for (let i = 0; i < matriz.length; i++) {
      espacios = "";
      for (let j = 0; j < matriz[i].length; j++) {
        espacios += matriz[i][j] + "\t";
      }
      console.log(espacios);
    }

    for (let i = 0; i < partes; i++) {
      for (let j = 0; j < partes; j++) {
        if (i == j) suma1 += matriz[i][j];
      }
    }

    for (let i = 0; i < partes; i++) {
      for (let j = 0; j < partes; j++) {
        if (i + j == partes - 1) suma2 += matriz[i][j];
      }
    }

    var resta = suma1 - suma2;
    console.log(resta < 0 ? resta * -1 : resta);
  } else {
    console.log("EL resultado contiene decimales");
  }
}

reto3([4, 8, 13, 7, 0, 5, 2, 8, 10]);
