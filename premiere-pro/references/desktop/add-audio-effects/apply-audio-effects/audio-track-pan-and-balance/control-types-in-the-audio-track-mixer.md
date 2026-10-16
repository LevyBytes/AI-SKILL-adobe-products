# Control types in the Audio Track Mixer

The Audio Track Mixer changes its control interface to match the track routing setup:

- Stereo pan knob appears when a mono or stereo track is sent to a stereo output. The round knob can be rotated to distribute sound between left and right. The value under the knob reports the current pan position: center is 0, full left is -100, and full right is +100.
- 5.1 Panner tray appears when a mono or stereo track is routed to a 5.1 surround output. This square control represents the 2D field used by surround audio. You can move a puck anywhere in that field, while pockets around the edge stand for the five main speakers. Center channel percentage and LFE (subwoofer) level adjustment controls are also included in the tray.
- No pan control is shown when the destination has the same channel count as the track or fewer channels. If both the audio track and output track are mono, or both are 5.1 surround, each channel maps directly and panning or balancing is unnecessary. A 5.1 surround track also does not show pan controls because it already contains every available output channel.
