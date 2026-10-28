# Benefits of color management

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
