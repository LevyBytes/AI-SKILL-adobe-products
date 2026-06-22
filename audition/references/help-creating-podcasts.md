# Creating Podcasts

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

Learn how to record, mix, edit, and publish podcasts with the custom-built templates and presets in Adobe Audition.

Podcasts are talk-show-style audio programs and broadcasts that listeners can download or stream over the Internet. Making one requires basic knowledge of recording, audio editing and mixing, plus streaming or publishing.

Audition simplifies podcast production with an editing and mixing interface designed for that workflow. Start by writing the content and preparing the ambience, microphone, and other recording gear. Once the audio is recorded, use Audition to edit and refine it, remove unwanted noise, improve the sound with EQ, and make advanced edits and refinements.

## Preparing your recording setup

Podcast audio can be captured with many kinds of gear, from a single USB or analog microphone to setups that combine microphones, audio interfaces, and mixers. Many podcasters record by connecting a microphone directly to a USB or microphone input on their audio hardware.

Audition works with a broad range of audio input and output hardware. When you connect a recording device to the computer, the equipment is detected, drivers are updated, and audio preferences are configured. Before recording, check input and output settings in the Audio Hardware Preferences dialog box.

To configure audio preferences for your needs, open Edit > Preferences > Audio Hardware (Windows). On macOS, open Adobe Audition > Settings > Audio Hardware. Then choose settings under Default Input and Default Output.

Note

The recommended Sample Rate for podcasts is 44100 Hz. If you plan to deliver the podcast as a video file, choose 48000 Hz.

When working in a Multitrack session, choose Audio Hardware from the Default Stereo Input drop-down.

Connected input and output devices are listed in the Default Input and Default Output drop-down boxes with automatically detected settings. Choose the options that match your needs, then click OK.

Learn more about connecting your audio hardware to Audition.

## Recording your podcast

Record a podcast in Audition with either the Waveform editor or the Multitrack editor. Use the Waveform editor when a single microphone is capturing voice and you need to work on individual recordings. Use the Multitrack editor when several sources create multiple audio tracks that must be recorded and edited together.

## Record using Waveform editor

Connect your microphone or other voice-recording hardware to the microphone input port on the computer's sound card. Audition recognizes the hardware and prepares the device for capture.

Choose File > New > Audio File to create a recording.

Set Sample Rate to 44100 Hz or above, set Channels to Stereo, set Bit Depth to 32 (float), and click OK.

When you are ready, click the record button to begin capturing audio; use the pause and stop buttons as needed during the take.

After checking the settings, choose File > Save and save your file. Leave Sample Type and Format unchanged from the source, or use Change to alter them.

If you want to add custom markers and metadata later, clear Include markers and other metadata so default markers and metadata are not included.

Click OK to save. Before the file is written, the Save As dialog box shows an estimated file size.

## Record using Multitrack editor

Choose File > New > Multitrack Session.

In Session Name, enter a name for the podcast multitrack session file; in Folder Location, choose where the file will be saved.

For a podcast session that starts with default Host, Interview, Sound FX, and Music Bed tracks plus podcast-specific effects, select Podcast in the Template dropdown box. Audition then fills Sample Rate, Bit Depth, and Mixing with recommended values.

Click OK to prepare the multitrack session for recording.

Set the track options; examples include volume, mono/stereo input, and mono/stereo/5.1 output.

On the track that should receive audio, click the R icon, then place the marker in the Editor panel at the exact time where recording should begin.

Click the record button to start recording, and use the pause and stop buttons to control pauses and the endpoint of the audio track.

## Editing your podcast

A podcast may be only one voice recording or may combine voice with ambience, special effects, background music, and multiple speakers. To assemble those pieces into a finished program, work with the audio tracks inside a multitrack session.

In a multitrack session, place your voice recording, music, and other audio elements on separate tracks.

Put clips on different tracks in the order you want listeners to hear them. For example, when a session contains varied clip types, use this order with pauses and effects:

1. Opening title music
2. Intro segment
3. Primary host's voice introducing the episode/topic
4. Other hosts' talk recordings with background music underneath
5. Closing sign-off

See more detail about arranging and editing a multitrack session.

## Removing unwanted background noise from your audio

The Essential Sound panel lets a clip receive a mix type and exposes edits matched to that kind of sound. For a voice clip set to Dialogue, the Dialogue tab in the Essential Sound panel shows parameter groups for that mix type. With those controls you can handle common dialogue work, including normalizing recordings to a shared loudness, lowering background noise, and adding compression and EQ.

In the Essential Sound panel, mix types are mutually exclusive: when a clip gets a different mix type, earlier changes from another mix type on that track are reverted.

Open the Essential Sound panel with Window > Essential Sound.

Assign the track you are editing a mix type, such as Dialogue.

Use a preset from Preset drop-down box to refine a track. For example, Podcast Voice contains preset values for noise reduction, rumble reduction, and de-essing.

For manual sound repair, under Repair Sound select the check boxes below, then move each slider to match what you need:

- Reduce Noise - identifies and lowers background noise.
- Reduce Rumble - lowers low-frequency sounds and plosives.
- DeHum - reduces hum caused by electrical interference.
- DeEss - reduces harsh ess-like sounds.

Advanced noise reduction can also be used, such as capturing a noise print in a selected frequency range with the spectral editor and removing it.

After changing the settings, play the multitrack audio to evaluate the output.

## Matching loudness

Audition can measure loudness in audio clips and apply correction so loudness levels match accepted standards.

Podcasts are often heard on mobile devices and around noise, so a higher target loudness is usually needed. Set the target between -20 LUFS and -16 LUFS. The ITU broadcast standard uses -18 LUFS as its Target Loudness.

Open the Match Loudness panel with Window > Match Loudness.

Drag one or more audio files into the panel.

Click the Scan icon to analyze each clip's current loudness values.

Click Match Loudness Settings to expand loudness parameters.

From Match To drop-down list, choose a loudness standard appropriate for your region and content. For a podcast, choose ITU broadcast standard preset; it sets Target Loudness to -18 LUFS.

Set Maximum True Peak Level between -0.2 dBTP and 1.4 dBTP, set tolerance at 2 LU, and click Run.

## Applying effects

Note

This section targets experienced Audition users who want to use advanced features for audio editing. If the rack-effects workflow in this section is followed, Audition replaces changes previously made through the Essential Sound panel.

In the Multitrack Editor, each clip, track, and bus can receive up to 16 effects, and you can change those effects while the mix plays. If one track contains several clips that need independent processing, use clip effects.

For spoken-word podcasts, equalization often improves the sound by raising lower frequencies and softening higher frequencies. Audition effects can handle that adjustment.

Choose one of these methods:

- For a clip, select it and click Clip Effects at the top of the Effects Rack.
- For a track, select it and click Track Effects at the top of the Effects Rack.
- Show fx for the Editor or Mixer panels; in the Editor panel, use the fx icon at the upper-left corner.

To load podcast-ready effect settings, choose Podcast Voice in the Presets dropdown box. Audition adds:

- Speech Volume Leveler
- Dynamic Processing
- Parametric Equalizer
- Hard Limiter

To add effects by hand and set them up, choose a slot and add an effect. One example is Vocal Enhancer, which has separate enhancement settings for male and female voices.

The list supports effects in up to 16 slots.

Equalizer effects are available for equalizing audio, usually by boosting lower frequencies and reducing higher frequencies.

## Exporting and publishing your podcast

Once editing and previewing are complete, save the podcast with the format and settings required by the destination.

For podcast delivery, MP3 and AAC are the formats most often used. Podcasters use MP3 more than any other format. AAC files, commonly saved as .aac or .m4a files, can deliver better quality with smaller file sizes than MP3. AAC also stores metadata unsupported by MP3, including Chapter Markers, embedded links, and images.

Higher encoding rates preserve more audio detail in the recording. Stereo podcasts commonly use 128-kbps MP3. Mono spoken podcasts commonly use 64-kbps MP3. For efficient compression, compact files, and stronger audio quality, a 64-kbps AAC-HE (high efficiency) stereo file can outperform a 128-kbps MP3.

Audition provides output and encoding choices inside the application and through external paths such as exporting to Adobe Media Encoder. Media Encoder provides formats and presets for rendering and publishing high-quality audio from Audition. Export with Media Encoder requires Media Encoder on the computer at the same version as Audition.

Use one of the following options:

- For a podcast file created in Audition, choose File > Export > File.
- For a multitrack mixdown, choose File > Export > Multitrack Mixdown, then select Time Selection, Entire Clip, or Selected Clips.
- For output to your chosen format with advanced encoding settings, choose File > Export > Export with Adobe Media Encoder.

For export through Audition, click Change in the Export Multitrack Mixdown or Save As dialog boxes to set the format, sample type, format settings, and mixdown options.

Learn more about options for exporting audio output in Audition.
