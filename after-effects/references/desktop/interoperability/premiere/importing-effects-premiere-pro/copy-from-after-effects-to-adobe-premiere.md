# Copy from After Effects to Adobe Premiere

A layer built on a footage item in an After Effects composition can be copied and pasted into a Premiere sequence. Premiere turns such layers into clips within the sequence and pulls the source footage item into the Project panel. Where the layer holds an effect Premiere also supports, Premiere brings that effect across with all of its settings and keyframes.

Nested compositions, Photoshop layers, solid-color layers, and audio layers can be copied as well. Adobe Premiere Pro turns nested compositions into nested sequences and solid-color layers into color mattes. Shape, text, camera, light, and adjustment layers, however, can't be copied over to Premiere.

Start Adobe Premiere (it has to be running already by the time the layer gets copied over in After Effects).

Select a layer (or layers) from the After Effects Timeline panel.

Should you pick several layers that don't overlap in After Effects, they all land on a single track in Premiere. Where the layers do overlap in After Effects, the sequence in which you select them sets how they're stacked across tracks in Premiere. Every layer goes onto its own track, with the layer selected last ending up on Track 1. Select from top to bottom, for instance, and they come out reversed in Premiere, the bottom-most layer sitting on Track 1.

Choose Edit > Copy.

In Premiere, open a sequence in the Timeline panel.

Move the current-time indicator to the desired location, and choose either Edit > Paste or Edit > Paste Insert.
