# Inserting and removing root nodes

Continue from [parsing and appending XML nodes](parse-and-append-xml-nodes.md), retaining its `x` and `y`. Run these examples in order.

Now execute

```javascript
x.nodes.insert(y.clone(true).nodes.item(0), x.nodes.item(0));
x.saveXML("pretty")
```

to obtain

Serialized XML output from the preceding XMLData operation.

```xml
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

```javascript
x.nodes.remove( x.nodes.namedItem("b") );
x.nodes.remove( x.nodes.namedItem("b") );
```

At this point the XML document is back to how it started.

Serialized XML output from the preceding XMLData operation.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <c>A.</c>
        <d>C.</d>
    </a>
</xfa:data>
```

Related: [XMLData.parse](parse.md).
