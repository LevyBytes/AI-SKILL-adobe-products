# Fully new fields (absent in V1)

- Document metadata newly includes `bounds`, `imageMode`, `depth`, `iccProfile`, `xmp`, `title`, `resolution`, `globalLightingAngle`, `globalLightingAltitude`, `layerFXVisible`, and `pixelScaleFactor`
- `protection` array replaces `locked`
- Per-layer mask data now covers `userMask`, `vectorMask`, and `pixelMask` (restructured from `mask`)
- Per-layer bounds now include `compositeFrame`, `referenceFrame`, and `compositeDimensions`
- `proportionalScaling`, `effects`, and the `layerSettings` block are added
- Extended `blendOptions` fields include `clipped`, `interior`, `fillOpacity`, `knockout`, `channelRestrictions`, and `blendRanges`
- Text data adds `missingFonts`, `antiAliasing`, `textOrientation`, `frame.bounds`, `frame.boundsRaw`, `frame.matrix`, and `frame.baselineAlignment`
- Text warp data is available through the `layerSettings.layerSpecific.textLayerSettings` block
- Character style additions are `fontAlpha`, `syntheticBold`, `syntheticItalic`, `underline`, `capsOption`, `lineHeight`, `letterSpacing`, and `position`
- Paragraph additions are `writingDirection`, `firstLineIndent`, `startIndent`, `endIndent`, `spaceBefore`, `spaceAfter`, and `position`
- Smart object fields now include `isSmartObject`, `isValid`, `smartObjectData.transform`, `ccLibrariesElement`, and `extracted`
- Artboard data now uses the `typeAttributes.artboard` block and adds `artboardPresetName`, `artboardRect`, background color, and `guideIDs`
- Background layers add the `backgroundLayer` flag and `background.canConvertToLayer`; they have no `typeAttributes`
- Adjustment data adds the `adjustments.type` discriminant, plus new adjustment types `curves` and `gradient_map_custom_stops`
- Top-level `version` is new
