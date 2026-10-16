# Remove 3:2 or 24Pa pulldown from video

Moving 24-fps film over to 29.97-fps video relies on a technique called 3:2 pulldown, which lays the film frames across video fields in a recurring 3:2 pattern. Film frame one copies into fields 1 and 2 of video frame one, and also into field 1 of video frame two. Film frame two then stretches across the following pair of video fields—field 2 of video frame two plus field 1 of video frame three. The 3:2 pattern keeps going until four film frames cover five video frames, at which point it begins again.

Out of 3:2 pulldown come whole frames (marked W) and split-field frames (marked S). Two fields from one and the same film frame make up each of the three whole video frames. The other two split-field frames each carry a video frame drawn from two separate film frames. Those two split-field frames always sit next to one another. Where the two split-field frames land inside the footage's first five frames is what the phase of 3:2 pulldown refers to.

Phase arises out of two conversions taking place during 3:2 pulldown: 24-fps film is spread back through 30-fps video, so each set of four 24-fps film frames stretches over five frames of 30(29.97)-fps video. To start, the film is slowed by 0.1% so it tracks the speed gap between 29.97 fps and 30 fps. Then every film frame is repeated in a particular pattern and matched to video fields.

When you apply 3:2 pulldown to footage, one frame of the film (A) is separated into two or three interlaced video fields (B) which are grouped into video frames containing two fields each.

As you bring in interlaced video that began life on film, you can strip out the 3:2 pulldown that the film-to-video transfer introduced—doing it while you separate fields—so that effects you apply in After Effects won't look distorted.

Stripping 3:2 pulldown out of video footage that started as film matters, because it lets effects you add in After Effects line up exactly with film's native frame rate. Taking out 3:2 pulldown cuts the frame rate by 1/5—from 30 down to 24 fps or from 29.97 down to 23.976 fps—which trims the count of frames you have to work on. Removing 3:2 pulldown also means you have to specify the phase of that 3:2 pulldown.

There's support in After Effects, too, for Panasonic DVX100 24p DV camera pulldown, known as 24P Advance (24Pa). Certain cameras rely on this format to record 23.976 progressive-scan imagery onto standard DV tapes.

Get the fields separated first—choosing upper-field first or lower-field first—and only then remove 3:2 pulldown. Once that separation is done, After Effects can study the footage and work out the right 3:2 pulldown phase and field order. Already know the phase and field order? Set them yourself using the Interpret Footage dialog box, via its Separate Fields and Remove menus.

Within the Project panel, click the footage item you want stripped of 3:2 pulldown.

Select File > Interpret Footage > Main Options.

Under the Fields and Pulldown section, set the Separate Fields menu to either Upper Field First or Lower Field First.

Do one of the following and select OK:

If you know the phase of the 3:2 or 24Pa pulldown, choose it from the Remove menu.

To have After Effects determine the correct settings, select Guess 3:2 Pulldown or Guess 24Pa Pulldown.

Should your footage file pull frames from more than one source, the phase can vary from one to the next. With an inconsistent phase, import the footage several times—once per phase—and interpret each copy with its own setting. Then add each footage item to your composition and trim every layer down to just the frames it should use. Put differently, an asset carrying multiple pulldown phases has to be cut into pieces, with pulldown removed separately on each piece. This tends to crop up when the asset is a movie stitched together from several sources inside an NLE.
