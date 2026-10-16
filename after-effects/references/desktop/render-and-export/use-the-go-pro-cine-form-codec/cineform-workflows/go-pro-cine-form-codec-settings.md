# GoPro CineForm codec settings

When you reach for the GoPro CineForm codec, five compression quality settings plus two pixel format settings are on hand to shape your output. Export your After Effects projects through the GoPro CineForm codec like so:

Within the Render Queue, choose a project, then open its Output Module setting.

Inside the Output Module Settings dialog box, set the output format to QuickTime from the Format drop-down list, then choose Format Options.

2. Reach for the Format Settings option to fine-tune QuickTime settings like Video Codec and Bitrate Settings.
   Pick GoPro CineForm as the video codec inside the QuickTime Options dialog box. Tune the compression with the Quality slider sitting under Basic Video Settings. That slider travels from 1 to 5, where 1 stands for the Low setting and 5 for the Film Scan 2 setting. The default value is 4 (Film Scan).

- Low
- Medium
- High
- Film Scan
- Film Scan 2

For more information, see the GoPro CineForm website.

YUV 4:2:2 at 10 bits per channel, or RGBA 4:4:4:4 at 12 bits per channel, is how the GoPro CineForm codec can encode pixels.

Which pixel format gets encoded follows from the color depth and alpha channel choices you make within the Output Module Settings dialog box. Three Channels settings are available — RGB, Alpha, and RGB+Alpha:

- Set Channels to RGB or Alpha to encode to 10bpc YUV. In this case, Depth can only be set to Millions Of Colors.
- Set Channels to RGB+Alpha to encode to 12bpc RGBA. In this case Depth can be set to Millions of Colors+ or Trillions of Colors+.

After Effects renders the comp at whatever color depth the Project and Render Settings name, and the GoPro CineForm encoder then resamples the frames to 10-bit YUV or 12 bpc RGBA, whichever fits.

Kick off the render with your GoPro CineForm settings by choosing Render in the Render Panel.
