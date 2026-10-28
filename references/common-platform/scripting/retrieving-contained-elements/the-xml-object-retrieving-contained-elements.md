# The XML Object - Retrieving contained elements

Several XML object methods retrieve contained elements from different depths in the tree:

- XML.children() returns the direct child elements, including text elements.
- XML.elements() returns direct child elements that are XML tags, excluding text.

ExtendScript E4X syntax; a standard JavaScript or Node parser does not support these XML operators.

```javascript
xml..title
xml.descendants("title")
```

For example, assume this XML has been assigned to the top-level object x:

```xml
<top>
    <one>one text</one>
    <two>
        two text
        <inside>inside text</inside>
    </two>
    top text
</top>
```

The calls return these outputs.

```xml
**> x.children()**
    <one>one text</one>
    <two>
    two text
    <inside>inside text</inside>
    </two>
    top text

**> x.children().length()**
    3
```

```xml
**> x.elements()**
    <one>one text</one>
    <two>
        two text
        <inside>inside text</inside>
    </two>
**> x.elements().length()**
    2
```

```xml
**> x.descendants()**
    <one>one text</one>
    one text
    <two>
        two text
        <inside>inside text</inside>
    </two>
    two text
    <inside>inside text</inside>
    inside text
    top text
**> x.descendants().length()**
    7
```
