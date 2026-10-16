# PF_OutFlag2_CUSTOM_UI_ASYNC_MANAGER

`PF_OutFlag2_CUSTOM_UI_ASYNC_MANAGER`

`PF_GetContextAsyncManager`() `AEGP_CheckoutOrRender_ItemFrame_AsyncManager`() `AEGP_CheckoutOrRender_LayerFrame_AsyncManager`()

In situations where renders like these used to fire as a side-effect or get cancelled implicitly

(custom UI histogram drawing being one), and where the plug-in itself has a murky view of lifetime, turn to the fresh "Async Manager," which can juggle several concurrent async requests for effect Custom UI and will play nicely with other AE UI behavior on its own.

Note: For passive drawing scenarios, fetching frames asynchronously is the preferred path — but not when a user's action is going to change the project state. When you are (1) reacting to a particular user click AND 2) you must update the project because of it, the synchronous `AEGP_RenderAndCheckoutLayerFrame`() is the recommended choice.

The SDK's new HistoGrid sample illustrates fully asynchronous custom UI DRAW event handling on the UI thread for cases where one or more frame renders are required — for instance, computing histograms displayed in the effect pane. Do note one known bug: drag-changing an upstream param may leave the histogram draw stale until the mouse passes over it.

- Get Rendered Output of an Effect from its UI

Keyers, or effects that plot histograms of already-processed video, can grab the `AEGP_LayerRenderOptionsH` they require by way of the new `AEGP_NewFromDownstreamOfEffect`() in `AEGP_LayerRenderOptionsSuite`. Calls to this function are permitted from the UI thread only.

- AEGP Usage on Render Thread

We've made validation stricter around AEGP calls that could be used unsafely (from the wrong thread, say, or to mutate project state during render). Code that runs into such cases may now surface new errors. To illustrate, every one of the calls listed here will fail with an error once issued on the render thread:

suites.UtilitySuite5()->`AEGP_StartUndoGroup`() suites.StreamSuite2()->`AEGP_GetStreamName`() suites.StreamSuite2()->`AEGP_SetExpressionState`() suites.StreamSuite2()->`AEGP_SetExpression`() suites.StreamSuite2()->`AEGP_GetNewLayerStream`() suites.StreamSuite2()->`AEGP_DisposeStream`() suites.EffectSuite3()->`AEGP_DisposeEffect`() suites.UtilitySuite5()->`AEGP_EndUndoGroup`()

The fix is to relocate those calls onto the UI thread. Selectors meant for passive UI updates — `PF_EVENT_DRAW` among them — are not the place to mutate project state.

`AEGP_RegisterWithAEGP`() offers another illustration of the tighter rules. The docs have always stated that this function has to be called during `PF_Cmd_GLOBAL_SETUP`. Even so, earlier versions let plug-ins call it at other moments with no ill effect. That ends in 13.5! Invoking this function at any other time can trigger crashes!

- `PF_Cmd_SEQUENCE_RESETUP` Called on UI or Render Thread?

A `PF_InFlag_PROJECT_IS_RENDER_ONLY` flag now exists, valid solely within `PF_Cmd_SEQUENCE_RESETUP`, and it reports whether the effect instance exists purely for rendering. When that's the case, treat the project as strictly read-only, and you won't be handed UI-related selectors for that effect instance. You can lean on this to skip any UI-only setup that render has no use for. When the flag is false, set up the UI as you normally would. Don't repurpose this to dodge error reporting in render; render errors should still be reported the usual way through the existing SDK mechanisms.

- Changes to Avoid Deadlocks

It came to light during development that certain call patterns could deadlock. Safeguards have been put in to head this off. These instances arise within `PF_Cmd_UPDATE_PARAMS_UI` when specific calls are used, owing to deprecated synchronous behavior those calls exhibit in the UI:

Within `PF_Cmd_UPDATE_PARAMS_UI` alone, `PF_PARAM_CHECKOUT`() applied to layer parameters carries on as it did before, except it hands back a black frame of matching size and so on rather than genuinely rendered pixels. Any code that relied on this to detect whether parameters are enabled or disabled should keep working as before. Code that used it to fetch analysis frames and the like outside of `PF_Cmd_UPDATE_PARAMS_UI` will likewise behave as before.

Within `PF_Cmd_UPDATE_PARAMS_UI` alone, `PF_GetCurrentState`() will now hand back a random GUID. In this context it no longer behaves as it once did, though everywhere else it carries on working correctly.

The cases above ought to be uncommon, but get in touch with us about workarounds if this does affect you.

- Deprecated

`AEGP_RenderAndCheckoutFrame`() (when on the UI Thread). As a rule this call shouldn't be made on the UI thread, since synchronous renders stall interactivity.

There's no problem using it on the render thread. The lone scenario where it might still earn its keep on the UI thread is something like a UI button needing a frame to compute a parameter that then updates the AE project.

Take, for instance, an "Auto Color" button that grabs a frame and then tweaks effect params based on it.

We've built a beta of a progress dialog for this blocking operation should it run slowly, but using this call on the UI thread ought to be confined to such special cases. That dialog's design isn't finalized.

- Flag for Thread-Safe Effects
