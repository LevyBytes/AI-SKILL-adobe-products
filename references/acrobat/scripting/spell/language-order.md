# languageOrder

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0. For Adobe Reader, 7.0 or later. | No | No | All | Array | R |

The dictionary search sequence given as an array of ISO 639-2, 3166 language codes — the sequence the user set on the Spelling Preferences panel. The Spelling plug-in checks words against the document's Doc spellLanguageOrder array first, when one has been set, and then against this language array.

Example: Print the order in which dictionaries are searched.

```javascript
console.println( spell.languageOrder.toSource() );
```
