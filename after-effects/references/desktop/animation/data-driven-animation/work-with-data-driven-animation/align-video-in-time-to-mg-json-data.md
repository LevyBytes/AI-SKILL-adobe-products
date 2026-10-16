# Align video in time to mgJSON data

Shifting video layers by a set number of frames, as declared in an mgJSON file, is handled through the Layer > Time > Align Video to Data command. Reach for it when you need footage to line up in time with the data samples held in a paired mgJSON file. Say you logged data during a race but the footage and the captured data didn't begin at the same moment — supplying an offset lets the two snap into alignment on their own.

Follow these steps to time-align video against mgJSON data:

1. Drop the .mgJSON file into a composition that already holds the layers you want to sync.
2. Highlight both the .mgJSON layer and those target layers.
   Choose Layer > Time > Align Video to Data.

The command only functions when the mgJSON file carries a videoSyncTimeList group, which must list:

- One or more target-layer names (fileName)
- How many frames (frameNumber) to shift each layer relative to where the data layer begins.

For example:

"videoSyncTimeList": [ { "fileName": "sample1.mp4", "frameNumber": 1000 },

{ "fileName": "sample2.mp4", "frameNumber": -1000 }

Each fileName has to match the layer name of a selected layer rather than the layer's source name. Rename a layer that has a source in the composition — turning "sample1.mp4" into "Race Camera 1", for instance — and you'll have to update the matching fileName entry in the mgJSON file too. The layers a fileName points to need not be footage items backed by a source file; solids, nested compositions, and other layer types are equally valid.

A positive frameNumber pushes the target layer leftward, ahead of the data layer; a negative one pushes it rightward, behind the data layer. Set frameNumber to 0 and the target layer's start lines up with the data layer's start.
