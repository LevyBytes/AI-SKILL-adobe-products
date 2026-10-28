# Warp Stabilizer borders and framing

Borders

The Borders settings control how the borders — that is, the moving edges — get handled on footage that's been stabilized.

Framing

Governs how the edges turn out in a stabilized result. Framing accepts any one of these:

- Stabilize Only: Shows the whole frame, the moving edges included. Stabilize Only reveals just how much effort goes into stabilizing the image. Going with Stabilize Only leaves you free to crop the footage by other means. Choosing it disables the Auto-scale section along with the Crop Less <-> Smooth More property.
- Stabilize, Crop: Trims the moving edges but doesn't scale. Stabilize, Crop matches what you'd get from Stabilize, Crop, Auto-scale with Maximum Scale set to 100%. Turning it on disables the Auto-scale section, though the Crop Less <-> Smooth More property stays enabled.
- Stabilize, Crop, Auto-scale (default): Trims the moving edges and scales the image back up to fill the frame again. Properties within the Auto-scale section drive that automatic scaling.
- Stabilize, Synthesize Edges: Plugs the empty space left by the moving edges with material drawn from earlier and later frames (governed by Synthesizes Input Range in the Advanced section). Picking it disables the Auto-scale section along with Crop Less <-> Smooth More.

Note

Artifacts can crop up wherever there's edge-of-frame movement that has nothing to do with camera movement.

Auto-scale

Shows the auto-scale amount in effect and lets you cap how much auto-scaling occurs. Switch Auto-scale on by setting framing to Stabilize, Crop, Auto-scale.

- Maximum Scale: Caps how far a clip can be scaled up for stabilization.
- Action-Safe Margin: A non-zero value carves out a border around the image's edge that you figure won't be seen, so auto-scale leaves it alone rather than filling it.

Additional Scale

Scales the clip up with the same outcome as scaling through the Scale property under Transform, yet sidesteps an extra resampling pass on the image.

Related: [Warp Stabilizer analysis and stabilization](warp-stabilizer-settings.md).
