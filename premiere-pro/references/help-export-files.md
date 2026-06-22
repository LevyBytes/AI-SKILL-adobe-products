# Export Video, Export A Still Frame, Export A Still Image, Export Transcripts ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Export video; Export a still frame; Export a still image; Export transcripts; Export caption tracks; Export selected captions; Export text from Motion Graphics; Best practices for exporting video for social media and phones; Export videos for social media channels; Export a project as an EDL file; Export a project as a Final Cut Pro XML file; Export videos with Content Credentials; Export video and audio files; Export directly to Adobe Media Encoder; Export options in Premiere; Export OMF files for Pro Tools.

## Export video

### Export from Premiere and publish video directly to social platforms such as Facebook, TikTok, and YouTube.

Premiere can export videos quickly, including direct publishing through built-in presets tuned for social platforms. You can also create a local file or hand the export to Adobe Media Encoder.

Use Premiere export mode

Before you begin

Complete the edit first. Decide on export choices such as format, resolution, and other settings that control the final file. Make sure the destination disk has enough free space.

In the Timeline panel, select the sequence that should be exported.

Choose File > Export > Media, or press Ctrl + M (Windows) or command + M (macOS).

In the left column, pick where the video should go, such as YouTube, Vimeo, or your local drive (Media File).

From one panel, send the video to multiple social media destinations with the selected settings, file details, and destination choices.

A. Choose export destinations B. Access output settings C. Customize export preset

Use the same panel to prepare a video for multiple social platforms while controlling settings, file information, and the chosen destination.

In the Export Settings dialog box:

- Set the file name and location.
- Select a format. H.264 is recommended for most online videos.
- Pick a preset or adjust the settings yourself. For a fast, high-quality export, use the Match Source â€“ Adaptive High Bitrate preset. It matches sequence properties such as frame size and frame rate automatically, simplifying the setup.

Choose an export preset and organize the presets you mark as favorites.

Select a preset for export and manage favorite presets from the preset controls.

Use the Preview panel to review the video, scrub through the content, define a custom duration, and control framing when the export size does not match the sequence.

To render and save the video file inside Premiere, select Export.

To export through Adobe Media Encoder, select Send to Media Encoder. Premiere opens Media Encoder and creates an export job for each social media platform you selected.

### Exporting in Premiere (Video Tutorial)

This video tutorial covers exporting and delivering projects.

Additional training videos are available at AdobeVideoTraining.com.

## Export a still frame

Create a still image or freeze-frame export from a movie clip.

Before you begin

Add a clip to the sequence and identify the frame to save as an image. The Export Frame icon is hidden by default, but the Button Editor in the Monitor panel can add it.

Open your project in Premiere.

Move the playhead to the exact frame in the clip or sequence that should become the still image.

Choose the Export Frame icon in the Source Monitor or Program Monitor.

In the Export Frame dialog, provide a name, choose an image format, and choose a destination folder.

Keeping the default choices is also allowed.

Enable the Import into project checkbox if the exported frame should return to the project.

Select OK to export the still frame. Premiere writes the still frame to disk, imports it into the project, and highlights it in Lavender. The frame timecode is also added to the filename, for example, ClipName.00_14_23_00.Still001.jpg.

Select the still frame and place it on the editing timeline or sequence.

## Export a still image

Save video frames as still images quickly without going through Adobe Media Encoder.

Quick frame or thumbnail export

Before you begin

The Export Frame icon is not shown by default. Add it from the Button Editor in the Monitor panel when needed.

Open your project in Premiere.

From the Timeline, open the clip or sequence you plan to use.

Move the playhead onto the frame that should be exported.

Choose the Export Frame icon in the Source Monitor or Program Monitor.

In the Export Frame dialog, enter a name, pick an image format, and select a destination folder.

You may also leave the defaults in place.

Select Import into project checkbox to bring the image back into the project.

Select OK to export the still image.

By default, Premiere uses the source clip or sequence color bit depth as the color bit depth for the exported frame. The still image is then reimported into the project automatically.

Note

To create high-quality still images with format choices such as DPX, TIFF, TRG, and PNG, export the frame through Export mode (File menu > Export > Media) and clear Export As Sequence so only one frame is saved.

## Export transcripts

### Export transcripts from a timeline sequence or video project in multiple file formats.

Before you begin

Confirm that the timeline contains a sequence with transcribed audio. If the Text panel is not visible, open it.

Open your sequence in the timeline.

Open the Text panel.

Go to the Transcript tab > Ellipsis menu icon.

Choose Export and then the required file format. The available choices are:

- Export transcript: writes Premiere's native transcript format
- Export to text file: creates a plain text output file
- Export to CSV file: writes a comma-separated values output file

Create TXT, CSV, or SRT transcript output from the timeline sequence.

Use transcript export to create TXT, CSV, and SRT files from the timeline sequence.

Choose the save location and type a filename.

Select Save to write the transcript file.

## Export caption tracks

### In Adobe Premiere, export captions as burn-in, sidecar, or embedded output.

Select Export from the header bar at the top of Premiere to enter the Export workspace.

Choose caption export behavior according to your needs:

- Burn-in captions: If multiple caption tracks are enabled and captions are burned in, the active caption tracks in the timeline are displayed. During export, the captions appear under Captions > Caption Tracks.

Burn the track captions into the output regardless of format, because they are rendered directly onto the video file.

Render the selected track captions directly into the video file, regardless of caption format.

- All channels for CEA-608
- All channels for CEA-708
- Only one Caption Stream for OP-47

- Sidecar export with .scc extension: Because .scc supports only 608 tracks, the list includes only the sequence's available 608 tracks. If the timeline contains equal 608 streams, Premiere auto-selects them by stream count from the lowest track number to the highest. It does not select two equal streams at the same time.
- Sidecar export with .mcc extension: Because .mcc supports only 608 and 708 tracks, only available 608 or 708 tracks from the sequence are shown. If the timeline contains the same 608 and 708 streams, Premiere auto-selects them by stream count from the lowest track number to the highest. You can export all 608 and 708 tracks together.
- Sidecar export with .xml export extension: Because .xml supports only 608, 708, Teletext, EBU Subtitle, and Australian OP-47, Export settings offers a dropdown for choosing one supported track. This setup exports only one track at a time.
- Sidecar export with .stl export extension: Because .stl supports only Teletext, EBU Subtitle, and Australian OP-47, and it supports a single stream at a time, the caption track format lists all supported tracks present in the sequence. Choose one stream when exporting.
- Sidecar export with .srt export extension: Although .srt supports only one stream per file, it can handle several formats, including 608, 708, Teletext, EBU, Australian, and Subtitle.

Premiere automatically chooses the active timeline track as the default. When two or more tracks are enabled, it selects the enabled track with the lowest track number.

## Export selected captions

### Export captions from a timeline sequence as TXT, CSV, or SRT files.

Before you begin

Add captions to the sequence first, and make the Text panel visible if it is hidden.

Open your sequence in the timeline.

Open the Text panel.

Go to the Captions tab > Ellipsis menu icon.

Choose Ellipsis menu icon > Export.

Save timeline-sequence captions in TXT, CSV, or SRT formats.

Write the timeline captions out as TXT, CSV, or SRT files.

Pick Captions, then choose one output format:

- Export to text file: text-only output.
- Export to CSV file: comma-separated output.
- Export to SRT file: SubRip subtitle output that can be used as video captions.

Set the destination and type a filename.

Select Save to create a separate transcript file in the format you selected.

## Export text from Motion Graphics

### Export text from Motion Graphics templates as plain text or CSV.

Before you begin

Use a sequence that includes Motion Graphics templates with text, and show the Text panel if it is not open.

Open your sequence in the timeline.

Open the Text panel.

Go to the Graphics tab > Ellipsis menu icon.

Choose Export and the desired file format:

- Export to text file - plain text output. Export to CSV file - comma-separated values output.

Write the text from Motion Graphics templates to an external file.

Save Motion Graphics template text content into a file.

Choose the location and enter a filename.

Select Save to write the text content to a file.

## Best practices for exporting video for social media and phones

### Settings and techniques for better Premiere exports to social media platforms and mobile devices.

Use these straightforward practices to improve quality when you export media for the web.

### Tips for creating social videos

For web-bound video and audio, use these practices to keep playback smooth and quality high.

Category

Guideline

Know your audience's data rate

For internet delivery, choose lower data rates. Fast connections can stream with little trouble, while dial-up viewers wait longer, so shorter clips download sooner.

Choose the correct frame rate

Reducing frame rate can help when bandwidth is limited. Footage with heavy motion gains the most from that reduction. Use whole-number divisors when lowering the frame rate.

Optimize for quality

Use the largest frame size and highest frame rate supported by the platform. For suggested settings, consult the web and device-specific presets in Adobe Media Encoder.

Pick a suitable frame size

At the same data rate, larger frames reduce visual quality. Keep the source aspect ratio matched so issues such as pillarboxing do not appear.

Plan for download times

Estimate whether the clip can load and play without stopping. For short clips, use this formula: Pause equals download time - play time + 10% of play time.

Clean the video

Improve encoding by removing noise and interlacing. Source material that is clean and high quality gives the encoder better input.

Mind display quality

Small playback windows still need enough quality. Computers reveal problems such as noise or artifacts about as clearly as HDTVs.

Apply the same rules to audio

Begin with clean audio. Use digital transfers from CDs when available. Skip analog input unless needed, and choose high-quality sound cards for analog sources.

| --- | --- |

### Tips for creating videos for mobile devices

Use these shooting practices when preparing content for export to different mobile devices. Premiere can export a sequence for playback on multiple mobile-device targets.

- Frame subjects tightly and separate them visually from the background so small screens remain clear.
- Watch lighting carefully; dim or flat lighting can make mobile video difficult to see, so shoot for useful brightness and contrast.
- Keep panning and rolling under control, because too much movement can distract or disorient viewers on compact displays.

Use these editing practices in Premiere or After Effects.

- Choose the output frame rate for the target device. Lower frame rates, such as 15–22 fps, reduce file size while keeping quality usable.
- Reduce file size by cutting unneeded material, avoiding empty frames, and using pre-encoding habits such as stable camera work.
- In post-production, apply motion stabilization, blur, or noise reduction so the footage compresses more easily.
- Choose a color palette that works on mobile screens. Preview the video in Device Central to confirm that the colors hold up across devices.
- Check clips in grayscale to evaluate visual balance and confirm that contrast levels translate well during mobile playback.

## Export videos for social media channels

### Direct social-platform export from Premiere with optimized settings.

Before you begin

Complete the video sequence, then sign in to the social media accounts you plan to use.

Tip

Project templates for social media can help keep content inside safe zones. In the Preset drop-down menu, choose More presets... to locate presets recommended for your platform.

Use one interface to export videos and publish them to several social platforms.

Publish to multiple social platforms while exporting from the same panel.

Premiere includes social media integration for direct export and posting to Facebook, TikTok, YouTube, and other services.

Launch Premiere.

In the Timelines panel, select the sequence for export.

Select File > Export > Media to open the Export panel.

In the PUBLISH section of the Export panel, enable the social media platforms where the video should be published.

For every selected social media platform, fill in any required PUBLISH details, such as titles, descriptions, tags, or hashtags.

For direct Facebook publishing, sign in and provide the page, title, and description.

Facebook publishing requires sign-in plus the target page, title, and description.

Choose your export settings.

Recommended baseline: set Format to H.264 and Preset to Match Source - Adaptive High Bitrate.

In the Video section, you can adjust export settings such as file format, frame size, and bit rate to improve upload speed and playback quality.

Select Export.

Premiere exports the video and publishes it automatically to each chosen social media platform with the proper specifications. After a successful upload, you can delete the rendered file.

## Export a project as an EDL file

### Export a Premiere project as an Edit Decision List (EDL) for exchange with other editing systems.

Keep these points in mind when working with EDL files:

- EDLs are most reliable with straightforward projects, preferably one video track, two stereo audio tracks, and no nested sequences. Common items such as transitions, frame holds, and speed changes usually translate well.
- Before editing starts, capture and log all footage with accurate timecode. The capture device, such as a capture card or FireWire port, must support timecode-based control.
- Give every videotape its own reel number and time-code it before filming begins.
- During EDL export, each clip receives a comment containing its name as shown in the timeline. Click the wrench icon in the Timeline panel, then toggle Show Source Clip Name and Label to choose whether the source clip name or timeline name appears.

Open the project you want to export.

Click inside the Timelines panel to make it active.

Go to File > Export > EDL.

In the EDL Export Settings (CMX 3600) dialog box, choose the video and audio tracks to include.

Enable the 32-character names option when clip or tape names are longer than eight characters.

Select OK.

Configure the sequence and export it as a CMX 3600 EDL file for handoff to other editing systems.

Create a CMX 3600 EDL file with your chosen sequence settings for use in another editing system.

Specify where the EDL file should be saved and what it should be called.

Select Save to finish the export.

Note

Standard EDLs can use merged clips, but the receiving app will not show them as merged. Video and audio arrive as separate clips with their original timecodes, and EDLs handle them the same way as any paired audio and video occupying the same timeline position.

## Export a project as a Final Cut Pro XML file

### Export a Premiere project as a Final Cut Pro XML file for Final Cut Pro 7, compatible tools, or other editing systems.

Before you begin

Save the project and confirm that all media is linked. Only a limited set of Premiere effects and features transfers to Final Cut Pro.

With the project open in Premiere, continue to the export command.

Use File > Export > Final Cut Pro XML.

In the Save Converted Sequence As – Final Cut Pro XML window, choose a location and filename.

Select Save to export the sequence as an XML file.

Review the FCP Translation Results log file in that same location for conversion issues.

Final Cut Pro 7 or earlier can open the XML file directly; for Final Cut Pro X, use a third-party utility such as XtoCC.

Final Cut Pro receives merged clips as nested sequences. Audio pan, gain, and level changes may not carry over precisely, and complex effects or transitions may translate differently.

## Export videos with Content Credentials

### Add Content Credentials while exporting videos in Adobe Premiere.

Content Credentials let creators attach extra details to content during export or download. Sharing those details can increase recognition, make online connections easier, and give audiences more transparency.

At export or download, Content Credentials add a dedicated tamper-evident metadata set to the content. The Content Credential travels with its related content so viewers can see the media and its context together.

As content moves through editing or processing stages, it can collect more than one Content Credential. That accumulated record forms a version history that people can inspect when making trust decisions about the content.

Content Credentials provide a simple way to share content with transparency. Supplying more about your identity and creative process can strengthen viewer trust and credibility, and it can also help reduce online misinformation and disinformation.

By attaching identity and contact details through Content Credentials, you give people additional ways to find and contact you when they encounter your work online.

### Exporting Content Credentials

When a Premiere sequence includes one or more Adobe AI-generated assets, exporting directly from Premiere or through Media Encoder prompts both applications to indicate that Content Credentials will be included for supported formats. Supported formats include:

- MP4
- QuickTime MOV
- AVI
- WAV
- MP3
- JPEG
- PNG
- TIFF

Choose a sequence containing AI-generated assets from apps including Adobe Express, Photoshop, Illustrator, or Firefly.

Use File > Export > Media. Keyboard shortcut alternative: command (macOS) or Ctrl (Windows) + M, which opens Export mode.

The Content Credentials stamp appears under Output and Output Preview in the Export window.

Use the available verification location to check exported files that include Content Credentials.

AI-generated media exports include Content Credentials metadata automatically.

Premiere adds Content Credentials metadata automatically when AI-generated media is exported. Tip

To export with Adobe Media Encoder, add a file or Premiere sequence that has Content Credentials to the Queue. Select Export Settings > Send to Media Encoder.

## Export video and audio files

### Export a finished sequence or audio file from Adobe Premiere as delivery-ready video or audio.

Choose the timeline or source clip for export.

Use File > Export > Media.

In Settings, pick the appropriate Format; for example, use H.264 for MP4 or QuickTime for MOV, then choose a Preset such as Match Source – Adaptive High Bitrate.

Before finalizing the video or audio file, use Export mode to set the format, preset, and output location.

Use Export mode to confirm the format, preset, and destination before creating the final video or audio file.

Under the Video tab, verify Frame Size, Frame Rate, Field Order, and Aspect.

Under Audio, verify the channel layout, sample rate, and bit rate, then adjust as delivery requirements demand, such as stereo or multichannel audio, 48 kHz, or appropriate kbps.

Select Export to render immediately in Premiere, or select Send to Adobe Media Encoder to render in the background, which is recommended for longer jobs or when you want to keep working. You can also monitor and manage queued jobs in Media Encoder.

## Export directly to Adobe Media Encoder

### Send a sequence or clip to Adobe Media Encoder and keep working in Adobe Premiere.

Adobe Media Encoder can queue several exports, apply custom presets, and render files without stopping your editing work. Directly sending a sequence to Media Encoder is useful for long exports or for creating multiple delivery versions.

In the Timeline or Project panel, select the sequence or clip to export.

Media Encoder export is available in these ways:

- From Export mode, use the Send to Media Encoder button for a clip or sequence handoff to Media Encoder.
- For a direct clip or sequence handoff to Media Encoder, choose File > Export > Send to Adobe Media Encoder.

For multiple or lengthy exports, send the timeline to Adobe Media Encoder from the Export menu.

Use the Export menu to hand off the timeline to Adobe Media Encoder when preparing several exports or a long render.

If you are in Export mode, choose the desired Format and Preset, confirm output settings such as file name and location, and then select Send to Media Encoder.

Adobe Media Encoder starts automatically and places the export in the queue as a new job.

Note

When jobs are sent to the Media Encoder queue, H.264 Match Source - Adaptive High Bitrate is the default export preset. If the sequence or clip was opened previously in Export mode or Quick Export, the most recent export setting is used instead.

You can choose another preset in Media Encoder or adjust export settings in the Export Settings dialog box before exporting.

## Export options in Premiere

### Additional export options in Adobe Premiere for files, sharing, and cross-application workflows.

### Export files for further editing

Premiere can create movie or audio files for opening in other editing, finishing, or effects applications. Those exports include rendered effects and transitions, so you can preview or continue work elsewhere without rendering again. For workflows that need one frame per file, export a still-image sequence; for titles, graphics, or external design applications, export a single still image from any timeline frame.

Direct and Adobe Media Encoder export

Premiere provides both direct export and Adobe Media Encoder export. Direct export creates files immediately inside Premiere, generating new media without leaving the application.

With Adobe Media Encoder export, Premiere sends the asset to the Media Encoder queue, allowing editing to continue while rendering happens. Media Encoder also supports managing multiple exports, changing settings separately, and deciding whether to render right away or place items in a render queue.

### Export project files for other systems

Project files can be exported for use in other editing environments, not only rendered media. Premiere can export to AAF, which third-party editing systems can import for collaboration or finishing. When preparing archives or long-term storage, you can also trim projects down to essential content, with or without source media.

### Export formats for different devices and websites

Adobe Media Encoder supports video export formats tailored to many devices, delivery platforms, and websites. Its presets cover mobile devices, broadcast formats, and online platforms, while custom export controls let you fine-tune resolution, bitrate, and compatibility requirements.

## Export OMF files for Pro Tools

### Export OMF files to move audio from Adobe Premiere into Pro Tools for final editing.

The OMF format carries clip-based audio, keyframes, transitions, and metadata from a sequence into Pro Tools. Depending on the post-production workflow, an OMF export can contain full audio files or trimmed segments with handles.

Note

OMF files exported from Premiere are officially supported only for ProTools. Premiere does not import OMF files.

In the Timeline, choose the sequence for export.

Select File > Export > OMF to open the OMF Export Settings dialog.

Use the OMF Export Settings dialog to adjust audio options before handing the sequence to Pro Tools.

Prepare the sequence for Pro Tools by customizing audio settings in the OMF Export Settings dialog.

In OMF Title, enter a name, then choose the Sample Rate and Bits Per Sample needed for the Pro Tools session.

Under Files, choose Embedded Audio to place all audio in one OMF file, or Separate Audio to write individual audio files to a folder.

Under Render, choose Copy Complete Audio Files when full clips are needed, or choose Trim Audio Files to include only used portions and set the desired number of Handle Frames.

Select OK, then save the OMF file.

To finish session setup, open Pro Tools and import the OMF with DigiTranslator.
