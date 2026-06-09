---
name: Kacper Kowalski
role: Senior Embedded Software Engineer / Embedded & IoT Consultant
photo: /images/kacper-kowalski.jpg
---

# Kacper Kowalski

**Senior Embedded Software Engineer / Lead Contributor **
**Freelance / B2B / Self‑employed**

C/C++ • Modern C++ • Embedded Systems • Firmware • MCU & Embedded Linux • IoT • Safety-Critical (SIL) • Build Systems • CMake • Toolchains • CI/CD • RTOS • Audio • Testing • Python • OSS  

---

## Profile

Senior embedded software engineer with deep expertise in **modern C++, CMake‑based build systems, RTOS architectures, and MCU firmware development**. Proven track record delivering complex freelance projects end‑to‑end: from low‑level drivers and object‑oriented firmware design to **CI/CD pipelines for embedded hardware testing**. Comfortable working across **resource‑constrained microcontrollers and Embedded Linux systems**, with additional experience in safety‑critical systems and radio and video pipelines. Strong focus on correctness, maintainability, and clean architecture.

---

## Freelance Experience (Commercial)

<p class="role-intro"><strong>Senior Embedded Software Engineer – Freelance (B2B)</strong></p>
<p class="role-intro"><strong>Self‑employed</strong> | Dec 2021 – Present</p>

Primary long‑term consulting partner: **HalReady GmbH** (2023 – present), a German company delivering industrial safety and sensing solutions. Engaged across multiple customer projects as a senior embedded engineer, including **safety‑critical human detection systems, industrial robotics, container monitoring devices, and embedded video platforms**. Additional direct freelance contracts alongside.

---

### Lead Embedded Software Developer – SIL2 Safe Human Detection System

Jan 2025 – Mar 2026

* Drove embedded firmware architecture and development for a **multi‑platform SIL2 safety‑critical human detection system** combining **mmWave radar, thermal imaging and human detection algorithm**
* Designed and implemented **modular CMake‑based build infrastructure** with cross‑compilation toolchains for multiple MCU targets
* Established unified **embedded testing infrastructure**, integrating **Unity** for device‑side tests and **Catch2** for host‑side testing
* Spearheaded development of **safety‑critical communication modules** (OSSD, FSI, RS485 ring protocol)
* Ported firmware across evaluation boards and production hardware while maintaining backward compatibility
* Acted as **primary code reviewer**, maintaining code quality and guiding architectural decisions across the team
* Coordinated with **hardware teams** on platform bring-up, sensor integration, and interface definitions
* **Onboarded new team members** to the codebase, architecture, and development workflow
* Took ownership of **TI AM64x platform bring‑up**, including **DDR memory integration**
* Architected the **Main State Machine (MSM)**

**Technologies:**
C++17, C, Python, FreeRTOS, CMake, ARM Cortex‑R5F, AM64x, AM263Px, IWR6843, TI MCU+ SDK, TI mmWave SDK, TI SysConfig, Unity, Catch2, Nanopb, Protocol Buffers (Protobuf), OpenCV, UART, SPI, FSI, RS485, Git, Docker

---

### Senior C++ / Build Systems Engineer – Build & Toolchain Optimization

**for Autokroma** | Jan 2024 – Oct 2024

* Optimized a large‑scale **C++ / CMake build system**, focusing on reducing compilation times
* Refactored and modernized CMake configuration using **target‑based design** and improved dependency hygiene
* Identified and eliminated build bottlenecks across local and CI environments
* Integrated and analyzed build performance using **ccache**, **vcperf**, and **pytracing**
* Improved developer productivity and CI turnaround times for a complex, multi‑module codebase

**Technologies:**
C++, CMake, Ninja, ccache, vcperf, pytracing, Windows, CI/CD

---

### Sensorsuite – Container Monitoring Device (CMD)

**IoT Firmware Engineer** | Jan 2024 – Apr 2024

* Developed IoT firmware for **industrial container monitoring devices**
* Implemented multi‑connectivity support: **LoRaWAN, satellite, Wi‑Fi**
* Integrated sensors: **GNSS, IMU, temperature, NFC/RFID**
* Implemented **CAN bus telemetry**
* Designed **FreeRTOS‑based real‑time architecture**
* Built CI/CD pipelines using **GitHub Actions and Docker**

**Technologies:**
C++20, ESP32, FreeRTOS, PlatformIO, LoRaWAN, Satellite Communication, CAN Bus, GNSS/GPS, NFC/RFID, JSON, Docker, GitHub Actions, Git

---

### Embedded Video Encoding Pipeline (Confidential Camera Systems)

**Embedded Linux / Video Engineer** | Aug 2023 – Oct 2023

* Worked on an embedded video encoding pipeline for **professional cinema camera systems**
* Implemented **RTSP video streaming** using Live555
* Integrated **H.265/HEVC hardware encoding** via **Xilinx VCU**
* Implemented **SDI video input capture**
* Worked on **RAW video recording** using memory‑mapped buffers (mmap)
* Low‑level handling of video formats (YUV/RGB)

**Technologies:**
C++, CMake, Xilinx VCU, H.265/HEVC, Live555, RTSP, SDI, OpenSSL, mmap, Allegro encoder, Embedded Linux

---

### Industrial Cleaning Robot

**Embedded Software Engineer – Robotics** | May 2023 – Jul 2023

* Optimized **power consumption** and motor control algorithms
* Developed **PID motor controller** and low‑level device drivers
* Modernized legacy codebase to **C++20**
* Built CI pipelines and static analysis tooling

**Technologies:**
C, C++20, FreeRTOS, ARM Cortex‑M4 (LPC51U68), Python, Bash, CMake, Ninja, Docker, GitLab CI, SonarQube, Google Test, Bluetooth (BlueZ)

---

### Barcode / QR Event Registration Device

**Embedded Firmware Engineer – Freelance** | May 2022 – Oct 2022

* Designed and implemented full device firmware in **C++20** on **ARM Cortex‑M4 (SAM4S)**
* Built **FreeRTOS‑based architecture** with LTE‑M connectivity
* Integrated **cloud communication** using **MQTT, LwM2M/CoAP, TLS**
* Implemented drivers for **NFC (TRF7970A), barcode scanner, proximity sensors, battery fuel gauge**
* Developed **secure bootloader and OTA update mechanism**

**Technologies:**
C++20, C11, FreeRTOS, ARM Cortex‑M4, CMake, ARM GNU Toolchain, LTE‑M (u‑blox SARA‑R422S), MQTT, TLS/SSL, I2C, SPI, UART, USB CDC, OpenOCD, GDB, Unity, Catch2

---

### OpenCV on Microcontroller

**Embedded C++ Engineer – Freelance** | May 2022

* Ported and adapted selected **OpenCV algorithms** for a **resource‑constrained MCU**
* Target platform: **STM32U575 (ARM Cortex‑M)**
* Focused on **memory usage, performance, and build system integration**

**Technologies:**
C++17, OpenCV, STM32Cube, ARM Cortex‑M, CMake

---

### Epaper Label Shop System

**Embedded Firmware Engineer – Freelance (for Info Technologies / NAOS Software)** | Apr 2021 – Sep 2021

* Designed and implemented a **full end-to-end system**: a central Embedded Linux **Gateway** (Raspberry Pi) managing a fleet of **BLE-controlled Epaper Label** display devices in a one-to-many topology
* Gateway bridges the label fleet to the cloud via MQTT; each label (nRF52840, bare-metal) supports full remote display content control over BLE

**Technologies:**
C++17, Bare‑metal, CMake, BLE, nRF52840, Python3, Raspberry Pi, MQTT

---

## Open‑source & Independent R&D

### Seqnaut and Sycosm (WIP) – Embedded Audio DSP & Synthesis Platform

**Author** | Mar 2026 – May 2026

* Designed a **platform-portable embedded audio DSP framework** for building any type of audio device — synthesizers, effects processors, drum machines
* Implemented a **modular audio graph** with topological sorting, RAII connection handles, and block-based float signal processing
* Built sequencing infrastructure: **PianoRoll** (event-based), **StepGrid** (step sequencer)
* Developed an **8-voice polyphonic synth engine** with CLI and OSC control
* Designed and implemented a **Transient Detector** — dual-envelope adaptive threshold algorithm for detecting guitar attack transients (used for ambience ducking)
* Designed an **Analog Front-End (AFE)** to tap audio from **BOSS GX-100** into Teensy Audio Shield; explored MIDI FX integration using GX-100 MIDI implementation
* Built **host-side testing tools** (PortAudio live input, WAV I/O, terminal oscilloscope) for algorithm validation before hardware deployment

**Technologies:**
C++23, C, Python, CMake, FreeRTOS, Teensy 4.1 (ARM Cortex‑M7), Teensy Audio (Stoffregen), DaisySP, I2S/SAI, OSC, MIDI

---

### Portable Bitfields

**Author & Maintainer** | Mar 2023 – Present

* Major development of a modern **C++ bitfield abstraction library**
* Focus on correctness, portability, and compile‑time guarantees
* Ongoing maintenance and community contributions

---

### Jeff – Jungles Guitar Effect

**Author** | Dec 2020 – Mar 2021

* DSP audio project – a **guitar effect pedal**
* Real‑time audio processing on embedded hardware
* Built a full **CMake‑based test automation system** to verify signal levels, SNRs, and output signal characteristics (e.g. distortion effect shape validation)

**Technologies:**
C++20, FreeRTOS, CMake, DSP, ADC, DAC, Analogue and digital electronics, test rigs, test automation

---

### Aura Weather Station System

**Co‑author** | 2018 – 2020

* Side‑project for **precision agriculture** weather monitoring
* Developed with friends

**Technologies:**
C++20, FreeRTOS, CMake, NB‑IoT, CoAP, Python3, STM32L4, Test rigs

---

### LLVM / clangd Contributions

**Open‑source Contributor** | Oct 2023 – Nov 2023

* Contributed improvements to **clangd**, focusing on **Code Actions for C and C++**
* Worked with LLVM/Clang internals and libclang APIs

---

### Tsepepe & TsepepeVim

**Author – LLVM‑based Refactoring Toolset** | Oct 2023 – Nov 2023

* Designed and implemented **Tsepepe**, a C++ refactoring tool built on **LLVM/libclang**
* Automated function definition generation and header/source pairing
* Implemented interface implementation scaffolding
* Created **TsepepeVim**, a Vim plugin acting as a frontend for Tsepepe

---

### LlvmCrossCompileArmCortexM

**Author & Maintainer** | Nov 2021 – Present

* Cross‑compiled **LLVM libraries** (compiler‑rt, libc++, libc++abi, libunwind) for **ARM Cortex‑M baremetal** targets
* Provided pre‑built packages for multiple architectures (Cortex‑M0/M0+/M3/M4/M7/M23/M33/M55)
* Built with and without **exception support**, multiple floating‑point configurations
* Alternative to ARM GNU Toolchain for LLVM‑based embedded development

**Technologies:**
CMake, LLVM, Clang, ARM Cortex‑M, Newlib, Cross‑compilation

---

### JunglesOsHelpers

**Author & Maintainer** | Mar 2020 – Present

* RTOS helpers library with **FreeRTOS**, generic, and native implementations
* Reusable abstractions for embedded real‑time systems
* CMake‑based integration via FetchContent

**Technologies:**
C++, FreeRTOS, CMake

---

### Zynthian (Embedded Audio R&D)

**Embedded Linux / Audio Exploration** | Oct 2023 – Nov 2023

* Set up and configured **Zynthian synthesizer** on **Raspberry Pi 3**
* Explored embedded audio pipelines, MIDI, and Linux‑based music systems

---

## Prior Employment (Employee Roles)

### Embedded Software Developer – Mittemitte GmbH

**Berlin, Germany** | Jul 2021 – Oct 2021

* Maintained and developed firmware for **Mitte Home Water Dispenser**

**Technologies:**
C, Make, Qualcomm QCA4020, AWS IoT SDK

---

### Embedded Software Developer – HUM Systems GmbH

**Berlin, Germany** | Sep 2020 – Mar 2021

* Developed firmware for **Livy Protect Smart Ring** – a comprehensive solution for burglary protection, fire detection, air quality detection, and air conditions measurement

**Technologies:**
ESP32, C++17, FreeRTOS, ESP‑IDF, CMake, MQTT, HTTP, TCP, TLS, Python3

---

### Software Design Engineer – Etteplan Poland

**Delegated to Kapsch Trafficom** | Aug 2019 – Sep 2020

* Aug 2019 – Feb 2020: On‑site in Jönköping, Sweden
* Feb 2020 – Apr 2020: Remote from Poznan
* Wrote firmware for **On‑Board Units** for DSRC and GNSS **Electronic Toll Collection**, in a Scrum Team
* Wrote manual test cases, developed and maintained the **build ecosystem** for the project

**Technologies:**
C++14, CoAP, DTLS, LwM2M, FreeRTOS, Python3, GitLab CI/CD, Docker, Robot Framework, CMake, Jira

---

### IoT Engineer – Lerta

**Poznan, Poland** | May 2018 – Jul 2019

* Wrote firmware and managed build systems for bare‑metal devices:
  * Thermostat controlled through **ZigBee** (nRF52840)
  * Smart meters with **STM32L4**, controlled through **NB‑IoT**
* Wrote services for **Linux Embedded based Smart Home Gateway**
* Improved electronic design of low‑power devices, fixed hardware bugs

**Technologies:**
C++17, C, FreeRTOS, NB‑IoT, ZigBee, CoAP, MQTT, HTTP, CMake, Make, Bash, Buildroot, Jenkins, Docker

---

### Junior Embedded Developer – Novamedia Innovision

**Poznan, Poland** | Dec 2016 – May 2018

* Programmed firmware for an **intercom** with STM32F4
* Developed service for **Linux Embedded** to manage the intercom system
* Maintained and deployed firmware for a fleet of gateways and routers

**Technologies:**
C, FreeRTOS, VoIP, PoE, MQTT, HTTP, CMake, Buildroot, C++14, Bash

---

### Radiocommunication Assistant → Specialist – TELE‑COM

**Poznan, Poland** | Jun 2015 – Nov 2016

* Radiocommunication support and technical operations

---

## Technical Skills

* **Languages:** C, C++, Python, Bash
* **Safety‑critical:** SIL2, OSSD, deterministic state machines
* **Embedded:** FreeRTOS, Bare-metal, ESP-IDF, Embedded Linux, Yocto, Buildroot
* **Build Systems:** CMake, Ninja, Make, PlatformIO
* **Toolchains:** ARM GNU Toolchain, LLVM/Clang
* **Protocols:** MQTT, CoAP, LwM2M, RTSP, TLS, DTLS, CAN, FSI, RS485, I2C, SPI, UART, USB, NFC
* **Wireless:** BLE, LoRaWAN, NB‑IoT, LTE‑M, ZigBee
* **Audio / DSP:** I2S/SAI, MIDI, OSC
* **Testing:** Unity, Catch2, Google Test, Robot Framework
* **CI/CD:** GitHub Actions, GitLab CI, Docker
* **Debugging:** GDB, OpenOCD

---

## Availability

Open to **freelance contracts**, **long‑term consulting**, and **safety‑critical embedded systems projects** requiring strong ownership and system‑level thinking.
