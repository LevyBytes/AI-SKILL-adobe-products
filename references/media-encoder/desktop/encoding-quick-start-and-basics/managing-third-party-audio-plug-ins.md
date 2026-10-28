# Managing third-party audio plug-ins

Search Last updated on Mar 27, 2026

Manage third-party audio plug-ins by choosing which plug-ins are enabled or disabled.

Previously, Premiere sequences containing third-party audio effects defaulted to DynamicLink rendering through Premiere, even when Import sequences natively was enabled. Media Encoder now provides native audio rendering for audio effects: VST3 and VST plug-ins on both platforms, plus Audio Units plug-ins on macOS. For Import sequences natively mode, users decide which third-party audio plugins load, allowing selective enabling or disabling. Effects are applied in Premiere projects and then sent to Media Encoder. Third-party effects must be scanned before they can be accessed. For feature details, see the documentation supplied by the plug-in manufacturer.

Open File > Manage Audio Effects > Audio Plug-in Manager.

1. Manage and optimize audio plug-Ins
   Under VST Plug-in Folders, click Add to choose custom folders for plug-in scanning. Click Default to choose the standard VST folder for your operating system.

The Folders section is only for legacy VST effects. Do not add a VST 3 folder there.

In the Available Plug-Ins section, choose Scan for Plug-Ins to scan every system audio plug-in folder. After a recent plug-in update, choose Rescan existing plug-ins.

Media Encoder automatically enables every valid effect.

To keep the application's menus efficient, use the check boxes next to each effect name to enable or disable plug-ins. If a plug-in appears as Not Working, click Reload to rescan it.

Choose the plug-ins you want available in Media Encoder and click OK.
