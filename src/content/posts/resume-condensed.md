---
title: Resume - Kacper Kowalski (Condensed)
description: Senior Embedded Software Engineer / Embedded & IoT Consultant
date: 2026-05-21
draft: true
---

# Kacper Kowalski

**Senior Embedded Software Engineer / Lead Contributor**
**Freelance / B2B / Self‑employed**

C/C++ • Modern C++ • Embedded Systems • Firmware • MCU & Embedded Linux • IoT • Safety-Critical (SIL) • Build Systems • CMake • Toolchains • CI/CD • RTOS • Audio • Testing • Python • OSS

---

## Profile

Senior embedded software engineer with deep expertise in modern C++, CMake‑based build systems, RTOS architectures, and MCU firmware development. Delivered complex freelance projects end-to-end across resource-constrained MCUs and Embedded Linux — from SIL2 safety-critical systems to IoT connectivity and audio DSP. Strong focus on correctness, maintainability, and clean architecture.

---

## Freelance Experience (Commercial)

<p class="role-intro"><strong>Senior Embedded Software Engineer – Freelance (B2B) - Self‑employed </strong> | Dec 2021 – Present</p>

Primary long‑term consulting partner: **HalReady GmbH** (2023 – present), a German company delivering industrial safety and sensing solutions. Engaged across multiple customer projects. Additional direct freelance contracts alongside.

---

### Lead Embedded Software Developer – SIL2 Safe Human Detection System

Jan 2025 – Mar 2026

* Drove firmware architecture for a **multi-platform SIL2 safety-critical human detection system** combining **mmWave radar, thermal imaging, and human detection algorithm**
* Designed **modular CMake-based build infrastructure** with cross-compilation toolchains; established unified **testing infrastructure** (Unity + Catch2)
* Developed **safety-critical communication modules** (OSSD, FSI, RS485 ring protocol); ported firmware across evaluation boards and production hardware
* Acted as **primary code reviewer**, guiding architectural decisions; coordinated with **hardware teams**; onboarded new team members

C++17, C, Python, FreeRTOS, CMake, ARM Cortex‑R5F, AM64x, AM263Px, IWR6843, TI MCU+ SDK, TI mmWave SDK, Unity, Catch2, Nanopb, Protobuf, OpenCV, FSI, RS485, Docker

---

### Senior C++ / Build Systems Engineer – Build & Toolchain Optimization

**for Autokroma** | Jan 2024 – Oct 2024

* Optimized a large-scale **C++ / CMake build system**, reducing compilation times across local and CI environments
* Refactored CMake configuration using **target-based design** and improved dependency hygiene
* Analyzed build performance using **ccache**, **vcperf**, and **pytracing**

C++, CMake, Ninja, ccache, vcperf, pytracing, Windows, CI/CD

---

### Embedded Video Encoding Pipeline (Confidential Camera Systems)

**Embedded Linux / Video Engineer** | Aug 2023 – Oct 2023

* Implemented **RTSP streaming** (Live555) and **H.265/HEVC hardware encoding** via Xilinx VCU
* SDI video capture and RAW recording using mmap; low-level YUV/RGB format handling

C++, CMake, Xilinx VCU, H.265/HEVC, Live555, RTSP, SDI, OpenSSL, mmap, Embedded Linux

---

### Barcode / QR Event Registration Device

**Embedded Firmware Engineer – Freelance** | May 2022 – Oct 2022

* Designed full firmware in **C++20** on ARM Cortex-M4 with **FreeRTOS** and LTE-M connectivity
* Cloud communication via **MQTT, LwM2M/CoAP, TLS**; implemented **secure bootloader and OTA update**
* Drivers for NFC (TRF7970A), barcode scanner, proximity sensors, battery fuel gauge

C++20, C11, FreeRTOS, ARM Cortex‑M4, CMake, LTE-M (u-blox SARA-R422S), MQTT, TLS/SSL, I2C, SPI, UART, USB CDC, GDB, Unity, Catch2

---

### Epaper Label Shop System

**Embedded Firmware Engineer – Freelance** | Apr 2021 – Sep 2021

* Designed and implemented **full end-to-end system**: Embedded Linux **Gateway** (Raspberry Pi) managing a fleet of **BLE-controlled Epaper Label** devices in a one-to-many topology
* Gateway bridges labels to cloud via MQTT; each label (nRF52840, bare-metal) supports full remote display content control over BLE

C++17, Bare-metal, CMake, BLE, nRF52840, Python3, Raspberry Pi, MQTT

---

### Other Freelance Projects

| Project | Role | Period | Technologies |
|---|---|---|---|
| Sensorsuite – Container Monitoring Device | IoT Firmware Engineer | Jan–Apr 2024 | C++20, ESP32, FreeRTOS, LoRaWAN, Satellite, CAN Bus, GNSS, NFC/RFID, Docker, GitHub Actions |
| Industrial Cleaning Robot | Embedded Software Engineer | May–Jul 2023 | C, C++20, FreeRTOS, ARM Cortex-M4, CMake, Docker, GitLab CI, SonarQube, Google Test |
| OpenCV on Microcontroller | Embedded C++ Engineer | May 2022 | C++17, OpenCV, STM32Cube, ARM Cortex-M, CMake |

---

## Open‑source & Independent R&D

### Seqnaut and Sycosm (WIP) – Embedded Audio DSP & Synthesis Platform

**Author** | Mar 2026 – May 2026

* **Embedded audio DSP framework** — synthesizers, effects, drum machines; modular audio graph
* Sequencing: **PianoRoll**, **StepGrid**, **MasterClock**; 8-voice polyphonic synth; CLI + OSC
* **Transient Detector** — dual-envelope adaptive threshold, guitar attack detection
* Hardware: Teensy 4.1, custom **AFE design** tapping BOSS GX-100; MIDI FX integration

C++23, C, Python, CMake, FreeRTOS, Teensy 4.1 (ARM Cortex‑M7), Teensy Audio (Stoffregen), DaisySP, I2S/SAI, OSC, MIDI

---

### Portable Bitfields

**Author & Maintainer** | Mar 2023 – Present

* Modern **C++ bitfield abstraction library** with correctness, portability, and compile-time guarantees
* Ongoing maintenance and community contributions

C++20, CMake

---

### Tsepepe & TsepepeVim

**Author – LLVM-based Refactoring Toolset** | Oct 2023 – Nov 2023

* C++ refactoring tool built on **LLVM/libclang**: automated function definition generation, header/source pairing, interface scaffolding
* **TsepepeVim**: Vim plugin frontend for Tsepepe

C++, LLVM, libclang, CMake, Vim script

---

### LlvmCrossCompileArmCortexM

**Author & Maintainer** | Nov 2021 – Present

* Cross-compiled **LLVM libraries** (compiler-rt, libc++, libc++abi, libunwind) for bare-metal ARM Cortex-M targets
* Pre-built packages for Cortex-M0/M0+/M3/M4/M7/M23/M33/M55; multiple FPU and exception configurations
* Alternative to ARM GNU Toolchain for LLVM-based embedded development

CMake, LLVM, Clang, ARM Cortex-M, Newlib, Cross-compilation

---

### Other OSS Projects

| Project | Role | Period | Notes |
|---|---|---|---|
| Jeff – Guitar Effect | Author | Dec 2020–Mar 2021 | DSP guitar pedal; CMake test automation for signal validation |
| JunglesOsHelpers | Author & Maintainer | Mar 2020–Present | FreeRTOS helpers library; CMake FetchContent integration |
| LLVM / clangd Contributions | Contributor | Oct–Nov 2023 | Code Actions for C/C++ in clangd |
| Aura Weather Station | Co-author | 2018–2020 | Precision agriculture IoT; NB-IoT, CoAP, STM32L4 |

---

## Prior Employment

### Software Design Engineer – Etteplan Poland (Kapsch Trafficom)

**Jönköping, Sweden / Remote** | Aug 2019 – Sep 2020

* Firmware for **On-Board Units** for DSRC and GNSS **Electronic Toll Collection** in a Scrum team
* Maintained the **build ecosystem**; wrote manual and automated test cases

C++14, CoAP, DTLS, LwM2M, FreeRTOS, Python3, GitLab CI/CD, Docker, Robot Framework, CMake

---

### Other Employment

| Company | Role | Period | Technologies |
|---|---|---|---|
| HUM Systems GmbH | Embedded Software Developer | Sep 2020–Mar 2021 | ESP32, C++17, FreeRTOS, ESP-IDF, CMake, MQTT, TLS |
| Mittemitte GmbH | Embedded Software Developer | Jul–Oct 2021 | C, Make, Qualcomm QCA4020, AWS IoT SDK |
| Lerta | IoT Engineer | May 2018–Jul 2019 | C++17, C, FreeRTOS, NB-IoT, ZigBee, CoAP, MQTT, Buildroot, Jenkins, Docker |
| Novamedia Innovision | Junior Embedded Developer | Dec 2016–May 2018 | C, C++14, FreeRTOS, VoIP, PoE, CMake, Buildroot |
| TELE-COM | Radiocommunication Specialist | Jun 2015–Nov 2016 | — |

---

## Technical Skills

* **Languages:** C, C++, Python, Bash
* **Safety‑critical:** SIL1, SIL2, OSSD
* **MCU / Platforms**: ARM Cortex‑M/R, ARM Cortex-A, ESP32, TI AM64x / AM263Px, IWR6843, STM32, nRF52840, ATMEL SAM, NXP i.MX RT, NXP LPC
* **Embedded:** FreeRTOS, Bare-metal, ESP-IDF, Embedded Linux, Yocto, Buildroot
* **Build Systems:** CMake, Ninja, Make, PlatformIO
* **Toolchains:** ARM GNU Toolchain, LLVM/Clang
* **Network:** MQTT, CoAP, LwM2M, RTSP, HTTP, raw TCP, raw UDP, TLS, DTLS
* **Peripherals:** CAN, FSI, RS485, I2C, SPI, UART, USB, ADC, DAC
* **Wireless:** BLE, LoRaWAN, NB‑IoT, LTE‑M, ZigBee, WiFi, NFC
* **Audio / DSP:** I2S/SAI, MIDI, OSC
* **Testing:** Unity, Catch2, Google Test, Robot Framework
* **CI/CD:** GitHub Actions, GitLab CI, Docker
* **Debugging:** GDB, OpenOCD

---

## Availability

Open to **freelance contracts**, **long-term consulting**, and **safety-critical embedded systems projects** requiring strong ownership and system-level thinking.
