# GPU and GPU Driver requirements

Learn how Premiere relies on the GPU for faster playback, rendering, and export, and how to keep video drivers current.

Note

For supported NVIDIA GPUs, Adobe recommends the latest Studio driver:

- Studio driver for GeForce GTX/RTX desktop GPUs
- Studio driver for GeForce GTX/RTX notebook GPUs
- Studio driver for RTX/Quadro desktop and notebook GPUs

NVIDIA no longer publishes Studio Drivers for 900 series and older GPUs. Those GPUs can use the newest Game Ready Drivers instead.

Kepler mobile GPUs are also no longer supported by NVIDIA. On these devices, Premiere shows a system compatibility report stating that the driver needs an update, even though no newer driver exists for that series.

In Adobe Premiere, the computer's graphics processing unit (GPU) accelerates many editing operations and can substantially improve performance.

Its main roles include:

- Hardware-accelerated decoding: improves playback speed for common formats.
- Rendering your timeline for playback and export: covers effects work and general compositing.
- Hardware-accelerated encoding: makes export faster for selected common formats.
- Artificial Intelligence and Machine Learning processing: runs Sensei ML features on the GPU or dedicated ML hardware, including Scene Edit Detection, Transcription, and Caption generation.

For reliable performance, keep a recent GPU driver installed in the operating system. Some Premiere upgrades require a newer video driver. When Adobe knows that a particular driver version may conflict with its applications, a System Compatibility Report appears at startup. Review the operating-system documentation and confirm that the video driver is up to date. If an IT department administers the computer, contact them before installing a driver because some organizations centrally manage driver deployment.
