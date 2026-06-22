# Effects Animation Presets Overview (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Delete or disable effects and animation presets

Once effects are sitting on a layer, you can switch one of them — or all of them — off for a while so your attention can go elsewhere in the composition. While they're off, those effects render neither in previews nor in final output. Even so, the Render Queue panel lets you force the composition to render for final output with every effect on, no matter which ones are rendering in the Composition panel previews. Switching an effect off leaves its keyframes intact; every keyframe for an effect's properties survives right up until the effect itself is removed from the layer.

An animation preset can't be switched off or removed from a layer as one piece. What you can do is delete or disable, one at a time, the individual effects, keyframes, and expressions it's made of.

- To strip a single effect off a layer, select that effect's name in the Effect Controls or Timeline panels and press Delete.
- Clearing every effect off one or more layers: highlight them in the Timeline or Composition panel, then either run Effect > Remove All or press Ctrl+Shift+E (Windows) or Command+Shift+E (macOS).

Note

That command wipes out all keyframes belonging to the removed effects. Pick Remove All by mistake and you can immediately choose Edit > Undo Delete Effect or Edit > Undo Remove All Effects to bring the effects and keyframes back.

- To switch a single effect off for a while, select the layer in the Effect Controls or Timeline panel, then click the Effect switch left of the effect's name.
- To switch off every effect on a layer, click the Effect switch in that layer's Switches column in the Timeline panel.

## Remove an effect or animation preset

You can pull an effect or animation preset out of the folder where After Effects looks for these items, which stops it from loading and keeps it out of both the Effects & Presets panel and the Effect menu.

Within the Effects & Presets panel, highlight the effect or animation preset.

From the panel menu, pick Reveal In Explorer (Windows) or Reveal In Finder (macOS).

Drag the effect (.aex) or animation preset (.ffx) file somewhere outside the Plug-ins or Presets folder.

So the panel's animation-preset roster refreshes, pick Refresh List from the Effects & Presets panel menu.

Only at application startup does the effects list refresh.

Note

Instead of deleting effects or animation presets for good, think about making a subfolder inside the Plug-ins or Presets folder to hold the ones you rarely touch. Any folder whose name opens and closes with parentheses — say (archive_folder) — gets skipped by After Effects.

## Effect control points

Certain effects come with effect control points that govern the way the effect acts on the layer. The Advanced Lightning effect, for instance, carries two of them — Origin and Direction — pinning down where the lightning starts and the direction it heads.

For layers that aren't continuously rasterized and whose transformations haven't been collapsed, effect control points live in layer space. Once a layer is continuously rasterized or has its transformations collapsed, though, those points shift into composition space. Learn more about coordinate systems: composition space and layer space and render order and collapsing transformations.

Because vector layers — shape and text included — are continuously rasterized, their effect control points stay in composition space at all times. Learn more about continuously rasterizing a layer containing vector graphics.

By default, effect control points sit in layer space for null object layers, solid-color layers, and the other layers built on source footage items.

## View an effect control point

- To see an effect control point in the Layer panel, pick the effect's name from the View menu along the bottom of the Layer panel.
- To see an effect control point in the Composition panel, select the effect's name in the Timeline or Effect Controls panels.

Note

For effect control points to show in the Composition panel, turn on Show Layer Controls in the View menu and turn on Effect Controls in View Options (View > View Options).

## Move an effect control point

- Within the Composition or Layer panel, just drag the effect control point.
- Within the Effect Controls panel, click the effect control point button ; then head to the Composition or Layer panel and click where the effect control point should go.
- Within the Timeline or Effect Controls panel, drag or type values into the x and y coordinates for the effect control point, the same way you'd change any other property.

## Randomness and random seeds

Since genuine randomness can't be reproduced, plenty of effects fake it with a calculation that spits out apparently random output for every value of a Random Seed property. Set up multiple instances of one effect with identical settings — Random Seed values and all — and they'll come out the same. That's how you land predictable, deterministic results while still wearing the look of randomness.

Adjusting the Random Seed value doesn't dial randomness up or down; all it does is reshuffle how the randomness appears.

Any property can take on randomness through the expressions found in the Random Numbers category.

## Compositing effects

Built-in compositing controls ship with every effect in Adobe After Effects, letting you mix any effect into the underlying clip and restrict it to just one region — no extra adjustment layers or track mattes required.

## Animation preset list

Numerous animation presets ship inside the application, stored under the Support Files/Presets folder.

The full set of animation-preset categories that come with After Effects is:

- Adobe Express
- Backgrounds
- Behaviors
- Image - Creative
- Image - Special Effects
- Image - Utilities
- Legacy

- Shapes
- Sound Effects
- Synthetics
- Text
- Transitions - Dissolves
- Transitions - Movement
- Transitions - Wipes

## Adobe Express

### IN

- Bungee In
- Fade In
- Flicker In
- Grow In
- Pop In
- Shrink In
- Slide In
- Spin In
- Tumble In

### LOOPING

- Blinking Loop
- Bob Loop
- Breathe Loop
- Flicker Loop
- Jitter Loop
- Pulse Loop
- Spin Loop
- Wiggle Loop
- Yoyo Loop

### OUT

- Bungee Out
- Fade Out
- Flicker Out
- Grow Out
- Pop Out
- Shrink Out
- Slide Out
- Spin Out
- Tumble Out

## Backgrounds

- Apparitions
- Blocks
- Cinders
- Circuit
- Cosmic Power
- Creepy
- Curtain
- Deep Tissue
- Fog Lights
- Germs
- Green Crystals
- Indigestion
- Infection

- Lightning Bend
- Magma
- Orb
- Pixels
- Racing Rectangles
- Red Speed
- River
- Rose Light
- Silk
- Smoke Rising
- Sweeping Curves
- Anime Radial
- Speed Lines

## Behaviors

- Autoscroll - horizontal
- Autoscroll - vertical
- Blinking Opacity
- Drift Over Time
- Fade In Over Layer Below
- Fade In+Out - frames
- Fade In+Out - msec
- Fade Out Over Layer Below
- Force Anchor Point
- Opacity Flash - layer markers
- Opacity Flash - random
- Rotate Over Time
- Scale Bounce - layer markers
- Scale Bounce - random

- Trim Paths - at layer in
- Time Paths - at layer out
- Wiggle - gelatin
- Wiggle - position
- Wiggle - rotation
- Wiggle - scale
- Wiggle - shear
- Wigglerama
- Random Colors
- Random On-Off
- Random Whole Numbers
- Wave Value Generator
- Separate XYZ Scale

## Image - Creative

- Bloom - brights
- Bloom - brights+darks
- Bloom - crystallize
- Colorize - blue wash
- Colorize - gold dip
- Colorize - infrared
- Colorize - moonshadows
- Colorize - red hand tint
- Colorize - royal purple
- Colorize - sepia
- Colorize - sky blue
- Colorize - sky orange
- Colorize - sunset gradient
- Contrast - luminance
- Contrast - saturation
- Dimension - bevel+shadow
- Dimension - glow+shadow

- Grayscale
- Hand Drawn Effect
- Inset Video - framed
- Inset Video - torn edges
- Left Third - scoop mask NTSC
- Left Third - scoop mask PAL
- Lower Third - scoop mask NTSC
- Lower Third - scoop mask PAL
- Lower Third Holdout - darken
- Lower Third Holdout - saturate
- Mood Lighting - amorphous
- Mood Lighting - digital
- Mood Lighting - streaks
- Noisy Vignette
- Stacked Drop Shadows
- VHS Flicker Effect
- Vignette Lighting

## Image - Special Effects

- Bad TV 1 - warp
- Bad TV 2 - old
- Bad TV 3 - weak
- Cracked Tiles
- Embossed Multiple Exposure

- Light Leaks - layer markers
- Light Leaks - random
- Motion Registration Errors
- Night Vision

## Image - Utilities

- Alpha From Lightness (Unmult)
- Compress-Expand Dynamic Range
- Crop Edges
- Flip
- Flip + Flop
- Flop
- Invert Alpha
- Keying - blue blur

- Keying - green blur
- Keylight + Key Cleaner + Advanced Spill Suppressor
- Levels - computer to video
- Levels - video to computer
- Reduce DV blockiness
- Sample Image Expression
- Magnify & Preserve Alpha

## Legacy

- 3D Lines Zoom In
- 3D Rotate around Circle
- Bars Blinky
- Blue Flash
- Boxes - concentric NTSC
- Boxes - concentric PAL
- Boxes - random 1 NTSC
- Boxes - random 1 PAL
- Boxes - random 2 NTSC
- Boxes - random 2 PAL
- Boxes - random 3 NTSC
- Boxes - random 3 PAL
- Boxes - stroked NTSC
- Boxes - stroked PAL
- Centipede
- Contract - Expand
- DialTone - US
- Digital
- Drop Bounce
- Embossed Multiple Exposure
- Emerge
- Ethereal
- Fluctuate
- Flv to Inset
- Frenzv
- Front - Back
- Frontside - Backside
- Green Dots
- Incoming
- Inflammation
- Inset Video - framed
- Inset Video - torn edges
- Left Third - scoop mask NTSC

- Left Third - scoop mask PAL
- Lightning - Horizontal
- Lightning - Vertical
- Lower Third - scoop mask NTSC
- Lower Third - scoop mask PAL
- Lower Third Holdout - darken
- Lower Third Holdout - saturate
- Lyrical
- Multi-Line Flip
- Organism
- Outgoing - Incoming
- Ovals - concentric NTSC
- Ovals - concentric PAL
- Ovals - random 1 NTSC
- Ovals - random 1 PAL
- Ovals - random 2 NTSC
- Ovals - random 2 PAL
- Paper Clip
- Pinwheel
- Pulse Exposure
- Reduce DV blockiness
- Separate XYZ Position
- Shadows
- Silhouettes
- Sonar Ping
- Spin Flash
- Spirograph
- Twisty Ribbons
- Twisty Ribbons 2
- Walk Of Stars
- White Trim
- Word Flash

## Shapes

### ELEMENTS

- 2D Text Box
- 60s Text Bar
- Analogue Clock
- Bouncing Map Icons
- Burst Pop
- Chasing Line - Boxes
- Chasing Line - Dots
- DNA Helix
- Grid of Crosses
- Marquee Chasers
- Mod Boxes
- Popping Map Pin
- Repeating Lines
- Ring Chart
- Simple Map Marker
- Wireframe Worm
- Write on Arrow
- Bounding Box
- Crinkle Cut Sticker
- Postage Stamp
- Scalloped Frame
- 2D Text Box (Shape)
- Switchable Cursor Element
- Vintage Star
- Bar Graph
- Line Graph
- Radial Graph

### SPRITES - STILL

- Alien Calligraphy
- Alien Face
- Box - dashed lines
- Bullseye
- Circular - half round
- Circular - tri dash
- Crosshair - brackets
- Crosshair - round
- Crosshair - square
- Fan Blades
- Flower Power
- Gear
- Holy Light
- Indian Sun
- Mandala
- RayStar-4
- RayStar-8
- Rounded Bracket - beveled
- Rounded Bracket - double
- Seaside Daisy
- Tri Cog

### SPRITES - ANIMATED

- Alien Face - animated
- Circular - cellular division
- Dancing Knot
- Mandala - animated
- Phase Scope
- SpiroMandala
- TwinkleStar

### BACKGROUNDS

- Box Swarm
- Composition Border
- Kaleidoscopic
- Nerve Net - Circular
- Nerve Net - Linear
- Nerve Net - Penta
- Sunburst

## Sound Effects

- Blaster
- Busy
- CallAdobe
- DialTone-US
- DTMF
- PhoneCompany
- RingingPhone-US

## Synthetics

- Blue Bars
- Cells
- Digital
- Ethereal
- Gold Ambiance
- Lightning - Horizontal
- Lightning - Vertical
- Mosaic

- Orange Streaks
- Smoke - Drifting
- Starburst Spin
- CD Back
- Chip Foil
- Holographic Foil
- Topographic Lines

## Text

### 3D Text

- 3D Basic Position Z Cascade
- 3D Basic Position Z Typeon
- 3D Basic Rotate X Cascade
- 3D Basic Rotate Y Cascade
- 3D Bouncing In Centered
- 3D Fall Back Scale & Skew
- 3D Fall Back Scramble & Blur
- 3D Flip In Rotate X
- 3D Flip Out Rotate X
- 3D Flip Up Reflection
- 3D Flutter In From Left
- 3D Flutter In Random Order
- 3D Flutter Out From Right
- 3D Fly Down & Unfold
- 3D Fly Down Behind Camera

- 3D Fly Down Random & Rotate Y
- 3D Lines Zoom In
- 3D Rain Down Words & Colors
- 3D Random Spike Tumble
- 3D Resolve Position
- 3D Rotate around Circle
- 3D Rotate in by Character
- 3D Rotate out by Word
- 3D Scramble in Position Z
- 3D Spiral Down & Unfold
- 3D Spiral Rotate In by Line
- 3D Spiral Rotate Out by Line
- 3D Swing Around on Path
- 3D Tumble Words Forward
- 3D Twist & Color Characters

### Animate In

- Center Spiral
- Characters Shuffle In
- Decoder Fade In
- Drop In By Character
- Espresso Eye Chart
- Fade Up And Flip
- Fade Up Characters
- Fade Up Lines
- Fade Up Words
- Fly In From Bottom
- Fly In With A Twist
- Pop Buzz Words
- Raining Characters In
- Random Fade Up
- Random Shuffle In

- Random Word Shuffle In
- Slow Fade On
- Smooth Move In
- Spin In By Character
- Spin In By Word
- Straight In By Character
- Straight In By Word
- Straight In Multi-Line
- Stretch In Each Line
- Stretch In Each Word
- Twirl On Each Line
- Twirl On Each Word
- Typewriter
- Wipe In To Center

### ANIMATE OUT

- Encoder Fade Out
- Fade Out By Character
- Fade Out Slow
- Raining Characters Out
- Random Fly Off
- Random Word Fly Off

- Slide Off Right By Character
- Slide Off Right By Word
- Stretch Out Each Line
- Stretch Out Each Word
- Twirl Off Each Line
- Twirl Off Each Word

### CURVES AND SPINS

- Bloom Flower
- Clockwise Entry
- Counter Rotate
- Dust Devil
- Lasso Tumble
- Lasso
- Musical Chairs
- Newton
- Pinwheel
- Radial Flare
- Retrograde

- Rotate
- Somersault
- Spin Fast
- Spiral Exit
- Spiral In
- Spirograph
- Swoopy Entry
- Tea Leaves
- Tire Rim
- Whirl In

### GRAPHICAL

- Bars Blinky
- Bars Lime
- Blue Note
- Cut Shapes
- Exchange
- Green Dots
- Hazard
- Red Circles
- Scratchy Film
- Snowflakes
- White Trim
- Yellow Boxes

### EXPRESSIONS

- Buzz Words
- Current Time Format
- Dictionary
- Display Comp Time
- Frame Number
- Inch Worm
- Text Bounce
- 2D Text Box (Mask & Effects)

### FILL AND STROKE

- Chasing Strokes
- Fill Color Wipe
- Flicker Color - scale
- Flicker Color
- Flicker Green
- Inflammation
- Pulse Blue
- Pulse Orange
- Pulsing Strokes
- Rotate Hue
- Sliding Color Flicker
- Stroke Ease Down
- Wiggly Stroke Width By Line
- Wiggly Stroke Width

### MECHANICAL

- Algorithm Loop
- Algorithm
- Automation
- Bad Reception
- Doppler
- Electro Magnet
- Helicopter
- Insert Text
- Kinematic
- Mechanical
- Pistons
- Rack & Pinion
- Roadtrip
- Scale Bounce
- Screen Roll
- Stairstep
- Submarine
- Underscore
- Warp 9.8

### LIGHTS AND OPTICAL

- Blue Flash
- Broadway
- Bubble Pulse
- Emerge
- Exposure
- Flash
- Flicker Exposure
- Fluctuate
- Fluorescent Light

- Office Light
- Overlay
- Pulse Exposure
- Shadows
- Silhouettes
- Sonar Ping
- Spin Flash
- Word Flash

### MULTI-LINE

- Alphabet Soup
- Contract - Expand
- Currents
- Data Packet
- Data Stream
- Dealer
- Encryption
- Fly In By Characters
- Fly In By Words
- Front - Back
- Frontside - Backside
- Ideas

- Incoming
- Jetstream 2
- Jetstream
- Multi-Line Flip
- Outgoing - Incoming
- Pneumatic
- Production
- Stack Right Left
- Weekdays
- Word Processor
- Zippy

### PATHS

- 360 Loop
- Antelope
- Ants
- Back Stage
- Balance
- Balloon Man
- Balloon
- Bouncing
- Bubble Pop
- Bump And Slide On
- Centipede
- Circuit Board
- Conveyor Belt
- Double Spiral
- Down And Out
- Downhill Slide Off
- Downhill Slide On
- Frenzy
- Hurdles
- Karate Chop

- Loop On And Off
- Lyrical
- Organism
- Paper Clip
- Pipes
- Raquetball
- Rat Nest
- Reel To Reel
- Rope Bridge
- Serpent
- Slippery Slope
- Spiral Long
- Spiral
- Springy
- Squirmy
- Stairwell
- Symmetry
- Tchotchke
- Walk Of Stars
- Zig-Zag

### ORGANIC

- Autumn
- Boiling
- Boomerang
- Bounce Diagonal
- Chewing Gum
- Climber
- Dip-Bounce
- Double-Helix
- Drop Bounce
- Fish Bait
- Flutter
- Flying Formation
- Horsefly
- Hummingbird
- Insect Wipe
- Insects
- Labrador

- Leapfrog
- Loose Line
- Ocean Tide
- Quiver
- Ripple
- Rubber Floor
- Rubber
- Sea-Sick
- Shuffle
- Simmer
- Slice And Dice
- Sprouts
- Tag Team
- Wheatfield
- Wind Current
- Wobble

### SCALE

- Large Scale
- Let's Dance
- Scale Down Word
- Scale Down
- Scale Up Word
- Scale Up
- Wiggly Scale Wipe
- Zoom Away
- Zoom Forward

### ROTATION

- Drip Down
- Flip Up
- Full Rotation
- Loopy Loop
- Random Rotation
- Rotate Chars
- Rotate Per Word
- Spin In
- Swirly Rotation
- Whirlwind

### TRACKING

- Contract
- Decrease Tracking
- Extend
- Increase Tracking
- Magnify
- Spasm
- Stretchy

### BLURS

- Blur By Word
- Bullet Train
- Evaporate
- Foggy
- Jiggy
- Transporter

### MISCELLANEOUS

- Angle Fly-In
- Back Flip
- Blow Away
- Bounce In
- Bungee
- Chaotic
- Clay Pigeons
- Dot.Com
- Elbow Room
- Explosion
- Hop, Skip, And A Jump
- Pendulum
- Punching Bag
- Question

- Rattle
- Roll Bounce
- Sequential Jump
- Six-Shooter
- Slide Bounce
- Slip In Out
- Smokey
- Squeeze
- Superhero
- Swing Up
- Twisty Ribbons
- Vanishing Point
- Wiggly Lines
- Yo-Yo

### NUMBER COUNTERS

- Counter Countdown Monospaced
- Currency Counter Monospaced
- Percentage Counter Monospaced
- Timer Countdown Monospaced

## Transitions - Dissolves

- Block Dissolve - digital
- Block Dissolve - random
- Block Dissolve - scanlines
- Boxes - concentric NTSC
- Boxes - concentric PAL
- Boxes - random NTSC
- Boxes - random PAL
- Boxes - stroked NTSC
- Boxes - stroked PAL
- Dissolve - blobs
- Dissolve - dither
- Dissolve - ripple

- Dissolve - sand
- Dissolve - unmelt
- Dissolve - vapor
- Fade - dip to black
- Fade - flash to white
- Fade - overexposed
- Ovals - concentric NTSC
- Ovals - concentric PAL
- Ovals - random NTSC
- Ovals - random PAL
- Inky Dissolve
- Pixelated Dissolve

## Transitions - Movement

- Card Wipe - 2D fractured
- Card Wipe - 3D pixelstorm
- Card Wipe - 3D swing
- Fly to Inset
- Slide - drop
- Slide - straight
- Slide - swoop
- Slide - variable
- Stretch & Blur
- Stretch & Slide
- Stretch - diagonal bottom

- Stretch - diagonal top
- Stretch - horizontal
- Stretch - vertical
- Stretch Over - horizontal
- Stretch Over - vertical
- Zoom - 2D spin
- Zoom - 3D tumble
- Zoom - bubble
- Zoom - spiral
- Zoom - wobbling

## Transitions - Wipes

- Band Wipe - build NTSC
- Band Wipe - build PAL
- Band Wipe - crossing NTSC
- Band Wipe - crossing PAL
- Band Wipe - zigzag NTSC
- Band Wipe - zigzag PAL
- Barn Doors
- Checker Wipe - NTSC
- Checker Wipe - PAL
- Clam Shell
- Clock Wipe
- Corner Reveal
- Grid Wipe
- Iris - cross
- Iris - diamond
- Iris - points
- Iris - round

- Iris - square
- Iris - star unfold
- Iris - star
- Iris - sunburst unfold
- Iris - sunburst
- Linear Wipe
- Paint On - NTSC
- Paint On - PAL
- Radial Wipe - bottom
- Radial Wipe - top
- Venetian Blinds
- Wedge Wipe
- Inky Iris Wipe
- Inky Linear Wipe
- Pixelated Iris Wipe
- Pixelated Linear Wipe

## More like this

- Working with Adobe Bridge and After Effects
- Plug-ins
- Adjustment layers
- Set a property value
