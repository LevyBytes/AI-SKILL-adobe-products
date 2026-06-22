# Technical Requirements

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Get started; Adobe Premiere technical requirements; GPU and GPU Driver requirements; Storage recommendations; Processor, memory, and GPU recommendations; Hardware-accelerated decoding and encoding; Enable hardware accelerated decoding support; Supported codecs and drivers for hardware-accelerated decoding; Enable Hardware Encoding in Premiere; Enable Mercury Playback Engine (GPU accelerated) renderer; Adobe Premiere 25.x technical requirements; Adobe Premiere 24.x technical requirements.

## Get started

### Technical requirements

Adobe Premiere technical requirements

GPU and GPU Driver requirements

Storage recommendations

Processor, memory, and GPU recommendations

Hardware-accelerated decoding and encoding

Enable hardware accelerated decoding support

Supported codecs and drivers for hardware-accelerated decoding

Enable Hardware Encoding in Premiere

Install macOS updates for Apple Metal GPU Acceleration

Enable Mercury Playback Engine (GPU accelerated) renderer

Adobe Premiere 25.x technical requirements

Adobe Premiere 24.x technical requirements

### Download and install

Creative Cloud Apps available for download

Best practices for updating Premiere

Check if your system is compatible with Premiere

Mercury Playback Engine (GPU Accelerated) in Premiere

### Preferences and settings

Preferences overview

General preferences

Set Appearance preferences

AI Models preferences

Audio preferences

Audio Hardware preferences

Auto Save preferences

Collaboration preferences

Color preferences

Control Surface preferences

Graphics preferences

Labels preferences

Media preferences

Media Analysis & Transcription preferences

Memory preferences

Playback preferences

Timeline preferences

Trim preferences

Display video on a second monitor

Best practices for film and TV productions

Display Premiere interface on a second monitor

### Set up accessibility features

Accessibility overview

Accessibility Support for Screen Readers and Magnifiers

Navigate Premiere using the keyboard

### Keyboard shortcuts

About keyboard shortcuts

Default keyboard shortcuts

Customize keyboard shortcuts

Copy keyboard shortcuts from one computer to another

Assign multiple keyboard shortcuts to a command

Find keyboard shortcuts

Remove keyboard shortcuts

Print keyboard shortcuts

### Set up Directx HDR for Windows

Supported operating systems, GPUs, and displays for Directx HDR support

Set up your system for Directx HDR

Supported and unsupported features with Directx HDR in Premiere

Set up Premiere for Directx HDR

### Use touch and gesture controls

Use thumbnail controls in the Project panel

Learn how touch and gesture actions work with buttons

Touch and Gesture controls on Windows Devices

### Workflows, workspaces, and panels

Overview of workspaces

Import workspaces

Change, create, and reset workspaces

Manage workspaces

Display panel options and menu

Navigate the panels

Dock, group, or undock panels

Customize panels

Display any panel full-screen

Tools panel in Premiere

Clip details in the Info panel

Adobe Premiere FAQ

### Customize the Project panel

Customization options for the Project panel

Customize the Icon View in Project panel

Customize metadata in Freeform View in Project panel

Customize Freeform view in Project panel

Customize List View in Project panel

Align and reset clips to grid in Freeform View in Project panel

Create layouts in Freeform View in Project panel

Customize the position of the Project panel

List View columns

Restore or delete layouts in Freeform View in Project panel

### Source and Program Monitor adjustments

Overview of Source Monitor and Program Monitor

Set display quality for Source and Program Monitors

Adjust magnification for Source and Program Monitors

Enable High Quality Playback

Choose a display mode

Gang Source and Program Monitor

Set display options for interlaced footage

Compare edits to clips in the Program Monitor

Open or clear a clip in the Source Monitor

Navigate clips in the Source menu in the Source Monitor

Display controls in the Source and Program Monitors

Time controls in the Source and Program Monitors

View safe zones in the monitors

Change the unit of measurement

Add or remove guides

Snap objects to guides

Nudge clips in Program Monitor

Save, export, and import custom guides

Enable Dropped Frame Indicator

Display metadata as overlays

Set overlay settings

Set In and Out points in the Source Monitor

Adobe Premiere copyright and trademarks and third-party notices

## Adobe Premiere technical requirements

### Learn the minimum specifications required to install and run Adobe Premiere, and use the recommended configuration for the best performance.

Applies to Premiere version 26.0 and 26.2. Earlier system requirements are available here.

Note

Activation and use require an Internet connection, an Adobe ID, and agreement to the license terms. This product can connect with Adobe-hosted or third-party online services, or provide access to them. Adobe services are offered only for users age 13 or older and require acceptance of extra terms of use plus the Adobe Privacy Policy. Availability can vary by country or language, and applications or services may change or be discontinued without notice. Additional fees or membership charges may apply.

Minimum specifications are intended for HD video editing. Recommended specifications target HD, 4K, and higher-resolution video editing.

### Language versions available for Premiere

- Deutsch
- English
- Español
- Français
- Italiano
- Português (Brasil)
- Русский
- 日本語
- 한국어
- 简体中文

For Middle Eastern and Indic scripts, Premiere uses the South Asian and Middle Eastern text engines for text composition.

## GPU and GPU Driver requirements

### Learn how Premiere relies on the GPU for faster playback, rendering, and export, and how to keep video drivers current.

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

### Updating video drivers on Windows

On Windows, Windows Update can update video drivers for AMD, Intel, and NVIDIA GPUs. For instructions on Windows Update, use Microsoft's documentation.

### Updating video drivers on macOS

For Macintosh computers, video driver updates arrive through macOS system updates. Apple's documentation explains how to update macOS.

## Storage recommendations

### Improve video-editing performance by using fast SSD or NVMe storage and setting up drives efficiently.

### Local storage setup

Keep at least 8GB of free hard-disk space available for installation. Setup needs extra room, and the program cannot be installed on removable flash storage. For media files, choose a high-speed drive to support smooth performance.

Storage type

Purpose

Configuration tips

System drive

To install the OS and apps.

Use a high-speed SSD for fast boot and app launch.

Media cache drive

To store peak (PEK) and conform audio (CFA) files that Premiere accesses thousands of times per second.

Assign a separate SSD for smooth playback and responsiveness.

Media Drive

To store video assets and project media.

Use a high-speed NVMe SSD for smooth editing.

| --- | --- | --- |

Note

Use fast external drives for media and media cache. With only two drives, keep Media Cache and media together on one drive.

### Best practices for storage management

- Use dedicated drives: Put system files, cache, and media on separate drives so throughput stays high.
- Prioritize fast storage: Video work depends on Fast SSD or NVMe storage. Without RAID, spinning disks do not provide enough speed for HD and UHD video.
- Optimize external storage: When internal capacity is constrained, choose fast external drives.
- Ensure High-Speed network: For smooth NAS performance in Premiere and After Effects, keep a 10Gbps + connection available. For Premiere and After Effects shared network workflows, use a 1 Gbps Ethernet connection for HD and 10 Gbps for 4K.
- Store cache locally: In shared setups, place Media Cache on local drives to improve responsiveness.

## Processor, memory, and GPU recommendations

### Review the processor, memory, and GPU guidance that helps Premiere run well and remain compatible with your workflow.

Use the table to select a processor, memory, and GPU combination for dependable, responsive Premiere performance.

## Hardware-accelerated decoding and encoding

### See how Adobe Premiere relies on your system's GPU to make H.264/H.265 playback and export faster.

For H.264 and H.265 (HEVC), Premiere can improve export and playback speed through hardware-accelerated encoding and decoding.

Using these capabilities requires a GPU with hardware acceleration support. Support differs across GPU makers, including NVIDIA, Intel, AMD, and Apple silicon.

M1 Pro, M1 Max, M1 Ultra or newer Apple silicon can use hardware acceleration for both encoding and decoding H.264 and H.265; it also supports 10-bit 4:2:2 decoding. HEVC HLG 4:2:0 10-bit encoding, however, remains software-based.

The following requirements apply to Hardware-accelerated decoding and encoding.

## Enable hardware accelerated decoding support

### Improve timeline playback for H.264/AVC and HEVC media by turning on hardware accelerated decoding.

Start Premiere.

Choose Edit > Preferences > Media.

Enable H264/HEVC hardware accelerated decoding (requires restart).

Select OK.

Close and reopen Premiere so the change takes effect.

With H.264/AVC and HEVC media, timeline playback is tuned for smoother performance.

## Supported codecs and drivers for hardware-accelerated decoding

### Review the codec platforms and driver requirements Adobe Premiere supports for hardware-accelerated decoding.

### Supported codec platforms

Hardware-accelerated decoding is available for MP4 media that uses H.264/AVC and HEVC codecs. On Intel platforms, HEVC 4:2:2 10-bit decoding is supported by Premiere, Adobe Media Encoder, and After Effects (version 22.0 and later).

M2TS (MPEG-2 Transport Stream) is not supported. For 4K M2TS media, playback can improve after transcoding to MP4 with hardware-accelerated decoding. HD M2TS media may see little or no meaningful speed gain.

On systems using an integrated Intel GPU, 8 GB RAM or less can restrict hardware-accelerated decoding enough that the CPU takes over. For better performance, use 16 GB of RAM or more.

### Recommended Intel driver and processor versions

For stronger performance, Adobe lists this driver and processor set:

- Driver xx.x.100.9126 or later for 11th Generation Intel® Core™ with Iris® Xe Graphics, with UHD Graphics, and with Iris® Xe Max Graphics.
  - Intel® Core™ i7-1068NG7 Processor
  - Intel® Core™ i7-1065G7 Processor
  - Intel® Core™ i7-1060G7 Processor
  - Intel® Core™ i5-1035G4 Processor
  - Intel® Core™ i5-1035G7 Processor
  - Intel® Core™ i5-1038NG7 Processor
  - Intel® Core™ i5-1035G1 Processor
  - Intel® Core™ i5-1030G7 Processor
  - Intel® Core™ i5-1030G4 Processor
  - Intel® Core™ i3-1005G1 Processor
  - Intel® Core™ i3-1000G1 Processor
  - Intel® Core™ i3-1000G4 Processor
  - Intel® Pentium® Processor 6805

## Enable Hardware Encoding in Premiere

### Turn on hardware encoding in Premiere so exports use supported hardware and complete faster.

Start Premiere.

Open your project, then choose the correct sequence.

Choose File > Export > Media. If useful, choose an export preset that fits the required output.

Select Export tab.

Set Format to H.264.

Select Video.

Open the Encoding Settings panel.

Set Performance to Hardware Encoding.

Select Export.

Premiere then uses the available hardware to speed video export and improve overall performance.

### Supported codec platforms

Encode videos as H.264/AVC (8-bit) or HEVC 4:2:0 (8-bit and 10-bit). With a 10th-generation or newer Intel® Core™ processor, HEVC output can go up to 8192x8192; on other processors, keep HEVC at 4096x4096 or below.

### Recommended Intel driver and processor versions

For HEVC 4:2:0 10-bit hardware encoding, use Intel® Core™ processors from the 9th to the 12th generation. Consult Intel documentation for additional details.

## Enable Mercury Playback Engine (GPU accelerated) renderer

### Enable the Mercury Playback Engine (GPU accelerated) renderer to improve rendering speed and performance in Premiere and Media Encoder.

Note

After updating or reinstalling Premiere, if Mercury Playback Engine GPU Acceleration is not available, perform a clean installation of your GPU drivers, NVIDIA and AMD®.

### Improve Premiere and Media Encoder performance with an accelerated renderer

Adobe Premiere and Media Encoder use the system GPU alongside the CPU to distribute processing work and increase performance. The CPU still performs most operations, while the GPU assists with particular effects and features. In Premiere, Mercury Playback Engine (GPU Accelerated), and in Media Encoder, Mercury Playback Engine (GPU accelerated), render those effects and handle image processing, resizing, color conversions, and related work.

Mercury Transmit improves timeline playback, scrubbing, and full-screen playback. Editing and exporting become faster and more efficient because the CPU and GPU operate together.

### Mercury Playback Engine (GPU accelerated) renderer for Premiere

Open Premiere.

Choose File > Project Settings > General > Video Rendering and Playback section.

In the Renderer dropdown, select Mercury Playback Engine GPU Acceleration (OpenCL).

For better timeline playback and preview rendering, set Renderer to Mercury Playback Engine GPU Acceleration (OpenCL).

For better timeline playback and preview rendering, set Renderer to Mercury Playback Engine GPU Acceleration (OpenCL).

Select OK.

### Mercury Playback Engine (GPU accelerated) renderer in Media Encoder

Open Media Encoder.

Choose Edit > Preferences > General > Video Rendering and Playback section.

Alternatively, open Window > Queue.

In the Renderer dropdown, select Mercury Playback Engine GPU Acceleration (OpenCL).

Use GPU Acceleration settings to improve rendering speed.

Use GPU Acceleration settings to improve rendering speed. Select Renderer for Optimized Video Rendering.

Select Renderer for Optimized Video Rendering.

Select OK.

## Adobe Premiere 25.x technical requirements

Review the minimum requirements for installing and running Adobe Premiere. For best performance, follow the recommended system specifications.

This section covers Premiere versions 25.6, 25.5, 25.4, 25.3, 25.2. 25.1, and 25.0. View previous system requirements here.

Note

To activate and use the product, you must have Internet access, sign in with an Adobe ID, and accept the license agreement. The product may connect with Adobe-hosted or third-party hosted online services, or allow access to them. Adobe services require users to be 13 or older and to accept additional terms of use plus the Adobe Privacy Policy. Applications and services can vary by country or language, and they may change or be discontinued without notice. Extra fees or membership charges can apply.

Minimum specifications cover HD video editing. Recommended specifications are intended for HD, 4K, or higher-resolution video editing.

## Adobe Premiere 24.x technical requirements

Review the minimum requirements for installing and running Adobe Premiere. For best performance, use the recommended system specifications. This section covers Premiere versions 24.0, 24.1, 24.2, 24.3, 24.4, 24.5, and 24.6.

Activation note

To activate and use the product, you must have Internet access, sign in with an Adobe ID, and accept the license agreement. The product may connect with Adobe-hosted or third-party hosted online services, or allow access to them. Adobe services require users to be 13 or older and to accept additional terms of use plus the Adobe Privacy Policy. Applications and services can vary by country or language, and they may change or be discontinued without notice. Extra fees or membership charges can apply.

Minimum specifications cover HD video editing. Recommended specifications are intended for HD, 4K, or higher-resolution video editing.

Requirement type

Minimum specification

Recommended specification

Processor

- Intel® 6th Generation or newer CPU - or AMD Ryzen™ 1000 Series or newer CPU
- Advanced Vector Extensions 2 (AVX2) Support required

Note: versions 24.x cannot be installed on Intel® 3rd Generation or older processors. Older AMD processors are also blocked.

Intel® 11th Gen or newer CPU with Quick Sync - or AMD Ryzen™ 3000 Series / Threadripper 2000 series or newer CPU

Operating system

Windows 10 (64-bit) V22H2

- Windows 10 (64-bit) V22H2 or later
- Windows 11

Memory

8 GB RAM

- 16 GB RAM for HD media
- 32 GB RAM or more for 4K and higher

GPU

2 GB GPU memory

- 4 GB GPU memory for HD and some 4K media
- 6 GB or more for 4K and higher

Storage

- 8 GB of available hard disk space, with additional free space needed during installation. Installation on removable flash storage is not supported.
- Additional high-speed drive for media

- Fast internal SSD for app installation and cache
- Additional high-speed drive for media

Display

1920x1080 pixels

- 1920x1080 pixels or more
- DisplayHDR 1000 for HDR workflows

Sound card

ASIO compatible or Microsoft Windows Driver Model

ASIO compatible or Microsoft Windows Driver Model

Network storage connection

1 Gigabit Ethernet (HD only)

- 1 Gigabit Ethernet (HD only)
- 10 Gigabit Ethernet for 4K shared network workflow

| --- | --- | --- |

### Minimum and recommended system requirements for macOS

Requirement type

Minimum specification

Recommended specification

Processor

- Intel® 6th Generation or newer CPU
- Advanced Vector Extensions 2 (AVX2) Support required

Note: Mac Pro 2013 and earlier systems cannot install Premiere 24.x versions.

Apple silicon M1 or newer

Operating system

macOS Monterey (version 12)

Compatibility note: macOS 11.0 (Big Sur) support has ended. These 24.x video applications do not install on macOS 11.0 or older versions.

Rosetta does not support Premiere 24.x versions. Mac users on Apple silicon and Intel-based Mac can continue with version 24.0.

macOS Monterey (version 12) or later

Memory

8 GB RAM

Apple silicon: 16 GB unified memory

GPU

Apple Silicon: 8 GB unified memory

Intel: 2 GB GPU memory

Apple silicon: 16 GB unified memory

Storage

- 8 GB of available hard disk space, with additional free space needed during installation. Installation on removable flash storage is not supported.
- Additional high-speed drive for media

- Fast internal SSD for app installation and cache
- Additional high-speed drive for media

Display

1920x1080 pixels

- 1920x1080 pixels or greater
- DisplayHDR 1000 for HDR workflows

Network storage connection

1 Gigabit Ethernet (HD only)

10 Gigabit Ethernet for 4K shared network workflow

| --- | --- | --- |
