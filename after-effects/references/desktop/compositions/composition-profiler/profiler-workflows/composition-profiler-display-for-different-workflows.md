# Composition Profiler display for different workflows

Every setting, workflow, and option gets rendered differently by After Effects, and the Composition Profiler's visualization shifts to match. Here are a handful of scenarios illustrating how the rendering pipeline treats them:

-Precomps

As nested compositions, -precomps report their render times accurately. Figuring out which parts of a -precomp drive its layer render time may mean opening the precomp and digging into its layers with the Composition Profiler.

Reuse the same precomp several times in one composition and the precomps sitting higher in the layer stack borrow the cache built by the instances lower down, so they render faster.

Caching

When layers, effects, masks, and styles get rendered to memory in full or in part — cached — their render time value carries an asterisk.

Here the render time captures how long it takes to render whatever isn't cached yet plus the time to pull items out of the cache. Anything lacking an asterisk renders without touching the cache at all.

Because After Effects caches so often, profiling a frame calls for choosing Edit > Purge > All Memory and Disk Cache, forcing that frame to be rebuilt from scratch.

Layers Referenced By Effects

Picture a layer whose Video Switch is off yet which another layer's effect — Set Matte, say — references. In that scenario the render time for that effect folds in the time to render the referenced layers, while the referenced layer's own render time comes up empty. That happens because After Effects renders the referenced layer only as a piece of the effect's render process.

Over in the left-hand image, no Render Time shows for either Set Matte Source Layer or Compound Blur Source Layer. Yet on the Footage with Effects layer, the Render Time recorded for the Set Matte and Compound Blur effects absorbs the time needed to render those two source layers — Set Matte Source Layer and Compound Blur Source Layer.

Composition View Settings

Composition Profiler goes by the current composition viewer settings. If your composition viewer Resolution/Down Sample Factor Popup sits at Half, for instance, your profiled time comes out faster than it would at Full.

Switch Adaptive Resolution off while using Composition Profiler so the displayed times hold true for the preview resolution.

Expressions

For a property carrying an expression, that expression's calculation time turns up in the Render Time column. Since most expressions execute quickly, expect to see 0ms for the bulk of them.
