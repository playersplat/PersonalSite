---
id: "6"
path: "/Ultrasonic"
title: 'Ultra Sonic Sensor'
description: 'FPGA Ultrasonic Sensor'
---
## Overview
This project is a university class lab that focuses on using an SR04 Ultrasonic sensor to measure distances accurately. A core function of this system is its ability to adjust the speed of sound calculations based on the ambient temperature to ensure high precision in distance measurements across a temperature range of 0°C to 50°C. 

### Features:
Temperature Sensor
        Senses temperature of the room using the built-in esp32c3 temperature library. This feature is critical for adjusting the speed of sound calculations.
        
Ultrasonic Sensor
        Incorporates an SR04 ultrasonic sensor to determine the distance to a specific target. By generating multiple pulses, the sensor can accurately detect the target's distance in centimeters, reflecting real-time changes in positioning and environmental conditions.

## Implementation
The project's core revolves around the integration of the ESP32C3 with the SR04 ultrasonic sensor and the implementation of temperature correction in the speed of sound calculation. Here's how it was accomplished:

I2C Master Initialization: The i2c_master_init function configures the ESP32C3 as an I2C master, setting up communication parameters such as SDA (Serial Data) and SCL (Serial Clock) pins, pull-up resistors, and the I2C clock speed. 

Temperature Reading: The shtc3_read function communicates with the SHTC3 sensor over I2C, sending the command to measure temperature and reading back the response.

Temperature Calculation: Using the raw data from the SHTC3 sensor, the calculate_temperature function converts the raw value into a human-readable temperature format (Celsius), applying the specific conversion formula provided by the sensor's datasheet.

Ultrasonic Distance Measurement: The ultrasonic_sensor_task function orchestrates the distance measurement process. It triggers the SR04 sensor, waits for the echo, and measures the time taken for the echo to return. Concurrently, it retrieves the current temperature from the SHTC3 sensor to adjust the speed of sound calculation.

Speed of Sound Adjustment: Based on the current temperature, the speed of sound is adjusted using the formula speedSound = 331.4 + 0.6 * temperature. 

Distance Calculation and Display: The distance is calculated using the adjusted speed of sound and the time measurement from the ultrasonic sensor. The result, along with the current temperature, is displayed on the console, providing real-time feedback on the distance to the target and the environmental temperature.