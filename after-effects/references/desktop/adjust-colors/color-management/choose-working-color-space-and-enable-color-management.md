# Choose Working Color Space and enable color management

Switching color management on for a project comes down to picking a Working Color Space for it on the Color tab of the Project Settings dialog box.

The Working Color Space setting governs how color gets managed across your whole project.

Per-footage-item color management is something you handle through the Interpret Footage dialog box or the interpretation rules file.

Through the Interpret Footage dialog box, you handle a range of settings for imported media, color management among them.

Per-output-item color management is something you handle in the Output Module Settings dialog box.

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
