let temp = input.temperature(TemperatureUnit.Fahrenheit)
// while True:
// print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")
if (temp > 60) {
    light.setPixelColor(5, light.rgb(255, 0, 0))
}

