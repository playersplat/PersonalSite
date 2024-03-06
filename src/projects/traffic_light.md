---
id: "7"
path: "/Traffic"
title: "Traffic Lights"
description: 'A Moore-style state machine to deal with an intersection and a crosswalk'

---
## Overview
Part of my practicing embedded development hobby after I graduated. I wanted to try a different microcontroller rather than the basys3 or esp32c3.
### Features:
State machine
	Decides which traffic lights to turn on/off depending on which direction it senses the car is idle at as well as having a pedestrian cross walk button which makes both traffic lights turn red
	Able to rotate between pedestrian, northbound, or westbound if it senses all three buttons are active

### Implementation:
Initialization and Configuration: The code begins with essential setup tasks, including initializing the SysTick timer for precise delay measurements and configuring the GPIO ports for input from sensors and output to traffic lights and pedestrian signals.

State Machine Design: At the heart of the implementation is a state machine represented by an array of structures, where each structure (Stype) defines a state. Each state is characterized by the traffic and pedestrian light outputs (Out and OutPF4), a timing value (Time), and an array of next states (Next) that the system can transition to based on sensor inputs. This design enables a clear and manageable mapping of system behaviors in response to real-world conditions.

Sensor Integration: The code employs sensors to detect the presence of vehicles and pedestrians. These sensors are connected to the GPIO ports of the microcontroller, allowing the system to read the current state of each sensor and make decisions based on whether cars are waiting or if a pedestrian has pressed the crosswalk button.

Traffic Light Control: Utilizing the state machine, the system controls the traffic lights for both the east/west and north/south directions, as well as the pedestrian signals. The LIGHT variable directly controls the traffic lights connected to GPIO Port B, and the pedestrian signal is managed through GPIO Port F.

State Transitions: Based on the inputs from vehicle and pedestrian sensors, the system transitions between states, each representing a different traffic light configuration. For example, the system can move from allowing westbound traffic to flow, to a waiting state, and then to allowing southbound traffic or pedestrian crossing, depending on the inputs.

Timing Adjustments: Each state specifies a duration for which it remains active before checking sensor inputs to decide on the next state. This timing control, facilitated by the SysTick timer, is helpful so that the lights remain in each state for an appropriate amount of time, balancing traffic flow and safety.