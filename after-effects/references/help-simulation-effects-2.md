# Simulation Effects (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Rendering controls

The look of the bubbles, their texture and reflection included, falls to the Rendering controls:

Blend Mode

Fixes how transparent bubbles appear where they overlap. Transparent merges the bubbles seamlessly so you see each one through the others. Solid Old On Top drops a younger bubble beneath an older one and kills transparency; reach for it to mimic bubbles drifting toward you. Solid New On Top floats younger bubbles above older ones and likewise kills transparency; reach for it to make bubbles look as if they tumble downhill.

Bubble Texture

Fixes the bubble's texture. Lean on a preset texture or build one yourself. Set View to Rendered to see the texture. To roll your own, pick User Defined and, from the Bubble Texture Layer menu, choose whichever layer should serve as the bubble.

Note

Each preset bubble texture is a prerendered 64x64 image. Zoom past 64x64 and the bubble turns blurry. Sidestep that fuzziness with a higher-resolution custom bubble.

Bubble Texture Layer

Fixes which layer becomes the bubble image. Reach this control by picking User Defined from the Bubble Texture menu. To have the layer surface only as a bubble, switch off its video toggle in the Timeline panel.

Note

Any file type After Effects handles is fair game here. Should you intend to zoom in or run a large bubble size, confirm the layer's resolution is high enough to dodge blurring. Keep in mind the item needn't be an ordinary bubble — make blood cells, starfish, insects, space aliens, or flying monkeys. Anything that's a layer in your composition can serve as a bubble.

Bubble Orientation

Fixes which way the bubble spins. Fixed sends the bubble out of the producer upright and holds it there; use it when the bubble carries built-in highlights and shading, as all the presets do. Physical Orientation knocks and twirls bubbles around by the forces acting on them, yielding a chaotic scene. Bubble Velocity points the bubble along its line of travel; this setting serves flocking-style animations best.

Environment Map

Fixes which layer is mirrored in the bubbles. To reserve a layer solely for the reflection, switch off its video toggle.

Reflection Strength

Dictates how much of the chosen Environment Map shows up reflected in the bubbles. The higher you go, the more the reflection masks the original bubble texture. Reflections land only on opaque pixels, so heavily transparent bubbles, such as the Spit preset, reflect little.

Reflection Convergence

Dictates how far your Environment Map is warped as it's wrapped onto the bubbles. At 0, the map projects flat across every bubble in the scene. Raise it and the reflection bends to follow each bubble's spherical curve.

## Flow Map controls

The map that steers where the foam runs is governed by the Flow Map controls:

Flow Map

Names the layer that dictates the bubbles' heading and speed. Reach for a still image layer; choose a movie as the flow map layer and only its first frame counts. A flow map is a luminance-based height map: white is high, black is low. White isn't boundlessly high — a bubble moving fast enough can clear a white obstacle. Keep the map slightly blurry, since sharp edges breed erratic results. To run bubbles down a canyon, for example, paint a flow map whose rim is white, whose channel is black, and whose walls are a blurry gray; push the bubbles along with wind in whatever direction you like, and those walls hem them in. A soft gradient along the canyon floor can steer the flow direction as well.

Note

When the bubbles ignore the map, turn to the Simulation Quality control. It also helps to blur the flow map a touch so its edges aren't overly abrupt.

Flow Map Steepness

Governs the gap between white and black as they're read for steepness. Lower this value if the bubbles are caroming off the flow map at random.

Flow Map Fits

Decides whether the flow map references the layer or the universe, resizing itself to match whichever you pick. It comes in handy when you want a bigger universe but the flow map was built for one specific layer, or when you want bubbles to begin off-frame and feel the flow map's pull as they enter.

Simulation Quality

Sharpens the precision, and with it the realism, of the simulation — though higher values stretch out the composition's render time. Normal usually delivers solid results in the shortest time. High yields finer results but takes longer. Intense lengthens rendering further while producing steadier bubble behavior; reach for it when the bubbles won't track the flow map. It frequently cures the erratic behavior that crops up with tiny bubbles, fast bubble speeds, and steep slopes.

## Particle Playground effect

With the Particle Playground effect you can animate a great many comparable objects on their own, like a swarm of bees or a snowstorm. Reach for the Cannon to spray a stream of particles from a chosen point on the layer, or the Grid to lay down a plane of them. New particles can also spring from existing layers or particles by way of the Layer Exploder and Particle Exploder. Any mix of particle generators may share a single layer.

This effect works with 8-bpc color.

Particles shooting out of the spacecraft layer (upper-left), text characters used as particles shooting out of a ray gun (lower-left), and Layer Exploder used on spacecraft layer (lower-right)

Particles shooting out of the spacecraft layer (upper-left), text characters used as particles shooting out of a ray gun (lower-left), and Layer Exploder used on spacecraft layer (lower-right)

Begin by spraying a stream or laying down a plane of particles, or by blowing an existing layer apart into particles. Once a layer of particles exists, you can steer traits like their speed, size, and color. Swap the default dot particles for images drawn from an existing layer to spin up, say, a whole snowstorm out of one snowflake layer. Text characters work as particles too: fire words across the screen, for instance, or build a sea of text where a handful of letters shift color to spell out a message.

Generate particles with the Cannon, Grid, Layer Exploder, and Particle Exploder controls. Swap a layer in for each default dot particle with the Layer Map controls. Shape the overall behavior of particles with the Gravity, Repel, and Wall controls. Shape individual particle properties with the Property Mapper controls. Set options — among them swapping text characters in for dots — with Options.

Note

Given how intricate Particle Playground is, expect drawn-out computation, preview, and render times.

## Use Particle Playground

1. Pick the layer where you want particles to live, or make a fresh solid layer.
   Choose Effect > Simulation > Particle Playground. That turns the layer invisible, leaving only the particles on view. Animate the layer in the Timeline panel and you animate the whole layer of particles.

Configure a particle generator to set how particles come into being. Spray a stream from the Cannon, lay down a flat plane packed with particles via the Grid, or pull particles from an existing layer with the Layer Exploder. Already have particles? Apply the Particle Exploder to blow them into still more new ones.

Pick your particles. Out of the box, Particle Playground makes dot particles. Trade the dots for a layer already in the composition or for text characters of your choosing.

Set how some or all particles behave overall. Gravity tugs particles a chosen way, Repel drives them apart or together, and Wall pens them inside or shuts them out of a given area.

Drive the behavior of individual particles with a layer. You can adjust controls that alter particle motion, like speed and force, plus controls that alter particle appearance, like color, opacity, and size.

When the layer it's applied to is set to Best quality, the Particle Playground effect renders with anti-aliasing. It also lays motion blur on moving particles, but only after you turn on the Motion Blur layer switch together with the Enable Motion Blur composition switch.

Use a layer as a particle source and Particle Playground disregards whatever changes you made to that layer inside the composition, such as altered Position values; it draws on the layer in its original form instead. To hold onto a layer's changes when it feeds particles, precompose it and feed the precomposition layer as the control layer.

## Particle content and particle generators

Three particle types can come out of Particle Playground: dots, a layer, or text characters. A single particle generator handles just one type.

Spin up particles using the Cannon, Grid, Layer Exploder, and Particle Exploder. The Grid arranges particles tidily in straight rows and columns. The exploders scatter particles at random, the way firecracker sparks fly.

At the instant of creation, the particle generators lock in each particle's attributes. From then on, the Gravity, Repel, Wall, Exploder, and Property Mapper controls steer how particles behave. If you'd like particles to stay pinned to grid intersections, for instance, the Static Friction option in the Persistent Property Mapper can hold them put. Without it, particles drift off their starting grid positions the moment they're born.

## Cannon controls

By default the Cannon is on; to switch to another way of making particles, first shut the Cannon off by setting Particles Per Second to zero. The Cannon spews particles in an unbroken stream.

Position

Names the (x,y) coordinates from which particles spawn.

Barrel Radius

Fixes the Cannon's barrel-radius size. Negative values yield a round barrel, positive values a square one. Choose a low value for a narrow source like a ray gun, a high value for a broad source like a school of fish.

Particles Per Second

Fixes how frequently particles spawn. At 0, none spawn. A high value thickens the particle stream. To keep the Cannon from firing nonstop, keyframe this control so the value drops to 0 at the moments you want no particles made.

Direction

Fixes the angle the particles fire at.

Direction Random Spread

Fixes how far each particle's heading strays at random from the cannon's heading. A 10-degree spread, say, scatters particles randomly within +/–5° of the cannon's heading. Pick a low value for a tightly focused stream like a ray gun, a high value for a stream that fans out fast. You can go as high as 360°.

Velocity

Fixes the starting speed of particles, in pixels per second, as they pour from the Cannon.

Velocity Random Spread

Fixes the degree of random velocity among particles, with higher values widening the spread of their speeds. Set Velocity to 20 and Velocity Random Spread to 10, for example, and particles exit the Cannon at speeds from 15 to 25 pixels per second.

Color

Fixes the color of dots or text characters. It does nothing when a layer feeds the particles.

Particle Radius

Measures dots by radius in pixels and text characters by point size. It does nothing when a layer feeds the particles.

## Grid controls

The Grid spreads an unbroken plane of particles out from a set of grid intersections. Their motion rides entirely on the Gravity, Repel, Wall, and Property Mapper settings. Since Gravity's Force control is on by default, Grid particles drop toward the bottom of the frame.

Under the Grid, a fresh particle shows up on every frame at each grid intersection. You can't change that frequency, but to switch the Grid off or pause its particle output at set times, drop the Particle Radius and Font Size control to 0, or keyframe the values of the Particles Across and Particles Down controls. Raise Particles Across and Particles Down to put more particles in each frame.

Note

Out of the box, the Cannon is on and the Grid is off. While working with the Grid, halt the Cannon's particle output by setting its Particles Per Second value to 0.

Position

Names the (x,y) coordinates of the grid's center. Whether a grid particle turns out to be a dot, a layer, or a text character, it lands centered on its grid intersection the moment it's born. With text characters as particles, the Edit Grid Text dialog box has the Use Grid option on by default, dropping each character onto its own grid intersection so the usual character spacing, word spacing, and kerning don't apply. To place text characters at the grid position with normal spacing, pick a text alignment other than the Use Grid option.

Width, Height

Fix the grid's dimensions, in pixels.

Particles Across, Particles Down

Fix how many particles spread horizontally and vertically over the grid area. Particles appear only once the value reaches 1 or more.

Note

Should the Width, Height, Particles Across, and Particles Down controls be grayed out, the Use Grid option has been switched off in the Edit Grid Text dialog box.

Color

Fixes the color of dots or text characters. It does nothing when a layer feeds the particles.

Particle Radius/Font Size

Gives dots a radius in pixels and text characters a size in points. It does nothing when a layer feeds the particles.

## Layer Exploder and Particle Exploder

The Layer Exploder bursts a layer into new particles, while the Particle Exploder bursts one particle into more. Beyond explosion effects, the exploders also come in handy for faking fireworks or for swelling the particle count fast.

These pointers can help you rein in the particles an explosion throws off:

A layer bursts once per frame. Left alone, that yields an unbroken shower of particles across the composition's length. To start or stop a layer explosion, keyframe the Radius of New Particles control so its value sits at zero whenever you want no particles made.

When a nested composition feeds the layer, you can give the layers inside it different Opacity values or In and Out points to render the exploding layer transparent at various moments. Where the source layer is transparent, the Layer Exploder makes no particles.

To reposition the exploding layer, precompose it at its new position (using the Move All Attributes Into The New Composition option), then feed that precomposed layer as the exploding layer.

When particles burst, the new ones take on the position, velocity, opacity, scale, and rotation of the originals.

After layers or particles burst, the Gravity, Repel, Wall, and Property Mapper controls drive the particles' movement.

Note

A few Persistent Property Mapper and Ephemeral Property Mapper options can lend explosions more realism. Shift Opacity, for instance, to fade the resulting particles out, or shift the Red, Green, and Blue color channels so they change color as though cooling.

Explode Layer

(Layer Exploder only) Names the layer you mean to burst. To make the video vanish the instant the particles appear, either switch the layer's video off or trim its Out point.

Radius Of New Particles

Fixes the radius of the particles the explosion throws off. This figure has to stay below the radius of the original layer or particle.

Velocity Dispersion

Fixes, in pixels per second, the top speed of the band within which Particle Playground varies the resulting particles' velocity. High values give a more scattered, cloudlike blast. Low values pack the new particles together and can make the burst read like a halo or shockwave.

Affects

Names which particles the Layer Exploder and Particle Exploder act on.

## Layer Map controls

Out of the box, the Cannon, Grid, Layer Exploder, and Particle Exploder make dot particles. Swap the dots for a layer in the composition by using the Layer Map. Feed in a movie of one bird flapping its wings as a particle source layer, for example, and After Effects swaps every dot for an instance of that bird movie, building a flock. For a particle source layer, a still image, a solid, or a nested After Effects composition all qualify.

A multiframe layer is any whose source shifts over time, like a movie or a composition. Mapping new particles onto a multiframe layer, you set how the layer's frames get used through the Time Offset Type control. Pick Absolute, say, to map a static image onto a particle, or Relative to map an animating run of frames onto one. Both Absolute and Relative can be randomized across particles.

Note

Choose a layer for Layer Map and Particle Playground disregards any changes you made to that layer inside the composition, drawing on the layer in its original form instead. To hold onto a layer's transformations, effects, masks, rasterization options, expressions, or keyframe changes when it feeds particles, precompose it.

Use Layer

Names the layer you want serving as the particles.

Time Offset Type

Sets how the frames of a multiframe layer get used. Take a layer of a bird flapping its wings: choose Relative for Time Offset Type with a Time Offset of 0 and every instance of the bird flaps in unison. That might pass for a marching band, but not for a flock of birds. To start each bird flapping from a different frame in the layer, reach for Relative Random.

- Relative: Picks the layer's opening frame from the Time Offset you set, measured against where the effect layer currently sits, and from there keeps pace with the current time of the Particle Playground layer. Set a Time Offset of 0 and every particle reads the frame matching the effect layer's current time. Set a Time Offset of 0.1 with a composition at 30 fps, and each fresh particle lands on the frame falling 0.1 seconds past the prior particle's frame. Whatever Time Offset you pick, the opening particle always reads the source layer frame that lines up with the effect layer's current time.

- Absolute: Pulls one frame from the layer per the Time Offset you set, paying no mind to the current time. Reach for Absolute when a particle should hold a single frame of a multiframe source layer across its whole lifespan rather than running through frames as the effect layer moves ahead in time. Pick Absolute with a Time Offset of 0, for instance, and each particle clings to the source layer's first frame for its entire lifespan. Want a frame past the first? Slide the layer earlier until that frame aligns with the Particle Playground layer's In point. A Time Offset of 0.1, say, puts each new particle on a frame 0.1 second beyond the previous particle's (every third frame in a 30-fps animation).

- Relative Random: Playback begins from a layer frame picked at random somewhere between the effect layer's present time and however much Random Time Max you've entered. Say you pick Relative Random with a Random Time Max of 1; in that case each particle kicks off from a frame drawn at random between now and one second later. Enter a negative Random Time Max instead — say - 1 — and the window sits before the present moment, so the band in which fresh particles begin shifts forward as the playhead moves. Even so, that band always spans from the present time back to one second prior.

- Absolute Random: Grabs a frame at random out of the layer, drawing from a window that runs from 0 up to your Random Time Max. Reach for Absolute Random whenever each particle should stand in for its own distinct frame of a layer with many frames. As an illustration, with Absolute Random and a Random Time Max of 1, every particle displays a layer frame pulled from somewhere between 0 seconds and 1 second into the layer's run.

Time Offset

Sets which frame the layer's sequential playback begins on.

Affects

Picks the particles that the Layer Map controls act upon.

## Replace default Cannon particles with text

Particles can take the form of typed text characters. You might, for instance, write out a message and have the Cannon fling it across the frame. Three separate groups of characters can each carry their own attributes too — perhaps you enlarge or brighten one group relative to the others.

Within the Effect Controls panel, choose Options.

Choose Edit Cannon Text.

Under Font or Style, pick the typeface and style the Cannon characters will use.

Under Order, set the order characters leave the Cannon in. That order tracks the sequence in which you typed them. To illustrate: with Cannon Direction at 90° (so it aims rightward), English needs to leave the Cannon last-letter-first to read correctly. So pick Right To Left.

Under Loop Text, turn it on to keep producing the characters you entered without end. Turn it off and only a single instance of them is produced.

Choose OK to dismiss the Edit Cannon Text dialog box, then OK again to dismiss the Particle Playground dialog box.

Open up the Cannon option.

Click the Font Size value, enter 10 or anything larger, and press Enter (Windows) or Return (macOS).

To halt the substitution of text for the default particles, clear every character from the box inside the Edit Cannon Text dialog box.

## Replace default Grid particles with text

Within the Effect Controls panel, choose Options followed by Edit Grid Text.

Under Font and Style, pick the typeface and style for the Grid characters.

Under Alignment, pick Left, Center, or Right to place the text inside the box at the Position named in the Grid control, or pick Use Grid so each letter lands on successive grid intersections.

Under Loop Text, turn it on to keep repeating your typed characters until every grid intersection holds a character. Those intersections come from the Particle Across and Particle Down controls. Turn it off for just one instance of the text. (You'll only see this option when Use Grid alignment is picked.)

Enter your text in the box. With Use Grid alignment on, type a space to leave a grid intersection empty. Press Enter (Windows) or Return (macOS) to push the following character onto the next grid row.

Choose OK to dismiss the Edit Grid Text dialog box, then OK again to dismiss the Particle Playground dialog box.

Click the right-facing triangle beside Grid so it flips to point downward.

Click the Font Size value, enter 10 or anything larger, and press Enter (Windows) or Return (macOS).

To halt the substitution of text for the default particles, clear every character from the box inside the Edit Grid Text dialog box.

## Using Selection Text values to differently affect subsets of text

Particular subsets of text particles can be treated differently once you assign Selection Text values. Open the Particle Playground options dialog box by choosing Options at the top of the Particle Playground listing within the Effect Controls panel. (It's the very spot where the text for the Grid or Cannon emitters gets set.) From there, fill in one or more of the Selection Text fields and choose OK. That done, one of those Selection Text sets becomes available from the Character menu beneath any of the Affects property groups. So, to confine gravity to the letter e alone, put e in Selection Text 1 and then pick Selection Text 1 under Gravity > Affects > Characters.

Note

Matching of the string respects case, and it counts punctuation marks along with other symbols.

Note

Like every text feature, this one pairs well with symbol fonts such as wingdings.
