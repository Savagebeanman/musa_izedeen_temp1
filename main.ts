// while True:
// print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")
while (true) {
    console.log("temperature " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 60) {
        light.setPixelColor(5, light.rgb(255, 0, 0))
    } else if (70 > input.temperature(TemperatureUnit.Fahrenheit) && input.temperature(TemperatureUnit.Fahrenheit) >= 40) {
        light.setPixelColor(5, light.rgb(0, 255, 0))
    } else {
        light.setPixelColor(5, light.rgb(0, 0, 255))
    }
    
}
