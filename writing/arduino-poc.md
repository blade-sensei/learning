Testing arduino project 📟
==

## 🎯 Goal

Goal: Simulate a system that prevents someone that his is too close to some place or device. The system will prevent him by switch on a LED.

At a later stage, user will be able to turn on/off the system remotly via a web server.

**use case** can be used to prevent your child of dangerous place or device, like a hotplate ? 

## Steps
I divide the system into 3 separate system

- LED sys
- Presence/Distance sensor
- Web server

> Use tinkercad to simulate the project.
> https://www.tinkercad.com/
# LED device

![](https://i.imgur.com/G5vUtgG.jpg)

## Diagram (tinkercad)

![](https://i.imgur.com/p5pCgHO.png)

# Presence sensor

![](https://i.imgur.com/ZuMuTUE.png)

## Diagram

![](https://i.imgur.com/aHV3LPn.png)


## Dispositif serveur web + Wifi CARD

Testing server.

![](https://i.imgur.com/d6cUhZp.png)



# Final prototype

In order to connect/plug PINS of the wifi card i used this diagram below. 

![](https://i.imgur.com/vxzzcFi.png)

LED + Distance sensor  + Wifi card

I set up a range distance of 40cm to active the LED.

![](https://i.imgur.com/oDyjMmV.png)


# Test

Logs show that the server can get the distance from our system.


![](https://i.imgur.com/FNkgxfq.png)

## Issues 
- Instead of set up the wifi card you need to **install the correct** driver, this is tricky, for me this one was a solution: CP210x USB to UART Bridge VCP Drivers
Link : https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers

- Sometimes, a wifi card PIN must be activated to switch to OUTPUT mode.

- I order to read and write data from arduino card at the sametime i need an asynchronous code.

# Libs 

Distance sensor HCSR04
https://github.com/jeremylindsayni/Bifrost.Arduino.Sensors.HCSR04

Wifi card
https://fr.macerobotics.com/developpeur/tutoriels/esp8266-controle-dune-led-par-wifi/
