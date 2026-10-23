# What Can I Do With This SDK? - How Does After Effects Interact With Plug-ins?

Authored in C or C++, plug-ins take the form of bundle packages under macOS and DLLs under Windows. On either platform a Plug-in Property List (PiPL Resources) resource has to be present inside them. For After Effects to load and run them, the plug-ins have to sit in one of a small number of designated folders.

When it comes to effects plug-ins, After Effects dispatches command selectors — together with the relevant information — to the plug-in Entry Point that the effect's PiPL Resources resource names. These selectors arrive in reaction to what the user does: applying the effect, altering parameters, scrubbing the timeline's frames, and rendering each set off its own distinct sequence of selectors.

Each sequence gets its own effect instance from After Effects, with input data and settings unique to it. Global data is shared across every instance, and within a sequence data can be shared among all of that sequence's frames. Applying an effect does not make After Effects crunch all the image data right away; it calls an effect only at the point its output is actually needed.

The entry point function of an After Effects General Plug-in (AEGP) fires while the application starts up, and that is when it registers for whatever messaging it requires. After that, user actions drive any further calls to the AEGP, arising as the plug-in responds to UI events or menu commands. Some plug-ins, depending on their feature set, also have to answer OS-specific entry points for thread management and UI work.

With BlitHook plug-ins, frames get pushed at the moment they show in the Composition panel. A user can kick off a RAM preview over a stretch of the timeline, which renders that stretch into RAM and then plays the whole thing back at full speed.
