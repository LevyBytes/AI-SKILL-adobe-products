# Windows

On the Start Taskbar, right click Volume Shape > Open Volume Mixer. Confirm that Premiere volume is not muted.


Open an Adobe Premiere project containing audio clips, video clips with audio, or a Bars And Tone clip.

Open Premiere Preferences and choose Audio Hardware.

In the Device Class dropdown menu, choose an ASIO driver if one appears; otherwise choose Premiere WDM Sound (Premiere CS6) or MME (Premiere).

Use the Default Output menu to enable the device you prefer.

Tip

For best results, enable the same device selected as the system default playback device in the related procedure.

Select OK to close the Preferences window.

Play a clip. If sound is still absent, go back to Step 2 and test a different driver.

Note

For related details, see Premiere audio drivers and audio hardware preferences.


If the tasks above do not restore sound, the computer's sound card driver may be outdated. Sound card manufacturers often release driver updates. Ask the sound card manufacturer or the computer manufacturer for an updated driver, or download one from the manufacturer's website. After updating the driver, repeat the earlier solutions.

If an ASIO driver is not installed and one exists for your sound card, download and install the ASIO driver.
