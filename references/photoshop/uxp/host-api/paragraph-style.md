# ParagraphStyle

Paragraph panel settings in the Photoshop UI are stored by the `ParagraphStyle` class.

### Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| features | [_TypeInterfaceFeatures_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#typeinterfacefeatures) | R W | [DEFAULT](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.TypeInterfaceFeatures) | - | 24.1 | Paragraph UI features that should be shown. |
| firstLineIndent | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel space applied to the first-line indent of paragraphs. |
| hyphenation | _boolean_ | R W | false | - | 24.1 | Set true to enable hyphenation during word wrap. hyphenationFeatures provides detailed controls. |
| hyphenationFeatures | [_HyphenationProperties_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/hyphenationproperties.md) | R W | - | - | 24.1 | Property values used when Photoshop computes hyphenation. |
| justification | [_Justification_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#justification) | R W | [LEFT](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.Justification) | - | 24.1 | Paragraph justification setting. |
| justificationFeatures | [_JustificationProperties_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/justificationproperties.md) | R W | - | - | 24.1 | Property values used when Photoshop computes justification. |
| kashidaWidth | [_KashidaWidthType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#kashidawidthtype) | R W | [MEDIUM](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.KashidaWidthType) | - | 24.1 | Kashida (tatweel) character width |
| kinsoku | [_Kinsoku_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#kinsoku) | R W | [NONE](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.Kinsoku) | - | 24.1 | Japanese text line-breaking rules (Kinsoku Shori) |
| layoutMode | [_ParagraphLayout_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#paragraphlayout) | R W | [WORLD](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.ParagraphLayout) | - | 24.1 | Paragraph layout mode. |
| leftIndent | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel space used to indent text from the left. |
| mojikumi | [_Mojikumi_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#mojikumi) | R W | [NONE](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/classes/Constants.Mojikumi) | - | 24.1 | Japanese-text spacing among punctuation, symbols, numbers, and other character classes. |
| rightIndent | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel space used to indent text from the right. |
| spaceAfter | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel spacing applied after each paragraph. |
| spaceBefore | _number_ | R W | - | -1296..1296 | 24.1 | For a 72ppi document, pixel spacing applied before each paragraph. |

### Methods
