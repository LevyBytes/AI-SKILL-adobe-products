# rasterFlags

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | Not available in Reader | Integer | R/W |

A field of bit flags. Toggle them individually with bitwise operations against the constants rasterFlagValues object. The user's preferences supply the default.

constants.rasterFlagValues Object

What follows is a list of the rasterFlagValues object's properties. Not one of these properties exists in Adobe Reader.

| Property | Description |
| --- | --- |
| textToOutline | Once text is turned into outlines it can gain weight, which shows up most on small fonts. Where text sits within artwork that uses transparency, flattening may outline it, leaving it out of step with text kept clear of such artwork. Switching this option on keeps every bit of text looking uniform. |
| strokesToOutline | Once strokes are turned into outlines they can gain weight, which shows up most on thin strokes. Where strokes sit within artwork that uses transparency, flattening may outline them, leaving them out of step with strokes kept clear of such artwork. Switching this option on keeps every stroke looking uniform. |
| allowComplexClip | Switching this on keeps the seams between vector and rasterized artwork hugging object paths closely. It cuts down the stitching artifacts you get when one slice of an object is flattened while the rest stays vector. The trade-off is that the resulting paths may grow too intricate for the printer to cope with. |
| preserveOverprint | Turn this on when you output separations and overprinted objects live in the document. Doing so tends to hold overprint for objects clear of transparency, which lifts performance. Composite printing renders it moot. Leaving it off can yield steadier output, since every instance of overprinting gets flattened regardless of any transparency involvement. |

Example 1: Within the Transparency Flattening area of the Advanced Printing Setup dialog box, tick the "Convert All Text to Outlines" check box.

```javascript
pp = getPrintParams();
rf = pp.constants.rasterFlagValues;
pp.rasterFlags = rf.textToOutline;
this.print(pp);
```

Example 2: Within the Transparency Flattening area of the Advanced Printing Setup dialog box, clear "Complex Clip Regions" (on by default).

```javascript
pp = getPrintParams();
rf = pp.constants.rasterFlagValues;
pp.rasterFlags = pp.rasterFlags & ~rf.allowComplexClip;
// or pp.rasterFlags &= ~rf.allowComplexClip;
this.print(pp);
```
