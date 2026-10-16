# What Can I Do With This SDK? — What Plug-Ins Can I Build With This SDK?

Applied to the video or audio of a composition, effect plug-ins process that image and/or sound data. Brightness and Contast, Hue/Saturation, Gaussian Blur, and Warp Stabilizer are a few of the effects that ship built in. To let users tune the result, an effect can expose its own parameter controls, and the values of those parameters are free to change across time; an effect may also pull from other layers and parameters at various moments while computing its output. A common misconception is that every plug-in is an effect — in reality, effects are only one of the plug-in categories After Effects relies on.

For a quickstart video that walks through building an effect on macOS, head to adobe.ly/2sjMDwM

Nearly any piece of an After Effects project or its preferences is within reach of After Effects General Plug-ins (AEGPs), which can both read and alter it. Such plug-ins are able to insert menu items, register ('hook') themselves so they receive After Effects' internal commands and fire those commands off, and contribute fresh panels that dock and resize inside the After Effects interface. Markers and keyframes are theirs to manipulate, the render queue is theirs to manage, and they can even execute scripts. The AAF importer and the SWF exporter are a couple of the AEGPs that come built in, and Automatic Duck Pro Import AE counts as another widely recognized one.

Support for additional media file types is what After Effects Input/Output (AEIO) plug-ins deliver. The Premiere Pro Importers API covers comparable ground and is the better choice in many situations, unless your case calls for a custom setup dialog that specifies interpretation settings. Alongside the AEGP API, AEIOs draw on a handful of APIs that are particular to AEIOs. Photoshop format plug-ins and filters, together with Foreign Project Format (FPF) plug-ins, remain functional in After Effects, yet those APIs were deprecated long ago in favor of the AEIO API.

To support broadcast-quality monitoring and tape playback, BlitHook plug-ins route video out to external hardware. A good place to begin is the EMP sample project. From After Effects CC 2014 onward, Mercury Transmit is the API to reach for.

Rendering the output of 3D layers falls to Artisans, which assume the job of 3D rendering away from After Effects — though After Effects keeps handling every 2D layer itself. Like AEIOs, Artisans lean on the AEGP API plus a set of APIs specific to Artisans.

None of the integrations above fit what you have in mind? Plenty of flexibility remains in After Effects, and a number of other routes exist for hooking into it. See: Other Integration Possibilities.
