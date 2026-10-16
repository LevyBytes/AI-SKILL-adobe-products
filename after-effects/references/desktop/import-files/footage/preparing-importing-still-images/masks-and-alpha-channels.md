# Masks and alpha channels

Adobe Photoshop allows a transparent area plus one optional layer mask (alpha channel) per layer in a file. Those layer masks let you set which parts of a layer stay hidden or get revealed. Import a single layer and After Effects folds its layer mask (when there is one) into the transparent area, bringing that layer mask in as a straight alpha channel.

Bring a layered Photoshop file in as a merged file and After Effects fuses every layer's transparent areas and layer masks into a single alpha channel premultiplied with white.

Importing a Photoshop file as a composition turns vector masks into After Effects masks. From there you can edit and animate those masks right inside After Effects.
