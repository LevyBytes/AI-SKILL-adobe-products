# Crop the composition

When you only need to shave a movie down by a handful of pixels, this is the way to go. Reach for the Crop options in the Output Module Settings dialog box. Keep in mind that cropping trims away part of the movie, so anything you'd centered in the composition can end up off-center unless you crop both opposing edges by the same amount.

Note

There are a few special situations where After Effects crops on its own rather than scaling, specifically when the output movie's dimensions don't line up with the composition's. Take building a 720x480 movie at a pixel aspect ratio of 0.91 or 1.21 out of a 720x486 composition: here After Effects crops instead of scaling.


To grow a movie by a few pixels, bump the size up with negative values in the Crop options of the Output Module Settings dialog box. To pad a movie's size by 2 pixels, for one, the value –2 goes into that dialog's Cropping section. Bear in mind that negative cropping pads only one side of a movie, so anything originally centered in the composition can drift off-center once the movie is cropped.

Note

- Padding an odd number of pixels onto the top of a field-rendered movie flips the field order. Add one row of pixels at the top of a movie set to Upper Field First, and its rendering order inverts — now it's Lower Field First. Keep in mind that adding pixels at the top means you must crop the bottom row to hold the original size.
- Adobe Photoshop gives you precise command over the resampling methods used when scaling images. For that fine resampling control, export frames out to Photoshop, change the image size there, and then bring the frames back into After Effects.
