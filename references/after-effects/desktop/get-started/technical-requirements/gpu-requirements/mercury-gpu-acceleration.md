# Mercury GPU Acceleration

By letting After Effects hand supported effects off to the GPU for rendering, Mercury GPU Acceleration can cut render time considerably.

The Mercury label may already be familiar from Premiere. The rendering technology behind Premiere's Mercury Playback Engine is the very same one After Effects draws on. (Everything else about the After Effects playback engine differs from Premiere, so only the rendering piece of that technology carries over.)

Mercury GPU Acceleration lives in the project settings. Turn it on by choosing File > Project Settings, opening the Video Rendering and Effects tab, and switching the Use option to Mercury GPU Acceleration. The number of options here can vary with your machine and GPU. These are the GPU technologies After Effects supports:

- OpenCL (Windows only, with an AMD or Intel GPU)
- CUDA (Windows only, with an NVIDIA GPU)
- Metal (macOS only, 10.12 and later)

Note

macOS 10.14 and newer drop support for NVIDIA CUDA. Should you have an Apple-authorized NVIDIA GPU, the Metal Mercury Playback Engine remains available to you.
