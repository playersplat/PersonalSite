---
id: "6"
path: "/Piano"
title: "DAC Piano"
description: 'An analog to digital converter piano using switches'

---
## Overview
Part of my practicing embedded development hobby after I graduated. I wanted to try a different microcontroller rather than the basys3 or esp32c3. The project utilizes the TM4C123 microcontroller to implement a 4-key digital piano, where each key corresponds to a different frequency, demonstrating fundamental concepts of digital-to-analog conversion (DAC) and interrupt-driven programming.


### Features:
Four button DAC
	Implements a digital-to-analog converter using four buttons, each responsible for generating a distinct frequency when pressed. This design simulates a basic piano keyboard with four notes. (Can be further expanded upon with adding more notes, octave switches, simultaneous button presses)
### Operation:
Upon initialization, the system configures the GPIO ports for the piano keys and the DAC output, sets up the SysTick timer for sound generation, and enables interrupts.
In the main loop, the system continuously monitors the piano key inputs. When a key press is detected, it triggers the corresponding note's frequency to be played. Releasing all keys stops the sound output, effectively silencing the piano.
The inclusion of delay logic in the main loop debounces the key inputs, ensuring stable operation without unintended note triggers due to quick button presses or releases.
### Implementation:
Utilizes the SysTick timer to generate periodic interrupts. Each interrupt triggers a callback function (SysTick_Handler) that outputs a value to the DAC, creating a sound wave corresponding to the selected frequency.
Frequencies for musical notes (C, D, E, G) are predefined with two sets of values for 16-bit and 32-bit sine waves, enabling flexibility in sound quality and tone generation.
The Sound_Tone function adjusts the SysTick reload value to change the interrupt frequency and altering the sound frequency produced by the DAC.
The Piano_In function polls the button states and returns a value indicating which button is pressed, determining the note to be played.
A 4-bit DAC is implemented on GPIO Port B, translating digital signals into analog voltages that drive a speaker to produce sound.
The DAC_Out function updates the DAC's output value, directly influencing the sound wave's amplitude and, consequently, the volume of the note being played.