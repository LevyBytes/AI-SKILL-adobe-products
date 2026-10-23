# XML Object Reference - XML Settings

The XML class provides these static properties. They determine parsing and generation behavior for XML:

| Property | Type | Description |
| --- | --- | --- |
| ignoreComments | Boolean | When true, the parser discards XML comments. Default: false. |
| ignoreProcessingInstructions | Boolean | When true, the parser omits processing instructions (<?xxx?> elements). Default: false. |
| ignoreWhitespace | Boolean | When true, the parser discards white-space characters. Default: true. |
| prettyIndent | Number | Space count used as the pretty-print indent. Default: 2. |
| prettyPrinting | Boolean | When true, toXMLString() formats XML with indentation and line feeds. Default: true. |
