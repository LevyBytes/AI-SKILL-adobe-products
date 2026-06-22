# Edit With Generative Ai, Edit Nested Sequences

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generative Extend overview; Add frames using Generative Extend; Generative Extend FAQ; User data storage for model output feedback; About nested sequences; Nest a sequence in another sequence; Reveal a clip in a nested source sequence.

## Generative Extend overview

### Adobe Firefly generative AI in Adobe Premiere can extend clips for transitions, reaction holds, audio cues, and missing ambient sound.

Generative Extend, powered by Adobe Firefly, gives editors a way to add a small number of frames when a story needs more timing room. Click and drag to add frames at the beginning or end of a video or audio clip, whether the goal is holding a character reaction for another beat, smoothing a transition, lengthening background sound, or covering unwanted camera movement. Generative Extend requires an internet connection because it uses a cloud AI model.

### Current media requirements

### Video source requirements

The following requirements apply to source media.

### Resolution for Video Source Media:

For 16:9 Aspect Ratio (Landscape/Standard), use these limits:

- Minimum resolution: 640×360 (360p).
- Maximum resolution: 3840×2160 (4K UHD) or 4096×2160 (4K Cinema).
- Native AI Model resolutions: 1280×720, 1920×1080, 3840×2160, 4096×2160.

For portrait and vertical media, use this separate set:

For 9:16 Aspect Ratio (Portrait/Vertical), use these limits:

- Minimum resolution: 360×640 (360p portrait).
- Maximum resolution: 2160×3840 (4K portrait) or 2160×4096 (4K Cinema portrait).
- Native AI Model resolutions: 720×1280, 1080×1920, 2160×3840, 2160×4096.

If a clip's resolution is not one of the natively supported resolutions, the extension is generated at the closest higher supported resolution. The original clip is not modified.

### Video Source Media Frame Rate and Bit Depth:

- Frame Rate: source clips may run at 12-60 fps; Premiere generates any extension above 30 fps at 30 fps.
- Bit Depth: acceptable sources include 8-bit, 10-bit, or 16-bit, while extensions are generated in 8-bit.
- Color Space: source clips may be SDR or HDR, but extensions are generated in SDR.
- The original clip remains in its native format and is not changed.

### Audio

- Generative Extend does not create or extend spoken dialog. During extension, existing dialog is muted so the original speech content remains intact.
- Because musical structures are complex and copyright concerns may apply, clips that contain music are not eligible for extension.
- At this time, audio support is limited to mono and stereo. Surround sound and 5.1 audio formats do not work with Generative Extend.

Alert

Generative Extend is currently unavailable to some users under these conditions:

- Generative Extend uses Adobe Firefly, which is unavailable in Russia, Belarus, and China. Users in those countries cannot access the feature.
- Users in K-12 and educational organizations may have limited access to Generative Extend or no access at all.
- Some enterprise users, especially users with a CCE v3 license, do not have Firefly services enabled. They cannot access Generative Extend.

### Managing generated content

Using Generative Extend produces a new clip in the Project panel by joining the AI-generated media with the original clip. Premiere saves each extension as an H264 MP4 or .wav file on the Captured and Generated scratch disk chosen for the project. To choose that storage target, open Project Settings > Scratch Disks. From there, set another destination for generated media so storage can match the workflow and available disk space.

### Ongoing development and limitations

For video editors, Generative Extend represents Adobe's first generative AI feature built directly into editing software. The feature addresses a common edit-timing problem for many users, but it is still an early step. Adobe recognizes that many production pipelines need stronger quality and reliable turnover workflows. Over the coming months, Generative Extend support is planned to cover more media types, including additional formats and color space handling. Adobe is also reviewing advanced workflows so projects can move to other creatives more smoothly.

This release also has known limitations with these features:

- Generative Extend applies only at the start or the end of a clip, not to both sides of the same clip.
- Speech to Text transcription, Text-Based Editing, and Captioning
- Media Intelligence
- Markers
- Modify clip properties (Audio Channels, Color, Interpret Footage, Timecode) and speed adjustments
- Timecode and user-entered metadata
- Interchange formats (XML, AAF, EDL, OMF)
- Replace with After Effects Composition and Edit in Audition workflows
- Multicam Source Sequences
- Productions

### Privacy and data usage

Adobe does not train its AI model with your media. The clip is used only to generate the extension you requested, which keeps the content private and under your control. See the generative AI commitments for more information.

## Add frames using Generative Extend

### Add extra frames to video and audio clips with Generative Extend so edits can hold timing, transitions, or ambience more naturally.

Powered by Adobe Firefly, the Generative Extend tool helps editors add a few frames when a story needs a little more room. Click and drag at the start or end of a video or audio clip to extend it, whether the goal is to linger on a reaction, smooth a transition, continue background sound, or cover an unwanted camera move. Because Generative Extend uses a cloud AI model, internet access is required.

Choose a sequence clip that needs an extension. Video source clips must be at least 2 seconds long, and audio source clips must be at least 3 seconds long.

In the Toolbar, choose the Generative Extend Tool.

Drag the edge of the video or audio clip until it reaches the length you want.

Premiere generates the extra frames and places them into the sequence.

The sequence receives the additional generated frames from Generative Extend.

AI-generated frames are marked with a label. To request another version, right-click the AI-generated label and choose Regenerate.

To swap the generated frames back to the source media later, right-click the AI-generated label and choose Revert to Original. If the original media is still in the project, you can also unlink audio and video and restore either part separately.

Caution

In some cases, Revert to Original is unavailable and appears greyed out.

Note

The maximum extension is 2 seconds for video clips and 10 seconds for audio clips.

## Generative Extend FAQ

### FAQ details for using Generative Extend in Adobe Premiere.

### Video

These limits are checked against the original media file.

### Video source media resolution details:

- 16:9 Aspect Ratio (Landscape/Standard):
- Minimum: 640×360 (360p)
- Maximum: 3840×2160 (4K UHD) or 4096×2160 (4K Cinema)
- Native resolutions supported by AI Model: 1280×720, 1920×1080, 3840×2160, 4096×2160
- 9:16 Aspect Ratio (Portrait/Vertical):
- Minimum: 360×640 (360p portrait)
- Maximum: 2160×3840 (4K portrait) or 2160×4096 (4K Cinema portrait)
- Native resolutions supported by AI Model: 720×1280, 1080×1920, 2160×3840, 2160×4096

If the clip resolution is not one of the native sizes, Generative Extend creates the extension at the closest supported resolution above it. The original clip is not changed.

### Video Source Media Frame Rate and Bit Depth details:

- 12-60 fps
- Bit Depth: source clips may use 8-bit, 10-bit, or 16-bit, while extensions are made as 8-bit when the sequence is configured for 8-bit
- Color Space: source clips may be SDR or HDR, while extensions are made as SDR when the sequence is configured for SDR
- The original clip keeps its native bit depth and color space

### Audio

- Generative Extend cannot create spoken dialog or extend it. When an extension is generated, existing dialog is muted so the original speech content stays intact.
- Because music can involve complex structures and copyright issues, audio clips that contain music are not eligible for extension.
- At this time, Generative Extend supports only mono and stereo audio. Surround sound and 5.1 audio formats are not compatible.

Generative Extend can add up to 2 seconds to video clips and up to 10 seconds to audio clips.

Note

Some users currently cannot access Generative Extend in these situations:

- Generative Extend relies on Adobe Firefly, which is not available in Russia, Belarus, and China. Users located in those countries cannot use the feature.
- Users in K-12 and educational organizations may have limited access to Generative Extend or no access.
- Certain enterprise accounts, especially accounts with a CCE v3 license, do not have Firefly services enabled. Those users cannot access Generative Extend.

This dialog is shown when the clip resolution is not one of the native resolutions supported by the Generative Extend AI model.

Choosing Continue creates the extension at the next supported resolution above the source. The original clip remains unmodified.

The Generative Extend model natively supports these resolutions:

- 16:9 Aspect Ratio (Landscape/Standard): 1280×720, 1920×1080, 3840×2160, 4096×2160
- 9:16 Aspect Ratio (Portrait/Vertical): 720×1280, 1080×1920, 2160×3840, 2160×4096

When the clip framerate is above 30 fps, this dialog appears. The Generative Extend model creates native extensions in the 12-30 fps range.

Choosing Continue makes a 30 fps extension. The original clip stays unchanged.

This dialog appears when the clip bit depth is higher than the native support in the Generative Extend AI model. Extensions from the AI Model are generated in 8-bit format.

Choosing Continue makes the extension in 8-bit format. The source clip is left unchanged.

This dialog appears when multiple clip specifications, such as resolution, framerate, bit depth, and/or dynamic range, are not compatible with formats supported by Generative Extend.

Choosing Continue generates the extension with the nearest compatible format supported by the AI model. The original clip remains unchanged.

HDR (High Dynamic Range) media usually uses 10-bit or higher bit depths to represent wider color ranges and brighter luminance values. You can apply Generative Extend to HDR media when the sequence is set to SDR, but the extended segment has these characteristics:

- The extended color range (wide color gamut) is lost.
- Dynamic range information is compressed.
- The generated extension uses standard dynamic range (SDR).
- Color and brightness may not match perfectly.

The right choice depends on the project and the final delivery destination.

Extend if:

- The content is intended for web, social media, or standard broadcast.
- Precise color is not essential for the project.
- Check your output requirements: if the final delivery is 8-bit, this conversion does not affect the end result.

Consider alternatives if:

- The project is being professionally color graded.
- The clip contains critical color work that must not be compromised.

Quick decision check: when final delivery is already 8-bit, which covers 90% of content, this conversion does not change the result.

Bit depth controls the number of colors a video can represent. Higher values, such as 10-bit or 16-bit, allow finer color gradations and are common in professional video work. 8-bit is the usual standard for web and consumer video.

The original clip keeps its original bit depth, but the AI-generated extension is created in 8-bit. Smooth gradients in the extended section, such as sunsets or skin tones, may therefore show color banding.

In Adobe's broad testing, many clip types have worked, including humans, animals, landscapes, and other subjects. The strongest video results tend to come from shots with limited contextual change, such as fast-sweeping camera movement. Audio with steady noise or ambience also tends to perform well.

Current weaker cases include archival footage with heavy film grain or other noise. Adobe welcomes feedback to learn more.

For video, Generative Extend can add as much as 2 seconds; for audio, it can add as much as 10 seconds. In practice, video clips can receive up to 2 additional seconds, while room tone or background audio can be stretched for up to 10 seconds.

In Premiere, Generative Extend is a generative AI feature. Credit use varies by video resolution and frame rate. The generative credits FAQ has more information about generative credits.

Creative Cloud membership includes assistive AI features in Premiere, such as Caption Translation, Enhance Speech, Speech to Text, and more.

Generative Extend is mainly intended for raw footage that was shot in camera, although it can technically operate on clips containing text overlays or graphics. That is outside its intended use and may create interesting or unexpected results.

Yes, slow-motion and time-lapse footage can be used with Generative Extend.

Generative Extend analyzes camera movement in the source clip and tries to continue that movement through the generated section. For a pan, tilt, zoom, or other camera move, the AI attempts to extend the motion naturally.

Generated extensions are written to the project settings location named Captured and Generated, using H264 MP4 or .wav output. To change that location, open Project Settings > Scratch Disks. There you can choose another destination for generated media so storage fits the workflow and available space.

Whenever you need to replace AI-generated frames with source media, right-click the AI-generated label and choose Revert to Original. You can also Unlink the audio and video, then revert either one separately to the original media if that media still exists in the project.

No, dialogue is not extended. During extension, dialogue is muted. Generative Extend extends only room tone, sound effects, and background audio, which preserves the original dialogue while allowing ambient audio to continue smoothly.

Generative Extend sends a short part of the clip, usually between 1.5 - 3 seconds, to a cloud AI model. After analyzing that segment, the AI creates an extension from it. The tool returns the AI-generated extension as a new clip for use in the project, while the original media remains untouched.

No, Adobe's AI model is not trained on your media. Generative Extend uses the clip only to make the extension you requested, without using it to improve the AI. See the generative AI commitments for more information.

If the result is not what you want, you can generate the extension again. Right-click the AI-generated label and choose Regenerate to make a new variation. Repeat that action as needed until the outcome works. Adobe also asks for feedback on whether the result is good or bad, since that input helps improve the tool and better match user needs over time.

Yes, Generative Extend can create multiple variations. This lets you compare different possibilities for the extended content. To make another version, right-click the AI-generated label and choose Regenerate. The process can be repeated to create several distinct extensions, giving the project more creative options.

Right-click the AI label and choose Good result or Bad result. In the dialog box, provide the reason the output was good or bad. That direct feedback helps Adobe refine the tool and understand user needs more clearly. It is a fast way to share the experience and suggest improvements from inside the software.

If Revert to Original is greyed out, review these conditions:

- Original media exists in your project: confirm that the original master clip used for the extension is still available in the project. If the source media was deleted or removed, revert is not possible.
- No active generation in progress: confirm that Generative Extend is not currently processing this master clip. Let any active generation finish before trying to revert.
  - Use Unlink so the video and audio tracks are separated.
  - Run Revert to Original on each track separately.

## User data storage for model output feedback

### Details on what Generative Extend can do in Adobe Premiere and how Premiere manages generated content.

### Privacy and Data Usage

When feedback is submitted for generated media, Premiere uploads and stores that generated media together with the feedback.

After an extension is created, right-click the AI label and choose Good Output or Poor Output to explain why the result worked well or needed improvement.

If "Also include 3 seconds reference media with your feedback" is checked, Premiere also uploads a low-resolution, 3-second snippet from the original media used for that extension. Adobe does not train its AI model with your media. The media is used only to make the requested extension, keeping the content private and under your control. See the generative AI commitments for more information.

## About nested sequences

### Manage several edits as a single clip in Adobe Premiere to keep timelines simpler and support advanced effects.

A nested sequence is one sequence placed inside another. It can be used to construct complex edits and layered structures. Although the source can contain multiple tracks with different timebases, frame sizes, or pixel aspect ratios, every nested sequence appears as one linked video or audio clip.

Nested sequences can be moved, trimmed, and given effects the same way as other clips. Edits made in the source sequence update automatically across every nested instance.

### Why use nested sequences

Nesting sequences can save time and make multi-layered edits easier to manage. It also gives more creative control when transitions and effects are applied.

- Reuse sequences efficiently: build a complex sequence one time, then use it again in multiple projects or timelines without rebuilding it.
- Apply different looks: place different effects on separate instances of a nested sequence while the underlying content remains the same.
- Simplify your workspace: turn several layered tracks into one nested clip, helping keep the timeline clean and lowering the chance of accidental edits.
- Build advanced effects: use nested sequences to create transitions within transitions or picture-in-picture effects, with each nested sequence carrying its own clips, transitions, and effects.

### Things to remember when nesting sequences

- Do not nest a sequence inside itself or inside a sequence that includes a 16-channel audio track.
- Processing can take longer because every nested instance points back to multiple clips.
- Changes in the source sequence appear in all nested versions, but the duration does not change.
- The initial duration counts empty space at the beginning of the source, not empty space at the end.
- Set In and Out points when needed. Trimming changes only the nested clip, not the source.
- If the source sequence becomes shorter, the nested clip may show black video or silent audio; trim that section if needed.

## Nest a sequence in another sequence

### Add an existing sequence to another sequence in Adobe Premiere for more efficient edit organization and management.

In the Project panel or Source Monitor, select the sequence to add.

Drag the sequence into the active timeline and place it on the video or audio track you want.

Drop the sequence at the target position on the timeline to finish nesting it.

Premiere removes the selected clips from the sequence, moves them into a new sequence, and nests that new sequence in the original sequence starting at the first selected clip.

Note

Audio does not need to be rendered before you edit a nested sequence, because Premiere processes it automatically.

### Open a nested source sequence

In the Timeline panel, double-click the nested sequence clip that needs editing.

The nested source opens as the active timeline sequence, replacing the current view so you can edit clips, effects, or structure.

View and edit the source sequence.

## Reveal a clip in a nested source sequence

### Find and edit a clip inside a nested sequence in Adobe Premiere so updates stay consistent across every instance.

Open the Timeline panel.

Click the track header for the track that contains the nested sequence. If multiple tracks are targeted, Premiere uses the uppermost targeted track.

Set the playhead on the nested-sequence frame that should be revealed.

Press Ctrl + Shift + F (Windows) or Shift + T (macOS); Premiere opens the source sequence in the Timeline panel and positions the playhead on that frame.

At the playhead position, double-click the clip to open it in the Source Monitor for editing.

Premiere now shows the source sequence in the Timeline panel and loads the clip in the Source Monitor for editing. Any source-clip changes update everywhere that nested sequence is used.
