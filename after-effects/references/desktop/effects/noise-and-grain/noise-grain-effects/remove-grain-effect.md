# Remove Grain effect

Reach for the Remove Grain effect to strip out grain or visible noise. It leans on advanced signal processing and statistical estimation to rebuild the image as it would appear free of grain or noise. Plenty of other approaches — a gentle Gaussian Blur effect or the Median effect, say — knock down how visible the noise is, but you pay for it with an inevitable loss of sharpness and highlights. The Remove Grain effect goes the other way, telling fine image detail apart from grain and noise and holding onto that detail as fully as it can.

Several options come with the Remove Grain effect for striking a careful balance between cutting noise and keeping the image sharp. On top of that, the Remove Grain effect can study frame-to-frame differences to push noise reduction and sharpness further; because that work plays out across time, it goes by the name temporal filtering.

Note

Solid degraining rests on solid noise sampling. How the automatic sampling turns out hinges on the image content and the kind of noise. You're also free to change the count, size, and placement of the samples to land the best result for a given image.

A statistical algorithm drives the Remove Grain effect's Temporal Filtering controls, blending the current frame with the frames before and after it. These controls work especially well at clearing compression artifacts out of DV or video footage.

Judging this filter's results properly means viewing them in real time — either by reviewing them or by rendering a movie out to a file.

Tip

For a faster Remove Grain effect preview, work through the Remove Grain controls in order within the Effect Controls panel. The leanest workflow, specifically, is to nail down effective degraining settings first and save the final three controls for last.

Supported color depths are 8-bpc and 16-bpc.

Original image

Remove Grain effect applied
