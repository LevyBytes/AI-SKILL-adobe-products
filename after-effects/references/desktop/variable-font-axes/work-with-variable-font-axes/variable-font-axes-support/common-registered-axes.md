# Common registered axes

Defined by the OpenType specification, these are the standardized axes. One or more of the following turn up in most variable fonts:

| Axis name | Controls | Typical range | Common values | Use cases |
| --- | --- | --- | --- | --- |
| Weight (wght) | The thickness and boldness of strokes | 100 – 900 | - 100 Thin<br>- 200 Extra Light<br>- 300 Light<br>- 400 Regular<br>- 500 Medium<br>- 600 Semi Bold<br>- 700 Bold<br>- 800 Extra Bold<br>- 900 Black | - Creating emphasis without changing fonts<br>- Smooth weight transitions in animations<br>- Fine-tuning text hierarchy |
| Width (wdth) | The horizontal compression and expansion of characters | 50% – 200% | - 50% Ultra Condensed<br>- 75% Condensed<br>- 87.5% Semi Condensed<br>- 100% Normal<br>- 112.5% Semi Expanded<br>- 125% Expanded<br>- 200% Ultra Expanded | - Fitting text into tight spaces<br>- Creating dramatic horizontal animations<br>- Adjusting text proportion for different layouts |
| Slant (slnt) | The angle of italic and oblique slanting | 0° to -15°<br><br>Note Negative values lean right, positive values would lean left (uncommon). | 0° Upright, -15° Slanted | - Creating custom italic angles<br>- Animating text from upright to italic<br>- Subtle emphasis without full italic styling |
| Italic (ital) | Roman and Italic letterforms | 0 – 1<br><br>Note Unlike slant, this changes the actual letter shapes to italic forms. | 0 Roman, 1 Italic | - Smooth transitions between roman and italic<br>- Creating intermediate italic states<br>- Per-character italic variations |
| Optical Size (opsz) | Optimizes letterforms for different display sizes | 6pt to 144pt (varies by font) | - Smaller sizes: Increases spacing, simplifies details, and thicker strokes<br>- Larger sizes: Tighter spacing, more contrast, refined details | - Optimizing readability at different scales<br>- Creating size-appropriate text animations<br>- Fine-tuning typography for specific point sizes |
