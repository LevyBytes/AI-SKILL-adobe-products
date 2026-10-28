# The XML Object

Within an XML tree, an XML object corresponds to one XML element node. For an XML file, the highest-level XML object corresponds to the root node. The object behaves like a list, holding further XML objects for its element children. Those child XML objects can likewise contain XML objects for their own nested elements, continuing down the tree.

Child elements are exposed as properties on the XML object that represents the parent element. A property's name matches the element name. Each such property holds an array of XML objects, with one XML object for each element of that named type.

As a minimal example, use this XML code:

```xml
<rootElement>
    <elementA>
        <elementB></elementB>
    </elementA>
    <elementA>
        <elementB></elementB>
    </elementA>
</rootElement>
```

When JavaScript creates an XML object from that XML, the constructed object is the top node:

```javascript
var myRoot = new XML( "<rootElement> <elementA> <elementB></elementB> </elementA> <elementA> <elementB></elementB> </elementA> </rootElement>");
```

An XML literal can also be assigned straight into a variable. This statement implicitly creates the XML object stored in the variable:

```javascript
var myRoot = <rootElement>
    <elementA>
        <elementB></elementB>
    </elementA>
    <elementA>
        <elementB></elementB>
    </elementA>
</rootElement>;
```

The myRoot object has an elementA property containing two XML objects, one for each occurrence of that element. Each of those objects has an elementB property containing a single empty XML object:

```javascript
var elemB1 = myRoot.elementA[0].elementB[0];
```

When XML contains an empty element, its matching property is still present and stores an empty XML object; the property is not null or undefined.
