# XPath Boolean and income queries

First run [the family XML setup](family-xml-data-setup.md), then the [node-editing examples](xpath-nodes-and-attributes.md). The total below includes their change of mom's income to 20000.

The snippet below demonstrates a Boolean return value.

```javascript
var f = XMLData.applyXPath( myXML, "//family/dad/@id = 'm2'" );
if ( f == true ) console.println("dad's id is 'm2'");
else console.println("dad's id is not 'm2'");
```

The snippet below demonstrates a numeric return value.

```javascript
// Get dad's income
g = XMLData.applyXPath( myXML, "number(//family/dad/personal/income)" );
// Double dad's salary, implied conversion to a number type
console.println("Dad's double salary is " +
    XMLData.applyXPath( myXML, "//family/dad/personal/income * 2" ) );
```

Next, total up the income across the "Robat" family.

```javascript
console.println("Total income of A.C. Robat's family is "
    + XMLData.applyXPath( myXML, "sum(//income)" ) + ".");
```

The line above sends the following to the console.

```text
Total income of A.C. Robat's family is 300000.
```

This total includes the earlier change of mom's income to 20000. With the unmodified family data, the total is 305000.

List the individual incomes.

```javascript
var g = XMLData.applyXPath( myXML, "//income")
for ( var i =0; i< g.length; i++) console.println(g.item(i).value);
```

Related: [XMLData.applyXPath](apply-x-path.md).
