# Exporting H264 From The After Effects Render Queue, Converting Movies, Multi Frame Rendering

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Exporting H.264 from the After Effects Render Queue; Converting movies; Preview and render with Multi-Frame Rendering.

## Exporting H.264 from the After Effects Render Queue

Search Last updated on Apr 8, 2026

Lean on the Output Module Settings to encode H.264 right inside Adobe After Effects.

Learn how to export an H.264 (.mp4) file straight out of After Effects.

Native H.264 encoding lets you tap the Adobe Media Encoder UI and its backend encoding system without leaving After Effects.

Settings such as resolution, frame rate, and color are yours to customize for H.264. For tighter control over particular settings, you can also route through Adobe Media encoder by way of Dynamic Link.

H.264 export covers both hardware and software encoding modes.

### Select the H.264 exporter and related settings

Pick File > Export > Add to Render Queue to drop your composition into the Render Queue.

Within the Render Queue panel, click the Output Module option to bring up the Output Module Settings dialog box.

Pick H.264 from the Format dropdown menu.

Click Format Options in the Video Output section to set the Video, Audio, and Multiplexer settings.

Click OK.

### Troubleshoot settings mismatch warnings

When the render or output settings clash with what H.264 supports, After Effects puts up a warning dialog box.

That dialog box spells out the problem and the fix it intends to apply. Click OK to take the changes, or head back to Output Module > Format Option > H.264 Options to fine-tune things further.

Note

A Settings mismatch warning icon turns up in the Output Module Settings dialog box too whenever a configuration clashes. Click that warning icon for the full details and the suggested fixes.

### H.264 Output Module Presets

After Effects ships three preset output modules, and which you pick comes down to the bitrate you're after. Each preset sets the Profile and Level on its own from the composition's output resolution. Settle on the right bitrate preset — 5, 15, or 40 Mbps — based on the resolution and the render quality you want.

You can reshape the default output settings in the Output Module Templates editor by picking Edit > Templates > Output Module.

Lock in the render codec and compression settings, H.264 presets included, inside the Output Module.

Lock in the render codec and compression settings, H.264 presets included, inside the Output Module. Note

Install After Effects fresh or wipe your Output Module preferences, and the H.264 – Match Render Settings – 15 Mbps preset becomes the default for both the Movie Default and Save Current Preview Default output module templates.

### Have a question or an idea?

Got a question on your mind or an idea worth sharing? Drop by the After Effects Community and join in. We would genuinely welcome hearing from you.

### More like this

- Render and export with the Render Queue panel
- Automated rendering and network rendering

## Converting movies

Search Last updated on Jan 19, 2026

### Pick up the skills for converting and reformatting video footage right inside After Effects.

### Convert footage items between video formats

After Effects lets you turn footage of one video type into another. As you carry out such a conversion, bear these pointers in mind:

Shifting the resolution can cost you some sharpness in the picture, and that loss shows up most when you scale a standard-definition source up to a high-definition target.

Altering the frame rate may call for frame blending so the interpolated frames look smooth. On lengthier footage items, that frame blending can push render times out quite far.

1. Pull the footage you want to convert into a composition built from the preset of your target format. To take a case: going from NTSC to PAL, you'd drop your NTSC footage item onto a composition set to the right PAL composition settings preset.
   Pick the layer holding the footage you’re converting, then select Layer > Transform > Fit to Comp Width or Fit to Comp Height.

When the two formats share the same frame aspect ratio, the two Fit commands behave identically; once the frame aspect ratios diverge (say, moving from 4:3 to 16:9), choosing fit-to-width versus fit-to-height decides whether the result gets cropped or letterboxed.

For footage with no scene cuts, reach for Layer > Frame Blending > Pixel Motion. Pixel Motion yields the finest frame interpolation, though the trade-off is potentially lengthy rendering times.

When the footage does carry scene cuts, or whenever you’d rather trade quality for quicker renders, pick Layer > Frame Blending > Frame Mix.

Choose Composition > Add to Render Queue.

Within the Render Queue panel, beside Render Settings, pick the matching preset off the menu. As an example, when your target is DV footage, choose DV Settings from that menu.

Still in the Render Queue panel, beside Output Module, grab the right output module preset from the menu, or pick Custom to dial in your own values. Converting to DV PAL, for one, you'd pick the D1/DV-PAL output module preset and pair it with whatever audio sampling rate is called for.

Click the name of the output module preset you settled on back in step 6 to reach more Format Options.

In the Render Queue panel, use the controls sitting just past the Output To heading on its right side to set the output file's name and where it lands.

Hit the Render button to render your movie.

### Convert DV footage from PAL to NTSC using pulldown

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

### Scaling a movie down

You have several ways to spin a smaller movie out of your composition, and each one balances speed against quality differently:

### Nest the composition

Build a new composition at the reduced dimensions, then drop the large composition into it as a nested layer. Say you make a 640x480 composition; you'd place it inside a 320x240 one. Lean on the Fit to Comp command to size the composition into its new, smaller container: Press Ctrl+Alt+F (Windows) or Command+Option+F (macOS), and then collapse transformations by selecting Layer > Switches > Collapse. Rendered at full resolution and best quality, the resulting composition turns out with superb image quality — sharper than what you'd get rendering at a lower resolution outright.

### Resize the composition

Of the options here, this one gives you the cleanest reduced-size movie, though it runs slower than nesting. Suppose you build a 640x480 composition and render it at full resolution; you can then dial the Resize value in the Output Module Settings dialog box down to 50% to land a 320x240 movie. With the source rendered at full resolution, image quality comes out excellent so long as the Resize Quality is set to High.

Note

Steer clear of resizing to alter a movie's vertical dimensions while field rendering is active. A vertical resize scrambles the field order and warps the motion. When a field-rendered movie has to shrink vertically, turn to cropping or composition nesting instead.

### Crop the composition

When you only need to shave a movie down by a handful of pixels, this is the way to go. Reach for the Crop options in the Output Module Settings dialog box. Keep in mind that cropping trims away part of the movie, so anything you'd centered in the composition can end up off-center unless you crop both opposing edges by the same amount.

Note

There are a few special situations where After Effects crops on its own rather than scaling, specifically when the output movie's dimensions don't line up with the composition's. Take building a 720x480 movie at a pixel aspect ratio of 0.91 or 1.21 out of a 720x486 composition: here After Effects crops instead of scaling.

### Crop to a region of interest

When you'd like to render only a slice of the composition frame, mark out a region of interest within the Composition panel. After that, switch on the Region of Interest option in the Output Module Settings dialog box ahead of rendering.

Note

Trimming an odd number of pixels off the top of a field-rendered movie flips the field order around. Say you crop a single row of pixels from the top of a movie set to Upper Field First field rendering; the field-rendering order then turns into Lower Field First. Bear in mind that cropping pixels off the top means you have to pad the movie's bottom row to hold the original size. And if losing one scan line doesn't bother you, this trick lets a single render output two movies, each carrying a different field order.

### Render the composition at a reduced resolution

For turning out reduced-size movies in a hurry, nothing here beats this approach. As an example, with a 640x480 composition you can drop the composition resolution to one half, which trims the rendered composition down to 320x240. From there you can produce movies or images at that size. Lowering the resolution softens the image, so it suits preview or draft movies best.

Note

As you render at reduced resolution, switch the composition's quality to Draft. Rendering at Best quality while you cut resolution won't give you a clean image and drags on longer than a Draft-quality render would.

### Scaling a movie up

Pushing the output of a rendered composition to a larger size degrades a movie's image quality and isn't advised. Should enlarging a movie be unavoidable, your best shot at preserving quality is to take a composition that came out of a full-resolution, top-quality render and enlarge it by one of these methods:

### Nest the composition

Build a new composition at the bigger dimensions and nest the smaller one within it. For instance, a 320x240 composition can be set inside a 640x480 composition. Size the composition to fill its new, larger container, then collapse transformations by selecting Layers > Switches > Collapse. Rendered at full resolution and best quality, the resulting composition will look better than a movie you'd simply resized. The catch is that this route also renders more slowly than building a composition and resizing it.

Note

When you want a draft movie at particular dimensions, pair the Resize option with a reduced resolution on the rendered composition.

### Resize the composition

As an example, take a 320x240 composition rendered at full resolution; punch the Resize value up to 200% within the Output Module Settings dialog box and you'll get a 640x480 movie. Where the source was rendered at full resolution, the image quality usually holds up acceptably.

Note

Steer clear of resizing to change a movie's vertical dimensions when field rendering is in play. A vertical resize scrambles the field order and warps any motion. When a field-rendered movie has to shrink vertically, use cropping or composition nesting instead.

### Crop the composition

To grow a movie by a few pixels, bump the size up with negative values in the Crop options of the Output Module Settings dialog box. To pad a movie's size by 2 pixels, for one, the value –2 goes into that dialog's Cropping section. Bear in mind that negative cropping pads only one side of a movie, so anything originally centered in the composition can drift off-center once the movie is cropped.

Note

- Padding an odd number of pixels onto the top of a field-rendered movie flips the field order. Add one row of pixels at the top of a movie set to Upper Field First, and its rendering order inverts — now it's Lower Field First. Keep in mind that adding pixels at the top means you must crop the bottom row to hold the original size.
- Adobe Photoshop gives you precise command over the resampling methods used when scaling images. For that fine resampling control, export frames out to Photoshop, change the image size there, and then bring the frames back into After Effects.

### Create a composition and render source footage items simultaneously

Creating a composition from source footage and getting it ready to render can happen in one go. The workflow comes in handy when you want to alter something about the source footage — frame rate or compression method, say — and keep that rendered version on hand in your project.

From the Project panel, drag a footage item or several onto the Render Queue panel; alternatively, highlight them there in the Project panel and take one of these actions:

Choose Composition > Add to Render Queue.

Use Ctrl+Shift+/ or Ctrl+M(Windows) or Command+Shift+/ or Command+M (macOS).

When the Use System Shortcut Keys option is turned on in General preferences (macOS), the shortcut is Ctrl+Cmd+M.

For every footage item, After Effects builds both a fresh render queue entry and a new composition in the Project panel.

Tune the render settings however you like, and select Render.

### Introduce 3:2 pulldown

Reach for 3:2 pulldown when you're producing output for film that's gone to video, or when you want animation to carry a film look. Footage items that began as film transferred to video, then had their 3:2 pulldown stripped out on import into After Effects, can go back out to video with the 3:2 pulldown reinstated. As you introduce 3:2 pulldown, you get a choice among five distinct phases.

Note

Should a segment that had its 3:2 pulldown removed be edited back into the video footage it originated from, matching the phase matters.

Within the Render Queue panel, pick the render item, then click the underlined text sitting next to the Render Settings heading.

Set a field order under Field Render.

Under 3:2 Pulldown, pick a phase.

Pick whatever other settings suit, and then select Render.

### Test field-rendering order

When rendering a composition that holds separated footage, set the Field Rendering option to match the field order of your video gear. Field-rendering with the wrong settings can leave the finished movie looking too soft, jerky, or distorted. A quick test will tell you which field order your video equipment expects.

Note

Swapping out the hardware or software in your production chain can shift the field order. Changing your device control software or VCR after you've set the field order, for instance, can flip your fields. So whenever you alter your setup, retest the field-rendering order.

Plan on roughly 15 minutes for the test; it consists of rendering two movie versions of the same composition — one with Upper Field First, one with Lower Field First — and then playing them to spot which choice looks right.

Build a simple composition at the right frame size and frame rate. In the Composition Settings dialog box choose an NTSC or PAL preset, and give the composition a duration of at least 3 seconds.

Inside that composition, add a layer that's a small rectangular solid. The layer's color doesn't matter as long as it stands out sharply against the composition background. Adding a title (such as Upper Field First) to the solid can make the movie easier to tell apart.

Drive the solid with some fast motion via keyframes on its Position property. Lay keyframes running from the upper-left of the Composition panel to the lower-right across 1 second.

Save the project, then drag the composition onto the Render Queue panel.

Click the underlined Render Settings name; from the Field Render menu, set Upper Field First.

Select OK, then Render to build the movie.

Returning to the composition, recolor the solid in the Composition panel and tag it with a fresh title — Lower Field First, say.

Render the composition a second time, now setting the Field Render menu to Lower Field First inside the Render Settings dialog box.

9. Lay down both movies onto one and the same device.
   One of the movies will look distorted, with jumpy horizontal motion or shape warping during vertical motion. The other will play back cleanly, edges sharply defined. The field order that produced the smooth movie is the one to reuse on that particular hardware setup whenever you render.

### More like this

- Output modules and output modulesettings
- Render and export with the RenderQueue panel
- Render settings

## Preview and render with Multi-Frame Rendering

Search Last updated on Oct 14, 2024

Topping the list of feature requests, Multi-Frame Rendering has arrived in After Effects. The speed payoff reaches across your system from Preview through Export, and it bundles in an assortment of features that let you tune the computer toward peak performance.

### Why should I try Multi-Frame Rendering?

With Multi-Frame Rendering, After Effects picks up speed. How quickly your projects render on your machine comes down to how many CPU cores you have, how much RAM is free, and how much compute power sits in your graphics card.

Check the table underneath to gauge how much quicker After Effects 2022 might render a composition.

Minimum specs

Mid-range system

High-end system

Cores

4-6

8-10

16-64

Memory (GB)

16

16-32

48-128

Current speed Improvement

1.2-1.5x faster

1.75-2x faster

2.5-4x faster

| --- | --- | --- | --- |

### Enable Multi-Frame Rendering

By default, After Effects ships with Multi-Frame Rendering switched on. If you want to turn it off and later switch it back on:

1. Select After Effects > Settings > Memory & Performance (macOS) or File > Preferences > Memory & Performance (Windows).
2. Under the Performance section, check or uncheck the Enable Multi-Frame Rendering option.

Because the program is capable of consuming all of your CPU's capacity, you have the option of holding some of that power back for whatever else is running on the machine. That reserve is dialed in with the % CPU reserved for other applications slider, which ranges from 0% up to 70% and sits at 10% out of the box.

### Speculative Preview when After Effects is idle

Once it has sat untouched for a defined interval, the application keeps rendering your compositions on its own, so the moment you return from a break the preview is queued up and ready. That idle threshold ships at 8 seconds. Reach these controls through After Effects > Preferences > Previews, where the Cache Frames When Idle section offers the choices below:

Cache Frames When Idle settings

Cache Frames When Idle settings

- Idle Delay Before Caching Starts - How long the program must stay idle before frame caching kicks off on its own. Default is set to 8 seconds.
- Cache Frames - Where the cached frames fall relative to the CTI.
- Cache Range - Adjusts which span of frames gets rendered during idle time.

- Cache Frames has the following options:
- From Current Time - Caching begins at the spot where the CTI sits.
- Around Current Time - Caching wraps the CTI, grabbing the frame just before and the one just after.
- From Start of Range - Caching kicks off at the front edge of whatever Cache Range you defined.
- Cache Range has the following options:
- Work Area - Every frame within the work area gets cached.
- Work Area Extended by Current Time - Starting at the CTI, frames are cached through to where the work area ends.
- Entire Duration - The comp's full length is cached.

### Rendering process information in the Render Queue panel

Queuing, tailoring, watching, and managing several compositions at once is handled efficiently through the Render Queue panel.

Queuing, tailoring, watching, and managing several compositions at once is handled efficiently through the Render Queue panel.

By drawing on Multi-Frame Rendering, the Render Queue panel calls out what is currently rendering, the time still left, how far along the job is, and the load it places on your system. Reading that data makes it easier to gauge render performance and how much disk space is in play. Learn more about rendering and exporting with the Render Queue panel.

For keeping tabs on your render performance and tuning it, the info button in the Render Queue panel surfaces useful detail.

For keeping tabs on your render performance and tuning it, the info button in the Render Queue panel surfaces useful detail.

Detail about the frames being rendered shows up when you press the info button in the Render Queue.

### Receive remote notifications after render completes

The moment a single render queue job, or the whole queue, wraps up, you get a heads-up through your Creative Cloud Desktop and mobile app. To pick up that alert, be sure the Creative Cloud app is installed on your phone. Tapping the alert sends you straight to the app's notification list, where the items are ready for your review. On top of that, a smart watch paired with your phone relays the same alert to your wrist.

Learn more about receiving remote notifications after the render completes.

### General Questions

By tapping the entire strength of your system's CPU cores during preview and render, Multi-Frame Rendering speeds your creative work along. The team behind After Effects has layered in fresh capabilities, built around Multi-Frame Rendering, that make a big dent in how fast you work.

- The Composition Profiler points out the layers and effects in a comp that eat up the most render time compared with the rest.
- Speculative Preview puts the application's idle time to use, rendering active compositions in the background.
- A reimagined Render Queue and Adobe Media Encoder lets you export faster.

Performance climbs with every extra CPU core, though the gains also ride on other variables — your GPU, RAM, which effects are in play, any third-party plugins, and even the kinds of projects you tend to tackle.

To match the right hardware to the way you work, the After Effects team has teamed up with a range of partners.

- Puget Systems
- HP
- Dell (Coming Soon)
- Lenovo - Grab the file below for the full system configuration breakdown.

Get file After Effects recommended system configuration for Lenovo ThinkStation P620

Every effect that comes bundled with After Effects 2022 has been tuned for Multi-Frame Rendering. Optimization has reached third-party effects as well, and a list of them is available here.

Note

A yellow warning icon appears in the Effects Control Window beside any effect that lacks Multi-Frame Rendering support.

No. As a newer After Effects technology, Multi-Frame Rendering drives every core in your CPU at once. The earlier approach — "Render Multiple Frames Simultaneously," also known as Multiprocessing — sped certain tasks along by spinning up several copies of After Effects at the same time. That multiprocessing approach is no longer part of After Effects.
