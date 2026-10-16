# What's New — What's New in CC 2015 (13.5)?

- Separate UI and Render Threads

A sweeping architectural overhaul lands in this After Effects release: the UI (main) thread is now split apart from the render thread. Selectors like `PF_Cmd_RENDER`, `PF_Cmd_SMART_PRERENDER`, and `PF_Cmd_SMART_RENDER` originate from the render thread and go out to effect plug-ins. From the UI thread come selectors such as `PF_Cmd_SEQUENCE_SETUP`, `PF_Cmd_USER_CHANGED_PARAM`, `PF_Cmd_DO_DIALOG`, and `PF_EVENT_DRAW`. As for `PF_Cmd_SEQUENCE_RESETUP`, it is

dispatched from both the render and UI threads.

The point of all this is sharper responsiveness and snappier interaction. That said, the reworked design carries fresh requirements and can upset assumptions that current plug-ins had counted on. A few of the bigger shifts follow:

1. The render thread can no longer alter the project (indeed, it now keeps its own private copy of it)
2. Modified sequence data cannot be handed from rendering back up to the UI thread for custom UI refreshes
3. As a rule, lengthy work — like rendering frames synchronously — should no longer happen on the UI thread

Wondering whether your plug-in is impacted? Probe for these symptoms:

1. Rendering fails to refresh once a UI parameter changes, because it leans on sequence_data that might not currently be copied across to render
2. Rendering fails to refresh while you click or drag inside the Composition Window (for much the same reasons)
3. Custom Effect UI fails to refresh because it leans on sequence_data produced in render (which the UI can no longer reach, since it lives in a separate project, the render project can't be mutated, and the cache holds frames rendered earlier)
4. Errors warning you that an operation on the render thread (or the UI thread) isn't expected

Broadly, any computation meant to stick around or drive the UI will now need to be pulled out of the UI thread instead of being pushed in from the render thread. Handling these situations may call for the new

13.5 APIs or for approaches that differ from earlier releases.

- The Need For More Efficient Sequence Data Handling
