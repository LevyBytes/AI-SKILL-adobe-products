# XML object constructor

The constructor builds the XML object for a tree's root node and includes XML objects for elements nested inside it.

[new] XML (xmlCode);

| Property | Type | Description |
| --- | --- | --- |
| xmlCode | String or XML | Either valid XML code supplied as a string, or an XML object that already exists. - With a parsable string, the return value is a new XML object that wraps the code. If parsing fails, JavaScript throws an error. - With an existing object plus new, the return value is a copy; without new, the original object is returned. |
