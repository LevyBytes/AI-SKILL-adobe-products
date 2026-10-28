# Audio Hardware

- Built-in Audio

  - Third-party Audio Interfaces
  - ASIO Drivers (Windows)
  - Core Audio Devices (macOS)

- Default Input: Which device captures audio when recording.
- Default Output: Which device plays audio back.
- I/O Buffer Size: Tune the audio buffer size to trade off latency against stability. Settle on the smallest value that still keeps audio dropouts away. Because the sweet spot tracks how fast your system is, expect to test a few options.
- Sample Rate: Pick the sample rate the audio hardware runs at — 44.1 kHz, 48 kHz, 96 kHz, and so on. Adobe Audition Help walks through the rates that suit various output mediums.
