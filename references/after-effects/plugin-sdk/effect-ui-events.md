# Effect UI & Events

An effect may furnish its own UI in a pair of spots: first, the Effect Controls Window — that's the custom ECW UI; and second, the Composition or Layer Windows, known as Custom Comp UI.

To go custom, an effect sets `PF_OutFlag_CUSTOM_UI` (from `PF_OutFlags`) during `PF_Cmd_GLOBAL_SETUP` (from Global Selectors) and deals with the `PF_Cmd_EVENT` selector.

With custom ECW UI, an effect can hand a parameter a tailored control — usable either alongside the standard parameter types or with Arbitrary Data Parameters.

A parameter carrying custom UI needs `PF_PUI_CONTROL` (from Parameter UI Flags) set as it's added.

Custom Comp UI lets an effect manipulate the video directly within the Composition or Layer Windows.

With the effect selected, the Window is able to lay custom controls right over the video and field user interaction with them, making parameter adjustment quicker and more intuitive.

By calling `PF_REGISTER_UI`, effects sign themselves up to receive events.

For user-interface handling and parameter management, After Effects can dispatch events to effects, folding them into its central message queue.

User input triggers many events, but After Effects also fires events at effects tasked with managing arbitrary data parameters.

`PF_EventExtra`->e_type carries the event type, and the assorted events get covered below.
