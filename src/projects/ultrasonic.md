---
id: "6"
path: "/Ultrasonic"
title: 'Ultra Sonic Sensor'
description: 'FPGA Ultrasonic Sensor'
---
## Overview
ESP32C3 wired to an SR04 to measure distance and using temperature to "adjust" the calculations of the speed of sound based on the current temperature between 0C and 50C

### Features:
Temperature Sensor
        Senses temperature of the room using the built-in esp32c3 temperature library
        
Ultrasonic Sensor
        Wired to an SR04 to read a given distance of the sensor hitting a designated target
        Generates multiple pulses to detect the distance from its target in centimeters