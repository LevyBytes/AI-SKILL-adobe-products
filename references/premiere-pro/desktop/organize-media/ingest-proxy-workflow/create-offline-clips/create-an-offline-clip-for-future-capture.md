# Create an offline clip for future capture

At the bottom-right of the Project panel, select the New Item icon and choose Offline File.

In the New Offline File dialog box, enter the video and audio settings for the offline file, including frame size, timebase, pixel aspect ratio, and sample rate, then select OK.

In the Contains menu, choose whether the offline clip contains Video, Audio, or Audio And Video.

Set whether the offline file has audio and video, audio only, or video only before entering the rest of the clip details.

Choose whether the offline file contains audio/video, audio only, or video only before filling in the remaining clip details.

For Audio Format, choose the matching source-footage format from Mono, Stereo, 5.1 or Multichannel.

Use the Tape Name field to enter the name of the tape that holds the source footage.

In the File Name field, enter the filename to use when the clip is captured to disk.

Enter timecode values for Media Start and Media End to set the clip's full duration. Include any handle frames required by transitions and editing in those values.

To create the offline clip, select OK.

The offline clip appears in the Project panel with an offline indicator. For batch capture eligibility, the clip needs three basics: tape name, filename, and valid Media Start and Media End timecode values. After the offline clip is captured or relinked to its source file, the actual media replaces the placeholder everywhere in the project.

Note

An offline merged clip cannot be created from scratch. Merged clips must start from existing online media.
