# The XML Object — Mixing XML and JavaScript

JavaScript statements can be placed inside curly brackets and embedded in XML. During XML construction, the JavaScript portion is evaluated.

For example, this function returns an XML value where embedded JavaScript variables are resolved and inserted into the result:

```javascript
function makeXML (first, last) {
    return <person first={first} last={last}>{first + " " + last}</person>;
}
```

Invoke it as follows:

```javascript
makeXML ( "Jane", "Doe" );
```

produces this XML:

```xml
<person first="Jane" last="Doe">Jane Doe</person>
```

XML elements also support these operators:

- The plus operator, +, combines XML elements into a list.
- The == operator performs a deep comparison between two XML trees.
