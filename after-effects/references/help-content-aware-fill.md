# Content Aware Fill

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on Oct 14, 2024

Turn to this article to find out how removing unwanted objects from your video is handled by the Content-Aware Fill panel.

Pulling an unwanted object or region out of a video tends to be slow and fiddly. The Content-Aware Fill feature, though, lets you strip away things you don't want — mics, poles, people — in just a handful of steps. Built on Adobe Sensei, the feature carries a sense of time: it clears the area you pick and studies frames as they progress, then synthesizes fresh pixels drawn from elsewhere in the sequence. Mask off a region and After Effects fills it on the spot with new image detail borrowed from surrounding frames.

To help the fill sit seamlessly against the rest of the picture, the tool hands you that option. Packed into the Content-Aware Fill panel are assorted options for clearing unwanted objects and filling areas that have gone transparent.

## The Content-Aware Fill panel

Bring up the content aware fill panel through Windows > Content-Aware Fill.

Strip unwanted objects out of the footage with little fuss, and let the fill melt smoothly into the frames around it.

Strip unwanted objects out of the footage with little fuss, and let the fill melt smoothly into the frames around it.

- Fill Target: the preview showing the region Content-Aware Fill is studying. A pink outline marks off the transparent area.
- Alpha Expansion: reach for this to grow the area being filled. Precise masking isn't something Content-Aware Fill demands, and results can improve when the region takes in pixels beyond the object you're pulling out.

  - Object: pulls an object out of the footage. It packs the transparent area with pixels gathered from the current frame and its neighbors. By estimating how the scene behind the object moves, it lands on suitable color values. It shines on moving subjects — a car traveling a road, say.
  - Surface: swaps out an object's surface. Much like Object, it draws pixels from neighboring frames, but it leans on the motion estimated in the comp beneath the transparent area. Save it for surfaces that stay flat and still — a stain on a shirt, a sign on a building.
  - Edge Blend: feathers the edge pixels around the hole. It packs the transparent area by sampling pixels along its border, mixing them together, and renders quickly. It's the pick for static objects sitting on textureless surfaces, such as text on paper.

- Lighting Correction: switch this on to cope with shifting light across your footage. Folding lighting correction into the fills lets you cleanly strip objects from footage whose lighting jumps frame to frame. Three correction strengths are on offer – Subtle, Moderate, and Strong. A good opening move is Strong; should it overcorrect the footage, drop down to Moderate or Subtle.
- Range: pick whether the fill layer renders only over the work area or across the whole composition. Held to the work area, Content-Aware Fill is barred from drawing in content beyond it.
- Create Reference Frame: builds a one-frame fill layer frame and opens it inside Photoshop. Reference frames exist to show Content-Aware Fill what the fill layer ought to look like. Suppose a video has a busy background and Content-Aware Fill can't deliver what you're after — lean on Photoshop tools like clone and patch to craft a better outcome on the reference frame. Once that's set, generate a fresh fill layer. Content-Aware Fill carries the pixels off the reference frame and onto new frames in the fill layer. On certain shots you might lay down several reference frames wherever the lighting or camera angle shifts. Bear in mind any other method of making single-frame layers can steer content-aware fill too. It honors whatever sits in those layers as a guide. This just offers a shortcut for doing so.
- Generate Fill Layer: spins up a new fill layer. Down at the panel's foot, analysis and rendering progress show up. Content-Aware Fill puts the frame beneath the Current-Time Indicator (CTI) first in line for analysis and rendering. As the fill renders, you can slide the CTI onto another frame to bump it up the queue, which lets you judge whether things look right before the whole fill layer finishes.

## How to use Content-Aware Fill

Inside the Content-Aware Fill panel sit several features for cleanly stripping unwanted objects out of your video. Not every one of them, though, earns its keep in every scenario.

Reach for whatever method suits to open up transparent areas across your composition.

You might, for instance, mask around an object or region you mean to replace and switch that mask to Subtract mode.

1. Draw a mask around the object you're removing via the Mask option found under the Layers menu.
   Open the Content-Aware Fill panel by selecting Windows > Content-Aware Fill.

Within the Content-Aware Fill panel, pick the Fill Method and dial in the Range you'd like After Effects to study. Then hit Generate Fill Layer; that produces the fill and drops a Fill layer atop the chosen layer in the Timeline panel. Inside the layer are the image sequences After Effects works through as it builds a fill layer.

## Lighting Correction in Content-Aware Fill

Cope with shifting light in your footage more gracefully thanks to the upgraded Content-Aware Fill. It lets you cleanly lift objects out of footage marked by abrupt lighting swings and come away with results that read as more lifelike, free of jarring artifacts. Leave lighting correction off and Content-Aware Fill clings to the reference frame, paying no mind to any change in lighting.

Three strength levels come with Lighting Correction:

- Subtle: the pick for footage whose lighting barely shifts.
- Moderate: suited to lighting that swings around to a middling degree.
- Strong: reserved for footage hit by heavy lighting shifts.

With Lighting Correction switched off, the old Content-Aware Fill sticks to the reference frame and pays lighting changes no mind. That suits footage whose lighting holds steady. As things stand, Content-Aware Fill lifts only local detail from each image, then works out some global tweaks to settle that detail into the target frame. Run lighting correction on footage carrying lighting swings — shadows, highlights, lens flares, misread auto-exposure shifts — and the pixels dropped into the hole come out the wrong color, so the result looks anything but clean.

This feature hands you the option of correcting fill lighting right inside Content-Aware Fill, much like the fill layer it actually produces. That does away with churning out several fill layers to get it right, and it pays off for shifts in lighting and color. Switch Lighting Correction on and Content-Aware Fill returns a fill layer that blends seamlessly into the rest of the footage. The Fill layer comes back lighter, yet holds the same quality.

None of this drags performance down compared with leaving lighting correction off. Working footage with uneven lighting actually goes faster overall, since cleaning up the results no longer demands extra steps.

## Work with Lighting Correction

Kick off by studying the shot. Take stock of how the light shifts and where things move, then settle on what has to be masked away.

Out of all the Fill Methods, Lighting correction is the one you can skip for Edge Blend.

Reach for Strong first. Should it pile too much correction onto the footage, ease down to Moderate or Subtle.

With the settings in place, go ahead and select Generate Fill Layer.

## Best practices to work with Lighting Correction

Strong can stumble on footage with flickering light — grass or sandy shots that throw back a lot of glare, for example. It may also color correct with too heavy a hand, which only feeds more flicker. When that happens, fall back to Subtle or Moderate strength.

## Examples

Walk through the examples below to watch how the various settings behave across different situations:

## Example 1: Footage with moving camera

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

## Example 2: Footage where the background is a flat surface without much detail

Lean on the first three steps from the Example 1 section to mask off the areas you mean to replace.

Select Window > Content-Aware Fill.

For Fill Method choose Surface, and for Range choose Work Area.

The area to be filled shows up in Fill Target. Hit Generate Fill Layer and leave After Effects to render the frames.

## Example 3: Work with your footage in Photoshop

Some footage won't come out right from Content-Aware Fill on its own — shots with water, or patches of mixed light and texture, for instance. When that's the case, you can lean on Adobe Photoshop tools such as Clone Stamp to polish the footage.

Note

Make sure you have Photoshop installed on your machine.

The example above has us taking the girl out of footage whose background carries mixed light and texture.

Run through the earlier example's steps to mask off the girl, then set the Fill Method to Object.

1. Frame with the girl masked out.
   With the mask done, turn to the Create Reference Frame option in the Content-Aware Fill panel.

For a Reference Frame, once the mask is in place, pick the frame where the object looms largest in the shot. Here, go with the first frame. Hit the Create Reference Frame button to ship that frame — mask and all — over to Photoshop. A reference frame is a single still clean plate you paint yourself, teaching the Content-Aware Fill algorithm which pixels to drop into your masked region.

3. Open reference frame in Photoshop.
   Paint the fill in however suits you. Here, the Clone Stamp tool gives the finer results. Once the edits are made, save the footage. Steer clear of Save As; always Save the changes under the same name and location. Otherwise Photoshop spawns a new file that After Effects won't reference directly.

Reopen After Effects and the Content-Aware Fill panel sets your reference frame on a layer beneath your original shot. That layer picks up the paint job you saved out of Photoshop and fills the object mask, for that frame alone, with your Photoshop Reference Frame.

Yet another option to consider is the Photoshop Content Aware Fill. or Retouch and repair photos.

To render Content-Aware Fill off your corrected frame, click the Generate Fill Layer button.

## Content-Aware Fill settings

Reach the Content-Aware Fill Settings dialog by clicking the menu icon (the three bars) along the Content-Aware Fill panel's title bar, then picking Content-Aware Fill Settings.

- Output Depth: How many bits per channel (8-, 16-, or 32-bpc) the fill layer sequence files are written with. Unless changed, Output Depth picks up whatever color depth the project uses.
- Output Location: Decides the destination where After Effects stores the fill layer sequence files. Out of the box, those files land in a folder called Fills that sits alongside the project file.
- Path Type: Choosing Project Relative stores the files at a spot defined relative to the project file, whereas Absolute pins down the folder's complete path.
- Path: Where the folder lives. Under Absolute, supply the folder's full path; under Project Relative, give the path measured from the project file. Within the path, one dot (.) stands for the folder holding the project file, and a pair of dots (..) moves a level up or down.
- Create Photoshop Reference Frame: Writes reference frames to a PSD and launches it in Photoshop. This is on by default. Switch it off and the reference frame is instead written as a PNG (8- or 16-bpc) or EXR (32-bpc) and opened in whatever application the system defaults to for those formats.
- Create Photoshop Sequence for Output: Writes fill layer sequences as PSD files. This sits off by default. When off, fill layer sequences are written instead as PNG (8- or 16-bpc) or EXR (32-bpc) files.
- Auto-manage Unused Fill Footage: Each time a fresh fill layer is produced, you're prompted about whether to discard fill layer footage no composition is using. Off by default.

## Delete Unused Fill Footage

You can clear out fill layer footage that no composition is drawing on by hand: click the menu icon along the Content-Aware Fill panel's title bar and pick Delete Unused Fill Footage.

## Important points and tips

- Mask

  - Roto Brush
  - Eraser Tool
  - Keying methods such as the Keylight method
  - Keyframing

- Got 4K footage living in an HD comp? For smoother performance, work from footage that transcoding has already scaled down.
- Tackle trickier subjects piecewise. A person and their shadow, say, come out cleaner when you take each one out on its own rather than both together.
- Processing a small mask finishes quicker than processing a big one.
- Expect the results to vary on intricate moving textures such as water, or wherever light and texture shift around a lot.
- A feathered mask tells Content-Aware Fill to merge the filled area into the original footage according to that alpha value (its semi-transparency). That proves handy as you work in the panel, and it produces a visible seam between the filled area and the surrounding original content.
- Running Generate Fill Layer renders out image sequences that get dropped onto the timeline. Those files can eat up a fair amount of drive space, which scales with the footage type and how long your sequence runs.
- Now and then Content-Aware Fill on its own won't pull objects out cleanly. For sharper results, build a reference frame, bring it into Photoshop, and tune it with the tools there.
- While you're filming, think ahead about your shot's background and foreground so post-production editing eats up less time.

## More like this

- Mask Tracking
- Creating shapes
- Roto Brush and Refine Matte
- Overview of shape layers, paths, and vector graphics
