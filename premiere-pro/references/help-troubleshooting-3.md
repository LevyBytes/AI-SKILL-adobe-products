# Audio Issues, Playback Issues

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Search for clips without sound; Playback issues due to missing sound from all clips; Playback issues due to missing sound from some of the clips — Check for muted or low track volume; Enhance Speech is running slow; Timeline doesn’t show video preview; Not able to optimize playback performance; Hardware setup not optimal for playback performance; Audio playback keep getting stuck; Optimize playback performance for H.264 and H.265 media; Troubleshoot sequence and file-interpretation settings; Choppy playback and poor performance issue; Slow rendering and playback; Imports only audio in project bin; Premiere exports look washed out.

## Search for clips without sound

### Diagnose missing playback sound in Adobe Premiere on Windows or macOS.

To fix silent playback or preview in Adobe Premiere on Windows or macOS, first determine which clips lose audio during playback.

Create a color bars test clip with a 1-kHz tone so you can identify where playback audio is missing.

Start a new project.

In the Project panel, open the context menu in empty space and choose New Item > Bars and Tone.

After the New Bars and Tone dialog box opens, leave the default settings unchanged and select OK.

In the Project panel, double-click Bars and Tone. Bars and Tone opens in the Source Monitor.

Tip

If Bars and Tone does not open in the Source Monitor, drag the clip to the timeline.

Play the clip with the Play button in the Source Monitor, or start playback from the timeline. If the tone is not audible, continue with the instructions for the matching scenario:

- Sound is missing from all clips
- Sound is missing from some clips

## Playback issues due to missing sound from all clips

### Troubleshoot cases where every clip in every project has no audio.

### Choose a system default audio device and check its volume

Your computer may include several playback devices, such as an internal speaker, external speakers, or headphones. Make the preferred device the system default sound playback device, then verify that the volume is audible and unmuted.

### Windows

On the Start Taskbar, right click Volume Shape > Open Volume Mixer. Confirm that Premiere volume is not muted.

### macOS

Open a Premiere project that includes audio clips, video clips with audio, or a Bars and Tone clip.

Open Premiere > Preferences (Windows) and Settings (macOS) > Audio Hardware.

Under Output Mapping in the Adobe Desktop Audio settings, select the audio device you want. Alternatively, use the Settings button to open the Settings dialog box and select your default audio device.

Select OK.

Play a clip. If audio is still missing, return to Step 2 and test another audio device.

### Adjust the Audio Hardware driver settings in Premiere

### Windows

Open an Adobe Premiere project containing audio clips, video clips with audio, or a Bars And Tone clip.

Open Premiere Preferences and choose Audio Hardware.

In the Device Class dropdown menu, choose an ASIO driver if one appears; otherwise choose Premiere WDM Sound (Premiere CS6) or MME (Premiere).

Use the Default Output menu to enable the device you prefer.

Tip

For best results, enable the same device selected as the system default playback device in the related procedure.

Select OK to close the Preferences window.

Play a clip. If sound is still absent, go back to Step 2 and test a different driver.

Note

For related details, see Premiere audio drivers and audio hardware preferences.

### Update the driver for your sound card, or install an ASIO driver

### Windows

If the tasks above do not restore sound, the computer's sound card driver may be outdated. Sound card manufacturers often release driver updates. Ask the sound card manufacturer or the computer manufacturer for an updated driver, or download one from the manufacturer's website. After updating the driver, repeat the earlier solutions.

If an ASIO driver is not installed and one exists for your sound card, download and install the ASIO driver.

## Playback issues due to missing sound from some of the clips — Check for muted or low track volume

Use the Audio Mixer or Timeline panel to check whether an audio track is muted or set to a low level, and raise the volume when needed.

Open the Audio Mixer by choosing Window > Audio Clip Mixer > [Sequence Name] or Window > Audio Track Mixer > [Sequence Name], or inspect the box on the left side of the Timeline panel.

When the M next to any track is highlighted, that track is muted. Select M to turn sound on.

### Playback issues due to missing sound from some of the clips — Check for muted, low-volume, or disabled clips

Confirm that each individual clip is not muted and that its volume is not too low. See monitoring clip volume and pan using Audio Clip Mixer for more information.

Also check whether individual clips are disabled by using this method:

Select one or more clips in the Timeline panel, then choose Clip > Enable.

A check mark beside Enable means the selected clips are enabled.

In the Timeline panel, disabled clips are shown dimmed.

### Playback issues due to missing sound from some of the clips — Check for clips with incompatible codecs

If the previous steps are complete and sound is still missing, the affected clips may use an incompatible codec. Codecs compress audio and video data through algorithms, and many codec varieties exist. In some cases, Adobe Premiere cannot decode files made with a poorly designed codec or with a codec that is missing from the computer.

Third-party codecs are available from codec publishers' websites. When the clip codec is not available as a QuickTime component, use another application to transcode the media to a different audio-encoding format. Then bring the transcoded files into Adobe Premiere.

### Playback issues due to missing sound from some of the clips — Missing audio or video in the footage

Imported footage can sometimes arrive without audio or video. For additional help, see the no sound during playback issue.

## Enhance Speech is running slow

### Try this fix when Enhance Speech makes the system lag.

### Hardware is less than the recommended specification

Use the suggested hardware because it runs resource-intensive AI models efficiently.

Older hardware can process much slower than real time; for example, it may take 25 seconds to process a 5-second clip.

## Timeline doesn’t show video preview

### Remove Premiere preview files when the timeline no longer displays video.

Try clearing the preview files, then test whether the timeline preview returns. Premiere can remove rendered files for you, or you can open the saved-preview folder yourself and delete the files there.

Choose the sequence, then choose Sequence > Delete Render Files. Premiere may disable this command when that timeline has not been rendered.

Another route is File > Project Settings > Scratch Disks. Check the folders shown for Audio Previews and Video Previews. Open that folder in macOS Finder or Windows Explorer, then remove the preview files stored there.

After previews are removed, create them again manually with Sequence > Render In to Out when needed; otherwise playback can become uneven.

Note

When cache data is cleared, Premiere builds those cache files again the next time the project opens. During playback or preview, Premiere may take a while to respond normally while the cache and .pek files are rebuilt.

## Not able to optimize playback performance

### Troubleshoot lower Premiere playback performance by isolating applied effects and plug-ins.

### Checking for issues with applied effects

To determine whether an effect is causing the performance drop, temporarily turn off the audio or video effects used on a sequence so Premiere has less processing work. Turn those effects back on before export if they are needed in the finished output.

Use Global FX Mute in the Program Monitor when you want to silence every effect in one action.

Use the Button Editor in the Program Monitor as a fast way to mute all effects that are currently applied.

Use the Button Editor in the Program Monitor as a fast way to mute all effects that are currently applied.

The Effect Controls panel also lets you disable effects one at a time.

In Effect Controls panel, use the effects toggle when applied effects need to be switched off or on.

In Effect Controls panel, use the effects toggle when applied effects need to be switched off or on.

For more detail, see Remove audio or video effects in Premiere.

### Checking for issues with plug-ins

Inspect the MediaCore folder to confirm compatibility for installed plug-ins.

- Windows: C:\ProgramFiles\Adobe\Common\Plug-ins\7.0\MediaCore
  Use the matching platform folder for the plug-in check.
- macOS: Macintosh HD/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore

For testing, move the plug-ins out of that folder into another temporary folder, then check whether Premiere behaves correctly without the third-party plug-ins loaded. If that clears the problem, install updated plug-ins or ask the plug-in vendor for a compatible build.

## Hardware setup not optimal for playback performance

### Improve Premiere playback when the computer hardware setup is not well matched to the media.

In Premiere, open the System Compatibility Report through Help > System Compatibility Report and review any hardware compatibility warnings. You can also compare the computer against the Premiere System requirements page.

When the system cannot handle the media plus the applied effects in real time, playback performance can drop. In that situation, use the Proxy Workflow in Premiere so proxy media can stand in for native files, letting you switch between native and proxy formats and complete the edit more quickly.

## Audio playback keep getting stuck

### Correct audio playback failures that come from audio hardware setup problems.

Playback may fail after you press the play button. A common cause is an Audio Hardware setup that is not configured correctly.

### Configure audio preferences

Choose Edit > Preferences > Audio Hardware, then review the computer audio device and the Device Class setting used by Premiere for audio playback and recording: ASIO/MME on Windows OS or CoreAudio on macOS. For more detail, see Audio Hardware preferences.

Look for external audio devices under Default Input/Output and try turning them off. Examples include Webcam, external mic, USB MICs, monitor speakers, and third-party audio playback devices such as AJA or BlackMagic.

On Windows machines, open the Sound Control panel and try disabling every listed device except Realtek.

On macOS, build an aggregate device from the built-in input/output devices, then set that aggregate device as Default Input/Output in Premiere Audio Hardware preferences.

After the third-party audio interfaces and devices are turned off, test whether playback has returned.

## Optimize playback performance for H.264 and H.265 media

### Tune Premiere playback for H.264 and H.265 media.

Premiere can use Intel® Quick Sync. That feature relies on the dedicated media-processing functions in Intel® Graphics Technology to decode and encode H.264/H.265 media more quickly.

For H.264/H.265 media, switch on hardware-accelerated decoding or encoding to improve playback and reduce export duration.

To improve playback, enable hardware-accelerated decoding:

Open Edit > Preferences > Media.

Turn on Enable hardware accelerated decoding (requires restart).

Restart Premiere.

To reduce export duration, enable hardware accelerated encoding:

Choose File > Export > Media.

In the Format drop-down list, choose H.264 or HEVC (H.265).

On the Video tab, open Encoding Settings and set Performance to Hardware Encoding.

Note

Hardware-accelerated decoding or encoding requires an Intel® CPU that supports Intel® Quick Sync. For additional details, see the system requirements and GPU and GPU Driver requirements.

## Troubleshoot sequence and file-interpretation settings

### Resolve Adobe Premiere problems that appear while importing video files or playing imported video.

Work through the fixes in sequence. After each fix, test playback for the imported video files in Adobe Premiere. If the files still play incorrectly, continue to Troubleshoot file formats and codecs.

### Solution 1: Work in a sequence whose settings are appropriate for your imported files

Playback issues can happen when an imported file does not match the Adobe Premiere sequence settings you are editing in. For instance, widescreen files may look squeezed in a non-widescreen sequence, and high-definition footage may look soft inside a standard-definition sequence.

Basic file details help you choose suitable sequence settings. In the Project panel, right-click a file and choose Properties. The Properties window reports frame size as "Image Size", along with frame rate and pixel aspect ratio.

To make a sequence and pick its settings, use one of these methods:

Find the clip in the Project panel that should become the basis for a New Sequence.

Drop that clip onto the New Item icon at the bottom of the Project panel.

Premiere then creates a sequence automatically, with resolution and frame rate matched to the source footage. For sequence-setting guidance, refer to creating and changing sequences.

### Solution 2: Render previews of clips on the timeline

Rendered previews can make timeline playback smoother for imported video files already placed there.

To render timeline clip previews, select the timeline, then choose Sequence > Render Effects In to Out or Sequence > Render In to Out.

### Solution 3: Adjust the scaling, frame rate, pixel aspect ratio, or field settings

When Solutions 1 and 2 do not clear playback trouble, apply these extra corrections where they fit:

- When an imported video file is zoomed in or does not fill the frame, select the clip on the timeline. Choose Clip > Video Options > Scale To Frame Size.
- If an imported video file looks overly narrow or too wide, Premiere might be reading the file's pixel aspect ratio incorrectly. Use the Interpret Footage command to assign the correct pixel aspect ratio.
- When imported video plays too slowly or too quickly, Premiere may be reading the frame rate incorrectly. The same problem can show up as stuttered playback after previews are rendered. Use the Interpret Footage command to assign the correct frame rate.

Note

Video recorded at a low frame rate, about 15 frames per second or lower, will necessarily look stuttered during playback.

- If imported interlaced video shows jagged edges or thin horizontal lines ("combing") on moving subjects, Premiere might be using the wrong field order for that file. A wrong field order can also make the clip flicker. Use the Interpret Footage command to assign the correct field order. The Field Options dialog box also includes tools for fixing field-order problems.

### Solution 4: Transcode problematic video files

Use another application to transcode, or convert, video files that fail during import or playback in Premiere. Import the converted files after the transcode is complete.

The transcode can stay in the same format, such as converting a 3ivx-encoded AVI file to a DV-encoded AVI file. It can also change formats, such as converting an MPEG-2 file to an AVI file.

For best image quality during transcoding, select an uncompressed or low-compression output option in the transcoding application.

These Windows applications can transcode video files. Other transcoders exist and may fit a particular workflow better.

Disclaimer: Adobe does not support third-party software; this information is provided only as a courtesy. For help with third-party software, use publisher support resources.

- For AVI media, use VirtualDub or Microsoft Windows Movie Maker.
- For QuickTime (MOV) and MPEG-4 media, use Apple QuickTime Player for Windows with QuickTime Pro.
- For MPEG-2 and VOB media, use MPEG Streamclip or Apple QuickTime Player for Windows with QuickTime Pro and MPEG-2 Playback Component.

### Diagnose file formats and codecs

Video-recording hardware and video applications store encoded media in particular file formats, including AVI, QuickTime (MOV), and Windows Media (WMV).

Note

Some formats are not available on both macOS and Windows. For supported file-format details, refer to supported file formats for Premiere.

AVI and MOV are examples of video file formats that act as container file formats. Inside a container, the data is encoded with a specific codec. Codecs are compression algorithms for video and audio information, and many codec types are in use.

For example, an AVI file can use these codec types, among others:

- The DV codec, used by camcorders that record to miniDV tapes
- A commercial codec, such as DivX
- A Motion JPEG codec, used by some still-image cameras with "movie" modes

Premiere likely cannot decode files encoded by a poorly designed codec or by a codec that is missing from the computer.

When you know the file format, and the codec when relevant, it is easier to choose from the solutions below. Use one or more of these methods to collect that information:

- Open the file in Apple QuickTime Player and choose Window > Show Movie Inspector.
- For a file created by a camcorder, camera, or other video-recording device, consult the device documentation or look up the manufacturer's specifications online.
- Use a third-party media-analysis application to open the file, such as MediaInfo or GSpot 2.70.

### Notes about specific kinds of video files

MPEG-2 files use heavy compression. Render previews for MPEG-2 clips on the timeline to make playback smoother.

Imported MPEG-2 files do not all play correctly in Premiere CS4 because MPEG-2 encoding settings can differ widely. Convert troublesome MPEG-2 files first, then import the transcoded versions.

VOB ("video object") files - which are used on DVDs--are MPEG-2 variants. Premiere can import DVD-compliant VOB files. Trouble importing a native VOB file can indicate a problem in how that VOB was made, such as an issue with DVD ripping software. You may need to transcode the VOB files before importing the converted versions.

Many digital still-image cameras include "movie" modes that produce video files, often AVI or QuickTime files. Those files usually do not match the quality of video captured by digital camcorders. Many still-image cameras rely on proprietary compression codecs that do not follow professional video-editing standards.

When working with video from a still-image camera, check the camera documentation. You can also ask the manufacturer for information about the video files the camera creates.

If still-image camera files cannot be imported or played, a codec installation is probably needed. A Motion JPEG ("MJPEG") codec is common in video from many digital still cameras, and several publishers provide Motion JPEG codecs.

Note

Motion JPEG uses relatively light compression. Because of that, large Motion JPEG files in Premiere can cause slower-than-normal performance or low-memory warnings. Transcode Motion JPEG files to resolve those problems.

If files from a still-image camera do not use a special video codec and still cannot be imported or played, transcode them. Then import the transcoded files.

## Choppy playback and poor performance issue

### Use Media Cache and Media Cache Database maintenance to address choppy playback and weak performance.

Playback and performance problems often trace back to Media Cache and Media Cache Database. During a clip's first import into the Project bin, Premiere generates .CFA and .PEK files in Media Cache. Removing cache files can help resolve these problems.

Here is a short-term and long-term solution list for improving playback in Premiere.

### Delete the media cache files from within Premiere

Open Edit > Preferences > Media Cache (Windows), or on macOS open Premiere > Settings > Media Cache.

Click Delete beside Remove Media Cache Files.

### Delete Media Cache files manually (if you are unable to launch Premiere)

Open the Media Cache Files and Media Cache Database location, then delete the files manually. After deleting them, empty the trash. See managing the media cache database for guidance on freeing hard disk space by removing cached media.

Media cache files use these default locations:

- Windows: \Users<username>\AppData\Roaming\Adobe\Common
- macOS: /Users//Library/Application Support/Adobe/Common

When the media cache location has been customized, go to that custom folder and remove the media cache files there.

## Slow rendering and playback

### Change the renderer in Adobe Premiere to resolve slow rendering problems.

Choose File > Project Settings > General.

In Video Rendering and Playback, set the renderer to Mercury Playback Engine GPU Acceleration.

If Mercury Playback Engine GPU Acceleration is unavailable or greyed out, check whether updated GPU drivers are available.

## Imports only audio in project bin

### Troubleshoot cases where Adobe Premiere imports audio only and no video when footage is imported.

Premiere can bring in only audio without the matching video for multiple reasons.

### You are using a QuickTime (MOV) codec

Adobe has deprecated certain QuickTime 32-bit codecs. Check whether the codec in use appears in the list. If it does, transcode the files to a newer codec or format, then try importing the files again. If that codec does not appear in the listed document, use these instructions:

- Check the file source, such as whether it was downloaded from the internet, sent by another person, or recorded on a mobile device.
- Use Media Info to check file codec and format information.
- Choose File > Import. After the file is imported, open the View menu and choose Tree view.

### You are using MOV or MTS files

When a codec or container is absent from the supported file formats list, or an MTS item was not copied with the required folder structure, first convert the media to a supported format with any 3rd-party tool that can transcode video between formats.

If the media should already be supported and does not appear in the dropped support for QuickTime 7 era formats and codecs document, work through these checks:

Confirm that the drive or folder containing the files gives you both read and write permission on Windows or Mac.

Copy a single file to a different location, then try importing that copy.

Manually clear the media cache and restart the computer.

Open Media Browser and see whether the item is shown as an A/V file. If it is, import the item from Media Browser.

Open File > Project Settings > General and change Renderer to Software only.

Change the file extension from MOV to MP4 or from MTS to M2TS, then retry the import. If the import still fails, enable Activate Root user on MAC or Hidden Admin on Windows and import again. If that also fails, sign in through Safe mode on Windows or Safe mode in MAC and retry the files. This check also rules out third-party software that may be interfering with import.

If every step above fails, install the previous Premiere version again and try importing the media there.

## Premiere exports look washed out

### Fixing washed-out color after video export from Adobe Premiere

At times, an exported video does not match the look shown in the Program Monitor. People often describe the result as "too light" or "washed out".

The reason is tied to the way displays and playback software represent images.

Televisions, Windows computers, macOS computers, and individual viewer applications use gamma curves so screen brightness lines up more closely with human visual perception.

QuickTime gamma shift happens when the viewing device or application applies a different gamma curve. macOS uses a gamma curve of 1.96, Windows uses a gamma curve of 2.2, and broadcast video is standardized around a gamma curve of 2.4. Premiere displays video using the 2.4 broadcast standard.

Because of those gamma differences, footage that appears correct in Premiere can shift slightly after export when it is opened in a Windows viewer that applies the Windows 2.2 gamma curve.

The mismatch is more obvious on macOS. Premiere shows the image with a 2.4 gamma curve by default, while most other macOS applications display the exported file with the macOS 1.96 gamma curve, making the image look washed out.

Since the behavior comes from differences among operating systems and playback applications, there is no single simple fix. Premiere instead provides a control for choosing the gamma curve used for video display inside the application.

### Using the Viewer Gamma Feature

Viewer Gamma, located in Lumetri Color > Settings > Project, changes the way Premiere displays the video and offers these three gamma curve choices:

- 2.4 (Broadcast)
- 2.2 (Web)
- 1.96 (QuickTime)

Adjusting Viewer Gamma does not alter the exported file. It only changes the Premiere viewing preview, which helps you align what you see with what a customer is likely to see.

In older Premiere releases, some users applied an Adobe-created gamma compensation LUT at export time to handle QuickTime gamma shift. Viewer Gamma removes the need for that LUT-based workaround.

Note

In Premiere v25.2 and earlier, Viewer Gamma targets standard dynamic range (SDR) workflows. It supports Rec. 709, log, and raw media. With log and raw sources, it behaves correctly in a LUT-based workflow, but not when Lumetri Color > Settings > Project > Color Manage Auto Detected Log and Media is enabled. Viewer Gamma also depends on Lumetri Color > Settings > Sequence > Color Setup being set to Direct Rec. 709 (SDR) or Disable Color Management. A later Premiere release will provide an updated viewer gamma feature for more color management workflows.

### Grade for Your Audience

Because devices do not all use the same gamma curve, no single Viewer Gamma setting is automatically correct. Choose the setting based on the audience and delivery target.

- For web content: Grade with 2.2 gamma to improve compatibility across devices.
- For broadcast: Keep using the 2.4 gamma standard.
- For macOS desktop-only customer review: use 1.96 gamma.

### Best Practices

- Decide where the finished piece will be watched and what type of viewer will be used.
- For web content, a small contrast increase in Lumetri Color > Edit > Basic Correction > Light > Contrast can help offset varied viewing environments.
- Warn clients that display differences can change how color appears. Each device and application may interpret color information differently.
- "QuickTime gamma shift" is expected display behavior, not a bug. Knowing how the systems differ and using the available controls makes it easier to keep the intended creative look consistent across viewing scenarios.
