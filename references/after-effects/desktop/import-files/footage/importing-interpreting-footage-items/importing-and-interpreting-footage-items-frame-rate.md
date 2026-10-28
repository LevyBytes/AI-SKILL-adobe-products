# Importing and interpreting footage items - Frame rate

How many frames show up each second is governed by the composition frame rate, which also dictates the way the time ruler and time display carve time into individual frames. Put differently, that rate fixes the sampling cadence at which source footage gets read each second, and it pins down the time intervals where keyframes are allowed to land.

Note

A dropdown for choosing between Drop Frame and Non-Drop Frame timecode lives inside the Composition Settings dialog box in After Effects.

Whatever output you are aiming at tends to dictate the composition frame rate you pick. NTSC video runs at 29.97 frames per second (fps), PAL video at 25 fps, and motion picture film generally at 24 fps. DVD video varies with the broadcast standard—it may mirror NTSC, mirror PAL, or sit at 23.976. For cartoons and material bound for CD-ROM or the web, 10–15 fps is common.

Note

Should you double the composition frame rate relative to the output format, After Effects treats each field of interlaced source footage as a standalone frame within the Composition panel. That technique opens the door to keyframing individual fields, sharpening the precision you get when animating masks.

At final-output render time, either the composition frame rate or a different rate is yours to pick. Being able to dial in a separate frame rate per output module pays off whenever one composition feeds output across several different media.
