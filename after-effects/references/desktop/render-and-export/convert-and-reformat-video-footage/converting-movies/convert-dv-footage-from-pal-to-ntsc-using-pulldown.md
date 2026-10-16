# Convert DV footage from PAL to NTSC using pulldown

Since After Effects readily turns film (24 fps) into video (29.97 fps) through 3:2 pulldown, a tidy PAL-to-NTSC transfer becomes possible by coaxing 25-fps PAL video into behaving like 24-fps film. That setup lets 3:2 pulldown be applied as you bring the footage to 29.97 fps. The approach pays off best with progressive (noninterlaced) PAL video.

Build a fresh composition using the DV NTSC or DV NTSC Widescreen preset.

2. Bring your DV PAL footage into that new composition.
   With the DV PAL layer selected, run Layer > Transform > Fit to Comp Width or Fit to Comp Height.

- To hold audio in sync while nudging the pitch down a touch, select Layer > Time > Time Stretch, then enter 95.904 in the Stretch Factor box.
- To keep audio pitch intact but let sync go, or for clips that carry no audio, find that footage item over in the Project panel and right-click (Windows) or Control-click (macOS) it, select Interpret Footage > Main, select Conform to frame rate, and then enter 23.976 in the frame per second box.

Choose Composition > Add to Render Queue.

Pick Custom from the Render Settings menu.

Over in the Render Settings panel, switch on Field Rendering (pick the field order your output type calls for), choose any option from the 3:2 Pulldown menu, and then select OK.

Grab the output type from the Render Queue Output Module menu (for instance, Microsoft DV NTSC 32 kHz).

Inside the Render Queue panel, the controls flanking the right side of the Output To heading are where you set the output file's name and destination.

Hit the Render button to render your movie.
