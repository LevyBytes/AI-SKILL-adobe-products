# Third-party font management plugins conflict with InDesign

Go to C:\Program Files\Adobe\Adobe InDesign [version]\Plug-Ins (Windows) or /Applications/Adobe InDesign [version]/Plug-Ins (macOS).

Create a desktop folder named Disabled Plugins.

Move non-Adobe font plugins into this folder.

Restart InDesign and test stability. If the crash stops, turn plugins back on individually to find the problematic one, then ask the plugin vendor for updates. If crashes continue after the plugins are removed, clear the system font cache. Corrupted font cache files can keep InDesign from reading font metadata correctly.
