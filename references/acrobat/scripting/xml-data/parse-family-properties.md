# Parsing and editing family properties

Obtain `cXMLDoc` from [the family XML setup](family-xml-data-setup.md) before running these examples in order.

Example 1: Take the XML document first shown in the example that follows the XMLData. applyXPath method.

```javascript
var x = XMLData.parse( cXMLDoc, false );
var y = x.family.name;                       // An XFAObject
console.println(y.value);                   // Output to console is "Robat"
```

Get information about dad.

```javascript
y = x.family.dad.id;                         // An XFAObject
console.println(y.value);                    // Output to console is "m2"

y = x.family.dad.name.value;                 // y = "Bob"
x.family.dad.name.value = "Robert";          // Change name to "Robert"
y = x.family.dad.name.value;                 // y = "Robert"

y = x.family.dad.personal.income.value;      // y = "75000"
x.family.dad.personal.income.value = "80000";// Give dad a raise
```

Related: [XMLData.parse](parse.md).
