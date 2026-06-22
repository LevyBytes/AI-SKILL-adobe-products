# Using, User Guide

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Features summary | Adobe Audition (January 2026); Feature summary | Adobe Audition (October and May releases); Feature summary | Adobe Audition (March and September release); Feature summary | Adobe Audition (June and May release); Generating text-to-speech; helpx_adobe_com_audition_desktop_user_guide_html.

## Features summary | Adobe Audition (January 2026)

### Adobe Audition latest releases: new feature and enhancement overview.

### Windows ARM native support

Beginning with version 26.0, Adobe Audition runs natively on Windows on ARM (ARM64), so it operates directly on Windows devices built with Qualcomm Snapdragon X Series processors and delivers stronger responsiveness and performance.

See details about support for ARM-based Windows devices.

## Features summary | Adobe Audition (January 2026)

### April 2025 (25.2) release of Adobe Audition: new feature and enhancement overview.

### New features in April 2025 (25.2) — Support for light mode

To adjust workspace brightness, open Edit > Preferences > Appearance > General in preferences. From there, make panels, windows, and dialog boxes brighter or darker. Audition keeps the brightness level you choose consistent throughout the application.

Modify the brightness of the dialog boxes, panels, and windows in Audition.

Modify the brightness of the dialog boxes, panels, and windows in Audition.

## Feature summary | Adobe Audition (October and May releases)

Review the updates for Adobe Audition in the october release (version 22.0) and the May release (version 14.2).

### Unified Version numbers

October 2021 (version 22.0)

In this release, Adobe video and audio applications use a shared major version: 22.0. Forward and backward interoperability applies across Adobe applications at the 22.x level, allowing any 22.x user to work with another user on any 22.x build. Matching version numbers make updating and collaboration simpler.

### Audition on Apple M1 ARM

May 2021 (version 14.2)

Native operation on Apple M1 systems lets Audition record and mix high-quality audio content with better performance. The biggest improvements include quicker mixdowns, faster rendering for audio effects, and nearly real-time refreshes in Spectral Display Editor. Audio Effects performance also improves on other platforms, including Audition on Intel macOS (Intel) and Windows.

Current Audition on M1 limitations include no support for EUCON control surfaces or CEP extension panels, and CD Burning is unavailable. Video workflows also exclude these codecs in Audition on M1: DV, XDCamEX, FastMpeg, DNX, Sony F65, and Cineform.

### Strip Silence

May 2021 (version 14.2)

Use Strip Silence to find and remove silent or inactive portions of recorded clips while keeping multitrack audio in sync. It helps clean voice recordings, interviews, podcasts, audio documentary projects, and other multitrack edits. Adjustable Strip Silence parameters handle scenarios such as noisy backgrounds or participants recorded at different volume levels, making empty regions easier to detect and remove and reducing editing time.

For more information, see Remove silences from your audio recordings.

### New Loudness Meter

May 2021 (version 14.2)

The new Loudness Meter gives broadcast, podcast, and streaming media work ITU-based loudness monitoring that follows industry standards. Replacing the earlier Loudness Radar, the new Loudness Meter measures program loudness clearly for full mixes, individual tracks, buses, and submixes. Presets cover common regional loudness targets such as EBU in Europe and ATSC in the Americas, while additional presets align output with online services including Spotify, Apple Podcasts, Netflix, and YouTube.

For more details, see Measure and manage audio using the Loudness Meter.

## Feature summary | Adobe Audition (March and September release)

Review what changed for Adobe Audition across two releases: March (version 14.0) and September (version 13.0.10), covering both features and enhancements.

Note

Adobe Audition is a powerful application for audio recording, audio mixing, podcasting, and sound effect work.

### Insert mode in Waveform editor

March 2021 release (version 14.0)

In the Waveform editor, Insert mode lets you add audio at the playhead without replacing existing material. For voice workflows, Insert Recording mode includes punch and roll, so the speaker can hear the previous audio before capturing a new segment. That preview helps match the original performance's cadence and delivery. Choose Overwrite mode when the goal is replacement.

For more information, see Overwrite and Insert modes in Waveform editor.

Overwrite and Insert modes

Overwrite and Insert modes

### Keyframe dragging

March 2021 release (version 14.0)

Keyframes can now be dragged only up to the clip edge; dragging past clip boundaries is not allowed.

### Equitable language

March 2021 release (version 14.0)

Adobe updated Premiere Pro, After Effects, and Audition to better align with its diversity and inclusion values by replacing non-inclusive language and related reference imagery.

For more information, see Terminology changes in Premiere Pro, After Effects, and Audition.

### Faster scanning of third-party audio plugins

September 2020 release (version 13.0.10)

Scanning is now much faster in Adobe Audition for VST 3 (third-party) plugins and AU (Audio Unit) plugins, with the exact speedup depending on system setup. Use Audition's Audio Plug-In Manager to scan these plug-ins.

For more information, see Adding third party plugins.

## Feature summary | Adobe Audition (June and May release)

For Adobe Audition, this summary covers new features and enhancements added in version 13.0.7 (June release) and version 13.0.6 (May release).

### Faster scanning of third-party audio plugins

Scanning is now much quicker in Adobe Audition for VST 3 (third-party) plugins and AU (Audio Unit) plugins, depending on system setup. Use Audition's Audio Plug-In Manager to scan these plug-ins.

For more information, see Adding third party plugins.

### Link Media

Link Media lets you relink files and the session clips that use them from the Files Panel, avoiding a manual search for offline clips in the Editor View. Once new media is selected, every clip that points to that file's media is relinked to it. When Sessions open with media offline, Audition creates offline files so the matching Session Clips can be relinked. In this Adobe Audition update, offline media can be relinked from:

- The offline item in the Files Panel, where you select replacement media and relink every associated clip in the Session
- The Opening Files dialog when media is missing

Note

In the Files Panel context menu, Link All Media Clip has been replaced by Relink Media.

Relinking offline media

Audition still shows missing Session files in the Files panel and marks them with a question mark.

Offline file items on display

Offline file items on display

### Default audio device switching for macOS

Choose System Default for Audition audio input and output device selection when you want to use the device currently active in the operating system. If you plug in or connect a new device, Audition switches automatically. On macOS, Premiere Pro, After Effects, Character Animator, AME and Premiere Rush also provide this behavior.

For more information, see Default audio device switching.

Audio Hardware Preferences

Audio Hardware Preferences

### Export video clip range

During editing, audio and video clip ranges often differ. When they do not match, black video frames are added while audio continues playing. Exports through AME can now use the video clip as the export range.

For more information, see Export with Adobe Media Encoder.

## Generating text-to-speech

With Generate Speech, paste or enter text and turn it into a realistic voice-over or narration track. Audition draws on the voice libraries supplied by your Operating System. Use the feature when a video, game, or audio project needs synthesized speech.

On Mac, Speech Generation relies on a different speech synthesis engine than Windows. Each engine comes from its own operating system and does not work across platforms. Therefore, XML tags supported by the Windows engine are not usable on Mac, and the tag format Mac supports is likewise unavailable on Windows.

Note

Voices may carry licensing limits for public or commercial use. Confirm that you have distribution rights for any work that includes those voices.

### Generate speech

Create generated speech from Waveform view or Multitrack view:

Waveform view:

- Select File > New > Audio File and set up a mono audio file.
- Select Effects > Generate > Speech.

Multitrack view:

- Set the playhead location and choose the track where the speech should be inserted.
- Select Effects > Generate > Speech.

Use the Generate Speech dialog box to choose the language, gender, and voice for the synthesized result. On macOS and Windows, more voices are available through these routes:

macOS: In Generate Speech, click Settings. Choose System Voice > Customize. Install voices and languages directly from Apple.

Embedded speech commands can also be used when building speech. For details, see the Apple developer documentation on using embedded speech commands.

Confirm with OK.

- Windows: Add an additional language in Windows 10. For details, see How to download Text-to-Speech languages for Windows 10 and Windows 11.

## helpx_adobe_com_audition_desktop_user_guide_html

Search | Last updated: Apr 27, 2022

Page unavailable. For assistance, go to Adobe Support.

ページは見つかりませんでした。サポートが必要な場合は、Adobe Support をご利用ください。

Diese Seite wurde nicht gefunden. Hilfe erhalten Sie über den Adobe-Support.

Page non trouvée. Pour obtenir de l'aide, consultez l'assistance Adobe.

페이지를 찾을 수 없습니다. 도움이 필요하면 Adobe 지원을 이용하십시오.

No se encontró la página. Para obtener ayuda, visite Asistencia de Adobe.

A página não foi encontrada. Para obter ajuda, acesse o Suporte da Adobe.

Страница не найдена. За помощью обратитесь в службу поддержки Adobe.

页面未找到。如需帮助，请前往 Adobe Support。

找不到頁面。如需協助，請前往 Adobe 支援。

### Get help faster and easier

Sign in

New user?

Create an account › Manage account

Quick links

View all your plans Manage your plans View quick links Hide quick links
