# Interpret a footage item by assigning an input color profile

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
