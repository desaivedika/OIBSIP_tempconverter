const CelsiusE1 = document.getElementById("Celsius");
const FahrenheitE1 = document.getElementById("Fahrenheit");
const kelvinE1 = document.getElementById("Kelvin");

function computeTemp() {
    //add + to avoid string problem
    const currentvalue = +event.target.value;

    switch (event.target.name) {
            case "Celsius":
            kelvinE1.value = currentvalue + 273.15;
            FahrenheitE1.value = currentvalue * 1.8 + 32;
            break;
            case "Fahrenheit":
            CelsiusE1.value = (currentvalue - 32) / 1.8;
            kelvinE1.value = (currentvalue - 32) / 1.8 + 273.15 ;
            break;
            case "Kelvin":
            CelsiusE1.value = currentvalue - 273.15;
            FahrenheitE1.value = (currentvalue - 273.15) * 1.8 + 32;
            break;

        default:
            break;    
        

    }
    
}