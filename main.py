tempf=input.temperature(TemperatureUnit.FAHRENHEIT)
Tempf=30

#while True:
    #print("Current room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) +"°F - "  + input.temperature(TemperatureUnit.CELSIUS) + "°C")


while True:  
    print("temperature " + Tempf)  
    if Tempf >= 70:
        light.set_pixel_color(5, light.rgb(255, 0, 0))
        
    elif 70>Tempf>=40:
        light.set_pixel_color(5, light.rgb(0, 255, 0))

    else:
        light.set_pixel_color(5, light.rgb(0, 0, 255))
