# Automatic loudness correction — Applying loudness correction

Bring the media files into AME and place them in the Queue panel.

1. Queue panel
   For a queued file, open its preset to turn on loudness correction.

2. Apply loudness correction
   On the Effects tab, enable the Loudness Normalization check-box.

3. Effects settings
   Use the Loudness Standard drop-down list to pick the standard required for your region. The available choices are:

- ATSC A/85
- EBU R128
- ITU BS.1770-3

Only ITU BS.1770-3 allows its loudness value to be edited; the other standards keep their loudness fixed.

To create a media loudness standards report, enable the Write Loudness Report check-box. AME writes an xml file containing the loudness value and true peak level.

Select OK.

Built-in loudness normalization supports mono, stereo, and 5.1ch audio. For channel layouts outside those types, including 4ch, 8ch, 16ch, and similar layouts, AME shows the Channel Configuration screen.

In this interface, define multiple audio streams and assign each channel stream to mono, stereo, or 5.1. Successful normalization requires the channel count assigned here to equal the source file's channel count.
