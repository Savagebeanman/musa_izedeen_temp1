let tempf = input.temperature(TemperatureUnit.Fahrenheit)
// Tempf=60
// while True:
// print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")
while (true) {
    console.log("temperature " + tempf)
    if (tempf >= 70) {
        light.setPixelColor(5, light.rgb(255, 0, 0))
    } else if (70 > tempf && tempf >= 40) {
        light.setPixelColor(5, light.rgb(0, 255, 0))
    } else {
        light.setPixelColor(5, light.rgb(0, 0, 255))
    }
    
}
