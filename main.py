temp=input.temperature(TemperatureUnit.FAHRENHEIT)


#while True:
    #print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")



    
if temp > 60:
    light.set_pixel_color(5, light.rgb(255, 0, 0))