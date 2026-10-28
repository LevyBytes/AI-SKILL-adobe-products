# Example 1: Footage with moving camera

Reach for the Pen tool to trace a mask around the boat. You'll get the best results by hugging the object closely yet leaving a little room around it, giving After Effects more to study across the frames.

Here's a simple way to draw a mask in a few steps:

1. Over in the Timeline panel, click the layer, then grab the Pen tool.
2. Drop key points along the outline you mean to mask. Close it off by selecting the start point once more.
3. Reach for the Selection tool to refine the mask points. Select and drag them into place.
4. Want smoother curves on the mask? Select around each point to shape the curve.
5. With the masking finished, select Subtract.
6. The footage moves, so track the mask to ride along with the boat. Right-click the mask layer and select Track Mask.

Right-click that layer in the Timeline panel and switch its mask mode over to Subtract. After Effects then clears a transparent area where the boat had been.

Open the Content-Aware Fill panel by selecting Windows > Content-Aware Fill.

A range of options fills the panel. For a full rundown of them, see the Content-Aware Fill panel. Go with these settings:

- Set the Fill Method to Object.
- Set the Range to Entire Duration.

Hit Generate Fill Layer. After Effects studies each frame, packs the transparent area, and drops a Fill layer into the Timeline panel. That layer holds the resulting run of images After Effects has worked through. Its name spells out how many images sit in the sequence.

Footage shot with a moving camera is where this fill method earns its keep, since it swaps the object out wholesale for whatever lies behind it. It packs the transparent area with pixels lifted from the current frame and its neighbors, turning out a frame that looks seamless.
