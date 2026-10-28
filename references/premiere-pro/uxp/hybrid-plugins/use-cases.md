# Use Cases

- **Performance-intensive audio/video processing**: move expensive work, such as custom waveform analysis, frame-level pixel manipulation, or audio DSP algorithms, into native code while JavaScript keeps responsibility for UI and orchestration.
- **Integration with C++ libraries**: call established native libraries, including OpenCV, TensorFlow Lite, or custom in-house codecs, directly from the plugin.
- **Metadata processing at scale**: run batch XMP work or custom metadata schema conversions that pure JavaScript would handle too slowly.
- **Bridging to external native pipelines**: reach hardware SDKs, proprietary encoding pipelines, or platform-specific system APIs exposed only through C/C++.
