# Work with Grain effects

In After Effects, learn how noise and grain effects are added, removed, and controlled.

Nearly every digital image taken from the real world carries grain or visual noise, introduced by the recording, encoding, scanning, or reproduction steps and by the gear used to make the picture. Think of the soft static in analog video, compression artifacts out of digital cameras, halftone patterns left by scanned prints, CCD noise from digital sensors, and the telltale speckle of chemical photography that we call film grain.

Grain isn't automatically a problem — it's frequently introduced on purpose to set a mood or bind elements together, for instance laying film grain over a computer-generated object so it sits convincingly inside a photographed scene. That said, noise can be undesirable for aesthetic reasons too. Archival clips or high-speed photography can look distractingly grainy; compression artifacts or halftone patterns from digital sources can spoil a picture; and noise can get in the way of technical work such as bluescreen compositing.

There are technical motivations for cutting noise as well. Compression routines, for one, tend to produce smaller files when fed cleaner material, which makes noise reduction a worthwhile preprocessing step ahead of jobs like DVD authoring and video streaming.

With the Add Grain, Match Grain, and Remove Grain effects you can work on grain that is spread fairly uniformly across a whole image. What grain effects can't repair are defects confined to a handful of pixels — dust, salt-and-pepper noise, or analog video dropouts, for example.

- The Add Grain effect builds fresh grain from scratch rather than sampling what's already there; it leans on parameters and presets tied to assorted film stocks to synthesize separate grain types.
- The Remove Grain and Match Grain effects take two passes to work grain without touching an image's edges, sharpness, or highlights. The grain is sampled first, either by hand or automatically; then it's analyzed and captured as a mathematical model that the effect draws on to add, strip away, or match the grain.

Remove Grain effect

Cuts down unwanted noise and grain in a clip so the footage reads cleaner and smoother.

Add Grain effect

Lays synthetic film grain over footage to build texture or hit a particular look.

Match Grain effect

Reads the grain off one clip and transfers it onto another so the two clips line up visually.
