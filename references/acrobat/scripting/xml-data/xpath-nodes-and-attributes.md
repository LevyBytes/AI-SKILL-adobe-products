# XPath nodes and attributes

First run [the family XML setup](family-xml-data-setup.md) to create `myXML`. Run the examples on this page in order.

The line below returns an XFAObject.

Get mom's data.

Representative serialized result:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mom id="m3" name="Mary" gender="F">
    <spouse> m2 </spouse>
    <personal>
        <income>25000</income>
    </personal>
</mom>
```

```javascript
var a = XMLData.applyXPath(myXML, "//family/mom")
a.saveXML('pretty');
// get the income element value
a.personal.income.value = "20000"; // change the income
```

Get dad's name, an attribute.

Representative serialized result:

```text
<?xml version="1.0" encoding="UTF-8"?>
name="Bob"
```

```javascript
var b = XMLData.applyXPath(myXML, "//family/dad/@name");
b.saveXML('pretty');
// assign to a variable
var dadsName = b.value; // dadsName = "Bob"
```

Get all attributes of dad node.

```javascript
var b = XMLData.applyXPath( myXML, "//family/dad/attribute::*" );
for(var i=0; i < b.length; i++)
    console.println(b.item(i).saveXML('pretty'))
```

That loop sends the following to the console.

Reference data, output or notation; not an executable JavaScript program.

```text
<?xml version="1.0" encoding="UTF-8"?>
id="m2"
<?xml version="1.0" encoding="UTF-8"?>
name="Bob"
<?xml version="1.0" encoding="UTF-8"?>
gender="M"
```

Pull a specific piece of information out of this

```javascript
console.println("For attribute 2, we have " + b.item(2).name + " = '"
    + b.item(2).value + "'.");
```

which yields an output of

Reference data, output or notation; not an executable JavaScript program.

```text
For attribute 2, we have gender = 'M'.
```

Related: [XMLData.applyXPath](apply-x-path.md).
