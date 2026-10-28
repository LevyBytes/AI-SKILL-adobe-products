# languages

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0. For Adobe Reader, 7.0 or later. | No | No | All | Array | R |

This property hands back the array of ISO 639-2/3166-1 language/country codes available. Feed a subset of it into the methods check, checkText, checkWord, and customDictionaryCreate — and likewise into the Doc spellLanguageOrder property — when you want to lock down a particular language or set of languages plus the sequence in which they are searched.

Subject to the user's installation, the valid language/country codes may take in codes drawn from the following list.

| Code | Description |
| --- | --- |
| ca_ES | Catalan |
| cs_CZ | Czech |
| da_DK | Danish |
| nl_NL | Dutch |
| en_CA | English-Canadian |
| en_GB | English-UK |
| en_US | English-US |
| fi_FI | Finnish |
| fr_CA | French-Canadian |
| fr_FR | French |
| de_DE | German |
| de_CH | German-Swiss |
| el_GR | Greek |
| hu_HU | Hungarian |
| it_IT | Italian |
| nb_NO | Norwegian-Bokmal |
| nn_NO | Norwegian-Nynorsk |
| pl_PL | Polish |
| pt_BR | Portuguese-Brazil |
| pt_PT | Portuguese |
| ru_RU | Russian |
| es_ES | Spanish |
| sv_SE | Swedish |
| tr_TR | Turkish |

Note

Under Acrobat 7.0 this array's entries differ from what Acrobat 6.0 returned. So that no JavaScript code built for Acrobat 6.0 breaks, the Acrobat 6.0 ISO codes are mapped internally onto the new ISO codes when fed in from JavaScript. No such translation happens on the way out.

Example: Print out each language code that is available.

```javascript
console.println( spell.languages.toSource() );
```
