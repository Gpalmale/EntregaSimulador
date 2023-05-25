/*//  variables
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
btnConvertir.addEventListener('click', convertirMoneda);*/

/*const monedasDisponibles = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CLP'];

function obtenerApiUrl(monedaOrigen, monedaDestino) {
  return `https://api.exchangerate-api.com/v4/latest/${monedaOrigen}/${monedaDestino}`;
}

function convertirMoneda() {
  const monto = parseFloat(document.getElementById('monto').value);
  const monedaOrigen = document.getElementById('monedaOrigen').value;
  const monedaDestino = document.getElementById('monedaDestino').value;
  const outputResultado = document.getElementById('resultado');

  if (isNaN(monto) || !monedaOrigen || !monedaDestino) {
    outputResultado.innerText = 'Ingrese todos los valores';
    return;
  }

  fetch(obtenerApiUrl(monedaOrigen, monedaDestino))
    .then(response => response.json())
    .then(data => {
      const tasaDeCambio = data.conversion_rate;
      const resultado = monto * tasaDeCambio;
      outputResultado.innerText = `${monto} ${monedaOrigen} = ${resultado.toFixed(2)} ${monedaDestino}`;
    })
    .catch(error => {
      console.error('Error al obtener los tipos de cambio:', error);
      outputResultado.innerText = 'Error al obtener los tipos de cambio';
    });
}

monedasDisponibles.forEach(moneda => {
  const opcionOrigen = document.createElement('option');
  opcionOrigen.value = moneda;
  opcionOrigen.innerText = moneda;
  document.getElementById('monedaOrigen').appendChild(opcionOrigen);

  const opcionDestino = document.createElement('option');
  opcionDestino.value = moneda;
  opcionDestino.innerText = moneda;
  document.getElementById('monedaDestino').appendChild(opcionDestino);
});

document.getElementById('convertir').addEventListener('click', convertirMoneda);
*/


let monto = 0;
let monedaOrigen = '';
let monedaDestino = '';

function obtenerMonedas() {
  return ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CLP'];
}

function obtenerApiUrl(monedaOrigen) {
  return `https://api.exchangerate-api.com/v4/latest/${monedaOrigen}`;
}

const inputMonto = document.getElementById('monto');
const selectOrigen = document.getElementById('monedaOrigen');
const selectDestino = document.getElementById('monedaDestino');
const btnConvertir = document.getElementById('convertir');
const outputResultado = document.getElementById('resultado');

function convertirMoneda() {
  if (!inputMonto.value || !selectOrigen.value || !selectDestino.value) {
    outputResultado.innerText = 'Ingrese todos los valores';
    return;
  }

  monto = parseFloat(inputMonto.value) ?? 0;
  monedaOrigen = selectOrigen.value;
  monedaDestino = selectDestino.value;

  fetch(obtenerApiUrl(monedaOrigen))
    .then(response => response.json())
    .then(data => {
      const tasaDeCambio = data.rates?.[monedaDestino];
      const resultado = monto * (tasaDeCambio ?? 0);
      outputResultado.innerText = `${monto} ${monedaOrigen} = ${resultado.toFixed(2)} ${monedaDestino}`;
    })
    .catch(error => {
      console.error('Error al obtener los tipos de cambio:', error);
      outputResultado.innerText = 'Error al obtener los tipos de cambio';
    });
}

obtenerMonedas()?.forEach(moneda => {
  const opcionOrigen = document.createElement('option');
  opcionOrigen.value = moneda;
  opcionOrigen.innerText = moneda;
  selectOrigen.appendChild(opcionOrigen);

  const opcionDestino = document.createElement('option');
  opcionDestino.value = moneda;
  opcionDestino.innerText = moneda;
  selectDestino.appendChild(opcionDestino);
});

btnConvertir?.addEventListener('click', convertirMoneda);
