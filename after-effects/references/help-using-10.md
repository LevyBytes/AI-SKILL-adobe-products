# Formatting Paragraphs Paragraph Panel, Extruding Text Shapes

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Formatting paragraphs and the Paragraph panel; Extruding text and shape layers.

## Formatting paragraphs and the Paragraph panel

Search Last updated on May 5, 2026

### Learn how to format and align text in Adobe After Effects using the Paragraph panel to control spacing, alignment, and layout for clear, readable compositions.

Any stretch of text closing with a carriage return counts as a paragraph. The Paragraph panel is where you set whole-paragraph controls — alignment, indentation, and leading (line spacing) among them. With point text, every line stands as its own paragraph. With paragraph text, a single paragraph may run several lines, governed by how big the bounding box is.

Place the insertion point inside a paragraph, or select some text, and your Paragraph panel edits reach only the paragraphs that are selected even in part. Leave nothing selected and those edits apply to the selected text layers along with any selected Source Text keyframes the layer holds. With no text and no text layers selected, whatever you change in the Paragraph panel sets the defaults the next text entry will inherit.

Bring up the Paragraph panel by choosing Window > Paragraph; or, once a type tool is active, click the panel button over in the Tools panel.

Note

For the Character and Paragraph panels to spring open whenever a type tool goes active, switch on Auto-Open Panels in the Tools panel.

- Want the Paragraph panel back at its defaults? The Paragraph panel menu offers Reset Paragraph for exactly that.

Paragraph alignment options

Paragraph alignment options Note

Clicking the panel menu button at the panel's upper-right tab is how you open the panel menu.

### Align and justify text

A paragraph can be aligned to one of its edges — left, center, or right when text runs horizontal; top, center, or bottom when it runs vertical — or justified so it meets both edges. Both point text and paragraph text accept alignment, whereas justification is reserved for paragraph text alone.

### Indent and space paragraphs

How much room sits between your text and the bounding box or line holding it is what indentation sets. Because it touches only the paragraph or paragraphs you've selected, varying the indentation from one paragraph to the next is straightforward.

Indent Left Margin:

Pushes text inward from the paragraph's left edge. With vertical text, this one governs how far the text sits in from the top of the paragraph.

Indent Right Margin:

Pushes text inward from the paragraph's right edge. With vertical text, this one governs how far the text sits in from the bottom of the paragraph.

Indent First Line:

Sets how far the paragraph's opening line is indented. For horizontal text that first-line indent measures off the left indent; for vertical text it measures off the top indent. Feed in a negative value to build a first-line hanging indent.

- Adjusting the gap above or below paragraphs means entering a value for Space Before and Space After in the Paragraph panel.

### Hanging punctuation for Roman fonts

Whether punctuation sits inside or spills past the margins is what hanging punctuation decides. Switch it on for Roman fonts and your periods, commas, single quotation marks, double quotation marks, apostrophes, hyphens, em dashes, en dashes, colons, and semicolons all land outside the margins.

Flip hanging punctuation on or off for Roman fonts by choosing Roman Hanging Punctuation from the Paragraph panel menu.

Clicking the panel menu button at the panel's upper-right tab is how you open the panel menu.

With Roman Hanging Punctuation active, any double-byte punctuation drawn from Chinese, Japanese, and Korean fonts within the chosen range stays put rather than hanging past the margins.

### Text composition methods

What text ends up looking like on the page comes out of an intricate set of processes known as text composition. Working from the word spacing, letter spacing, and glyph spacing options you've set, After Effects weighs the candidate line breaks and settles on whichever best honors those parameters.

Two composition methods are on offer in After Effects, both selectable from the Paragraph panel menu.

Note

Clicking the panel menu button at the panel's upper-right tab is how you open the panel menu.

Adobe Single-line Composer

Takes the classic route, composing one line of text at a time. It suits anyone who wants to steer line breaks by hand. When spacing needs tweaking, the Single-line Composer reaches for compression before it tries expanding text.

Adobe Every-line Composer

Weighs a web of breakpoints spanning a stretch of lines, letting it tune earlier lines in the paragraph so that especially ugly breaks further down get headed off. Spanning several lines yields more even spacing and fewer hyphens. The Every-line Composer goes about composition by spotting candidate breakpoints, weighing them, and handing out a weighted penalty grounded in these ideas:

Top priority rides on keeping letter and word spacing even. Each candidate breakpoint is judged and penalized by how far it strays from ideal spacing.

Once breakpoint penalties are set across a span of lines, they get squared, which blows up the worst breakpoints. The composer then leans on the good ones.

## Extruding text and shape layers

Search Last updated on Aug 18, 2025

### About beveled and extruded text and shape layers

Within computer graphics, an extruded object reads as though it has three dimensions. That 3D quality shows itself most plainly as the object moves, or as a camera circles it. The handling of an extruded object's edges is what bevel controls.

Beveled and extruded text and shape layers come together when you operate inside a Ray-traced 3D composition.

Building beveled and extruded text and shape layers calls for working within a Ray-traced 3D composition.

Either qualified NVIDIA GPUs or every CPU core in your machine handle the rendering of Ray-traced 3D compositions. Lack a qualified GPU and CPU rendering kicks in by itself. GPU rendering wins out for its far greater speed.

How easy objects inside Ray-traced 3D compositions are to handle hinges on your hardware and how busy your composition is. Struggling to move objects around in the Ray-traced 3D composition? Fast Previews can help. Fast Previews mode shines for blocking out and playing with extruded text and shape layer animations.

Note

Where your machine can do Ray-traced 3D rendering on both GPU and CPU, you're free to pin rendering to the CPU — say, in a headless environment. For the details, see setting preferences for OpenGL, and the GPU.

### The Ray-traced 3D renderer

You can also call on the Ray-traced renderer as a composition renderer. It stands apart from the Advanced 3D renderer (these days called Classic 3D), which served as the default across earlier versions. Compared with the existing scanline renderer, the Ray-traced 3D renderer marks a sharp break. On top of the material options already there, it copes with reflections, transparency, index of refraction, and environment maps.

Capabilities already in place carry over — soft shadows, motion blur, depth-of-field blur, intra-character shadowing, casting an image onto a surface using any light type, and layer intersection are all supported. 2D layer backdrops sitting at the foot of the stacking order show through, and translucent objects can be seen through as well.

### Limitations of the Ray-traced 3D renderer

These features go unrendered by the Ray-traced 3D renderer:

- Blending modes
- Track mattes
- Layer styles
- Masks and effects on continuously rasterized layers, including text and shape layers
- Masks and effects on 3D precomposition layers with collapsed transformations
- Preserve Underlying Transparency

### Additional features of a Ray-traced 3D composition

What a Ray-traced 3D composition can do further includes:

- Bending footage and composition layers
- Environment layer support
- Additional material options (reflection, index of refraction, transparency)

### Creating a Ray-traced 3D composition

Extruded text and shapes, bendable layers, and the features tied to them all require a Ray-traced 3D composition as the working environment. Such a composition can be built fresh, or you can convert one you already have. Building a new Ray-traced 3D composition goes like this:

Make a composition.

Bring up that composition's Composition Settings dialog box.

Go to the Advanced tab and set the Rendering Plug-in (now called Renderer) to Ray-traced 3D.

When converting a composition that already exists, just skip the first step above.

At this point the composition runs as a Ray-traced 3D composition and supports extruded text and shapes.

For deeper detail, see the Advanced composition settings, ray-tracing quality, and anti-alias filtering.

Note

Once a composition is Ray-traced 3D, camera layers drop the Iris Diffraction Fringe, Highlight Gain, Highlight Threshold, and Highlight Saturation properties.

### Previewing Ray-traced 3D compositions

Switching to a different Fast Previews mode while you preview 3D Ray-traced compositions lets you settle on a workflow that suits the job better.

### Monitoring and changing the composition renderer

Want to confirm whether Classic 3D or Ray-traced 3D is the active composition renderer? Glance at the Renderer button at the top-right of the Composition panel. That button shows up solely when the composition holds 3D layers — cameras and lights included.

- Clicking the button opens the Advanced tab of the Composition Settings dialog box, where you swap the composition renderer.
- For the options belonging to whichever renderer is active, Ctrl-click (Windows) or Cmd-click (macOS) on that same button.

### Creating beveled and extruded text and shape layers

Under the Ray-traced renderer, an extrusion or bevel can be applied to 3D text and shape layers. Producing a beveled and extruded text or shape layer runs as follows:

Build a Ray-traced 3D composition.

Add a text or shape layer.

Switch on 3D for that layer.

For more, see enabling 3D for a layer and converting 3D layers.

Tune the bevel and extrusion controls.

Their look is governed by the following properties found in the layer's Geometry Options section of the Timeline panel:

- Bevel Style: The bevel's shape. The choices are None (default), Angular, Concave, and Convex.
- Bevel Depth: How big the bevel is, in pixels, measured both horizontally and vertically.
- Hole Bevel Depth: The bevel size for the interior portions of a character — think of the hollow in an "O". This is given as a percentage of the Bevel Depth.
- Extrusion Depth: The extrusion's thickness in pixels. That extruded side surface sits at a right angle to the front surface.

Rather than the pixel-based text and shapes you get from the Classic 3D renderer, these 3D objects derive from swept-surface geometry — a 2D shape traveling along a defined path. Because of that, applying masking, effects, or track mattes to the geometry simply doesn't apply. The geometric nature of the text and shapes carries through, which is why character styling such as kerning, font size, and subscript still works.

Be aware of these known issues:

- Gradients for fill or stroke aren't supported on 3D shape layers.
- Even-odd winding within shapes doesn't behave correctly right now. A Merge Paths operator may be the workaround you need.
- Filling can go wrong on shapes whose paths intersect themselves. Likewise, objects built from compound paths with several nested holes may fail to render properly.

### Beveled and extruded vector artwork

A shape layer can be generated out of a vector art footage layer and then edited afterward. After a vector layer becomes a shape layer, beveling and extruding it become possible.

Note

For more, see creating shape layers from vector artwork.

### Bending a footage layer

With the Ray-traced renderer in use, your 3D layer along with nested composition layers gains these geometry options for wrapping them around a vertical axis:

- Curvature: How much bend is applied, given as a percentage. The default sits at 0% (flat), yet it ranges from -100% to 100% to mimic things like video walls or wings in motion.
- Segments: How smooth the bend is, or how many facets it has — a smaller value yields a rougher result with broader facets.

You can add masks and effects to these layers, but beveling or extruding them isn't possible. On top of that, masks and effects get disregarded on collapsed 3D composition layers.

### Material options

The surfaces of 3D objects rely on materials, and material options are the surface properties that govern how those objects respond to light. After Effects provides a number of material options properties along with methods for assigning materials to extruded text and shape layers.

For a layer, the Material Options section in the Timeline panel holds the following properties:

- With On and Off you decide whether the reflection shows, while the layer itself stays visible.
- The Only choice behaves like On in that it reflects, yet here the layer itself does not show.

- Depending on the viewing angle, reflections grow a touch brighter and the surface takes on more of a mirror quality, driven by the Reflection Rolloff property value. Looking across a surface at a glancing angle yields brighter reflections than facing it straight on. There's also an energy-conserving aspect: diffusion drops automatically per pixel as the glancing angle narrows (in other words, as the view tips toward grazing the surface rather than meeting it head-on).
- On top of that, the Specular Shininess property lets you tune reflection glossiness anywhere from blurry to almost mirror-sharp.

- Sharper reflections come from higher values; lower ones soften them.
- Should the effect of this setting be invisible to you, push the Ray-tracing Quality up to 3 or beyond.

- Reflection Rolloff: On a reflective surface, this governs how strong the Fresnel effect is — that is, how intense reflections become at glancing angles.

  - A surface can be completely transparent and yet still show reflections and specular highlights.
  - Dropping the layer opacity would dial back the whole appearance. The layer's alpha is also respected, so a ray passes straight through wherever alpha is 0.

- Transparency Rolloff: On a transparent surface, this governs transparency relative to the viewing angle. Facing a surface directly gives the set transparency value, while a glancing view turns it more opaque (for instance, along the rim of a curved object viewed head-on).
- Index of Refraction: Governs the way light bends as it passes through 3D layers, and therefore how things sitting behind a semitransparent layer look.
- Every surface of a 3D text or 3D shape layer receives these properties, though text animators or shape operators let you override them.

What used to be the materials Intensity and shininess have been revised and renamed Specular Intensity and Specular Shininess.

An energy-conserving shader powers the Ray-traced 3D renderer; it scales the direct lighting components (diffuse and ambient) and transparency according to reflection intensity and transparency, and scales specular intensity according to reflection rolloff. To be precise:

- Reflection Intensity is calculated with rolloff (Reflection Rolloff)
- Transparency is calculated with rolloff (Transparency Rolloff)
- Specular Intensity is calculated with rolloff (Reflection Rolloff)
- Diffuse and Ambient are reduced by (100% - Reflection Intensity) \* (100% - Transparency)
- Transparency is then reduced by (100% - Reflection Intensity)

For example:

- If Reflection Intensity is 50% and Transparency 100%, Diffuse and Ambient become 0% (value% _ (100-50)_(100-100)/100). Specular Intensity is reduced by the Reflection Rolloff amount. Transparency drops to 50% (100% \* (100-50)/100).
- If Reflection Intensity is 50% and Transparency 50%, Diffuse and Ambient become 25% of their existing values, and Specular Intensity is reduced by the Reflection Rolloff amount. Transparency will drop to 25%.
- If Reflection Intensity is 100%, Diffuse, Ambient, and Transparency become 0%. Specular Intensity is reduced by the Reflection Rolloff amount.

Color stays out of the material definition. Text or shape layers pull their color from the Character panel (text) or from shape operators (shapes). That said, the existing text animator and shape operator support lets you override material properties. On 3D text layers, the Animate pop-up menu swaps its Fill Color, Stroke Color, and Stroke Width options for Front, Back, Bevel, and Side submenus of material options.

On 3D shape layers, the Gradient Fill and Gradient Stroke shape operators give way to Front, Back, Bevel, and Side submenus of material options. Still, since a shape layer's geometry is defined by its fill or stroke, the Fill and Stroke shape operators remain on hand should you wish to bring them in. For now, fill and stroke gradients on shape layers are disregarded.

### Environment layer

Within the Ray-traced renderer, a piece of 3D footage or a nested composition layer can serve as a spherically mapped environment surrounding the scene. Reflective objects pick up this environment map layer.

Designating a footage or nested composition layer as an environment layer is done through Layer > Environment Layer. That layer becomes a 3D layer, a tiny "globe" icon shows up beside its name, and the Timeline panel surfaces this trimmed-down set of properties (under "Options"):

- Orientation and X/Y/Z Rotation: Spins the backdrop environment and the way it reads in reflections, which comes in handy for concealing the seam where the layer's edges meet.
- Opacity: Sets how opaque the environment is as a backdrop, though not within reflections.
- Appears in Reflections: Decides how the scene draws on the environment map. The environment can show in reflective objects on top of serving as a backdrop (On), show only in reflective objects and not as a backdrop (Only), or serve purely as a backdrop with no presence in reflections (Off).

Any footage or nested composition layer is eligible as an environment layer, yet — as with cameras — whichever non-muted environment layer sits highest at the current time is the one applied. Furthermore, environment layers feeding reflections stay hidden in Fast Draft mode. Wherever the environment layer is partly transparent, the backdrop shows the composition's background color, but reflections do not.

Note

- Just like adjustment lights, flipping on the Adjustment Layer switch for an environment layer confines it to the 3D reflective layers stacked beneath it.
- Parenting an environment layer to a layer that has a negative scale flips the orientation (which is the expected behavior).
