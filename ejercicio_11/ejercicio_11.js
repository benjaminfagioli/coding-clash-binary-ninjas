const nMuestras = ["NNS", "SNN", "NSN", "NNS"];

const tubitos = (muestras = nMuestras) => {
  let pulsaciones = 0;
  for (const muestra of nMuestras) {
    pulsaciones += muestra
      .split("")
      .reduce((acc, item) => (item === "N" ? acc + 1 : acc), 0);
  }
  return pulsaciones;
};
console.log(tubitos());
