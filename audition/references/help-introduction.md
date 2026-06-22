# Whats New, Audition Releasenotes, Known Issues, Fixed Issues

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: What's new in Adobe Audition — January 2026 release (version 26.0); Release Notes | Adobe Audition; Known issues; Fixed issues in Adobe Audition.

## What's new in Adobe Audition — January 2026 release (version 26.0)

Open the detailed new feature summary.

### More like this

- Feature summary | Adobe Audition | April 2025 (25.2) release
- Feature summary | Adobe Audition | October and May releases
- Feature summary | Adobe Audition | March and September releases
- Feature Summary | Adobe Audition | May and June releases

## Release Notes | Adobe Audition

Use these resources to learn about recent Adobe Audition updates.

### Latest version

The January 2026 release (version 26.0) is identified here as the newest Adobe Audition version. It adds native support for Windows ARM systems along with other improvements.

### System requirements

Check the system requirements for the minimum specifications needed to run the latest Adobe Audition version.

### Online resources

- To ask questions and find answers from other users, use the Adobe Audition forum.

  - Download and install Creative Cloud apps
  - Manage your Creative Cloud apps and services

- For help, inspiration, and support specific to the product, use Adobe Audition Help.

### Customer support

- Covers product usage, sales, registration, and troubleshooting.
- Covers product help plus community instruction, inspiration, and support.

### License agreement

Use of this product requires acceptance of the license agreement and warranty terms. Details are available at www.adobe.com/go/eulas.

Notice to users

Activation and product use may require an Internet connection, an Adobe ID, and acceptance of the license agreement. The product can integrate with, or provide access to, Adobe-hosted or third-party online services. Adobe services are for users 13 years of age and older, with additional terms of use and the online privacy policy applying; privacy details are at http://www.adobe.com/aboutadobe/legal.html. Applications and Services may be unavailable in some countries or languages, and they may change or end without notice. Extra fees or membership charges may apply.

The listed copyright span is 1990-2026 for Adobe and its licensors, with rights reserved.

The Adobe name, the Adobe logo, and Adobe Audition are trademarks or registered trademarks of Adobe in the United States and/or other countries. Other trademark names belong to their respective owners.

## Known issues

Continue for Adobe Audition known issues and limitations.

### General known issues

### Effect settings window flickers after resizing

Issue: For Windows ARM devices, applying an effect and then resizing the effect settings window in either direction can cause flicker and visual glitches inside that window.

Resolution: Adobe is aware of this issue and is working on a fix.

### .ape import fails on Windows Arm devices

Issue: Adobe Audition can import the .ape audio file on Windows systems with Intel or AMD processors, but the same import fails on Windows devices with Arm-based processors.

Resolution: At this time, Adobe Audition supports .ape import only on Windows systems that use Intel or AMD processors.

### Dolby audio does not decode on new or freshly installed Windows 11 version 24H2 devices

Issue: Because the OS no longer ships the built-in Dolby audio decoder, new or freshly installed Windows 11 version 24H2 devices do not decode Dolby Digital audio (AC-3 / E-AC-3) by default. In that state, Adobe Audition cannot decode or import Dolby audio streams and audio tracks contained in video files.

Workaround: Adobe Audition reads WAV or PCM files without depending on the Windows system codec. Converting Dolby audio to WAV/PCM before import removes the missing Dolby decoder dependency.

### Adobe video applications and macOS Sequoia compatibility

Issue: macOS 15 Sequoia asks for permission on each launch of Adobe Premiere, After Effects, Media Encoder, Audition, Character Animator, and other video apps.

Resolution: Adobe will share an update when a fix is available. Until then, you can use this workaround.

### Known issue in Adobe Audition 23.6 (August 2023)

### Audition crashes when performing DeClicker on a 192 KHz file

Issue: Audition crashes when DeClicker is run on a 192 kHz file.

Workaround: Lower the file's sample rate, then run DeClicker.

### Adobe Audition crashes during video import/edit/playback

Issue: Devices with pre-installed Nahimic drivers can crash Adobe Audition.

Workaround: Use one of these options:

- Remove the Nahimic driver from the system.
- If you prefer to keep Nahimic installed, locate the Nahimic blocklist at C:\ProgramData\AVolute\AVolute.Nahimic\Modules\Scheduled\Configurator\BlackApps.dat, include Adobe Audition.exe in the list, and save.

### Known issue in Adobe Audition 23.6 (August 2023) — Known limitation in Adobe Audition 23.2 (February 2023)

### MXF files in non-English name fails to import on windows

Limitation: On Windows, MXF file import can fail when the file path contains non-English characters, including double-byte or accented characters.

Workaround: Change the file path to use only English characters.

### Known issue in Adobe Audition 23.6 (August 2023) — List of known issues in Adobe Audition 22.5 (June 2022)

### macOS problem when sending audio/video clips or a sequence from Premiere to Audition

Issue: On macOS, opening an audio/video clip or sequence in Audition through Edit > Edit in Adobe Audition > Sequence can produce a warning that asks for the latest Audition version to be installed, even when that version is already in use.

Workaround: Choose OK in the warning dialog; the operation then completes correctly. Importing the .prproj(Premiere project) directly into Audition with File > Import also works as expected.

## Fixed issues in Adobe Audition

User-reported problems have been addressed in the latest Adobe Audition release.

### Fixed issues in Adobe Audition version 25.3

- Addressed performance and stability problems.
- Resolved crashes that could happen while burning a CD or extracting from a CD.
- Corrected waveform behavior after Audio content is deleted.
- Fixed the save error encountered with MP2 files.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 24.4

- Alert messages now display correctly for Multi-Track project work.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 24.0

- Prevented added silence at the start and end of mp3 export output.
- Fixed a post-recording state where a file stayed locked, blocking edits or app exit until force quit was used.
- Resolved the "Destination is full or no longer available" error during mp3 export.
- Trackpad scrolling is improved in waveform and multitrack views.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 23.6.1

- Fixed a crash that could follow the "Audition has encountered an error," message.
- Resolved a Declicker crash with audio files using sample rates greater than 96kHz.
- Fixed crashes while importing media files whose metadata includes invalid characters.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 23.6

- Fixed a case where Audition remained hung instead of quitting completely after user sign-out.
- Resolved an assert triggered by enabling Edit metronome pattern > Play.
- Fixed an assert caused by deleting a time-selection at the end of an audio file with the Delete key or Edit > Delete while playback of that selection is active.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 23.5

- After markers are applied and a range is selected, the zoom bar no longer jumps back to the timeline start.
- Fixed Audition crashes during import, edit, or playback on devices with a pre-installed Nahimic driver.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 23.2

- Fixed a recording crash that occurred when the device was disconnected.
- Stability has been improved for VST3 effects.
- Entering a network path in the 'Save-as' dialog no longer causes Audition to hang.
- Frequency analysis is improved for multi-channel files.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 23.1

- Alpha channel rendered as green video: The alpha layer should render black.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 23.0

- Fixed the Workspaces Manager not initialized error shown when Workspaces is set to Reset to Saved Layout.
- When a multitrack session is created by selecting Mono in Mix, the Reset Layout button no longer overlaps the Request Layout button.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 22.6

- Fixed an Audition crash caused by removing headphones during playback in ASIO mode.
- After Play is clicked, focus no longer moves to the Delete button in the Favourites menu.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 22.5

- Ctrl+Tab now switches between open files on Windows.
- OneDrive now appears in Media Browser.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 22.3

- Relinking a clip no longer picks incorrect channels from the source file or changes that clip's channelization.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 22.2

- Punch and Roll recording in Audition's waveform editor no longer adds unexpected pre-roll audio signal.
- Clip Panning envelope now renders during mixdown or bounce when only a subset of source-file channels is used.
- Audio latency is corrected for track routing to sub-mixes.
- Sending to busses Pre-Fader now applies latency compensation correctly and avoids echo.

### Fixed issues in Adobe Audition version 25.3 — Fixed issues in Adobe Audition version 22.0

- Application upgrade on mac ARM no longer imports an incorrect 3rd party effects list automatically.
- Right clicking the fade handle and choosing Crossfade no longer changes curves into symmetrical shapes.
