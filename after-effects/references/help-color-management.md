# Color Management (part 1)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Mar 27, 2026 Note

As of July 14, the Adobe Color themes panel is being retired in Photoshop, Illustrator, InDesign, and After Effects. See End of support for Adobe Color Themes panel for details.

Numbers are what carry color from one place to another. Trouble arises because each device captures and shows color its own way, so an identical set of numbers lands on our eyes as a different hue depending on the hardware. What a color management system does is record every one of those device-specific interpretations and translate among them, with the goal that an image holds steady no matter which screen or printer renders it.

Put broadly, a color profile spells out one device's color space by listing the transformations needed to move that device's color data into a space that doesn't depend on any device.

Within After Effects in particular, the role of ICC color profiles is to move color into and back out of the working color space, and the broad sequence runs like this:

- Each footage item is brought into the working color space from its own space by way of an input color profile. That profile may already be embedded in the footage item; otherwise you supply it through the Interpret Footage dialog box or via the interpretation rules file.

- Every color operation in After Effects happens inside the working color space. The working color space (project working space) is set on the Project Settings > Color tab.

- The monitor profile carries colors out of the working color space and into the color space of your computer display. Two correctly profiled monitors will therefore show your composition identically, and nothing in the composition's underlying data is altered by the step. Whether this monitor conversion happens is your call; the toggle for it is the View > Use Display Color Management menu command. Learn more about enabling or disabling display color management.

- After Effects can additionally lean on a simulation profile so your monitor previews how the finished output will look once it lands on some other device. You steer output simulation per view from the View > Simulate Output menu. Learn about how to simulate how colors will appear on a different output device.

- For every output module, an output color profile carries the rendered composition out of the working color space and into the color space of whatever medium you're delivering to. That output color profile is picked on the Output Module Settings > Color tab.

With color management active, After Effects by default rebalances colors so the gamma gap between scene-referred profiles and output-referred ones is compensated for. Learn more about gamma and tone response.

Note

There's another route to color management: hand-applying color transformations through color lookup tables (LUTs). Learn more about applying Color LUT effect.

## Benefits of color management

Among the advantages color management delivers are these:

Imported images show up with the colors their creators meant them to have.

How colors blend within your project — motion blur, anti-aliasing, and the rest — falls more squarely under your control.

Your finished movies hold their intended look even on screens other than the one you edited on.

Skip color management for a project and your composition's colors ride entirely on the color traits of your particular monitor. What reaches your eyes is whatever that monitor produces from the RGB numbers in your footage. Since identical RGB numbers stand for different colors across color spaces, the colors you see and composite may stray from what the footage's creator had in mind — potentially by a wide margin.

Assigning a working color space to the project, which switches color management on, accomplishes a pair of things:

It establishes one shared color space for compositing and your other color operations.

It puts the look of your composition's colors in your hands.

Should a footage item carry an embedded color profile — say it's a Photoshop PSD file — then the colors the image's author intended can be faithfully recreated in your composition. The profile holds the data that says how to translate the image file's RGB numbers into a device-independent color space, after which your monitor's profile pins down which RGB numbers in your monitor's space stand for the footage item's intended colors. As you pull in footage carrying many different profiles from many different origins, this automatic conversion matters all the more.

None of this conversion costs you any effort; the colors land on your monitor exactly as they looked when the image was made. Your display might cover a narrower gamut than the working space you picked, and colors can clip on screen as a result. Even so, the full span of color data stays intact in your project, and no clipping happens internally.

Once it's time to output the composition, color management lets you push your colors into whatever space suits your output media. The point of this stage is to hold onto the colors' appearance just as you mean them to look.

## Color profiles

Standardization of the color-profile file format comes from the ICC (International Color Consortium), and the files holding these profiles generally carry the .icc filename extension. After Effects ships with a sizable set of color profiles spanning common — and a few uncommon — input and output types.

Color profiles get loaded by After Effects out of several places, among them:

macOS: Library/ColorSync/Profiles

macOS: Library/Application Support/Adobe/Color/Profiles

Windows: WINDOWS\system32\spool\drivers\color

Windows: Program Files\Common Files\Adobe\Color\Profiles

Tip

Adobe Photoshop lets you build a custom ICC profile. Inside Photoshop, go to Edit > Color Settings. Within the Working Spaces area of the Photoshop Color Settings dialog box, the RGB and CMYK menus carry options for saving, loading, and defining custom ICC profiles.

Every color profile a project uses is stored inside the project itself, so opening that project on a different system never requires you to hand-carry the profiles across.

Note

Obsolete television gear is what the NTSC (1953) color profile maps to, and it shouldn't be used. For standard-definition NTSC television, reach for one of the SDTV NTSC color profiles instead.

Pick a profile — for input, output, or simulation — and the motion-picture film profiles stay hidden unless your footage is Cineon footage or you check Show All Available profiles. With Cineon footage, the reverse holds: only the motion-picture film profiles show up, unless you check Show All Available Profiles.

## Color management tips

- Take time to read the on-screen guidance inside the Interpret Footage, Project Settings, and Output Module Settings dialog boxes. That text clarifies which color conversions get carried out as you interpret footage, composite, and output your rendered movies.
- See that your workspace holds a steady brightness and color temperature. Sunlight, for instance, shifts its color qualities over the course of a day and can throw off how colors register on your display, so draw the shades or set up in a room without windows.

## Online resources about color management

- A thorough article on Johan Steen's website walks through color management in After Effects. It covers calibrating and profiling a monitor, putting color management to work in Photoshop, and editing inside a linear color space as well.
- The International Color Consortium website is the place to look for color-profile information.

## Calibrate and profile your monitor

Calibrating your monitor lets the profiling utility store a color profile capturing how that monitor behaves with color. Inside that profile sits information about which colors the monitor can reproduce and how an image's color values have to be converted for accurate display. After Effects and your operating system draw on that data so the colors on your screen match the colors in the output movies you produce.

Note

A monitor's performance drifts and degrades as time passes; recalibrate and reprofile yours roughly once a month. A monitor you simply can't calibrate to a standard may be too old and faded to bother with.

1. Leave your monitor powered on for a minimum of thirty minutes beforehand, which gives it time to warm up and settle into steadier output.
2. Set your monitor to show millions of colors (24 bits per pixel) or more.
3. Without profiling software backed by a hardware measuring device, strip any colorful background patterns off your desktop and switch it to neutral grays. Lively patterns or vivid colors ringing a document throw off accurate color perception.
   For the best outcome, turn to third-party software paired with measuring devices. Broadly, pairing a measuring instrument such as a colorimeter with software yields more precise profiles, since an instrument gauges a monitor's displayed colors far more accurately than the human eye manages.

The new profile is set as the default monitor profile automatically by most profiling software. To assign the monitor profile by hand, consult your operating system's documentation for the steps.

In macOS, use the Calibrate utility - /System/Library/ColorSync/Calibrators

## Video formats color managed in After Effects

When that information is present, After Effects can pick up the embedded color space data inside imported media files and apply matching color management, keeping your video's colors read correctly and consistent the whole way through your workflow. These video formats receive color management in After Effects:

- QuickTime ProRes
- MPEG (H264/HEVC)
- MXF (XAVC / AVC)
  - ARRI RAW
  - Sony RAW
  - RED RAW
  - ProRes RAW
  - Canon RAW

Tip

To inspect imported media's color space, right-click the footage and follow Project panel > Interpret Footage > Main > Color > Media Color Space. With Media Color Space reading None, the Override Media Color Space option lets you assign a color space to the footage by hand. That comes in handy for footage lacking embedded color space data.

## Choose a Color Engine

Color information inside a digital asset like an image or video is handled by the Color Engine in After Effects. For color conversion, color space management, storing color data, and color correction, it draws on a color management system such as the International Color Consortium (ICC) profile standard. Leaning on a Color Engine keeps color reproduction consistent and accurate across varied devices and file formats.

Picking a Color Engine is what flips color management on. From there you can name distinct color spaces for footage (Media Color Space) or for render queue items (Output Color Space). Where that named space differs from the Working Color Space, color values get converted from the one into the other.

Adobe color managed

Choose Adobe color managed and the Adobe Color Engine (ACE) leans on the International Color Consortium (ICC) profile standard to define and store color data and to convert among color spaces — RGB, CMYK, and plenty more.

Choosing the Color Engines as Adobe color managed.

Choosing the Color Engines as Adobe color managed.

OCIO color managed

Select OCIO color managed and Open ColoriO-based color transforms come into play. ACE 2 is the OCIO Configuration that's selected, and the Custom option under OCIO Configuration lets you load a configuration of your own. Learn more about OpenColorIO and ACES color management.

Choosing the Color Engines as OCIO color managed.

Choosing the Color Engines as OCIO color managed.

## Choose Working Color Space and enable color management

Switching color management on for a project comes down to picking a Working Color Space for it on the Color tab of the Project Settings dialog box.

The Working Color Space setting governs how color gets managed across your whole project.

The Working Color Space setting governs how color gets managed across your whole project.

Per-footage-item color management is something you handle through the Interpret Footage dialog box or the interpretation rules file.

Through the Interpret Footage dialog box, you handle a range of settings for imported media, color management among them.

Through the Interpret Footage dialog box, you handle a range of settings for imported media, color management among them.

Per-output-item color management is something you handle in the Output Module Settings dialog box.

The Output Module Settings dialog box is where you govern how color gets processed as rendering happens.

The Output Module Settings dialog box is where you govern how color gets processed as rendering happens.

Leave Working Color Space at None in the Project Settings dialog box and color management stays off for the project.

Settling on a working color space ranks among the must-do steps of managing color in a project. Footage items have their colors brought into the working color space, which serves as the shared space for compositing.

When you're in 8-bpc color, you'll get the best outcome by matching the working color space to the output color space. Rendering to more than one output color space means you ought to set the project color depth to 16 bpc or 32 bpc, at minimum for final-output renders. Let the working color space match whichever output color space owns the biggest gamut. Say you intend to output to both Adobe RGB and sRGB — then make Adobe RGB your working color space, since its larger gamut lets it carry more saturated colors. Holding onto over-range values calls for 32-bpc color and its high dynamic range.

Pointers for choosing a working color space:

For a movie bound for standard-definition broadcast television, standard-definition DVD included, SDTV NTSC or SDTV PAL serves well.

For a movie bound for high-definition television, HDTV (Rec. 709) is a solid pick. Its primaries match sRGB's, but its gamut runs larger, which makes it a capable working space across many kinds of work.

For digital cinema work, ProPhoto RGB carrying a linear tone response curve (gamma of 1.0) is a good fit.

For a movie bound for the Web, cartoons especially, sRGB IEC61966-2.1 fits the bill.

Which color spaces After Effects offers shifts according to the color profiles installed on your machine.

Go to File > Project Settings > Color

From the Working Color Space dropdown menu, pick a working color space.

## Color management and Mercury Transmit

Whatever color values reach the video monitor originate in the project's working color space. To preview video colors, set Working Color Space in the Project Settings dialog box to a value that lines up with the preview device's color space.

Color management does extend to video previews routed to an external monitor through Mercury Transmit. Learn more about previewing on an external video monitor.

Note

To manage colors for a dynamically linked composition or for video previews, build a fresh composition and nest yours inside it. Then apply the Color Profile Converter effect onto the nested composition, with Input Profile set to Project Working Space. For video previews, point the Output Profile at the color space of the video preview device.

## Color management and Dynamic Link

With color management turned on for an After Effects project, any compositions seen across Dynamic Link get transformed by way of the Rec. 709 color profile. Doing so heads off color or gamma shifts in how those compositions look once they reach Premiere and Adobe Media Encoder.

Dynamic Link always takes every incoming frame to be in Rec. 709. As the final step before images hand off to Dynamic Link for Premiere or Adobe Media Encoder, a color transformation gets applied to the composition. That brings the composition image into line with the color space Dynamic Link relies on.

## Export color profiles to Adobe Media Encoder

JPEG files that After Effects renders from a composition can have color profiles embedded in them by Adobe Media Encoder.

Switch color management on by naming a color working space profile in the Project Settings. Reach project settings via File > Project Settings.

Under the Color tab of the Project Settings dialog, pick Working Color Space and select a color working space off the drop-down list.

With a color working space named, send your composition to the Render Queue next. Add it through File > Export > Add to Render Queue.

Within the Render Queue panel, choose Output Module Settings.

Inside the Output Module Settings dialog, pick Main Options and switch the Format over to JPEG Sequence.

Once the format is set, choose Color, pick the Output Color Space, and switch on the Embed color space option.

Within the Render Queue panel, click the Queue In AME button

Up comes the composition in Adobe Media Encoder. There, set the Output Format to JPEG.

Note

Leave the Embed color space option off and Adobe Media Encoder embeds the HDTV (Rec. 709) profile.

## Linearize working space and enable linear blending

Once color management is on (by way of a named working color space), linearizing the working color space lets every color operation run in linear light. The primaries and white point a linearized color space holds are identical to those of its nonlinear counterpart. For the linearized color space, the tone response curve is nothing more than a straight line.

Even without color management enabled, blending operations remain available to you at a gamma of 1.0.

Running operations inside a linear color space heads off certain edge and halo artifacts — the fringing that crops up where high-contrast, saturated colors blend, for one. Plenty of color operations gain from a linear color space, including those tied up in image resampling, blending across layers with blending modes, motion blur, and anti-aliasing.

If a linearized working color space is what you want, set it up as you start the project rather than swapping to it down the line. Otherwise the colors you pick in the color picker will shift the moment you move to a linear working color space, because After Effects reads colors as living in the working color space.

Note

A linearized working color space pairs best with deeper color — 16 bpc and 32 bpc — while 8-bpc color isn't a recommended fit.

Go to File > Project Settings > Color, then take one of these actions:

For a linearized working color space, tick the Linearize working color space option.

For linear-space color blending, pick Blend colors using 1.0 gamma. Blending across layers is all this option touches. As a result, opacity fades, motion blur, and other features leaning on blending modes are affected.

## Interpret a footage item by assigning an input color profile

The Interpret Footage dialog box is where you manage color for each footage item.

What calculations run when a footage item's colors convert into the project's working color space is decided by the input color profile. With no working space set — meaning color management is off for the project — assigning an input color profile isn't possible.

Files you import sometimes arrive with ICC profiles already embedded. Importing those, you can trust that the colors before you match what the footage's producer first intended. Embedded color profiles for Photoshop (PSD), TIFF, PNG, and JPEG files are something After Effects can both read and write.

When a footage item carries no embedded color profile, you can hand it an input color profile through the Interpret Footage dialog box or by adding or editing a rule in the interpretation rules file (interpretation rules.txt). After Effects then treats the footage item as though its source was made with that color profile, so take care to assign one that matches — or at least comes close to — whatever produced the source footage.

Note

Where a source footage item came from an application that skips color management — a movie rendered out of a 3D application, say — the input color profile amounts to the monitor profile of the system where the image was designed and built.

In the Project panel, pick a footage item.

Go to File > Interpret Footage > Main.

On the Color tab, choose a value from the Override Media Color Space menu.

To confirm the conversion is the one you're after, check the dialog box's Description area, then click OK.

Footage items that aren't RGB (CMYK, Y'CbCr, and camera raw images among them) can't take an input profile. The Interpret Footage dialog box shows their native color space instead. Each format handles the conversion of its non-RGB color values into RGB color values on its own.

Assign no input color profile, and give After Effects no interpretation-rules-file rule to go on, and the footage item's colors are taken to sit in the project's working color space.

While color management is on, a footage item's input color profile appears in the information area along the top of the Project panel.

Whether the assigned input color profile reads as linear (gamma equals 1.0) hinges on the Interpret As Linear Light option under the Color tab. That option stays functional even with color management switched off for the project. Learn more about gamma and tone response.

For a single footage item, you can block the conversion of its colors into the working color space by checking Preserve RGB in the Color tab of the Interpret Footage dialog box. RGB numbers survive under this option; color appearance does not. Switching color management off for one footage item helps when that item isn't meant for visual display but instead serves as a control layer — a displacement map, for example.

## Assign an output color profile

The Output Module Settings dialog box is where you manage color for each output item.

Note

Exporting to SWF format routes you through the Export menu rather than the Render Queue panel, so output module settings don't apply to this output type. If the project has color management on, After Effects converts colors from the project's working color space to the sRGB IEC61966-2.1 color space on its own when exporting to SWF.

What calculations run when a rendered composition's colors convert from the project's working color space to the output medium's color space is decided by a render item's output color profile. With no project working space set — meaning color management isn't on for the project — assigning an output color profile isn't possible.

Picture building a movie in an HDTV (Rec. 709) working color space meant for film output: a film output color profile pushing it into a log-encoded Cineon/DPX color space is probably what you'll reach for. Building a movie for high-definition television instead, you should pick an HDTV (Rec. 709) output profile.

A render item's output color profile rides along inside an output module and turns up in the output module group within the Render Queue panel. One render item can take several output modules, each carrying its own output color profile, which lets you turn a single rendered movie into output movies for assorted media.

Whether colors go out to a linear color profile (gamma equals 1.0) rests on one setting: Convert To Linear Light, found on the Output Module Settings dialog box's Color tab. Outputting to linear light rarely pays off for 8-bpc or 16-bpc color, so Convert To Linear Light defaults to On For 32 bpc. Learn more about gamma and tone response.

Certain file formats — Photoshop (PSD), PNG, TIFF, and JPEG among them — permit a color profile to be embedded. Embed a color profile in an output file and you raise the odds that programs using the file will read its color information correctly.

Which rendering intent After Effects picks follows from the output color profile you choose. Most output types get relative colorimetric (with black point compensation) as the rendering intent; output to film negative gets absolute colorimetric.

For a single output item, checking Preserve RGB on the Output Module Settings dialog box's Color tab blocks its colors from converting out of the working color space. RGB numbers survive under this option; color appearance does not. Switching color management off for one footage item helps when that item isn't bound for visual display but instead serves as a control layer — a displacement map, say.

In the Render Queue panel, click the underlined text beside the render item's Output Module heading.

On the Output Module Settings dialog box's Color tab, choose a value from the Output profile menu.

To confirm the conversion is the one you're after, check the dialog box's Description area, then click OK.

## See also

- [Application](script-application.md)
