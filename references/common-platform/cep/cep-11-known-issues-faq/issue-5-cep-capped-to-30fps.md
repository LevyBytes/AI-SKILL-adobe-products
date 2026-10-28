# Issue 5: CEP capped to 30fps

On Mac, CEF clamps frame rate to 30 fps. For performance reasons, CEP does not alter that configuration.
One possible workaround is to add --disable-frame-rate-limit as CEFCommandLineArgs in manifest.xml, but this is not recommended because it turns vsync off and can generate an uncontrolled number of frames. CPU and GPU usage can be maxed out, causing display hangs and stutter.

---
