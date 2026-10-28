# wordMatching

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R/W |

Dictates the way each word of the query is paired against words in the document. The values are:

Reference data, output or notation; not an executable JavaScript program.

```text
MatchPhrase
MatchAllWords
MatchAnyWord
BooleanQuery (default)
```

This property comes into play only for a query of more than one word. When the active document is being searched, the BooleanQuery option is disregarded.
