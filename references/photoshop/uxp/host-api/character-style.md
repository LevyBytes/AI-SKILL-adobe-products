# CharacterStyle

Stores Character panel-related settings for Photoshop text.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| alternateLigatures | _boolean_ | R W | false | - | 24.1 | Enables discretionary ligature use. |
| antiAliasMethod | [_AntiAlias_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#antialias) | R W | SHARP | - | 24.1 | Text anti-aliasing mode. |
| autoKerning | [_AutoKernType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#autokerntype) | R W | METRICS | - | 24.1 | Auto-kerning setting to apply. |
| baseline | [_Baseline_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#baseline) | R W | NORMAL | - | 24.1 | Baseline setting for the text. |
| baselineShift | _number_ | R W | - | -1296..1296 | 24.1 | Pixel baseline offset for text when the document is 72ppi. |
| capitalization | [_TextCase_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#textcase) | R W | NORMAL | - | 24.1 | Case conversion applied to text. |
| characterAlignment | [_CharacterAlignment_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#characteralignment) | R W | ROMAN | - | 24.1 | Character alignment setting. For mixed character sizes on one line, this chooses how text lines up against the largest characters. |
| color | [_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) | R W | - | - | 24.1 | Text color stored as [SolidColor](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md). |
| fauxBold | _boolean_ | R W | false | - | 24.1 | When true, applies Faux Bold, matching use of the Character panel's Faux Bold control. |
| fauxItalic | _boolean_ | R W | false | - | 24.1 | When true, applies Faux Italic, matching use of the Character panel's Faux Italic control. |
| font | _string_ | R W | - | - | 24.1 | PostScript font name used for the character face. See [TextFont](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/textfont.md) and its `postScriptName` property. |
| fractionalWidths | _boolean_ | R W | false | - | 24.1 | Uses fractional widths for text. |
| fractions | _boolean_ | R W | false | - | 24.1 | Fractions option. |
| horizontalDiacriticPosition | _number_ | R W | - | -1000..1000 | 24.1 | Horizontal diacritic adjustment for Middle Eastern languages. |
| horizontalScale | _number_ | R W | - | 0..1000 | 24.1 | Horizontal character scaling as a percentage, relative to verticalScale. |
| kashidas | _boolean_ | R W | true | - | 24.1 | Turns kashidas on or off for Middle Eastern languages. |
| language | [_Language_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#language) | R W | - | - | 24.1 | Language basis used for hyphenation and spelling rules. |
| leading | _number_ | R W | null | 0..4999.99 | 24.1 | Leading value in pixels for 72ppi documents. |
| ligatures | _boolean_ | R W | true | - | 24.1 | Standard-ligature toggle (default: true). |
| middleEasternDigitsType | [_MiddleEasternDigitsType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#middleeasterndigitstype) | R W | LTRARABIC | - | 24.1 | Digits style for Middle Eastern features. |
| middleEasternTextDirection | [_MiddleEasternTextDirection_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#middleeasterntextdirection) | R W | DEFAULT | - | 24.1 | Text direction for Middle Eastern features. |
| noBreak | _boolean_ | R W | false | - | 24.1 | When true, blocks text from breaking across lines. |
| ordinals | _boolean_ | R W | false | - | 24.1 | Ordinals option. |
| size | _number_ | R W | - | 0.01..1296 | 24.1 | Pixel font size for 72ppi documents. |
| strikeThrough | [_StrikeThrough_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#strikethrough) | R W | STRIKEOFF | - | 24.1 | Controls whether text uses strikethrough. |
| stylisticAlternates | _boolean_ | R W | false | - | 24.1 | Stylistic alternates option. |
| swash | _boolean_ | R W | false | - | 24.1 | Swash option. |
| titlingAlternates | _boolean_ | R W | false | - | 24.1 | Titling alternates option. |
| tracking | _number_ | R W | - | -1000..1000 | 24.1 | Uniform spacing applied between characters. Tracking values use 1/1000-em units. The em-space width depends on the active type size: at 1 point, 1 em is 1 point; at 10 points, 1 em is 10 points. For example, 100 tracking units in 10-point text equals 1 point. |
| underline | [_Underline_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#underline) | R W | NONE | - | 24.1 | Underline style setting. |
| useAutoLeading | _boolean_ | R W | - | - | 24.1 | When true, uses the font's built-in leading data. |
| verticalDiacriticPosition | _number_ | R W | - | -1000..1000 | 24.1 | Vertical diacritic adjustment for Middle Eastern languages. |
| verticalScale | _number_ | R W | - | 0..1000 | 24.1 | Vertical character scaling as a percentage, relative to horizontalScale. |

### Methods
