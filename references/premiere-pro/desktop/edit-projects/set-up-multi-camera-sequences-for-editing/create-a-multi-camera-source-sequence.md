# Create a multi-camera source sequence

Build a multi-camera source sequence from clips recorded by several camera sources.

Adobe Premiere can edit a multi-camera source sequence. The feature synchronizes footage from multiple cameras and lets editors switch among the angles. It is useful for concerts, interviews, and other shoots where several cameras record the same event.

Use Premiere multi-camera projects to sync angles and switch between them during editing.

Before you begin:

Create a project, then import clips that contain the different camera angles.

In the Project panel, select the clips and choose Clip > Create Multi-Camera Source Sequence.

Choose the method Premiere should use to synchronize the clips.

A multi-camera source sequence provides synchronization and editing for footage captured by multiple cameras.

The same multi-camera source sequence workflow lets multiple-camera footage be aligned and edited together.

- In Points, Out Points: Define exact in and out points on each clip so they line up manually. This option needs careful timing and fits smaller jobs or projects where audio-based sync is not essential. Learn more about marking clips for synchronization.
- Timecode: When the clips contain accurate timecode, use this option to align them from their timecode values.
- Select Create Single Multicam Source Sequence to put the clips into one multi-camera sequence. Use it when individual camera coverage contains gaps and the resulting sequence must keep those gaps. If this option is not selected, Premiere combines only overlapping clips, and clips without overlap are not used. Groups can be given a Camera Angle or Camera Label for reference during multicam creation. During metadata-based creation, groups with matching Camera Label or Camera Angle metadata fields go onto separate tracks. The same idea also applies to external audio or field audio.
- Select Ignore Hours when clips start at different timecode hours but otherwise overlap in timecode.

  - Linear Timecode: Choose this option to sync the clips from timecode stored in the clip's audio track.
  - Sound Timecode: Choose this option when synchronization should use a separate audio recorder.
  - Aux Timecode: Choose this option when embedded timecode exists as supplemental synchronization data rather than the primary timecode.

- Audio: Use this option to sync clips from a chosen audio track. It helps when every clip includes a shared audio source, such as a clapboard or voiceover.
- Clip Marker: Use markers placed at matching clip positions for synchronization. This helps align clips to specific events.

Choose sequence preset options.

- Sequence Preset: Choose a preset that fits the project requirements. The sequence preset Automatic is selected by default and comes from the video format of the Camera 1 clip. In most cases, Automatic is the right setting. For advanced workflows, such as editing a proxy-resolution sequence, choose a specific sequence preset. The final edit can then use higher-resolution clips or larger frame-size clips.
- Offset Audio by: When a separately recorded audio track does not line up with the video clip, enter a frame offset with Offset Audio by. For an audio-only clip, the sync offset can be entered in video frames from -100 to +100.
- Move Source Clips to Processed Clips bin: Select this option to place generated source clips in a Processed Clips bin. If the Processed Clips bin is missing, Premiere creates it before moving the clips. Clips that do not meet synchronization criteria remain outside the Processed Clips bin. This makes clips excluded from the resulting multicam source sequence easier to spot.

Choose audio sequence settings.

- Camera 1: Select Camera 1 when the editing sequence should use audio from Camera 1 only. Multicam editing is enabled only for the source sequence video. For A/V clips used to build the sequence, audio tracks tied to video 1 are unmuted, while other source-sequence audio is muted. When audio-only clips are used with video or A/V clips, the audio-only clips are placed on the highest tracks and left unmuted. Other linked-clip audio is muted and put on lower tracks. Channel assignments and panning for each track route every source channel to separate output channels, up to 32. The sequence's active output channels are determined by how many source-audio channels remain unmuted.

Note

Editing sequences created with this setting cannot use the audio follows video option, because multicam is not enabled for the audio portion.

- All Cameras: Select All Cameras to include all audio channels from the source clips. This resembles Camera 1: only the video part of the source sequence is multicam-enabled. Audio-follows-video is not available with this setting. All audio is unmuted, up to 32 channels. The count of unmuted source-audio channels sets the number of active output channels for the sequence.
- Switch Audio: Select this option when linked video should bring its audio along as the edit switches. This setting unmutes all audio and enables multicam editing for both audio and video in the source sequence when audio follows video is enabled in the Program Monitor. It also maps multi-mono source audio into one adaptive audio track. The audio-follows-video editing setting then switches that single track with the video. If the selected clips include audio-only clips, Premiere puts those audio-only clips below any linked clips and creates empty video tracks to match each audio-only track.

Choose audio channel presets.

- Automatic: Reads the first clip's audio type and applies that mapping.
- Mono: Uses one mono mapping for each output channel in the source sequence.
- Stereo: Uses stereo-track mapping based on the source sequence output-channel count.
- 5.1: Uses 5.1-track mapping based on the source sequence output-channel count.
- Adaptive: Uses Adaptive mapping derived from the source sequence output-channel count.

Choose the camera-name display method.

- Enumerate Cameras: Select this option to number camera angles automatically in the sequence name. It can help with identification and organization.
- Use Track Names: Show camera angles with track names.
- Use Clip Names: Show camera angles with clip names.

Select OK.
