# What Can I Do With This SDK? — Where Do Plug-ins Appear In After Effects?

Within whichever effect category their PiPL names, effects plug-ins show up under the Effect menu as well as in the Effects & Presets panel. After one is applied, the Effect Controls panel (ECP) is where that effect's parameter controls — sliders, pop-ups, and so on — become visible.

Any After Effects menu can receive items from After Effects General Plug-ins (AEGPs), and they can list extra panels in the Window menu too. There's no visible distinction between these menu items and the ones After Effects supplies on its own.

Depending on what kind of importer it is, an AEIO or a Photoshop Format plug-in may surface under File > Import, or within the Import File dialog under the Files of type drop-down. The render queue may likewise list AEIOs and Format plug-ins among the output formats it offers.

After Effects loads and uses BlitHook plug-ins on its own, yet none of them shows up in a menu or dialog. Optionally, such a plug-in can supply a menu item that launches its own custom settings dialog, registering and refreshing that item by way of the AEGP API.

For updating the menu, it can register with `AEGP_RegisterUpdateMenuHook`() so After Effects calls it, and it can dim or enable the menu item through `AEGP_EnableCommand`()/DisableCommand().

Within the Composition Settings dialog, the Advanced tab carries a Rendering Plug-in drop-down, and that is where Artisans appear.
