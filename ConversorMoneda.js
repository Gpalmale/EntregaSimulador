//  variables
let monto = 0;
let monedaOrigen = '';
let monedaDestino = '';

//  función monedas
function obtenerMonedas() {
  return ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CLP'];
}

// función URL API
function obtenerApiUrl(monedaOrigen) {
  return `https://api.exchangerate-api.com/v4/latest/${monedaOrigen}`;
}

//  elementos
const inputMonto = document.getElementById('monto');
const selectOrigen = document.getElementById('monedaOrigen');
const selectDestino = document.getElementById('monedaDestino');
const btnConvertir = document.getElementById('convertir');
const outputResultado = document.getElementById('resultado');

// conversión
function convertirMoneda() {
  // Verifica si los campos no están vacíos
  if (inputMonto.value === '' || selectOrigen.value === '' || selectDestino.value === '') {
    outputResultado.innerText = 'Ingrese todos los valores';
    return;
  }

  monto = parseFloat(inputMonto.value);
  monedaOrigen = selectOrigen.value;
  monedaDestino = selectDestino.value;

  // tipos de cambio
  fetch(obtenerApiUrl(monedaOrigen))
    .then(response => response.json())
    .then(data => {
      const tasaDeCambio = data.rates[monedaDestino];
      const resultado = monto * tasaDeCambio;
      outputResultado.innerText = `${monto} ${monedaOrigen} = ${resultado.toFixed(2)} ${monedaDestino}`;
    })
    .catch(error => {
      console.error('Error al obtener los tipos de cambio:', error);
      outputResultado.innerText = 'Error al obtener los tipos de cambio';
    });
}

// selectores de moneda con valores
obtenerMonedas().forEach(moneda => {
  const opcionOrigen = document.createElement('option');
  opcionOrigen.value = moneda;
  opcionOrigen.innerText = moneda;
  selectOrigen.appendChild(opcionOrigen);

  const opcionDestino = document.createElement('option');
  opcionDestino.value = moneda;
  opcionDestino.innerText = moneda;
  selectDestino.appendChild(opcionDestino);
});

//  click del botón
btnConvertir.addEventListener('click', convertirMoneda);
