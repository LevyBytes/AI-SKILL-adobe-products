# Min and Max controls for Property Mappers

Should the layer map's overall span of brightness values run too broad or too tight, lean on Min and Max to stretch, squeeze, or slide the range of values it puts out. Here are some situations where tuning Min and Max comes in handy:

You'd like your text's smallest font size to be 10 points and its largest to be 96 points. Put Min at 10 and Max at 96.

You give a particle a starting color and then drive color changes with a layer map. If the shifts feel too tame, drop the Min value and lift the Max value to sharpen the contrast between colors.

You give a particle a starting velocity and then drive the X Speed value with a layer map. But the gap between your quickest and slowest particles turns out too wide. Lifting Min and lowering Max for the layer map channel mapped to X Speed tightens the spread of particle speeds.

You drive the Scale property with a layer map and discover the smallest particles still aren't small enough while the largest ones come out too big. Here the whole output range has to slide downward; bring both Min and Max down.

You've got a layer map that pushes particles the wrong direction. Trade the Min and Max values, which works the same as inverting the layer map.

Note

The Persistent and Ephemeral Property Mappers treat the layer map's alpha channel as their selection map.
