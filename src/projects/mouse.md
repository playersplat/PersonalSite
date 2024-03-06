---
id: "4"
path: "/Mouse"
title: "Wireless Mouse"
description: 'A Bluetooth mouse using an FPGA board'

---
## Overview
A project part of my university course to implement a system that uses the esp32c3's built-in gyroscope for detecting board inclination across the X/Y axis and leveraging Bluetooth for wireless conectivity to computers. The lab combines sensor data acquisition with wireless comunication.

### Features:
Gyroscopic Movement
		The ESP32C3 has a built-in gyroscope that evaluates the X/Y axis of movement through the board inclination.
Bluetooth Integration
		 Able to connect wirelessly to any personal computer or laptop using Bluetooth!

### Implementation:
The code initializes the Bluetooth controller and the Bluedroid Bluetooth stack to set up the device as a Bluetooth HID gadget. This allows it to send input events (e.g., mouse movements) to a connected host device.

It employs the esp_hidd_profile_init() function to initialize the HID device profile and esp_ble_gap_register_callback() to handle GAP (Generic Access Profile) events, essential for managing Bluetooth connectivity, advertising, and security.

Advertising data and parameters are configured to make the device discoverable and pairable by other Bluetooth devices. The device is advertised with a unique name and a service UUID specific to HID services.

Event handling logic is implemented in hidd_event_callback and gap_event_handler to respond to various Bluetooth events, including connection, disconnection, and security-related events. This ensures the device can manage its connection state and security procedures effectively.

I2C communication with an external gyroscope sensor (ICM-42670) is set up, defining the SDA and SCL pins and configuring the I2C parameters.
	The gyroscope is initialized with specific configurations suitable for capturing motion along different axes. 

A continuous task (hid_demo_task) reads the gyroscope data, processes it to determine the device's inclination, and translates this into HID reports (e.g., mouse movements).

HID mouse reports are generated based on the interpreted gyroscope data and sent over Bluetooth to the connected host device. This enables the host device to receive input as if from a conventional mouse, but based on the movement and orientation of the ESP32C3 device.