# Trim, extend, or slip-edit a layer

A layer's duration opens at its In point and closes at its Out point. The stretch between those two is the duration, and the bar running from the In point across to the Out point is the layer duration bar.

Trimming a layer means shifting its In point or Out point so the layer runs for a different length. On a layer built from moving source footage, trimming governs which frames of that source footage item show up in the layer — the In point holds the first frame shown, the Out point the last. Trimming snips nothing from the footage item itself; it only governs which frames the layer plays.

Drawing on a single footage item across several layers, you can trim each one differently to surface different stretches of the source. None of that touches the footage item or the original source file.

Tip

Trimming is done by editing the In Point and Out point inside the Layer panel or the Timeline panel. There's separate guidance on trimming a footage item ahead of building a layer from it in After Effects.

A layer's In point , Out point , and duration values sit along the bottom of the Layer panel. To surface that same data for every layer in the Timeline panel, click the In/Out/Duration/Stretch button down in the lower-left corner of the Timeline panel. The Info panel, too, reports the duration, In point, and Out point of the chosen layer.

The Layer panel states In and Out points in layer time; the Timeline panel states them in composition time. Either way the duration reads the same — unless time-remapping or time-stretching is switched on for the layer.

Plenty of layer types can be stretched to any length, their In points and Out points pushed out beyond where they originally fell. That goes for time-remapped layers, shape layers, layers built on still-image footage items, camera layers, light layers, and text layers. Push a layer back far enough that it crosses into negative layer time (earlier than layer time zero) and a run of hash marks appears along the bottom of the layer bar, flagging the stretches sitting in negative layer time. That flag comes in handy when you've applied effects — Particle Playground or Shatter, say — that lean on layer time to compute their output.
