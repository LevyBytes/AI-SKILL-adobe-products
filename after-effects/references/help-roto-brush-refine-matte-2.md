# Roto Brush Refine Matte (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Tips to work with Roto Brush

As you draw strokes to mark out a foreground object with the Roto Brush Tool, start along the center of the object's features. To take an arm, run your stroke down the skeleton rather than along the outline. After Effects can then reason out from those areas where the boundaries fall.

Draw a Roto Brush stroke over the wrong patch of the image and you should undo that stroke. But if After Effects reads your stroke wrong and pulls in or leaves out too much of the image, don't undo — keep teaching Roto Brush by drawing more strokes to add or drop regions.

Work with resolution set to Full when using the Roto Brush tool

Fast Previews modes such as Adaptive Resolution sit poorly with Roto Brush, since changing resolutions forces the segmentation data to be recomputed. Drawing a Roto Brush stroke switches Fast Previews modes off.

Run the Roto Brush tool in a composition whose frame rate lines up with that of the layer's source footage item,

When those two frame rates — the composition's and the source footage item's — fall out of step, a warning banner turns up at the bottom of the frame in the Composition panel.

## Why should I use Roto Brush 1?

- Projects built earlier that relied on Roto Brush will continue to load under Roto Brush 1. When a file authored in v17.1.4 or earlier is reopened inside v17.5, its version reverts on its own to the legacy Roto Brush 1.

- Should Next-Gen Roto Brush or Roto Brush 2 fail to give you the line segmentation you're after, switch on the classic controls. That combination forms a hybrid pipeline that draws on the strengths of Next-Gen Roto Brush, Roto Brush 2, and Roto Brush 1 together. The option surfaces only while Version sits at 3.0 or 2.0, and it routes the propagation output from the newer algorithm into the Classic one, yielding tighter propagation control plus richer edge detail. Turning it on re-activates the legacy Roto Brush settings — among them Motion Threshold, Edge Detection, and Motion Damping. With version 1.0 those settings start out active, whereas under version 3.0 and 2.0 you have to switch them on yourself.

## Workflow

The controls native to Roto Brush 1 are off until you switch them on inside Next-Gen Roto Brush and Roto Brush 2; tick the Enable Classic Controls option to bring them in. Working with it follows much the same steps you'd already take in Next-Gen Roto Brush and Roto Brush 2.

Enable Classic Controls option under the Roto Brush & Refine Edge controls.

Enable Classic Controls option under the Roto Brush & Refine Edge controls.

## Points to note

- Pick the frame you begin on carefully. A frame that is sharper and steadier yields stronger propagation.
- Because the Roto brush selection happens exclusively within the Layer panel, make sure your footage is loaded there first.
- Projects built earlier that relied on Roto Brush will continue to load under Roto Brush 1. Open a file made before v17.5 that used the legacy Roto Brush & Refine Edge effect, and its version lands at 1.0. That keeps old projects rendering identically even after you open them in the newer release.
