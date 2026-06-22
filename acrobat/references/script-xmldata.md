# Xmldata

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — XMLData

XMLData is a static object: it builds a JavaScript object that mirrors an XML document tree and lets you work with arbitrary XML documents through the XFA Data DOM. (XFA defines several more DOMs alongside the Data DOM, but the XMLData object touches the Data DOM alone.)

A PDF that reports true for the Doc dynamicXFAForm property may still use the XMLData object, yet that object cannot reach its form fields, since the two data DOMs stay walled off from one another.

### XMLData methods

### applyXPath

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Lets you query and reshape an XML document with XPath expressions. XPath itself is laid out in the W3C document XML Path Language (XPath), found at http://www.w3.org/TR/xpath .

An XPath expression resolves to one of four known types: Boolean, Number, String, Node-set. JavaScript hands these back, in order, as Boolean, Number, String, and Object.

Whenever an object comes back, its type is XFA object, standing for either a tree headed by one node or a tree headed by a node list (a tree list). That object shares the type that XMLData.parse returns.

Note

XFA has its own query mechanism, SOM expressions, comparable to XPath. Since XPath enjoys broad use across the XML community, the applyXPath method opens the door for users who would rather write XPath expressions.

Parameters

Parameter

Description

oXml

An XFAObject object that stands for an XML document tree. - Should this parameter hold a nodeList XFA object rather than the root of an XML tree, an exception is raised.

cXPath

A string parameter carrying the XPATH query to run against the document tree.

| --- | --- |

Returns

Boolean, Number, String, or XFAObject.

Example: Each of the four return types of XMLData.applyXPath (Boolean, number, string, or XFAObject) shows up here. The code mines data from an XML data string — here, the family tree of the "Robat" family).

```
var cXMLDoc = "<family name = 'Robat'>
    <grandad id = 'm1' name = 'A.C.' gender='M'>
        <child> m2 </child>
        <personal>
            <income>100000</income>
        </personal>
    </grandad>
    <dad id = 'm2' name = 'Bob' gender='M'>
        <parent> m1 </parent>
        <spouse> m3 </spouse>
        <child> m4 </child>
        <child> m5 </child>
        <child> m6 </child>
        <personal>
            <income>75000</income>
        </personal>
    </dad>
    <mom id = 'm3' name = 'Mary' gender='F'>
        <spouse> m2 </spouse>
        <personal>
            <income>25000</income>
        </personal>
    </mom>
    <daughter id = 'm4' name = 'Sue' gender='F'>
        <parent> m2 </parent>
        <personal>
            <income>40000</income>
        </personal>
    </daughter>
    <son id = 'm5' name = 'Jim' gender='M'>
        <parent> m2 </parent>
        <personal>
            <income>35000</income>
        </personal>
    </son>
    <daughter id = 'm6' name = 'Megan' gender='F'>
        <parent> m2 </parent>
        <personal>
            <income>30000</income>
        </personal>
    </daughter>
</family>";
var myXML= XMLData.parse( cXMLDoc, false);
```

The line below returns an XFAObject.

Get mom's data.

```
var a = XMLData.applyXPath(myXML, "//family/mom")
a.saveXML('pretty');
<?xml version="1.0" encoding="UTF-8"?>
<mom id="m3" name="Mary" gender="F">
    <spouse> m2 </spouse>
    <personal>
        <income>25000</income>
    </personal>
</mom>
// get the income element value
a.personal.income.value = "20000"; // change the income
```

Get dad's name, an attribute.

```
var b = XMLData.applyXPath(myXML, "//family/dad/@name");
b.saveXML('pretty');
<?xml version="1.0" encoding="UTF-8"?>
name="Bob"
// assign to a variable
var dadsName = b.value; // dadsName = "Bob"
```

Get all attributes of dad node.

```
var b = XMLData.applyXPath( myXML, "//family/dad/attribute::*" );
for(var i=0; i < b.length; i++)
    console.println(b.item(i).saveXML('pretty'))
```

That loop sends the following to the console.

```
<?xml version="1.0" encoding="UTF-8"?>
id="m2"
<?xml version="1.0" encoding="UTF-8"?>
name="Bob"
<?xml version="1.0" encoding="UTF-8"?>
gender="M"
```

Pull a specific piece of information out of this

```
console.println("For attribute 2, we have " + b.item(2).name + " = '"
    + b.item(2).value + "'.");
```

which yields an output of

```
For attribute 2, we have gender = 'M'.
```

Get dad's second child.

```
var c = XMLData.applyXPath(myXML, "//family/dad/child[position()=2]");
c.saveXML('pretty')
<?xml version="1.0" encoding="UTF-8"?>
<child> m5 </child>
```

That is the id of dad's second child. In the examples that follow, the family data on this child is retrieved.

The next call returns a string.

```
// Calculate the value of dadsName using XPath methods.
var dadsName = XMLData.applyXPath(myXML, "string(//family/dad/@name)")
// dadsName is assigned a value of "Bob" with this one line.
```

Fetch the family record for dad's second child. The line below sets c = "m5". applyXPath returns a string here, and normalize-space coerces its argument to a string while stripping any spaces wrapped around it.

```
var c = XMLData.applyXPath(myXML,
    "normalize-space(//family/dad/child[2])");
var d = "//*[@id = '" + c + "']";     // Note: d= "//*[@id = 'm5']"
XMLData.applyXPath(myXML, d ).saveXML('pretty'); // show what we have
<son id="m5" name="Jim" gender="M">
    <parent> m2 </parent>
    <personal>
        <income>35000</income>
    </personal>
</son>
```

Next, report on the sixth child node beneath the family root, drawing on the XPath functions name and concat.

```
var e = XMLData.applyXPath(myXML,
    "concat(name(//family/child::*[position()=6]), '=',
    //family/child::*[position()=6]/@name)" );
console.println(e); // the output is "daughter=Megan"
```

Pull every "Robat" family member's name.

```
e = XMLData.applyXPath(myXML,"//family/child::*" );
for ( var i = 1; i <= e.length; i++ )  {
    var str = "string(//family/child::*["+i+"]/@name)";
    console.println(XMLData.applyXPath(myXML,str));
}
```

The output is

```
A.C.
Bob
Mary
Sue
Jim
Megan
```

The snippet below demonstrates a Boolean return value.

```
var f = XMLData.applyXPath( myXML, "//family/dad/@id = 'm2'" );
if ( f == true ) console.println("dad's id is 'm2'");
else console.println("dad's id is not 'm2'");
```

The snippet below demonstrates a numeric return value.

```
// Get dad's income
g = XMLData.applyXPath( myXML, "number(//family/dad/personal/income)" );
// Double dad's salary, implied conversion to a number type
console.println("Dad's double salary is " +
    XMLData.applyXPath( myXML, "//family/dad/personal/income * 2" ) );
```

Next, total up the income across the "Robat" family.

```
console.println("Total income of A.C. Robat's family is "
    + XMLData.applyXPath( myXML, "sum(//income)" ) + ".");
```

The line above sends the following to the console.

```
Total income of A.C. Robat's family is 305000.
```

List the individual incomes.

```
var g = XMLData.applyXPath( myXML, "//income")
for ( var i =0; i< g.length; i++) console.println(g.item(i).value);
```

### parse

Version (Key)

Save-Prefs

Security

Product

7.0

No

No

All

| --- | --- | --- | --- |

Builds an object that mirrors an XML document tree. It takes the same parameters as the loadXML method of the XFA Data DOM.

What comes back is an XFA object standing for either a tree headed by one node or a tree headed by a node list (a tree list).

Parameters

Parameter

Description

param1

A string that holds the XML document.

param2

(optional) A Boolean that says whether to skip the XML document's root node. It defaults to true; pass false and the root node is kept.

| --- | --- |

Returns

XFAObject

Example 1: Take the XML document first shown in the example that follows the XMLData. applyXPath method.

```
var x = XMLData.parse( cXMLDoc, false );
var y = x.family.name;                       // An XFAObject
console.println(y.value);                   // Output to console is "Robat"
```

Get information about dad.

```
y = x.family.dad.id;                         // An XFAObject
console.println(y.value);                    // Output to console is "m2"

y = x.family.dad.name.value;                 // y = "Bob"
x.family.dad.name.value = "Robert";          // Change name to "Robert"
y = x.family.dad.name.value;                 // y = "Robert"

y = x.family.dad.personal.income.value;      // y = "75000"
x.family.dad.personal.income.value = "80000";// Give dad a raise
```

Example 2: Build a small XML document and work with it.

```
x = XMLData.parse("<a> <c>A.</c><d>C.</d> </a>, false);
x.saveXML("pretty");
```

That previous line outputs

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <c>A.</c>
        <d>C.</d>
    </a>
</xfa:data>
```

Now build a second small document.

```
y = XMLData.parse("<b>Robat</b>", false);
y.saveXML("pretty");
```

This line outputs

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <b>Robat</b>
</xfa:data>
```

Append y on to x.

```
x.nodes.append(y.clone(true).nodes.item(0));
x.saveXML("pretty");
```

The result:

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <c>A.</c>
        <d>C.</d>
    </a>
    <b>Robat</b>
</xfa:data>
```

Now execute

```
x.nodes.insert(y.clone(true).nodes.item(0), x.nodes.item(0));
x.saveXML("pretty")
```

to obtain

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <b>Robat</b>
    <a>
        <c>A.</c>
        <d>C.</d>
    </a>
    <b>Robat</b>
</xfa:data>
```

Now remove these two nodes.

```
x.nodes.remove( x.nodes.namedItem("b") );
x.nodes.remove( x.nodes.namedItem("b") );
```

At this point the XML document is back to how it started.

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <c>A.</c>
        <d>C.</d>
    </a>
</xfa:data>
```

Run the following line

```
x.a.nodes.insert( y.clone(true).nodes.item(0), x.a.nodes.item(0));
x.saveXML("pretty");
```

and the output is:

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <b>Robat</b>
        <c>A.</c>
        <d>C.</d>
    </a>
</xfa:data>
```

Now strip out the node that was just inserted.

```
x.a.nodes.remove( x.a.nodes.namedItem("b"));
```

Next, slot y (in fact a clone of y) in between the first and second children of element a.

```
x.a.nodes.insert( y.clone(true).nodes.item(0), x.a.nodes.item(1));
```

This produces the following

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
<a>
    <c>A.</c>
    <b>Robat</b>
    <d>C.</d>
</a>
</xfa:data>
```

Strip out the node that was just inserted:

```
x.a.nodes.remove( x.a.nodes.namedItem("b"));
```

Last, append y onto a.

```
x.a.nodes.append( y.clone(true).nodes.item(0));
```

yielding

```
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <c>A.</c>
        <d>C.</d>
        <b>Robat</b>
    </a>
</xfa:data>
```
