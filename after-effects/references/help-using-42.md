# Basics Gpu After Effects, Copy Frame To Clipboard, Stack Panel Groups, Plug Ins

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: GPU and GPU driver requirements for After Effects; Copy a frame to the clipboard; Working with stacked panel groups; Third-party plug-ins | After Effects.

## GPU and GPU driver requirements for After Effects

Search Last updated on Mar 27, 2026

Get to know what GPU and GPU driver After Effects calls for.

Note

For supported NVIDIA GPUs, Adobe suggests putting on the newest Studio driver:

- Studio driver for GeForce GTX/RTX desktop GPUs
- Studio driver for GeForce GTX/RTX notebook GPUs
- Studio driver for RTX/Quadro desktop and notebook GPUs

For the 900 series and anything older, NVIDIA no longer puts out Studio Drivers; on those GPUs you can fall back to the most recent Game Ready Drivers.

Support for Kepler mobile GPUs has likewise been dropped by NVIDIA. Should you be on one of these machines, the system compatibility report In After Effects warns that the driver needs updating — yet no driver updates exist for this lineup.

### What GPU should be used for the best performance?

Because fresh GPU chipsets keep arriving, the After Effects team won't certify or single out particular models. What follows instead are pointers for picking a card that suits how you work.

- Rather than fixating on a specific GPU technology, weigh the card's overall throughput. Support across DirectX, OpenCL, CUDA, and Metal varies in After Effects, so pick a strong performer that fits both your budget and what your system needs.
- Since Premiere leans on the GPU more heavily than After Effects and the two share that technology, the GPUs Premiere recommends make a sensible starting point. Review the Premiere system requirements.
- Bear in mind that another tool in your pipeline might demand a more capable GPU than After Effects does; factor every one of them in.
- Verify whether your machine holds Multiple GPUs.
- On a Mac, confirm none of your GPUs are unsupported.

### GPU-related issues you may face

Moving up to After Effects version 17.x or beyond can surface driver problems that call for a driver update.

Among the driver-related symptoms you might run into:

- Mismatches between system components are a documented source of instability and crashes, which in turn can cost you data.
- Whatever release of your network device software you're running might interfere with your Adobe application.
- Crashes that strike at random during editing.
- Messages along the lines of "This version of your operating system is incompatible with your Adobe application."
- Previews that fail to appear, look scrambled, drop frames, or otherwise underperform, whether through sluggish playback or frame glitches.

### NVIDIA CUDA graphics acceleration requirements

For NVIDIA CUDA graphics acceleration you'll need CUDA 11.8 drivers or something newer. Running Adobe's video applications does not depend on CUDA. That said, anyone who wants CUDA graphics acceleration has to install drivers matching CUDA 11.8 (522.25 or newer) before moving to the newest Premiere releases. The latest NVIDIA Studio Drivers ship with CUDA drivers bundled in.

### Updating NVIDIA Drivers on Windows

Premiere will run on the newest GeForce series GPUs as well as the RTX/Quadro series.

Because these drivers see frequent updates, visit the NVIDIA website to confirm you're on the newest one for your card.

The newest GPU drivers are available here.

Note

At present, macOS Mojave 10.14 and newer releases offer no CUDA support.

### Apple Metal GPU acceleration

Adobe backs whichever Windows and macOS releases Microsoft and Apple still actively maintain. On the macOS side, that generally covers the three latest releases.

To pick up any new graphics driver updates, you can check whether a macOS system update is waiting.

Select the Apple menu > System Settings.

Go to the General tab and select Software Update.

Should an update carrying the newest graphics driver appear, go ahead and install it.

### Intel GPU driver update requirements

A current build of the Intel graphics driver is required by After Effects. Keep your Intel driver at version 27.20.100.8476 or newer to steer clear of stability and performance trouble.

Note

The 100.8476 portion denotes the final two segments of the Intel driver's full version (namely 27.20.100.8476).

Adobe's advice is to source a compatible driver from your computer's manufacturer first. Where no compatible build exists, Intel publishes a generic one on its site.

Note

When your driver predates 100.6286 and your computer manufacturer offers no compatible build, the recommendation is to avoid installing anything newer than 100.6286 from the Intel site. The 100.6444 release is a Windows DCH driver that won't install cleanly over older legacy drivers.

If installing the driver gives you trouble, Adobe strongly suggests backing up your system beforehand.

### Features natively available in After Effects

Plenty of After Effects features tap the GPU to speed up rendering. To see which effects get that GPU acceleration, choose Project Settings > Video Rendering and Effects.

### Third-party effects

A handful of third-party effects, Element 3D by Video Copilot among them, drive the GPU on their own, separate from After Effects. Check the publisher's own documentation to learn which GPUs and technologies it supports. Other effects, like Magic Bullet Looks, tie into the Mercury GPU Acceleration pipeline, and those gain GPU acceleration in Premiere as well.

### Mercury GPU Acceleration

By letting After Effects hand supported effects off to the GPU for rendering, Mercury GPU Acceleration can cut render time considerably.

The Mercury label may already be familiar from Premiere. The rendering technology behind Premiere's Mercury Playback Engine is the very same one After Effects draws on. (Everything else about the After Effects playback engine differs from Premiere, so only the rendering piece of that technology carries over.)

Mercury GPU Acceleration lives in the project settings. Turn it on by choosing File > Project Settings, opening the Video Rendering and Effects tab, and switching the Use option to Mercury GPU Acceleration. The number of options here can vary with your machine and GPU. These are the GPU technologies After Effects supports:

- OpenCL (Windows only, with an AMD or Intel GPU)
- CUDA (Windows only, with an NVIDIA GPU)
- Metal (macOS only, 10.12 and later)

Note

macOS 10.14 and newer drop support for NVIDIA CUDA. Should you have an Apple-authorized NVIDIA GPU, the Metal Mercury Playback Engine remains available to you.

### More information about GPU

- Every VR effect, VR Blur included, runs solely on the GPU. They differ from the other effects in having no CPU fallback at the moment. To run them, a GPU carrying plenty of VRAM, 4GB or more, is the recommendation. Where they beat other effects for VR is in stitching the edges of the VR image together without a visible seam. A few also prove handy on ordinary, non-VR footage simply because they're brand new to After Effects, VR Chromatic Aberrations being one example.
- Found under Preferences > Appearance, the Hardware Accelerate Composition, Layer, and Footage Panels option ships turned on and relies on DirectX under Windows and Metal on Mac to ready rendered frames for the screen during previews or playback. After a frame is rendered, After Effects then readies it for display, accounting for screen resolution, scaling, overlays such as guides and layer handles, and color management. In particular, View > Use Display Color Management applies once a working space color profile is active for the project. Switch the Hardware Accelerate option off and After Effects shifts all of that onto the CPU, yet the GPU can speed the work up, color management most of all. The GPU demand here stays minimal, and any recent video card carrying even a little VRAM will do.

### More like this

- Basics of rendering and exporting in After Effects
- Memory and storage in After Effects

## Copy a frame to the clipboard

Search Last updated on Apr 28, 2026

### Learn how to copy the currently rendered frame in After Effects directly to your clipboard to paste into other apps.

With Copy Frame to Clipboard you can grab whatever frame is currently rendered in the Composition panel as a still. Triggered from the Composition, Footage, or Layer panel, it drops that frame straight onto the system clipboard in a single move, set to paste into chat, email, or anywhere else.

The Copy Frame to Clipboard option sits in the Composition, Layer, and Footage panels.

The Copy Frame to Clipboard option sits in the Composition, Layer, and Footage panels. Before you begin:

To get the best outcome, hold off until the frame at the Current Time Indicator has rendered in full, so that the copied still faithfully matches what the Composition panel shows.

### Copy a frame

Slide the Current Time Indicator onto the frame you'd like to copy and let it render completely.

Select the Composition, Footage, or Layer panel to make it active.

Take either of these routes:

- Select the Copy Frame to Clipboard button in the panel toolbar.
- Use Ctrl+Alt+Shift+F5 (Windows) or Cmd+Option+Shift+F5 (macOS).

3. Park the Current Time Indicator over the frame, then choose Copy Frame to Clipboard to grab precisely that frame.
   Drop the frame into your target app with Ctrl+V (Windows) or Cmd+V (macOS).

Pasting now works straight into Explorer, Finder, or anywhere PNG files are accepted. Its name combines the composition name with the frame number (i.e., the same default naming applied when you export a file sequence).

### Supported formats and renderers

On macOS and Windows alike, After Effects places the frame on the clipboard as a PNG, handling up to 16‑bit color. Under Windows it additionally puts a bitmap copy there for the sake of apps lacking PNG support.

These are the renderers Copy Frame to Clipboard supports:

- Classic 3D
- Advanced 3D
- Cinema 4D
- Draft 3D

### Color and transparency behavior

Whatever shows in the viewer is precisely what gets copied. With a project's working color space turned on and Display Color Management running, or with an OCIO display transform in play, the copied pixel values aren't kept as they were. They're instead remapped to the look presented to the viewer, so the copy matches the displayed output.

Leave Toggle Transparency Grid on and the copied image holds onto its transparent areas, letting them stay transparent once pasted into destinations that allow it.

Toggle Transparency Grid enabled while copying a frame to the clipboard.

Copied image remains transparent when pasted into supported destinations, such as Adobe Illustrator.

Switch Toggle Transparency Grid off and After Effects lays the copied image over the composition background color, making the result line up with the solid‑background view in the Composition panel.

Toggle Transparency Grid is disabled while copying a frame to the clipboard.

Copied result matches the background view in the Composition panel.

Join the discussion on the Copy Frame to Clipboard feature in the After Effects Beta community.

## Working with stacked panel groups

Search Last updated on May 5, 2026

### Organize complex timelines in Adobe After Effects with stacked panel groups for a more efficient workspace.

Stacked panel groups give you one-click reach to a panel while keeping the workspace tidy and free of clutter. It resembles how the panels behave in Adobe Lightroom.

Within a stacked panel group, the panels collapse down to their tabs and sit one above another. Clicking a panel tab opens that panel up.

Stacked panel groups are handy for showing and tucking away the panels that normally sit down the right edge of the After Effects workspace.

### Creating a stacked panel group

On the tab of any panel in the group, click the panel menu.

Within the Panel Group Settings submenu, click Stacked Panel Group.

### Modifying panel arrangements

Pull a panel out of the stacked group and onto another area of the workspace.

Move it over to the right side of the composition viewer.

Or drop it above the composition frame.

### Expanding and minimizing panels in a stacked group

To expand or collapse panels all at once, hold Command (mac OS) or Control (Windows) and click the tab of any minimized or expanded panel within that group.

### Solo panels in stack

Click any panel in a stacked panel group and the group's remaining panels collapse to their tabs. That behavior goes by the name Solo mode. Switching Solo mode off lets more than one panel in a stacked panel group stay open.

To switch Solo mode off or on, do either of these:

1. Hold Option (mac OS) or Alt (Windows) and click a panel tab.
2. On the tab of any panel in the group, click the panel menu. Within the Panel Group Settings submenu, pick Solo Panels in Stack.

### More like this

- Workspaces, panels, and viewers

## Third-party plug-ins | After Effects

Search Last updated on Mar 27, 2026

Extend what Adobe® After Effects® can do with third-party plugins. Everything listed here runs on our newest release, After Effects 2022, and backs Multi-Frame Rendering so renders finish as fast as possible.

You can also turn up plugins by searching our Partner Finder database of developers.

The list below isn't exhaustive; more plugins may exist. Watch for the Multi-Frame Ready logo on third-party plugin sites.

FxFactory drives a huge lineup of visual effects, audio plugins, and apps built for video editors.

FxFactory Pro

Photo Montage

Light Show

Caption Burner

Caption Converter

Wipology

Block Party

Pan and Zoom

Manifesto

Star Titler

Storm

Nodes 3

Mosaic

Motype

Moods

Barcode

Hawaiki Analyzer

Hawaiki AutoGrade

Hawaiki AutoMatch

Hawaiki AutoSplit

Hawaiki Keyer 4.5

Hawaiki Super Glow

Film Leaders 2

Grunge Effects

Light Kit 2

Light Leaks

Lo-Fi Look

Random Text

Spectrum

Sprocket Slip

Decimal Counter

ParticleMetrix

Volumetrix

SupaWipe

Light Pack

MagiMoto

Revolve 360

Rolling Credits

Subtitles

ViewFinder HUD

Artitude

Cinemage

Look Sweet

Makeup Artist 3

Movie Color

Vintage

Bounce

Contrast

Film Transitions

Levels and Curves

Shatter

Video Scrapbook

Z DFISH

Z Flow

Z Fold

Z Geode

Z Halo Bender

Z PATTR

Z Painterly Transition

Z COLR

Z Multi View

Blaster Bolt

Blaster Bolt FREE

Saber Blade

Saber Blade FREE

Space Wipes

1 Matte Mask

9 Slice Scale

FxTiles

Andy's Better 3D

Andy's Elastic Aspect

Andy's Gradient Filter

Andy's Region Tool

Andy's Safe Guides

Andy's Swish Transistions

The tools from Red Giant are mostly plugins for video host applications, Adobe Premiere and Adobe After Effects among them, and more. Across the past ten years, Red Giant offerings such as the Magic Bullet Suite and Trapcode Suite have grown into the go-to standard for film and broadcast post-production.

Trapcode Suite: Particle Simulations and 3D Effects for Motion Graphics and VFX

- Particular
- Form
- Mir
- 3D Stroke
- Shine
- Starglow
- Sound Keys
- Tao
- Lux
- Echoshape
- Horizon

Magic Bullet: Color correction, finishing and film looks

- Looks
- Colorista
- Cosmo
- Mojo
- Film
- Renoiser

  - Reframe
  - Array Gun
  - Progresso
  - Logo Motion
  - Line
  - HUD Components
  - Spectralicious
  - Fractal Background
  - Soft Gradient Background
  - Turbulence Noise
  - Gradient Ramp

  - Chromatic Aberration
  - VHS
  - Glitch
  - Holomatrix II
  - Electrify
  - Analog
  - Texturize Motion
  - Glow
  - Quantum
  - Glimmer
  - Retrograde
  - Finisher
  - Multitone
  - Grain16
  - Ecto
  - Glo Fi II
  - Long Shadow
  - Knoll Light Factory EZ
  - Luster
  - OverLight
  - Carousel
  - AV Club
  - Chromatic Glow
  - Texturize
  - Heatwave
  - Point Zoom
  - RGB Separation
  - Edge Glow
  - ShrinkRay
  - Blur
  - Prism Displacement
  - Misfire
  - Noir Moderne
  - Compound Blur
  - Spot Blur

  - Hacker Text
  - Typographic
  - Numbers
  - Screen Text
  - Text Tile
  - Type Cast
  - Type On
  - Title Motion

  - Warp
  - Glitch Transition
  - Retrograde Transition
  - VHS Transition
  - Carousel Transition
  - Channel Surf
  - Flicker Cut
  - Color Mosaic
  - Shape Wipe
  - Linear Wipe
  - Clock Wipe
  - Channel Blur
  - Camer Shake Transition
  - HalfLight
  - Exposure Blur Transition
  - Knoll Light Transition
  - Film Transition
  - Swish Pan
  - Spectralicious Transition
  - Turbulence Transition
  - Diamond Wave
  - Blinds
  - Color Stripe
  - Cube
  - Unfold
  - Soft Edge Wipe
  - Inside Cube
  - Triangle Wave
  - Rubix Cube
  - Dolly Fade
  - Fold
  - Slide

  - Modes
  - Camera Shake
  - Socialize
  - Unmult
  - Fisheye Fixer
  - Picture in Picture

- Supercomp
- Primatte Layer
- Bang
- King Pin Tracker
- Lens Distortion Matcher
- Sopt Clone Tracker
- Optical Glow
- Chromatic Displacement
- Shadow

With more than 19 years behind it building software tools and systems, RE:Vision Effects aims to hand motion picture and video artists real creative freedom. Wide recognition has followed from the in-house mastery it holds across stereo 3D algorithms, both 2D and 3D graphics, plus video image processing.

- Effections
- DEFlicker
- DE:Noise
- FieldsKit
- ReelSmart Motion Blur
- RE:Fill
- RE:Flex
- RE:Grade
- RE:Lens
- RE:Match
- RE:Map
- Shade/Shape
- SmoothKit
- Twixtor
- Video Gogh

For film, video, and photography pros, Boris FX ranks among the top makers of visual-effects software and plugins.

- Mocha Pro
- Sapphire
- Continuum

CycoreFX

Among the award-winning effects Cycore Systems has built are Final Effects, Studio Effects, and Cult Effects — titles that turned into a standard across film and video work. Its most recent releases are Cycore Effects Path Tools and Sphere Utilities.

- Rakka
- Wiggle Stroke

- Mappit
- MapLine
- Remap
- MapDots

For training, design tools, and artists alike, Video copilot serves as a shared resource. The tools it builds are both original and inventive, raising production quality and pace while keeping your work free and flexible.

- Element 3D
- Optical Flares
- Twitch
- Heat Distortion

For After Effects, Neat Video is a plugin aimed at cutting down video noise. It trims random noise, film grain, analog interference, flicker, jitter on fine detail, and compression artifacts with good efficiency. Pairing adaptive spatial filters with temporal ones, Neat video delivers what is presently the most precise video noise reduction on offer.

Artists who want gorgeous Motion Graphics and lifelike Visual Effects are the audience Rowbyte writes its software for.

- Rowbyte Plexus
- Rowbyte TV Distortion Bundle
- Rowbyte Aura
- Rowbyte Fast Bokeh Pro

Building custom videos goes faster and easier with the DataClay Templater 3.0 plugin.

Templater

### Are you a third-party plugin developer?

Want your plugin on this list? Send a note to mfrbeta@adobe.com listing which of your plugins support After Effects 2022 and Multi-Frame Rendering.

### Get help faster and easier

Sign in

New user?

Create an account › Manage account

Quick links

View all your plans Manage your plans View quick links Hide quick links
