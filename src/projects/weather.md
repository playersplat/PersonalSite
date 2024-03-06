---
id: "5"
path: "/Weather"
title: 'Weather Station'
description: 'FPGA Weather Station'
---

## Overview
This project is part of my university embedded systems course. It connects the esp32c3 as a receiver that interfaces with either a Raspberry Pi 3 or a Linux-based device to fetch, display, and post weather information. Using the side "wttr.in" for weather data, the system can retrieve weather information from any specified location given an HTTP GET request. The project is designed to diplay the weather information on an LCD screen and is able to post these results to the server (Pi3/Linux) using HTTP Protocols

### Features:
Get Weather from wttr.in and from local area
		Can use HTTP GET to receive weather from a specified location. Also able to retrieve local humidity and temperature of surrounding area of the microcontroller.

Post Results
        Able to use HTTP Post against an IP using port 1234. PI server or Linux device able to display information needed
        
Display Information on LCD Screen
        Can display either the weather information from the website or local temperature/humidity

### Implementation
This project demonstrates the integration of hardware and software components to create a functional weather station. It highlights the use of the esp32c3 microcontroller for sensor data collection and network communication as well as connecting to a server, webserver and LCD screen for serial communication and display purposes. This lab serves as a comprehensive example of applying embedded systems knowledge to solve pratical problems with real-world applications as well as having the ability to be further worked upon

### Further Improvements to be worked on

Leaving this as a footnote for my future self:
Integrate more components to detect atmospheric pressure, wind speed, precipitation.

Design a better web server api to fetch data from other sources besides "wttr.in"

Improve the display with a ST7735 rather than an LCD screen