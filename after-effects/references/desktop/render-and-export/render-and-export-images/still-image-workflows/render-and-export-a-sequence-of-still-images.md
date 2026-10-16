# Render and export a sequence of still images

A rendered movie can go out as a run of still images, each movie frame written to its own still-image file. Render one movie over a network of computers and the output always takes the form of a still-image sequence. Sequences of still images feed neatly into many 3D animation programs. For moving visual elements from After Effects into Flash Professional, sequences of PNG files are frequently a solid pick.

Building a movie bound for film means producing a sequence of still images that a film recorder can then transfer to film.

A run of PSD files makes a handy route for handing frames off to Photoshop for cleanup and editing. The image sequence can then be imported back into After Effects.

To name the output for a still-image sequence, what you really supply is a file-naming template. Your name has to include pound signs wrapped in square brackets ([#####]). As each frame renders and earns a filename, After Effects swaps the [#####] piece of the name for a number marking that frame's place in the sequence. Specifying mymovie\_[#####].tga, for instance, would name the output files mymovie_00001.tga, filmout_00002.tga, and on down the line.

A still-image sequence can hold no more than 32,766 frames.
