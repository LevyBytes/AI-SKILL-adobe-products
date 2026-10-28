# Crop to a region of interest

When you'd like to render only a slice of the composition frame, mark out a region of interest within the Composition panel. After that, switch on the Region of Interest option in the Output Module Settings dialog box ahead of rendering.

Note

Trimming an odd number of pixels off the top of a field-rendered movie flips the field order around. Say you crop a single row of pixels from the top of a movie set to Upper Field First field rendering; the field-rendering order then turns into Lower Field First. Bear in mind that cropping pixels off the top means you have to pad the movie's bottom row to hold the original size. And if losing one scan line doesn't bother you, this trick lets a single render output two movies, each carrying a different field order.
