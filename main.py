

#while True:
    #print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")


while True:  
    print("The temperature is: " + input.temperature(TemperatureUnit.FAHRENHEIT))  
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 70:
        light.set_all(light.rgb(255, 0, 0))
        
    elif input.temperature(TemperatureUnit.FAHRENHEIT)>=40:
        light.set_all(light.rgb(0, 255, 0))

    else:
        light.set_all(light.rgb(0, 0, 255))
