# XPath child selection and strings

First run [the family XML setup](family-xml-data-setup.md) to create `myXML`. Run these queries in order.

Get dad's second child.

Representative serialized result:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<child> m5 </child>
```

```javascript
var c = XMLData.applyXPath(myXML, "//family/dad/child[position()=2]");
c.saveXML('pretty')
```

That is the id of dad's second child. In the examples that follow, the family data on this child is retrieved.

The next call returns a string.

```javascript
// Calculate the value of dadsName using XPath methods.
var dadsName = XMLData.applyXPath(myXML, "string(//family/dad/@name)")
// dadsName is assigned a value of "Bob" with this one line.
```

Fetch the family record for dad's second child. The line below sets c = "m5". applyXPath returns a string here, and normalize-space coerces its argument to a string while stripping any spaces wrapped around it.

```javascript
var c = XMLData.applyXPath(myXML,
    "normalize-space(//family/dad/child[2])");
var d = "//*[@id = '" + c + "']";     // Note: d= "//*[@id = 'm5']"
XMLData.applyXPath(myXML, d ).saveXML('pretty'); // show what we have
```

Serialized result:

```xml
<son id="m5" name="Jim" gender="M">
    <parent> m2 </parent>
    <personal>
        <income>35000</income>
    </personal>
</son>
```

Next, report on the sixth child node beneath the family root, drawing on the XPath functions name and concat.

```javascript
var e = XMLData.applyXPath(myXML,
    "concat(name(//family/child::*[position()=6]), '=', " +
    "//family/child::*[position()=6]/@name)" );
console.println(e); // the output is "daughter=Megan"
```

Pull every "Robat" family member's name.

```javascript
e = XMLData.applyXPath(myXML,"//family/child::*" );
for ( var i = 1; i <= e.length; i++ )  {
    var str = "string(//family/child::*["+i+"]/@name)";
    console.println(XMLData.applyXPath(myXML,str));
}
```

The output is

```text
A.C.
Bob
Mary
Sue
Jim
Megan
```

Related: [XMLData.applyXPath](apply-x-path.md).
