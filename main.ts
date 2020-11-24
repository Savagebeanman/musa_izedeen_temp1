// while True:
// print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")
while (true) {
    console.log("The temperature is: " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) >= 40) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
