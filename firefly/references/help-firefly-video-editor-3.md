# Generate Videos, Create Quick Cut, Generate Audio

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generate videos using Firefly models; Generate videos using Google’s Veo video generation models; Generate videos using Luma AI video generation models; Generate videos using OpenAI video generation models; Generate videos using Runway video generation models; Generate videos using Kling video generation model; Quick Cut overview; Create video quick cuts; Writing effective text prompts for quick cut; Generate Sound effects.

## Generate videos using Firefly models

### Use Firefly Video model to create videos and place them on the Firefly video editor timeline.

In Firefly video editor (beta), generation can happen inside the editor, so you stay in the same workspace while making new clips. The built-in Firefly Video model exposes generation settings whose outputs can be placed immediately on the timeline, making style exploration and idea testing part of the edit session.

Start on the Firefly homepage: in the left panel, choose Create, then choose Edit video (beta).

Open an existing project, or make a new one so a timeline is available.

Choose the Generate media icon in the right panel; if Video is not active, choose Video.

Under General settings, open the Model dropdown menu and choose Firefly Video.

Add text that describes the video you want to make.

Type a prompt explaining the video to generate.

Provide the prompt text for the video generation.

Choose the resolution and aspect ratio for the generated clip.

Set the resolution and aspect ratio you want for the generated video.

Use the preferred resolution and aspect ratio for the new video.

Note

Generated videos use default settings of 24 frames per second (FPS) and 5 seconds.

To steer the video's visual path with images, upload a first keyframe, a last keyframe, or both in Frames. Firefly Video uses those images as visual guides so the result starts, ends, or both with the uploaded frames.

Use uploaded keyframes to guide the start, end, or both ends of the video.

Use keyframe images to define the beginning, ending, or both.

To use the image at the timeline playhead, go to Frames, choose First or Last, then choose Current Frame.

Note

When a First or Last frame is supplied, Firefly automatically turns off some controls: Reference in Composition setting, Motion reference, Shot size, Camera angle in Camera settings, and Style setting.

To use a video as a composition reference, open Reference under Composition and choose Upload video. Firefly combines that video with the prompt so the generated clip follows the reference layout while reflecting the prompt.

Upload a reference to steer the composition of the generated video.

Use a reference upload when the generated video should follow a particular composition.

You can also define camera behavior with these generation settings:

- Motion reference: aligns camera movement in the generated video to the uploaded reference video.
- Shot size: controls how much of the subject or scene appears inside the frame.
- Camera angle: sets the viewpoint from which the camera looks at the subject.
- Motion: describes camera movement during the shot.

Set shot size, angle, and motion to tune the camera behavior in the generated video.

Use shot size, angle, and motion controls to adjust camera behavior for the generated video.

Under Style, choose a style preset when the video needs a specific visual identity.

Use presets when you want to quickly stylize the video's appearance.

Apply a preset for a quick visual style change.

Note

Choosing a style turns off start and end frame controls in Frames.

In Advanced settings, Seed lets you enter a seed number that initializes generation and affects AI randomness. Reusing the same seed with the same prompt and control settings can produce similar video clips.

Choose Generate.

The output appears in Generation history panel, and you can drag it onto the timeline.

## Generate videos using Google’s Veo video generation models

Use Google's Veo models to produce videos directly inside Firefly video editor.

Firefly video editor offers Google Veo choices including Veo 2, Veo 3.1, and Veo 3.1 Fast. These models are built for high-quality output, stronger visual fidelity, and quick iteration.

Start on the Firefly homepage: in the left panel, choose Create, then choose Edit video (beta).

Open an existing project, or create a new one so a timeline is available.

Choose the Generate media icon in the right panel; if Video is not active, choose Video.

Choose the Generate icon to display the Generate media panel.

Use the Generate icon again if needed to bring up the Generate media panel.

Write a detailed video-generation description in the prompt box.

Under General settings, open the Model dropdown menu and choose Veo 2, Veo 3.1, or Veo 3.1 Fast.

Use the Resolution dropdown menu to choose 1080p or 720p.

Set Aspect ratio to Vertical (9:16) or Widescreen (16:9).

Set Duration to 4 seconds, 6 seconds, or 8 seconds.

With Veo 3.1 and Veo 3.1 Fast, turn on the Audio toggle to create synchronized sounds or music for the video.

With Veo 2, set First in Frames and choose an image file to use as the starting frame.

Tip

After choosing First, Current frame uses the frame under the playhead as the generated video's starting frame. For best results, use first-frame images that visually fit the action described in your prompt.

In Advanced settings, Seed lets you enter a seed number that initializes generation and affects AI randomness. Reusing the same seed with the same prompt and control settings can produce similar video clips.

Choose Generate to create the video.

Move the generated clip from Generation history panel to the timeline.

The clip then becomes project media, available for editing, trimming, or combining with other timeline clips.

## Generate videos using Luma AI video generation models

Generate video with Luma AI video models in Firefly video editor, then place the result on the timeline.

In Firefly video editor, Luma AI models including Ray2, Ray3, Ray3 HDR, Ray3.14, and Ray3 HDR provide different quality and performance profiles for video generation. Each model offers its own way to turn prompts and images into video content.

Start on the Firefly homepage: in the left panel, choose Create, then choose Edit video (beta).

Open an existing project, or create a new one so a timeline is available.

Choose the Generate media icon in the right panel; if Video is not active, choose Video.

In the prompt box, write a descriptive prompt for the result you want.

In General settings, set Model to a Luma AI option: Ray2, Ray3, Ray3 HDR, or Ray3.14.

Open the Resolution dropdown menu and choose from these options:

- Ray2: 540p, 720p, and 1080p.
- Ray3 and Ray3 HDR: 360p, 540p, 720p, 1080p, and 4k.
- Ray3.14: 720p, 1080p, and 4k.

Choose the resolution you prefer for the video to generate.

Set the resolution option you want for the new video.

To include a first frame in the generation, go to Frame, choose First, and upload an image.

When Ray2 is selected as the model, a last-frame image can also be added. To add one, choose Last under Frames.

Tip

After choosing First or Last, Current frame uses the playhead frame as the generated video's start or end frame. For best results, use first-frame and last-frame images that visually fit the action or transition described in your prompt.

Aspect ratio choices include:

- Ultra Wide (21:9)
- Widescreen (16:9)
- Landscape (4:3)
- Square (1:1)
- Portrait (3:4)
- Vertical (9:16)
- Ultra Tall (9:21)

Choose the desired Duration for the generated video:

- Ray2: 5 seconds or 9 seconds.
- Ray3: 5 seconds or 10 seconds.

Ray3 HDR always uses 5 seconds by default, and this duration cannot be changed.

Ray2 can repeat the generated video. Turn on the Loop toggle to loop it in the timeline sequence.

In Advanced settings, Seed lets you enter a seed number that initializes generation and affects AI randomness. Reusing the same seed with the same prompt and control settings can produce similar video clips.

Choose Generate to create the video.

Move the generated clip from Generation history panel to the timeline.

The clip then becomes project media, available for editing, trimming, or combining with other timeline clips.

## Generate videos using OpenAI video generation models

Use OpenAI video model Sora 2 in Firefly video editor to generate videos from text prompts.

Firefly video editor includes Sora 2 video generation models that create high-quality videos and can send them to the timeline for editing.

Start on the Firefly homepage: in the left panel, choose Create, then choose Edit video (beta).

Open an existing project, or create a new one so a timeline is available.

Choose the Generate media icon in the right panel; if Video is not active, choose Video.

In the prompt box, write a descriptive prompt for the result you want.

Under General settings, open the Model dropdown menu and choose Sora 2.

Choose the Generate icon to display the Generate media panel.

Use the Generate icon again if needed to bring up the Generate media panel.

Choose the video's aspect ratio: Widescreen (16:9) or Vertical (9:16).

Set Duration to 4 seconds, 8 seconds, or 12 seconds.

To include a first frame in the generation, go to Frame, choose First, and upload an image.

Tip

After choosing First, Current frame uses the frame under the playhead as the generated video's starting frame. For best results, use first-frame images that visually fit the action described in your prompt.

In Advanced settings, Seed lets you enter a seed number that initializes generation and affects AI randomness. Reusing the same seed with the same prompt and control settings can produce similar video clips.

Choose Generate.

Move the generated clip from Generation history panel to the timeline.

The clip then becomes project media, available for editing, trimming, or combining with other timeline clips.

## Generate videos using Runway video generation models

Use Runway Gen-4.5 in Firefly video editor to generate videos from text prompts.

Partner models in Firefly video editor can turn creative ideas into videos. Runway Gen-4.5 converts text descriptions into high-quality video clips that can go straight onto the timeline.

Start on the Firefly homepage: in the left panel, choose Create, then choose Edit video (beta).

Open an existing project, or create a new one so a timeline is available.

Choose the Generate media icon in the right panel; if Video is not active, choose Video.

In the prompt box, write a descriptive prompt for the result you want.

Under General settings, open the Model dropdown menu and choose Runway Gen-4.5.

Choose the Generate icon to display the Generate media panel.

Use the Generate icon again if needed to bring up the Generate media panel.

Set Duration to 5 seconds, 8 seconds, or 10 seconds.

Note

For video generated with Runway Gen-4.5, Resolution and Aspect ratio cannot be changed; their defaults are 720p and Widescreen (16:9).

To include a first frame in the generation, go to Frame, choose First, and upload the image.

In Advanced settings, Seed lets you enter a seed number that initializes generation and affects AI randomness. Reusing the same seed with the same prompt and control settings can produce similar video clips.

Choose Generate to create the video.

Drag the generated clip from Generation history panel onto your video timeline.

The clip then becomes project media, available for editing, trimming, or combining with other timeline clips.

## Generate videos using Kling video generation model

Use Kling 2.5 Turbo, Kling 3.0, and Kling 3.0 Omni in Firefly video editor to generate videos from text prompts.

In Firefly video editor (beta), partner models can turn ideas into timeline-ready video clips. Kling 2.5 Turbo, Kling 3.0, and Kling 3.0 Omni create high-quality clips from a starting image and can add them directly to the timeline.

### Generate videos using Kling 2.5 Turbo

Start on the Firefly homepage: in the left panel, choose Create, then choose Edit video (beta).

Open an existing project, or create a new one so a timeline is available.

Choose the Generate media icon in the right panel; if Video is not active, choose Video.

In the Prompt field, type the text prompt that best describes the result you want.

Under General settings, open the Model dropdown menu and choose Kling 2.5 Turbo.

Choose the Generate media icon to display the Generate media panel.

Use the Generate media icon again if needed to bring up the Generate media panel.

Choose the video's aspect ratio: Widescreen (16:9), Square (1:1), or Vertical (9:16).

Note

With Kling 2.5 Turbo, Resolution, Frames per second, and Duration are fixed: 1080p, 24 FPS, and 5 seconds.

For the starting frame, use Frame, choose First, then select an image from Your device or Adobe cloud storage.

Tip

- After choosing First, Current frame uses the playhead frame as the generated video's start frame. For best results, use first-frame images that visually fit the action described in your prompt.
- When the keyframe image has a different aspect ratio, hover over the thumbnail to activate the Crop Image icon. Move the cursor over the preview and adjust the crop as needed.

In Advanced settings, Seed lets you enter a seed number that initializes generation and affects AI randomness. Reusing the same seed with the same prompt and control settings can produce similar video clips.

Choose Generate to create the video.

Drag the generated clip from Generation history panel onto your video timeline.

The clip then becomes project media, available for editing, trimming, or combining with other timeline clips.

## Quick Cut overview

### Quick Cut in Firefly video editor (beta) helps create a first-draft video from supplied footage, bringing ideation and editing together.

Quick Cut in Firefly video editor (beta) helps build videos quickly without starting from nothing. It automatically creates an initial cut from uploaded videos inside the video editor, reducing the time spent sorting clips manually. Scene detection, shot selection, and audio analysis give you a useful first pass that you can then refine on the timeline until the video is polished and prepared for sharing.

The same Quick Cut flow applies across many roles:

- Content producers: streamline video content production and improve efficiency.
- Marketing teams: create promotional and brand-related video materials faster.
- Educators: make instructional or knowledge-sharing video content with less effort.
- Event coverage teams: convert live-event recordings into polished, shareable videos that can be distributed quickly.
- Digital media managers: quickly edit video content and publish it across online platforms.

Create an initial video rough draft from a text prompt and adjustable video settings.

Use a prompt and customizable video settings to build the first rough cut.

## Create video quick cuts

### Upload media in Firefly video editor (beta) and let Quick Cut build the first draft of a video story.

Quick Cut in Firefly video editor (beta) helps assemble video clips, images, and audio into a cohesive rough cut. It combines uploaded media with AI assistance so the first video layout is ready for later refinement and editing.

Quick Cut works in both new and existing Firefly video editor projects. To generate a quick cut, prepare:

- A Firefly account with access to Firefly video editor
- Device-local video, audio, or image files prepared for upload

From Firefly home, choose Create in the left panel, then choose Edit video.

In the Upload media panel, choose Select files to pick video, audio, and image files from your device, or drag files directly into the panel.

Add media files to begin a new project, or use files already available in the current video editing project.

Use media files for a new project, or keep working with existing files from the active editing project.

Choose Open to add the selected files to the editor.

Enter a project name and choose Create project to open the video editor window, where the selected media is arranged on a timeline.

Choose Quick cut in the upper-right corner to display the Quick cut panel.

Open Quick Cut and create a preliminary rough draft for the video idea.

Use Quick Cut to generate the first rough draft of the video concept.

In the Video type section, choose:

- Dialogue-driven: for quick cuts built around spoken audio, including interviews, conversations, or reviews.
- Visual-only: for quick cuts where visuals drive the piece and speech is minimal or absent.

Open the Use media from dropdown menu and specify which media files Quick Cut should include. Choose one of these:

- Current Project: uses all media files added to the project.
- Current Timeline: uses all media files added to the timeline.
- Current Timeline Selection: uses only the selected media files from the timeline.

Note

When the timeline has no media, the No media detected message appears; choose Select files and add media before continuing.

Use the What kind of video do you want to create? prompt box to describe the story idea.

Tip

Strong prompts help Quick Cut produce better results. Describe the mood, pacing, and narrative flow you want instead of focusing on technical instructions.

Aspect ratio options are available from the Aspect ratio dropdown menu.

- Automatic
- 16:9 YouTube, Vimeo
- 2:1
- 4:3 Facebook ads
- 5:4 Instagram, Facebook
- 3:2 Facebook ads
- 3:4 Reels, Stories
- 9:16 TikTok, Stories, Shorts
- 1:1 TikTok, Reels
- 4:5 Instagram, Facebook
- 2:3 Reels, Stories

From the Video Duration dropdown menu, choose the final video length. Available choices are:

- Auto
- 30 seconds
- 60 seconds
- 90 seconds
- 3 minutes
- 5 minutes
- 10 minutes
- 15 minutes

To generate supplemental video shots from the added assets, choose Create B-roll track and place it above the main timeline. B-roll is not available for Visual-only video types.

Creating a B-roll can add time to quick cut processing.

Adding B-roll may make Quick Cut generation take longer.

Choose Create to generate the initial video draft.

When the timeline is empty, the output is added there automatically. If content is already on the timeline, choose Open timeline to show the generated quick cut in a separate window, or choose Start over to restart.

Choose Start over to begin a new video draft.

Use Start over when you want to create another draft from the beginning.

After processing finishes, other Firefly video editor features can create new content, adjust the transcript, change clip timing, add transitions, or add more effects.

## Writing effective text prompts for quick cut

### Write a strong text prompt to generate the quick cuts you want in Firefly video editor (beta).

Effective prompts are important for making compelling quick cut videos. Write as though you are briefing an editor: for a social hook, story, or polished recap, clear direction helps the intended idea come through.

A good prompt usually answers three questions:

- What are you making? State the result you want the prompt to produce.
- What should it focus on (or skip)? Give direct guidance for what to include and what to leave out.
- How should it feel? Describe the mood for the story being built.

### Examples of prompt styles that work

### Additional prompt examples

- Fast Social Highlight: "Build a brief edit that opens with the strongest line, includes a few reactions, and closes on a memorable quote. Keep the pace quick and visual."
- Scripted Story Flow: "Use this sequence: I introduce the problem -> show the challenge -> cut to the point where we solved it. Let my spoken lines carry the story."
- Visual Shot Focus: "Center the story on the team's connection through the work. Use close-ups of people working plus moments of team laughter. Finish with a wide shot of everyone together."
- Emotional Cutdown: "Choose the strongest 20 seconds that show genuine emotion and connection."

## Generate Sound effects

Use text prompts and voice timing to create custom audio for video projects.

Generate custom audio for videos by using Generate Sound effects inside Firefly video editor (beta). Describe the sound, set its duration, and optionally use a voice recording to control timing and intensity.

In Firefly video editor (beta), Generate Sound effects requires microphone access when voice recording is used for timing the generated audio. The generated variations show up in Generate media panel; from there, add them to a timeline and edit them like other audio clips.

### Generate sound from text prompts and voice recording

Begin at the Firefly homepage: choose Create in the left panel, then choose Edit video (beta).

Use an existing project or make a new one, then add media files to the timeline.

From the right panel next to the video preview panel, choose the Generate media icon, then choose Sound effects.

In the prompt box, describe the sound to generate, for example "Soft waves rolling onto sand" or "Rain tapping against glass."

Note

Currently, Sound effects supports only English prompts.

Move the Duration slider to the desired time to set generated-audio length, or choose the reset icon to restore the default duration.

The chosen duration appears in the box beside the slider and sets the maximum length of the generated audio clip.

That box next to the slider shows the selected duration, which limits how long the generated audio clip can be.

To guide generated audio or set duration with your voice, go to Voice timing and choose the Record button.

- For exact audio-start timing, place the playhead on the frame where the sound should begin. Firefly video editor plays the timeline without sound so your voice can match the timing more closely.
- If asked, allow Firefly video editor (beta) to use your device's microphone.
- Speak or make sound to guide the generated audio.

When recording begins, the Record button turns red and starts counting down from 3.

At the start of recording, the Record button changes to red and begins a 3-count countdown.

Choose Generate to create audio with or without voice timing. Currently, each generation creates 4 variations, with each variation up to 30 seconds long.

Generated variations appear under Variations. Choose the play icon to hear the sound with the video, and choose the add icon to add a variation to the timeline.

A check icon marks the audio variation once it is added to the timeline.

After an audio variation is added to the timeline, it appears with a check icon.

To switch among variations from the same generation set, choose the add icon. Firefly imports the clip to the Your media panel and replaces the audio on the timeline.

Note

When a new variation set is generated, or when prompt or duration settings change, the resulting audio clips are added to the timeline as new media.

After a variation is on the timeline, edit it like any other audio clip.
