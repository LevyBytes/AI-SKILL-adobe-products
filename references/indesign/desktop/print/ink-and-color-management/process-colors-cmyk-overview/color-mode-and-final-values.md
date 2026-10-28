# Color mode and final values

InDesign lets you define process colors with RGB, HSB, LAB, or CMYK color modes, but CMYK is always used for the final output values. When color separations are printed, InDesign translates any non-CMYK process colors into CMYK values according to the active color management settings and document profile.

That conversion is important because:

- RGB-specified colors can change appearance after conversion into the smaller CMYK color gamut
- Monitors show color in RGB, so on-screen color may not match printed output
- A calibrated color management system improves prediction of these changes, but it cannot remove them completely

For reliable high-quality print production, define process colors with CMYK values from printed process color reference charts, or coordinate with the commercial printer to set color expectations.
