# HyphenationProperties

Paragraph-text hyphenation is configured with these property values.

You can inspect these hyphenation features from the Paragraph panel flyout dialog labeled "Hyphenation...".
Provide them as an object literal with the properties below; values are in pixels:

```javascript
{
     // The minimum number of letters a word must have in order for hyphenation
     // in word wrap to be allowed. In the range [2, 25], default 5.
     wordsLongerThan: number,
     // The minimum number of letters after which hyphenation
     // in word wrap is allowed. In the range [1, 15], default 2.
     afterFirst: number,
     // The minimum number of letters before which hyphenation
     // in word wrap is allowed. In the range [1, 15], default 2.
     beforeLast: number,
     // The maximum number of consecutive lines that can end with a hyphenated word.
     // In the range [2, 25], default 2.
     limit: number,
     // The distance in pixels at the end of a line that will cause a word
     // to break in unjustified type. In the range of [0, 8640] pixels for a 72PPI document.
     // If the document resolution is different, the max. value is scaled accordingly.
     // Default: 36px (72PPI)
     zone: number,
    // True to allow hyphenation in word wrap of capitalized words. Default true.
     capitalWords: boolean
}
```

The hyphenationFeatures getter returns an object containing every feature:

```javascript
const textItem = app.activeDocument.activeLayers[0].textItem;
textItem.paragraphStyle.hyphenationFeatures;
// {
//       wordsLongerThan: 5,
//       afterFirst: 2,
//       beforeLast: 2,
//       limit: 2,
//       zone: 36,
//       capitalWords: true
// }
```

Setter input may include any subset of these properties; omitted properties receive their default values.

```javascript
textItem.paragraphStyle.hyphenationFeatures = { wordsLongerThan: 10, afterFirst: 3 };
// {
//       wordsLongerThan: 10,
//       afterFirst: 3,
//       beforeLast: 2,
//       limit: 2,
//       zone: 36,
//       capitalWords: true
// }
```

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| afterFirst | _number_ | 2 | 1..15 | 24.1 | Minimum number of letters after which word-wrap hyphenation may occur. |
| beforeLast | _number_ | 2 | 1..15 | 24.1 | Minimum number of letters before which word-wrap hyphenation may occur. |
| capitalWords | _boolean_ | true | - | 24.1 | True when word-wrap hyphenation is allowed for capitalized words. |
| limit | _number_ | 2 | 2..25 | 24.1 | Maximum count of consecutive lines that may end with a hyphenated word. |
| wordsLongerThan | _number_ | 5 | 2..25 | 24.1 | Minimum word length required before word-wrap hyphenation is allowed. |
| zone | _number_ | 36 | 0..8640 for a 72PPI document | 24.1 | Pixel distance at a line end that triggers a break in unjustified type. |
