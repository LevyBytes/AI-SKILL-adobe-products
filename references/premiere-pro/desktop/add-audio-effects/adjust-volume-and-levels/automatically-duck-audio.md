# Automatically duck audio

Use the Essential Sound panel in Adobe Premiere to duck audio automatically, lowering background music when dialogue or voiceover is detected for a balanced mix.

Open an existing multitrack session with the audio clip, or create one.

In the Essential Sound panel, tag content with its correct type. Clips tagged Music and Ambience can be ducked.

Turn on Ducking in the Essential Sound panel.

Note

Enabling ducking makes Premiere add an Amplify Effect to the clip. Auto Ducking calculates keyframes and places them on that effect's gain parameter, so they remain easy to modify or remove without disrupting other sound design. Assign audio types to the other audio tracks as well, because Premiere needs to know which track should drive the ducking.

Set the following auto-ducking options:

- Duck Against: choose the icons for the audio content types that should trigger ducking: Dialogue, Music, Sound Effects, Ambience, or Un-tagged clips.
- Sensitivity: controls the threshold where ducking starts. Higher or lower sensitivity settings create fewer changes, with the focus shifting toward keeping the music lower or louder, respectively. Middle-range values produce more frequent changes as music rises and falls quickly during pauses in speech.
- Duck Amount: sets the amount by which the music clip volume is lowered. Moving the setting right makes the reduction stronger; moving it left makes the change subtler.
- Fade Duration: determines how fast the volume change happens after ducking is triggered. Short fades suit fast music mixed with fast speech, while longer fades fit background music behind voiceover.
- Fade Position: sets the location where the background audio fade lands relative to the dialogue: outside the dialogue, inside, or in the middle.

Automatic ducking lowers background music smoothly while dialogue or voiceover is playing.

Use automatic ducking so background music drops smoothly under dialogue or voiceover.

Select Generate Keyframes to calculate and place keyframes for the Amplify effect that Premiere added to the clip.

Note

Generated keyframes can be edited manually afterward; however, selecting Generate Keyframes again replaces every manual keyframe change.
