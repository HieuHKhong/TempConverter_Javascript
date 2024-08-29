
// Process function when button is pressed
let buttonPressed = document.querySelector("button")
buttonPressed.addEventListener("click", buttonClicked)

function buttonClicked(){
    // Gets value from the textbox in html
    let input = document.getElementById('temp').value;
    
    
    
    // Gets the option selected for measurement
    let measurement = document.getElementById("Measurement");
    let selectedMeasurement = measurement.options[measurement.selectedIndex].text; 
    
    // Gets the option selected for conversion
    let conversion = document.getElementById("Conversion")
    let selectedConversion = conversion.options[conversion.selectedIndex].text;

    // Sets the first character of the string in "conversion" to the first letter
    let symbol = selectedConversion.charAt(0);
    
    // Calculates the proper formula for each temperature and places value into total.
    let total = 0;
    if (selectedMeasurement === "Celsius" && selectedConversion === "Kelvin"){
       total = +input + +273.15 + " " + symbol;
    }else if (selectedMeasurement === "Celsius" && selectedConversion === "Fahrenheit"){
        total = (+input * 9/5) + 32 + " " + symbol;
    }else if (selectedMeasurement === "Fahrenheit" && selectedConversion === "Celsius"){
        total = (+input - 32) * 5/9 + " " + symbol;
    }else if (selectedMeasurement === "Fahrenheit" && selectedConversion === "Kelvin"){
        total = (+input - 32) * 5/9 + 273.15 + " " + symbol;
    }else if (selectedMeasurement === "Kelvin" && selectedConversion === "Celsius"){
        total = (+input - +273.15) + " " + symbol;
    }else if (selectedMeasurement === "Kelvin" && selectedConversion === "Fahrenheit"){
        total = (+input - +273.15) * 9/5 + 32 + " " + symbol;
    }else if (selectedConversion === selectedMeasurement){  // Makes it so that user cannot input same temperature conversion
        total = "Please enter a unique conversion."
    }else if (input == 'e'){
        alert("Please enter a value other than e.")
    }
    // Displays conversion into the p tag labeled "conversion"
    let display = document.getElementById("conversion").innerHTML = total;
    
}
    



