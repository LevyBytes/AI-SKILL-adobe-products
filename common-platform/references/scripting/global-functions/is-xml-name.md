# isXMLName()

isXMLName(String name)

### Description

Reports whether a string is a name that follows valid XML syntax.

Note

This implementation follows JavaScript name rules, with '$' disallowed and '-' added as an allowed character.

It is not based on the W3C XML-name definition, which includes additional Unicode characters in the valid character set.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | String to test as an XML Name |

### Returns

Boolean. true when the name is a valid XML name; otherwise false.
