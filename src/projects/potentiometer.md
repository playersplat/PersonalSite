---
id: "8"
path: "/Measurement"
title: "LCD Display with Measurements"
description: 'Uses a potentiometer slide to measure how many centimeters have been moved from its starting position'

---
## Overview
Part of my practicing embedded development hobby after I graduated. I wanted to try a different microcontroller rather than the basys3 or esp32c3.
### Features:
ST7736 LCD Display
	128x164 pixel display that uses SPI communication protcols to communicate with the microcontroller on what it should be currently displayed.
Slide Potentiometer
	Uses a 10kOhm resistor as its slide and sends its voltage drop to the microcontroller to be converted using the Nyquist Sampling Theorem

### Implementation:
The ADC module (ADC.c) is initialized to read analog input from the slide potentiometer connected to PE2. This setup converts the potentiometer's position into a digital value using the TM4C123's onboard ADC0, channel 1.

A SysTick timer is configured to trigger ADC conversions at a 40Hz rate, ensuring periodic updates of the distance measurements. Each conversion's result is stored and flagged for processing.

The Convert function translates the raw ADC data into a fixed-point decimal distance, applying a predetermined calibration formula. This process effectively turns the 12-bit ADC value into a more comprehensible distance measure (in cm) with a resolution of 0.001 cm.

The ST7735 LCD is initialized and used to display the distance measurements. The UART_ConvertDistance function formats the distance into a string suitable for display, adhering to a fixed format for consistency.

The main loop waits for a valid conversion flag (Flag variable), processes the latest ADC data to calculate the distance, converts this distance into a string, and then updates the LCD display with the new distance value. This loop runs indefinitely, providing real-time updates of the measured distance.

SysTick interrupts are employed to manage timing for ADC sampling and processing, ensuring that distance measurements are both accurate and timely reflected on the LCD display.