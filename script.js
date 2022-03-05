const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

const swap = () => {
    if (C.innerHTML === '°Celsius') {
        C.innerHTML = '°Fahrenheit';
        F.innerHTML = '°Celsius';
        document.title = "Converter °Fahrenheit to °Celsius";
        converter.placeholder = "°F";

    } else {
        F.innerHTML = '°Fahrenheit';
        C.innerHTML = '°Celsius';
        document.title = "Converter °Celsius to °Fahrenheit";
        converter.placeholder = "°C";
    };
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "yellow"
        if (C.innerHTML === '°Celsius') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°Celsius = ${value.toFixed(2)}°Fahrenheit`;
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}°Fahrenheit = ${value.toFixed(2)}°Celsius`;
        }
    } else if (converter.value == '') {
        result.style.color = "#993300"
        result.innerHTML = 'Write correct value!';
    } else {
        result.style.color = "#993300"
        result.innerHTML = 'Wrong value!';
    }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);