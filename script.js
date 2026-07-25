function convertTemperature(){

    const temperature = Number(document.getElementById("temperature").value);

    const conversion = document.getElementById("conversion").value;

    const result = document.getElementById("result");

    if(isNaN(temperature)){
        result.textContent = "Please enter a valid number.";
        return;
    }

    if(conversion === "CtoF"){

        const fahrenheit = (temperature * 9 / 5) + 32;

        result.textContent =
            `${temperature}°C = ${fahrenheit.toFixed(2)}°F`;

    }else{

        const celsius = (temperature - 32) * 5 / 9;

        result.textContent =
            `${temperature}°F = ${celsius.toFixed(2)}°C`;

    }

}