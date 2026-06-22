# About Generate Video, Translate Video, Generate Videos With Virtual Avatars, Best Practices For Writing Content For Text To Avatar ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generate Video FAQ; Translate video; Generate videos with virtual avatars; Best practices for writing content for Text to avatar; Edit videos using text prompts; Upscale videos.

## Generate Video FAQ

### Frequently asked questions about Text to video and Image to video.

### Using Text to video and Image to video

### 1. How do I get the best result from Firefly website video generation?

For Text to video and Image to video, keep these main points in mind:

- Both features can be used on desktop plus selected mobile devices.
- Use Chrome and Safari browsers.
- Write prompts with at least eight words and no more than 1800 characters.
- Leave the browser tab or window open while video generation is in progress.
- Do not generate content in several windows or browser tabs at the same time. If errors appear, wait about a minute and try again.
- Confirm that you have the rights to use any uploaded images for video generation. You can also create images with Text to image.

Note

Availability for Image to video depends on geographic location, user type, and regulatory requirements. The services can change and may not be part of every plan. For current details, refer to the latest terms and conditions.

### 2. How do I put text into the generated video?

To make text appear in the generated video, put it inside double quotes. For example, if the video should show CAT, write "CAT" in the prompt. See more information about adding text effects while generating video.

### 3. Why can't I generate videos, or why is the keyframe upload option greyed out?

Generative AI capabilities, including Firefly video and audio models, may be available differently depending on geographic location, user type, and regulatory requirements. These services can change and may not be part of every plan. See the latest terms and conditions for more detail.

### 4. What are common uses for Text to video and Image to video?

Examples of top uses include:

- Add atmosphere, including smoke, lens flare, and water, over black-screen or green-screen footage.
- Animate an image, such as making water flow in a waterfall.
- Use 2D or 3D animation, including claymation, to communicate the creative direction.
- Create videos based on graphics and text.
- Generate b-roll centered on plants, animals, and landscapes, especially when camera motion is involved. A single frame or image can also be used to generate b-roll.

### 5. A pending video disappeared. How can I recover it?

Pending videos remain inside the current browser session. If you close the browser tab, the video generation progress is lost.

You can also open the Generation History tab on the Files page, where generated images and videos are saved automatically.

### 6. How can I adjust the crop on my image?

The video model may crop an image so it matches the image size expected by the model. Cropping is centered, so image areas near the edges may be removed. To crop manually, use Adobe applications such as Adobe Express.

### 7. What is a seed?

Seeds are numbers that begin the randomization process for generations. Similar assets can be produced by reusing the same seed, prompt, and control settings.

When properties such as the prompt, uploaded image, or controls change, the same seed remains in use. When those properties stay unchanged, a new seed is generated.

### 8. Why do people in my video generations keep looking similar?

Changing a setting or prompt does not change the seed. Because of that, generated humans may have a similar appearance in race, ethnicity, or skin tone. Changing the seed number in Advanced Settings can alter those characteristics.

### 9. Is Generate Video available to K12 users?

K12 users cannot currently use video generation through the Generate Video feature.

Learn more about Adobe Firefly generative AI features for K12.

### Technical requirements

### 10. Which operating systems are supported?

Desktop support for Text to video and Image to video includes:

- Windows: Version 10 or later
- macOS: Version 12 or later
- ChromeOS

Device note

Video generation works on desktops and selected mobile devices.

### 11. Which browsers are supported?

Supported browsers for Text to video and Image to video are:

- Chrome 108 or later
- Safari 15 or later.

### 12. Which image upload file types are supported?

Supported file types are JPG and PNG.

### Handling error messages

### 13. Why do I see an error saying I need to request access to the Firefly website?

When an access error appears, check that you are signed in with the correct email address or associated Adobe ID. If the problem continues, select the 'Contact Program Admins' link on the page for help.

### 14. Why do I see a "Something went wrong" error?

The "Something went wrong" error can occur when Firefly is at capacity. Wait briefly and try again. You can also review the prompt and make sure it stays within 1,800 characters.

### 15. Why do I see a "Can't Load Something went wrong. Please Try again." error?

This error can happen when multiple browser windows or tabs are being used to generate videos. Each person can generate only one video at a time. If generation fails, wait about a minute, then try again.

### Known issues

### 16. What known issues should I be aware of?

- Human and animal forms can distort during movement.
- Generated video may include unwanted objects.
- Subject or object motion may happen unintentionally.

## Translate video

### Translate video clips quickly and effectively into multiple languages.

Firefly includes Translate video for converting spoken content in a video into different languages. By translating and dubbing videos, the feature can improve viewer experience and help you reach a wider audience with multilingual access.

Before you begin:

Choose a video file in .mp4 or .mov format with resolution up to 4K. The file must be at least five seconds long, no longer than 10 minutes, and include at least 5 seconds of continuous audio.

On the Firefly homepage, open the Video section and select Translate video.

Select Browse files and upload the file you want to use.

For best results with an uploaded video file, review these points:

- Include at least five seconds of spoken voice in the video or audio recording.
- Use recordings with audible speech, clear audio, and little reverb or background noise.
- Only a single speaker is currently supported; frequent back-and-forth among multiple speakers can produce poor results.
- Recordings should use only one spoken language throughout.

After upload succeeds, the Source language (auto-detected) dropdown menu under Translate audio displays the detected language.

Tip

Use the Source language (auto-detected) dropdown menu if you need to change the source language.

From the Translate into dropdown menu, choose the language or languages for translation.

Use Translate into to choose multiple target languages for file translation.

The Translate into dropdown menu supports selecting more than one language for the file translation.

Select Lip sync to match the speaker's mouth to the translated audio, or turn it off if you want translated audio without lip sync.

Use Lip sync to align the speaker's mouth movement with the translated audio for a natural viewing experience.

Lip sync synchronizes mouth movement with the translated audio so playback looks more natural.

Note

Only enterprise customers on eligible Firefly plans can use the Lip Sync feature.

The Transcript field displays the original video's transcribed audio text. If you want to correct the transcript, contact your CSM for more information about the related APIs.

Select Generate.

A progress bar shows dubbing and lip sync status. If you close the page and come back later, only the final processed file can be downloaded from Your media.

When translation is finished, choose a translated language from the Language dropdown menu and review the result.

Use the Language dropdown menu to review translated versions before downloading them.

The Language dropdown menu lets you inspect each translated version before download.

Select Download to download the translated version.

The dubbed generated file is also added to Your media and remains available for download for seven days. After seven days, it is permanently deleted.

Translated videos remain downloadable for seven days after processing, giving you time to retrieve them.

After processing, translated videos are available for download for seven days so you can save them when convenient.

Note

1. If the source video is below 1080p, the output video resolution matches it. Otherwise, the output is scaled down to 1080p.
2. Content Credentials are attached to the translated and dubbed version of the original video.

## Generate videos with virtual avatars

### Generate a video with an avatar by supplying scripted dialogue in Text to avatar (beta).

Text to avatar (beta) creates a video with an avatar speaking the script you provide, from a short sentence to a longer paragraph. You can pick among avatars with different appearances, voice styles, and accents. Before generating the final video, you can preview it, revise the script, and adjust the background so the result is engaging and visually appropriate.

Choose Text to avatar (beta) from the Adobe Firefly homepage.

On the Text to avatar page, select Create new.

Tip

Templates with pre-selected avatars and backgrounds are also available. You can edit those combinations later to customize them further.

In the Scene settings section, use the Avatar accent dropdown menu to choose the accent.

Specify the accent that the selected avatar should use for scripted dialogue.

Set the accent to be used when the chosen avatar speaks the script.

Under Avatar, choose an avatar from the listed options. Select Browse more to see the full list and preview the accent.

Preview avatars with their matching accent, then choose the one that best fits your video.

Review the avatars and their respective accents, then select the best match for your video.

Under Background, choose from these options:

- Color: choose a background color.

- Image: choose a provided background image or upload your own .png or .jpg file. Uploaded images need at least 640x360 resolution.

  Background limits:

  - Maximum length: 10 minutes
  - Codec: H264, H265
  - Resolution: Minimum of 640x360

Use backgrounds in the video to show your brand, provide context, or establish a setting.

Backgrounds can help highlight branding, add context, or create the scene for the video.

In the Content field, enter the avatar's scripted dialogue.

Add the script that the avatar will speak using the selected accent.

Enter the scripted dialogue the avatar should deliver in the specified accent.

Tip

Learn about best practices to consider when writing scripted dialogue for the avatar.

Select Preview Audio to generate and listen to the generated audio output before creating the video.

Use preview to test and adjust scripted dialogue in real time before finalizing.

The preview feature lets you refine the script live before you generate the final video.

Select Generate.

Generation time and cost vary based on the script length and spoken language.

A prompt appears with the number of generative credits required for generation. Credit usage depends on script length and the selected language.

Select Continue if you want video generation to begin.

Review the number of generative credits needed before you decide whether to proceed with or cancel generation.

Check the required generative credits before choosing to continue or cancel.

After generation finishes, preview the video with the on-screen controls and scrub through its frames.

Replay is available for the generated video, and the file can be downloaded in .mp4 format.

The generated video can be replayed and downloaded as an .mp4 file.

Use Download .mp4 to download the generated video.

The generated file is also added to Your media and remains available for download for seven days. After seven days, it is permanently deleted.

## Best practices for writing content for Text to avatar

### Write scripts that help the avatar speak clearly and sound natural in Text to avatar.

For Text to avatar, follow best practices when entering scripted dialogue in the "Content" field. This field contains the lines the avatar will speak. A script that is clear, organized, and aligned with the guidance below helps the avatar deliver the dialogue accurately and naturally, improving realism and overall feature effectiveness.

Use correct spelling and grammar in scripted dialogue so the avatar performance sounds professional and intentional. Carefully written text helps the AI avatar speak more naturally and fluently, reducing the chance of mispronunciations or awkward phrasing in the generated video.

Punctuation gives the avatar cues for delivery, affecting meaning as well as how words are spoken. Commas, periods, and other marks shape rhythm, tone, and emotion. Careful punctuation makes the avatar easier to understand and more natural and expressive.

When the dialogue text does not express emotions clearly, add character-acting quotes around the text. This helps the avatar in the final generated video convey the intended emotion and meaning.

All-capital words are interpreted as acronyms or initialisms, so each letter is pronounced separately. The lowercase version of the same word is spoken as a normal word. This distinction matters in avatar dialogue because it changes speech sound and message accuracy.

For example, the avatar pronounces "POC" as "Pee-Oh-See", while "poc" is pronounced as "pock".

For abbreviations, especially those ending with the letter 's', put a dash between letters so the avatar pronounces each letter clearly and separately. This keeps the abbreviation from being read aloud as one word.

For example, "PDFs" produces the "s" sound rather than "es". Another case is "POCi", which is read as "posi" instead of "Pee-Oh-Si". To get the intended speech, add dashes between letters, such as "P-O-Ci".

In Text to Avatar dialogue, write numbers as words instead of digits, particularly for dates, times, prices, measurements, or amounts. Doing so helps the avatar pronounce them naturally and communicate the intended meaning clearly.

AI-generated voices are nondeterministic, so identical scripts and voices can still produce slightly different results on each run. Think of a voice actor recording several takes, where each take contains subtle variation.

## Edit videos using text prompts

### Use partner video models in Firefly to edit and refine videos with text prompts.

Uploaded videos and generated videos can be edited with simple text prompts. In Generate video, the Edit option lets you adjust style, refine details, and make creative changes so the result better fits your intent.

The examples below cover common text-prompt video editing scenarios. Available partner models include:

- Kling 3.0 Omni
- Runway Gen-4 Aleph
- Ray3.14 Modify
- Ray3 Modify

### Before you begin

Use Firefly or partner video models to create a video from a text prompt, an image, or both together.

### Edit video using Kling 3.0 Omni

Open the Firefly homepage and select Generate video.

If you have generated a new video and want to edit it, hover over the generated video to reveal post-generation options, then select Edit > Prompt to edit clip.

Select Prompt to edit clip to begin editing the generated video with text prompts.

Use Prompt to edit clip when you want to start text-prompt editing for the generated video.

Alternatively, select the Edit tab at the top of the page.

If you want to edit an existing video, select the Edit tab and upload a video directly from Your device.

On the Edit page, open the model menu and choose Kling 3.0 Omni.

Select a partner video model for editing your video with text prompts.

Choose a partner video model when you want to edit a video through text prompts.

Add a prompt explaining the edit you want in the image. The edit might remove objects, add new ones, change the background, enhance specific details, or make another change.

Select Generate.

### Edit video using Runway Gen-4 Aleph

Open the Firefly homepage and select Generate video.

If you have generated a new video and want to edit it, hover over the generated video to reveal post-generation options, then select Edit > Prompt to edit clip.

Select Prompt to edit clip to begin editing the generated video with text prompts.

Use Prompt to edit clip when you want to start text-prompt editing for the generated video.

Alternatively, select the Edit tab at the top of the page.

If you want to edit an existing video, select the Edit tab and upload a video directly from Your device.

Drag and drop a video to add it directly to your workspace.

Use drag and drop when you want to place a video directly in the workspace.

On the Edit page, open the model menu and choose Runway Gen-4 Aleph.

Select a partner video model for editing your video with text prompts.

Choose a partner video model when you want to edit a video through text prompts.

Add a prompt explaining the edit you want in the image. The edit might remove elements, add new ones, change the background, enhance specific details, or make another change.

Create a text prompt to edit the video, for example by adjusting colors, changing lighting, or replacing objects.

Write a prompt that describes the video edit, such as color adjustment, lighting changes, or object replacement.

Select Reference, then upload an image that will guide the generated video.

Select Generate.

### Edit video using Ray3.14 Modify

Open the Firefly homepage, then choose Generate video.

For a newly generated video that you want to revise, move the pointer over the video so the post-generation controls appear, then choose Edit > Prompt to edit clip.

Choose Prompt to edit clip to begin changing the generated video with text prompts.

Use Prompt to edit clip when you want text prompts to drive edits to the generated video.

You can also open the Edit tab at the top of the page.

When the video already exists, open the Edit tab and upload it from Your device.

In the model menu, choose Ray3.14 Modify from the available models.

Write a prompt that explains the image change you want, such as taking elements out, inserting new ones, or replacing the background.

To define the opening of the video, choose First frame and upload an image. To set the ending, choose Last frame and upload an image. For additional keyframe work, use these options:

- Crop Image: When the keyframe image uses a different aspect ratio, hover over the thumbnail so the image tools appear, then select the Crop Image icon. Drag within the preview and refine the crop as required.
- Edit Image: To change the keyframe image itself, hover over its thumbnail to show the image tools and choose the Edit Image icon. After the edit with text prompts page opens, add or adjust image details, then choose Save to return to the Prompt to edit video page. Those revisions are applied across the video.
- Remove Image: To discard a keyframe image, hover over it and choose the Remove Image icon.

Point to the image thumbnail to reveal tools for changing the image.

Move over the image thumbnail to display image-editing tools. Tip

For stronger results, make the desired change in the first frame image so the model can carry that change through the remaining video.

When setting a first or last frame, choose Current frame to make a specific video frame the starting or ending point.

After adding a First frame, the Last frame menu shows the Current frame option.

With a First frame in place, Current frame becomes available from the Last frame menu.

Drag the Strength control left to keep the generated output closer to the supplied references. Drag it right for more creative flexibility.

Use the Strength slider to control how closely the generated output follows the uploaded frames.

Adjust the Strength slider to set the balance between reference adherence and the uploaded frames.

Select Generate.

### Edit video using Ray3 Modify

Open the Firefly homepage, then choose Generate video.

For a newly generated video that you want to revise, move the pointer over the video so the post-generation controls appear, then choose Edit > Prompt to edit clip.

Choose Prompt to edit clip to begin changing the generated video with text prompts. Use Prompt to edit clip when you want text prompts to drive edits to the generated video.

You can also open the Edit tab at the top of the page.

When the video already exists, open the Edit tab and upload it from Your device.

In the model menu, choose Ray3 Modify from the available models.

Write a prompt that explains the image change you want, such as taking elements out, inserting new ones, or replacing the background.

To define the opening of the video, choose First frame and upload an image. To set the ending, choose Last frame and upload an image. For additional keyframe work, use these options:

- Crop Image: When the keyframe image uses a different aspect ratio, hover over the thumbnail so the image tools appear, then select the Crop Image icon. Drag within the preview and refine the crop as required.
- Edit Image: To change the keyframe image itself, hover over its thumbnail to show the image tools and choose the Edit Image icon. After the edit with text prompts page opens, add or adjust image details, then choose Save to return to the Prompt to edit video page. Those revisions are applied across the video.
- Remove Image: To discard a keyframe image, hover over it and choose the Remove Image icon.

Point to the image thumbnail to reveal tools for changing the image.

Move over the image thumbnail to display image-editing tools. Tip

For stronger results, make the desired change in the first frame image so the model can carry that change through the remaining video.

When setting a first or last frame, choose Current frame to make a specific video frame the starting or ending point.

After adding a First frame, the Last frame menu shows the Current frame option.

With a First frame in place, Current frame becomes available from the Last frame menu.

Drag the Strength control left to keep the generated output closer to the supplied references. Drag it right for more creative flexibility.

Ray3 Modify can change a character's appearance in the edited video. Choose Character reference to add an image that guides the model toward the reference character's look while it modifies the video.

Use Character reference to add a reference image when the edited video should preserve the character's appearance.

Add a reference image through Character reference to keep the character's look consistent during video editing.

Select Generate.

## Upscale videos

Find out how enhancement, detail, and resolution controls can be adjusted when upscaling videos.

Firefly video upscaling raises visual quality by introducing detail and improving resolution for generated videos or uploaded footage. The process makes videos look clearer and sharper, with exports available at resolutions up to 4K for professional-quality output.

Videos made with Generate video in Firefly can be upscaled, and existing videos can be uploaded straight to the Edit tab.

### Access the upscale tool and configure upscale settings

Open the Firefly homepage, then choose Generate video.

For an existing video that needs upscaling, open the Edit tab and upload the file from Your device or Adobe cloud storage.

After generating a new video that you want to upscale, move to the Edit tab.

Upload on the left toolbar is another way to add a video.

You can add a video through Upload in the left toolbar as well.

Choose the Upscale icon in the left toolbar to display the upscale settings panel.

Below the video preview, the upscale settings panel opens with several groups of settings.

The upscale settings panel is shown under the video preview and contains multiple setting categories.

In the Enhancement section, choose:

- Precise: keeps the result natural while applying modest improvements.
- Creative: adds stylistic polish and strengthens the overall look.

In the Details section, choose:

- Subtle: applies gentle texture enhancement.
- Bold: restores stronger detail and creates more vivid clarity.

In the Output resolution section, choose:

- 1080p: exports for standard HD playback.
- 4K: provides maximum clarity for large displays.

Tip

For a natural result, begin with Precise enhancement and Subtle details. For a more dramatic look, try Creative with Bold.

Choose Generate in the bottom-right corner so the selected settings can be applied to the video.

Note

The generative credits usage indicator beside Generate shows how many credits each edit consumes. Next to it, the Show edit history icon opens the video editing history in a strip above the prompt bar.

When processing finishes, the preview area shows the enhanced video. Select the download button in the top-right corner to save the upscaled file, or continue with Prompt to edit to revise the video through text prompts.
