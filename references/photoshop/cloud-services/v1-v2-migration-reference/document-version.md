# Document version

**Document version:** 1.22
**Created on:** October 29, 2025
**Updated last:** May 28, 2026

**Coverage:**

- Migration guides gathered into one consolidated set
- Artboard migration details for images/source structure, artboardSpacing, validation rules, and common issues
- Execute-actions coverage for ActionJSON stringification, the additionalContents rename, and resource limits
- Endpoint mapping coverage, with depth blur called out as not yet supported
- Storage options reference with ACP clarification and CC path rules that disallow a leading slash
- Issue-and-solution reference material
- Examples that show code transformations
- Checklists used for validation
- Patterns for LLM interaction
- v2-whats-new.md: API-first restructuring. The execute-actions material covers running UXP scripts, UXP adhoc output through scriptOutputPattern, and published action files; generate-manifest covers artboard type, smart object extraction, and rich layer metadata; create-composite covers the reworked smart object API, SVG support, linked smart-object resize behavior, text rendering engine changes, new character styles, group layers, and ICC profiles. It also includes architectural improvements (TODOs), a storage options callout, and removal notes for granular protection, multiple outputs, and atomic multi-op sections.
- v2-api-catalog.md: per-endpoint behavioral comparison plus a breaking-changes checklist
- XMP with Masks migration patterns for V1 → V2
- XMP with Orientation override as a new V2 capability
- Clarifications for Creative Cloud Storage (ACP)
- Processing order for layers: V2 top-down and V1 bottom-up
- `additionalContents` / `__ADDITIONAL_CONTENTS_PATH_0__` in place of `additionalImages`; placeholder mapping from V1 `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` and `PEGASUS_ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_${index}` to `__ADDITIONAL_CONTENTS_PATH_${index}__`
- UXP object syntax paired with the `plugin-temp:/` output path
- `scriptOutputPattern` hosted destination shape: `{"validityPeriod": 3600}`
- Formatting for the `resolution` object, integer `depth`, and `"grayscale"` mode name
- Replacement of `locked`/`isLocked` by the `protection` array, plus `group_layer` type
- Explicit `operation.type: "edit"` requirement instead of inferred edits
- `referenceLayer` as the relative-placement field in place of `relativeTo`
- Pixel mask topics, including `pixelMask`, `offset.horizontal`/`offset.vertical`, `userMask`, `isClipped`, and `pixelMask.delete` for removal on edit layer types
- Font color limits: rgb/cmyk/gray 0–32768, lab `l` 0–32768, and lab `a`,`b` -16384–16384
- Export-layer rules for `cropMode`, `layer_bounds` single-layer use, PSD restrictions, and defaults
- ICC profile behavior for standard/custom profiles, CMYK through custom profiles, and PSDC restrictions
- Validation tables for color mode and bit depth on each export path
- Cloud PSD mediaType value `document/vnd.adobe.cpsd+dcxucf`
- Manifest response updates: renamed layer types such as `background_layer`, removal of `typeAttributes` from background entries, changed bounds format, thumbnail object details, artboard `layers[]` key, and document field renames
- Composite API V1→V2 field-level diff for all 4 V1 endpoints, all 7 layer types, and output formats
- Artboard API V1→V2 field-level diff for input restructure, storage mapping, quality/compression enums, crop mode, and status response
- Artboard visibility behavior change: V1 renders the full canvas while ignoring artboard container visibility; V2 honors that visibility, drops hidden artboards, and reduces output dimensions to visible content
- Adjustment-layer migration items: required `adjustments.type` discriminant, type mapping table, `exposureValue` rename, hue/sat `hueSaturationAdjustments[]` restructure, `localRange`, parameter ranges, and omitted `transformMode`
- Text-layer migration items: off-by-one handling for character-style ranges (V1 `to`=length → V2 `apply.to`=inclusive end index), `font.postScriptName`, area/point `text.frame` types, bounds conversion, font options rename, and `textOrientation`
- Smart-object migration items: `smartObject.smartObjectFile.source.url`, `isLinked`, resize-with-linked-SO rasterization behavior, SVG support, and source file types (PSD, JPEG, PNG, TIFF, SVG, AI, PDF); V2 adds SVG and AI, and AI requires Create PDF Compatible File in Illustrator
- `/pie/psdService/text` migration: because V2 lacks a declarative equivalent, use `execute-actions` with ActionJSON for fixed edits or UXP for conditional/iterative logic; decision table included
- Blend-mode field location: most layers use top-level `opacity`/`blendMode`, while `smart_object_layer` uses `blendOptions`
- Layer-transform rules: V1 `bounds` becomes V2 `transform {offset, dimension}` with required `transformMode: "custom"`; `transform` is invalid with `fit`/`fill`/`none` and returns 400; fit/fill place at (0,0), so custom position needs a second request; dimension/angle/skew uses a geometry pass followed by setOffset, with priority offset > alignment > restore original; anchor default is (0,0)
- Alignment migration: move V1 layer-level values to V2 placement-level `horizontalAlignment`/`verticalAlignment` under `placement.type: "custom"`
- Document creation `fill` change: `"backgroundColor"` becomes `"background_color"`; object form is `{solidColor:{...}}`; depth-by-mode table
