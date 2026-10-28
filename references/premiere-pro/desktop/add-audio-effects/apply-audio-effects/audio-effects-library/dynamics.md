# Dynamics

Dynamics Effects contains four sections, each with independent controls. LED and gain reduction meters provide a quick view of signal processing.

Dynamic Effects includes these parameters:

- Auto Gate: removes noise under a selected amplitude threshold. The LED meter shows green when audio passes through, red when no audio passes, and yellow during attack, release, and hold intervals.
- Compressor: lowers the dynamic range by reducing audio above a chosen threshold. Ratio controls the dynamic-range change, while Attack and Release shape timing behavior. Gain raises the audio level after compression, and the Gain Reduction meter reports the amount of level reduction.
- Expander: expands dynamic range by reducing audio below the specified threshold. Ratio controls the amount of dynamic-range change. The Gain Reduction meter shows how much the audio level is reduced.
- Limiter: reduces audio that rises past a selected threshold. The meter LED lights when limiting occurs.


- Graph: shows input level on the horizontal ruler (x-axis) and the resulting output level on the vertical ruler (y-axis). The default straight line from lower left to upper right represents an unchanged signal, where each input level maps to the same output level. Changing the graph changes the input/output relationship and therefore the dynamic range. For example, if a desired sound sits near -20 dB, that input level can be boosted while the rest remains unchanged. An inverse line from upper left to lower right can also be drawn to raise quiet sounds and reduce loud ones.
- Add point: adds a graph control point from the input and output level numbers you enter. This is more precise than adding points by clicking the graph.
- Delete point: removes the currently selected graph point.
- Invert: reverses the graph so compression becomes expansion, or expansion becomes compression.
- Reset: restores the default graph state.
- Spline Curves: changes control-point transitions into smoother curves instead of sharper straight-line shifts.
- Make-up Gain: raises the processed signal level.

Use Dynamics Processing to manage an audio clip's dynamic range by changing the compression curve and threshold levels.
