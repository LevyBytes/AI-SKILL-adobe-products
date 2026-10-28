# Introduction - Organization

An overview of how you can build atop After Effects lives in What Can I Do With This SDK? — it lays out what plug-ins are and the way they cooperate with the application, walks through the sample projects and how to adapt them, and points out where plug-ins get installed and which resources they draw on.

Turn to Effect Basics for the groundwork on effect plug-ins. That section walks through the function parameters that flow into and back out of an effect plug-in's entry point, and it lays out capability flags, effect parameters, and image buffers.

For the full story on building a finished effect plug-in by way of the numerous callback functions on offer, see Effect Details, which additionally suggests plenty of ways to test that your plug-in holds up reliably.

To handle 32-bit floating point images, the effect plug-in API is extended through SmartFX.

Events dispatched to effect plug-ins, the wiring-in of your own custom interface elements, parameter supervision, and how custom data parameter types lean on Custom UI messaging are all the territory of Effect UI & Events.

For audio effects, look under... Audio.

The After Effects General Plug-in (AEGP) API gets a thorough treatment in AEGPs: the callback functions you're handed, tapping into internal messaging, reaching into the live contents of open projects, and responding to menu commands each get extended coverage.

Specialized 3D-renderer plug-in AEGPs are the subject of Artisans.

AEIOs are the specialized AEGPs responsible for file input and output.

Matters of staying compatible with Premiere Pro — along with other applications that handle only a portion of After Effects plug-ins — are taken up in Premiere Pro & Other Hosts.
