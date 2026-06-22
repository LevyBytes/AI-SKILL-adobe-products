# Transition Effects, Rolling Shutter Repair

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Transition effects; The Rolling Shutter Repair effect.

## Transition effects

Search Last updated on Jun 26, 2025

After Effects bundles these third-party effects in this category:

CC Glass Wipe effect

CC Grid Wipe effect

CC Image Wipe effect

CC Jaws effect

CC Light Wipe effect

CC Line Sweep effect

CC Radial ScaleWipe effect

CC Scale Wipe effect

CC Twister effect

CC WarpoMatic effect

See Third-party plug-ins included with After Effects.

### Online resources about transitions and Transition effects

Want to see animation presets turned into custom transitions? Stu Maschwitz's ProLost blog has an entry on exactly that. The page offers the Film Burn animation preset for download — it lends layers a film-like flicker and tacks a film burn transition onto the end of each layer's duration.

On his own website, Chris Zwar shares an example project that leans on the Displacement Map effect, the Turbulent Displace effect, the Texturize effect, and a mix of Blur and Color Correction effects to build a transition where an image surfaces like a watercolor washed onto coarse paper.

Over on the CG Swot website, Dave Scotland walks through a video tutorial that puts the Fractal Noise effect to work creating a transition from one still image to another.

### About Transition effects and the Transition Completion property

A Transition Completion property belongs to every Transition effect save the Iris Wipe effect. Set that property to 100% and the transition has finished: the layers beneath become visible while the layer holding the effect goes fully transparent. The usual approach is to animate the property from 0% up to 100% across the duration of the transition.

### Block Dissolve effect

With the Block Dissolve effect, a layer vanishes in randomly placed blocks. You can dial in block width and block height — in pixels — separately. Draft quality positions the blocks to pixel precision and gives them crisp edges; Best quality allows subpixel positioning along with soft edges.

Color support here covers 8-bpc and 16-bpc.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

### Card Wipe effect

Note

For details on the properties that the Card Wipe and Card Dance effects have in common, see Common Lighting controls and Material controls.

Picture a cluster of cards showing one image and then turning over to reveal a second — that is what this effect simulates. With Card Wipe you govern how many rows and columns of cards there are, which way they flip, and the direction the transition runs (a gradient can even set the flip order). Layering in randomness and jitter pushes the look toward realism. Tweaking the rows and columns also lets you produce venetian blind and Chinese lantern effects.

Many of the Card Wipe effect's controls are shared with the Card Dance effect.

Color support here is 8-bpc.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

### Basic controls

Transition Width

How wide the band is where the original image actively gives way to the new one.

Back Layer

The layer showing up in pieces on the backs of the cards. Any layer in the composition will do, and its Video switch may even be off. Should that layer carry effects or masks, precompose it first.

Rows & Columns

Sets how the row count and column count relate. Independent keeps both the Rows and Columns sliders live. Columns Follows Rows leaves only the Rows slider live; pick this and the column count always equals the row count.

Rows

How many rows there are, to a ceiling of 1000.

Columns

How many columns there are, to a ceiling of 1000 — unless Columns Follows Rows is selected.

Note

Because rows and columns always spread evenly over a layer, you won't see oddly shaped rectangular tiles hugging a layer's edges — unless an alpha channel is in play.

Card Scale

How big the cards are. Below 1, the cards shrink and the layer underneath peeks through the gaps; above 1, the cards grow and overlap into a blocky mosaic.

Flip Axis

Which axis each card pivots on as it flips.

Flip Direction

Which way the cards turn as they flip about their axes.

Flip Order

Which way the transition travels. A gradient can also set a custom flip order: cards turn over first where the gradient reads black and last where it reads white.

Gradient Layer

The gradient layer used for the Flip Order. Any layer in the composition is fair game.

Timing Randomness

Scrambles the transition's timing. Leave this at 0 and the cards flip in sequence; raise it and the flip order grows steadily more random.

Camera System

Picks which positions render the cards' 3D images — the effect's own Camera Position properties, its Corner Pins properties, or the default composition camera and light positions.

### Camera Position controls

X Rotation, Y Rotation, Z Rotation

Spin the camera about the matching axis. Lean on these controls to view the cards from above, from the side, from behind, or from any angle you like.

X, Y Position

The camera's placement within x,y space.

Z Position

Where the camera sits on the z axis. Lower numbers pull it nearer the cards; higher numbers push it farther away.

Focal Length

How far the camera stands from the image. Smaller numbers zoom in.

Transform Order

The sequence in which the camera turns about its three axes, plus whether that rotation happens before or after the camera is placed by the other Camera Position controls.

### Corner Pins controls

Corner Pinning offers a second way to control the camera. Turn to it when compositing the effect's result onto a scene that sits on a flat surface tilted relative to the frame.

Upper Left Corner, Upper Right Corner, Lower Left Corner, Lower Right Corner

Where to attach each of the corners of the layer.

Auto Focal Length

Manages the effect's perspective throughout the animation. Leave Auto Focal Length off, and the focal length you set is used to work out a camera position and orientation that drop the layer's corners onto the corner pins where it can; failing that, the layer collapses to its outline drawn between the pins. Switch Auto Focal Length on, and the focal length needed to line up the corner points is used where possible; failing that, the right value is interpolated from neighboring frames.

Focal Length

Takes precedence over the other settings when the results you've got fall short. Dial in a Focal Length that wouldn't actually match the pins in their current configuration and the image can turn strange — oddly sheared, say. But when you already know the focal length you're aiming to match, this control is the simplest path to correct results.

### Jitter controls

Layering on jitter (Position Jitter and Rotation Jitter) lends this transition extra realism. Jitter acts on the cards before, during, and after the transition runs. To confine it to the transition alone, begin with the Jitter Amount at 0, animate it up to whatever level you want as the transition plays, then animate it back to 0 as the transition finishes.

Position Jitter

Sets how much and how fast the jitter is along the x, y, and z axes. The amount of stray movement comes from X, Y, and Z Jitter Amount, while X, Y, and Z Jitter Speed set the jitter speed tied to each Jitter Amount option.

Rotation Jitter

Sets how much and how fast the rotational jitter is around the x, y, and z axes. The degree of rotational jitter on an axis is set by X, Y, and Z Rotation Jitter Amount — a value of 90° lets a card swing up to 90° either way — and the speed of that rotational jitter comes from the X, Y, and Z Rot Jitter Speed values.

### Gradient Wipe effect

What the Gradient Wipe effect does is turn pixels in the layer transparent according to the luminance of the matching pixels in a second layer, the gradient layer. Where the gradient layer is dark, the corresponding pixels go transparent at a lower Transition Completion value. Take a plain grayscale gradient running black on the left to white on the right: as Transition Completion climbs, it uncovers the layer below from left to right.

Both 8-bpc and 16-bpc color are handled.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

A still image or a moving one can serve as the gradient layer, and it has to live in the same composition as the layer you apply Gradient Wipe to.

There are plenty of routes to making gradient layers — the Ramp effect, for one, or building them in Photoshop or Illustrator.

Transition Softness

How gradual the transition is for each pixel. At 0%, pixels in the layer carrying the effect are either fully opaque or fully transparent. Above 0%, pixels turn semitransparent through the middle stages of the transition.

Gradient Placement

How the gradient layer's pixels map onto the pixels of the layer carrying the effect:

Tile Gradient

Lays down several tiled copies of the gradient layer.

Center Gradient

Drops one copy of the gradient layer at the layer's center.

Stretch Gradient To Fit

Stretches the gradient layer in both dimensions so it spans the layer's whole area.

Invert Gradient

Flips the gradient layer's influence: now its lighter pixels produce transparency at a lower Transition Completion value than its darker ones do.

### Iris Wipe effect

A radial transition that opens onto an underlying layer is what the Iris Wipe effect produces. You set how many points form the iris within a range of 6 to 32 points, and you decide whether an inner radius comes into play. Turn on Use Inner Radius and you can set both Inner Radius and Outer Radius; the iris stays hidden whenever Outer Radius, Inner Radius, or both equal 0. Set Outer Radius and Inner Radius to the same value and the iris is at its roundest.

Among the Transition effects, Iris Wipe alone lacks a Transition Completion property. To animate it open and reveal the layers beneath, animate the Radius properties instead.

Color support here spans 8-bpc and 16-bpc; from After Effects CS6 onward, 32-bit color works too.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

### Linear Wipe effect

A plain linear wipe of a layer in a direction you choose is what the Linear Wipe effect carries out. At Draft quality the wipe's edge gets no anti-aliasing; at Best quality that edge is anti-aliased and the feather comes out smooth.

Wipe Angle

Which way the wipe heads. Set it to 90°, say, and the wipe runs from left to right.

8-bpc and 16-bpc color are both supported; with After Effects CS6 or newer, the effect also runs in 32-bit color.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

### Radial Wipe effect

Using a wipe that circles a point you specify, the Radial Wipe effect uncovers an underlying layer. At Best quality the wipe's edges are anti-aliased.

Start Angle

Where the transition kicks off, given as an angle. At a start angle of 0°, it begins from the top.

Wipe

Sets whether the transition runs clockwise, counterclockwise, or switches back and forth between the two.

Supported color depths are 8-bpc and 16-bpc; once you're on After Effects CS6 or later, 32-bit color is available as well.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

### Venetian Blinds effect

By way of strips set to a direction and width you specify, the Venetian Blinds effect uncovers an underlying layer. The strips animate with pixel precision at Draft quality and with subpixel precision at Best quality.

Supported color depths are 8-bpc and 16-bpc.

Original (upper-left), and with effect applied (lower-left and right)

Original (upper-left), and with effect applied (lower-left and right)

### More like this

- About animation, keyframes, and expressions
- Randomness and random seeds
- Common Lighting controls and Material controls

## The Rolling Shutter Repair effect

Search Last updated on May 24, 2023

Turn to the Rolling Shutter Repair effect to clear up distortion that an unsteady camera and a moving subject leave behind.

DSLRs and other cameras built on CMOS sensors share a common snag. A digital camera with a CMOS sensor usually has a rolling shutter, meaning it grabs each video frame one scan line at a time rather than all at once. Because a lag separates the reading of one line from the next, the various parts of a single frame are not captured at the very same instant. Move the camera or let the subject move during that window, and the rolling shutter introduces distortion.

Found in the Distort effect category, the Rolling Shutter Repair effect serves to strip away these distortion artifacts.

### Properties under the Rolling Shutter Repair effect

Rolling Shutter Rate

Sets the percentage of the frame rate — that is, the scan time. DSLRs tend to fall in the 50-70% range, while the iPhone runs close to 100%. Nudge this value until the distorted lines straighten to vertical.

Scan Direction

Sets the direction in which the rolling shutter does its scanning. Top-to-bottom across the sensor is the norm for most cameras, though nothing stops you mounting a camera upside down or, with a smartphone, rotating it all the way around.

Advanced section

- Method: Tells whether the unwarped frames come from optical-flow analysis and pixel-motion retiming (Pixel Motion) or from a sparse point-tracking and warping approach (Warp).
- Detailed Analysis: Runs a finer point analysis within the warp. Offered with the Warp method.
- Pixel Motion Detail: Controls the resolution at which the optical-flow vector field gets computed. Offered with the Pixel Motion method.

Note

The Warp Stabilizer effect does contain a rolling shutter repair component, yet the standalone version offers more controls. And at times you'll want to fix a rolling shutter problem without needing to stabilize the shot at all.
