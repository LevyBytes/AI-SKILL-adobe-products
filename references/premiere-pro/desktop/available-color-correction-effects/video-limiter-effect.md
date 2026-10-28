# Video Limiter effect

Use the Video Limiter effect when RGB values need to fit HDTV digital broadcast specifications. It can be applied per shot, or added as an output effect so the complete sequence is limited during export. When Video Limiter is enabled on the timeline, it affects both editing and export. It does not provide the extra chrominance limiting that legacy Analog NTSC transmissions require.

The Video Limiter effect has the following options:

- 100 = IRE 0 to 100, RGB 0 to 255, Y 16 to 235. SMPTE limited range.
- 103 = IRE -3 to 103, RGB -8 to 263, Y 9 to 242
- 105 = IRE -5 to 105, RGB -13 to 268, Y 5 to 246. EBU R103 "Preferred".
- 109 = IRE -7 to 109, RGB -17 to 277, Y 1 to 254. SDI limits

- Compression before clipping: starts a knee at 3%, 5%, 10%, or 20% below the clipping level, pushing colors back into range before hard clipping occurs.
- Gamut Warning: when enabled, compressed colors are shaded and colors outside the range are highlighted. The Gamut Warning option is not available in Export Effects settings. If Gamut Warning is enabled on the timeline, it also remains active during export.
- Gamut Warning Color: sets the color used for the gamut warning.
