# SmartFX - The Way Things Are Now

By flipping the calling sequence around, SmartFX gets past this problem. Now the effect learns how much of its output is wanted and has to ask the host outright for the inputs it requires. Rendering breaks into two phases: pre-render and render.

In the pre-render phase, the effect spells out the input pixel data it requires; that requirement can hinge on whatever you please (non-input layer parameters, non-layer parameters, data from in_data, sequence-data settings, and so on). The effect also has to report the extent of the output it will produce, which can come out smaller than what was asked for when the requested portion of the layer contains empty pixels.

Throughout the render phase, the effect is limited to fetching pixels it asked for earlier. Splitting the work this way opens up many key optimizations. Take an effect that multiplies or mattes one input against another: it may find its first input is not

needed in the slightest if the mask fails to intersect it. After Effects also runs important optimizations internally to copy image buffers as rarely as possible, and those only become feasible once the host knows the buffer sizes for every input and output.

After Effects never unloads SmartFX plug-ins, the same as with AEGPs.
