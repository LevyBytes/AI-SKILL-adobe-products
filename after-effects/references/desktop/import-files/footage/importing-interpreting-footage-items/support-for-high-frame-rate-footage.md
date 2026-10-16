# Importing and interpreting footage items — Support for high-frame-rate footage

Any frame rate field accepts values as high as 999 fps, so rendering at elevated frame rates is on the table.

A frame rate of its own can also belong to each motion-footage item inside a composition. How smoothly a layer plays comes down to the interplay between that footage-item rate and the composition rate. Take a footage item at 30 fps inside a 30-fps composition: every time the composition steps forward one frame, the footage serves up its next frame. Drop the footage item to 15 fps against a 30-fps composition and each footage frame stretches across two consecutive composition frames. (All of this presumes the straightforward situation where neither time stretching nor frame blending has touched the layer.)

The cleanest path is to start from source footage already matching your final output frame rate. With that match, After Effects renders frame for frame and the result skips nothing, duplicates nothing, and interpolates nothing. But when the source sits just slightly off your target—say 30-fps footage headed for 29.97-fps output—conforming lets you bend the footage rate to line up with the composition rate.

The underlying file stays untouched when you conform a footage item's frame rate; only the reference After Effects keeps changes. What conforming alters is the internal length of each frame, leaving the frame content alone. The upshot is footage that runs at a new speed. Conform 15 fps up to 30 fps, for instance, and playback doubles in pace. As a rule, save conforming for cases where the footage rate and output rate differ only marginally.

Note

Synchronization between picture and an audio track can drift after conforming, since shifting the frame rate stretches the video's duration while the audio stays put. To stretch picture and sound together, reach for the Time Stretch command instead. Keyframes tied to the source footage hold their original positions (so they stay in sync within the composition, even as the layer's visual content shifts). Expect to nudge keyframe positions after a footage item is conformed.

Frame rate is adjustable for any movie or run of still images. You might, for example, bring in ten still images as a sequence and assign that footage item a rate of 5 frames per second (fps); dropped into a composition, the sequence then spans two seconds.

Note

A still-image sequence on import adopts whatever the Sequence Footage preference under the Import category specifies. Out of the box that is 30 frames per second (fps). Reinterpreting the footage item afterward lets you change the rate.

Because lower frame rates read as somewhat unreal, plenty of artists gravitate toward a rate like 24 frames per second for creative work rather than the 29.97 frames per second that NTSC video calls for.

Note

Strip 3:2 pulldown out of interlaced video footage and After Effects drops the resulting footage item to four-fifths of its starting frame rate automatically. Remove that pulldown from NTSC video and you land at 24 fps.

Line up the composition's frame rate with the frame rate of your final output format. Picking a composition settings preset usually handles this in one step. Each footage item, by contrast, should carry the frame rate of the original source footage it came from.
