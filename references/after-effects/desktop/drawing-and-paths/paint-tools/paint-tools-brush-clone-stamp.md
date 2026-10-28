# Paint Tools Brush Clone Stamp

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

Search Last updated on May 5, 2026

In Adobe After Effects, the Brush and Clone Stamp tools let you paint, retouch, and repair footage with edits made straight onto individual frames.

Paint tools include the Brush tool , the Clone Stamp tool , and the Eraser tool . Each one works in the Layer panel, where you lay paint strokes onto a layer. None of them disturbs the layer source—instead, every paint tool puts down brush marks that shift the color or transparency across a region of the layer.

In the Timeline panel you can view and adjust each paint stroke's own duration bar, Stroke Options properties, and Transform properties. Unless you change it, a paint stroke takes its name from the tool that produced it plus a number marking its place in the drawing sequence.

Once a paint stroke exists, you're free at any point to adjust and animate each of its properties using the very methods you'd apply to a layer's properties and duration. Paint stroke path properties can be copied both ways between themselves and the properties of mask paths, shape layer paths, and motion paths. Expressions push this further, letting you link those properties for extra power and flexibility.

Note

Settings you want locked in before laying down a paint stroke go in the Paint and Brushes panels. Once the stroke is down, adjust and animate its properties through the stroke's entries in the Timeline panel.

Along every paint stroke, individual brush marks get spaced out—though under the default settings they often look like one unbroken stroke. The shape, spacing, and other traits of those brush marks come from the Brush settings in the Brushes panel; per stroke, you can also tweak these Stroke Options properties in the Timeline panel.

Within After Effects, paint strokes count as vector objects, so scaling them up costs no quality. Certain other applications—Photoshop, for one—treat paint strokes as raster objects.

In the Timeline panel, collections of paint strokes turn up as instances of the Paint effect. A Paint On Transparent option rides along with each Paint effect instance. Turn it on and the layer source image, together with every effect ahead of this Paint effect instance in the effect stacking order, gets skipped; the strokes land on a transparent layer instead.

Note

When the job calls for refined painting, drawing, cloning, or retouching, you might lean on the advanced paint tools that Adobe Photoshop offers. See Working with Photoshop and After Effects.

Note

A number of features overlap between the Roto Brush tool and the paint tools, and Roto Brush strokes can be handled in many of the same ways paint strokes are. For more on both, consult Roto Brush strokes, spans, and base frames.
