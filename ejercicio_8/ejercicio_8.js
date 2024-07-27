const fuerzaTest = [100, 150, 200, 250, 300, 350];
const alturasTest = [150, 160, 170, 180, 190, 200];
const pesosTest = [50, 60, 70, 80];
const distanciaTest = 1400;

const thor = (
  f = fuerzaTest,
  a = alturasTest,
  p = pesosTest,
  D = distanciaTest
) => {
  if (f.length !== a.length || f.length < 1)
    return "Los arrays de altura y fuerza deben tener la misma longitud y ser mayor a 0";
  if (p.length < 1) return "El array de objetos no puede estar vacio";
  if (D < 0) return "La distancia no puede ser negativa";
  const distanciasLanzadas = [];

  for (let i = 0; i < f.length; i++) {
    const fuerzaActual = f[i];
    const alturaActual = a[i];

    for (const peso of p) {
      const distanciaActual = (fuerzaActual * alturaActual) / peso;
      distanciaActual >= D && distanciasLanzadas.push(distanciaActual);
    }
  }
  return distanciasLanzadas.length;
};

console.log(thor());
