# Configure and output separations

Open File > Print.

In the Printer menu, choose the output device, or choose PostScript File to save separations to a file.

If you are saving to a file, choose a PPD that supports the target output device.

Choose General from the left panel and specify the page range to separate.

In the left panel, open Output.

Set Color to Separations for host-based separations, or set it to In-RIP Separations when separation settings should be preserved for RIP processing. Adobe In-RIP Trapping requires In-RIP separations because it needs simultaneous access to all colors during RIP processing.

Review the ink list and click the printer icon beside any ink names to control which separations are created.

When needed, use Ink Manager for spot-to-process color conversion or for creating ink aliases.

In the left panel, open Graphics, then configure Send Data as All, Download as Complete or Subset, and PostScript for the output device level, either Level 2 or Level 3.

In the left panel, open Advanced and set Transparency Flattener Preset to [High Resolution] or to a custom high-resolution preset.

Check the Summary section to verify separation settings, color management, and document specifications.

Choose Print to output to a device, or choose Save to create a PostScript file with embedded separation settings.

Saving separations to a PostScript file preserves separation settings, PPD information, and color conversions. That preserved information keeps output consistent when the file is processed at the RIP or sent to the print service provider.

For documents that contain spot colors, Ink Manager can convert them to process colors when the job requires CMYK-only printing. This avoids accidental extra plates and lowers printing costs.
