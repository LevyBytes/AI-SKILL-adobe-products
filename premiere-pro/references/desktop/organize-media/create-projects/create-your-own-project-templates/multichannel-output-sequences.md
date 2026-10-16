# Multichannel output sequences

For multilingual delivery, it can help to create an additional audio mix type called an M&E, meaning Music and Effects only, with dialogue omitted.

When planning an M&E mix, keep dialog tracks organized separately so they are easier to mute selectively.

Multichannel output is already configured in this sample timeline. In the Audio Track Mixer below, each track type, including Dialog and SFX, is routed to the matching submix.

A view of the project's multichannel master with its submixes.

The final output contains five stereo tracks (10 channels.)

The complete mix occupies the first stereo track. Each later track pair carries only the corresponding submix output on its own channel pair.

During export, configure output for 10 channels this way:

Start by creating a sequence whose output is multichannel.

Add submixes, then route tracks to the matching submixes. Named tracks help a lot here.

At export time, configure 10 output channels on the Audio tab.

Final master channel layout:

- Tracks 1 and 2 - Full Stereo mix
- Tracks 3 and 4 - Only the dialog mix
- Tracks 5 and 6 - Only the SFX mix
- Tracks 7 and 8 - Only the ambience mix
- Tracks 9 and 10 - Only the music mix

## See also

- [Organize Media](../../reference-index.md)
