# Reshape effect

With the Reshape effect, one shape on a layer morphs into a different shape, hauling the image beneath it along and distorting that image to match the contours of the new region. To mark off the region you intend to distort, you build or bring in as many as three masks: a source mask, a destination mask, and an optional boundary mask.

This effect works with 8-bpc and 16-bpc color.

Original including three masks (upper-left), and with variations of Reshape applied (lower-left and right)

Out of the box, the role each mask plays — source, destination, or boundary — is handed out by After Effects according to the sequence in which you draw or import them, though you're free to designate other masks instead. Give every mask a closed path. Each of the three masks has to sit on the layer where the Reshape effect is applied, but copying masks over from a different layer is allowed.

Source Mask

This is the mask holding the image region you intend to reshape. When left unspecified, the second mask you created is what After Effects treats as the Source mask. A red outline marks the source mask within the Composition and Layer panels.

Destination Mask

This mask sets the shape the finished image takes. When left unspecified, the third mask you created is what After Effects treats as the Destination mask. A yellow outline marks the destination mask within the Composition and Layer panels.

Boundary Mask

Sets which portion of the image gets reshaped — nothing beyond the boundary is touched. When left unspecified, the first mask you created is what After Effects treats as the Boundary mask. A blue outline marks the boundary mask within the Composition and Layer panels.

Percent

How much reshaping happens. The value comes in handy for building partial distortions that grow over time.

Elasticity

Sets how tightly the image tracks the shape the curve lays out. Stiff behaves like cold rubber, letting the image distort as little as possible, while Super Fluid behaves like hot rubber, letting the image distort freely; the remaining settings sit somewhere in between. Settings toward the more fluid end take longer to render. When the finished image fails to track the curve the way you expected, lean on these elasticity guidelines:

Stick with the stiffest setting that still avoids a polygonal image. Bump the elasticity up a notch when the finished image comes out polygonal even though the curves themselves are smooth.

Reach for Stiff, Less Stiff, or Below Normal when the source and destination masks resemble each other in shape and curve gently (a handful of curved segments that swing direction sharply).

Reach for Normal, Absolutely Normal, or Above Average when the source and destination masks differ and curve only mildly.

Reach for Loose, Liquid, or Super Fluid when the masks differ and curve extremely.

Correspondence Pairs

Displays how many points on the source mask are paired with, or mapped onto, points on the destination mask. Showing up in the Composition panel, these points govern how the distortion interpolates across space. For fine control over the distortion, you can add, remove, or reposition the points on either mask.

Correspondence points are repositioned with the Selection tool, while you add and remove them using the Add Vertex and Delete Vertex tools — held active by pressing the Alt (Windows) or Option (macOS) keys. Correspondence points can only be handled while the effect instance sits selected in the Effect Controls panel.

A mask may carry any number of correspondence points, yet the more it carries, the longer the effect needs to render. When the distortion comes out twisted, drop in extra correspondence points at telling spots along the masks. (Twisting can crop up when the arc lengths of the curves separating correspondence points differ too much.)

Interpolation Method

Sets how After Effects works out the distortion for each video or animation frame across the gap between keyframes, or when no keyframes are present.

Discrete

Needs no keyframes since it computes the distortion at every frame. Discrete delivers the most precise results but eats up more rendering time.

Linear

(Default) Needs two or more keyframes and runs a straight-line interpolation across them. Linear yields even changes between keyframes and abrupt ones at the keyframes themselves.

Smooth

Needs three or more keyframes and approximates the distortion with cubic curves, yielding distortions that move gracefully.
