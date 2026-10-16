# Manually reposition noise samples

For the Match Grain or Remove Grain effect, letting the software pick grain or samples on its own usually does the job, but each sample can be hand-placed, resized, or have its number changed. You might reposition samples, for example, when automatic sampling latched onto an even region that's under- or overexposed and tells you nothing about grain structure.

For the Match Grain and Remove Grain effects, noise samples always come off the source layer no matter what effects or masks are already on that layer, and that approach yields more accurate sampling. Should you want the existing effects folded into the samples, precompose or pre-render the source layer along with the effects, then put the grain effect on the source layer that results.

Stay away from sample areas that show any of these traits: sharp edges, color gradients, highlights, textures like grass or water ripples, fine detail like hair or tree leaves, and over- or underexposed regions starved of information.

Within the Effect Controls panel, pick Noise Samples from the Viewing Mode dropdown menu.

The samples turn up as little white squares (24x24 pixels) laid over the source image.

Pick Manual from the Sample Selection dropdown menu inside the Sampling controls group.

To clear the least useful samples off the image, try dropping how high the Number of Samples value sits.

Inside the Noise Sample Points controls group, click a given noise sample's point parameter . A crosshair shows up in the composition, centered on that sample. Click the spot you want in the Composition panel to set the sample.

With the Selection tool, drag the sample point across the Composition panel to wherever you want it.

Type the horizontal and vertical coordinates you want into the Effect Controls panel.

However many sample points are switched on matches the present Number of Samples value.

5. Repeat for each sample point you want to move.
