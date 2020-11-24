

#while True:
    #print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")


while True:  
    print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))  
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 60:
        light.set_pixel_color(5, light.rgb(255, 0, 0))
        
    elif 70>input.temperature(TemperatureUnit.FAHRENHEIT)>=40:
        light.set_pixel_color(5, light.rgb(0, 255, 0))

    else:
        light.set_pixel_color(5, light.rgb(0, 0, 255))
