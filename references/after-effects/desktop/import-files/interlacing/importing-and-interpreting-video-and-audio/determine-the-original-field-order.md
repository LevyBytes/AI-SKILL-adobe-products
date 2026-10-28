# Determine the original field order

For an interlaced video footage item, the field order fixes which of the two video fields (upper and lower) shows first. Draw the upper lines ahead of the lower and the system is termed upper-field first; draw the lower lines ahead of the upper and it's termed lower-field first. On the standard-definition side, lower-field first is common (DV NTSC, for one), whereas plenty of high-definition formats run upper-field first (1080i DVCPRO HD being one example).

Which field shows first carries real weight, all the more so when the fields hold motion. Separate the video fields with the wrong field order and motion stops looking smooth.

Certain programs, After Effects included, tag the field order when they render interlaced video files. Import a tagged video file and After Effects respects the field order tag on its own. That field order can be overridden by applying different footage interpretation settings.

Where a file carries no field order tag, you can match your footage's original field order yourself. When you're unsure which field order interlaced a footage item, the procedure below will tell you.

Select the item in the Project panel.

Select File > Interpret Footage > Main Options.

Select Upper Field First from the Separate Fields menu, and then select OK.

In the Project panel, press Alt (Windows) or Option (macOS) as you double-click the footage to open it in the Footage panel.

If the Preview panel isn't visible, select Window > Preview.

In the Footage panel, find a segment that contains one or more moving areas.

Using the Next Frame button in the Preview panel, step forward at least five frames in the Footage panel. Moving areas should move consistently in one direction. If the moving areas move backward every other frame, the wrong field-separation option has been applied to the footage.
