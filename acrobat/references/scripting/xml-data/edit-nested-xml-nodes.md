# Editing nested XML nodes

Continue from [inserting and removing root nodes](insert-and-remove-root-nodes.md), retaining its `x` and `y`. Run these examples in order.

Run the following line

```javascript
x.a.nodes.insert( y.clone(true).nodes.item(0), x.a.nodes.item(0));
x.saveXML("pretty");
```

and the output is:

Serialized XML output from the preceding XMLData operation.

```xml
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

```javascript
x.a.nodes.remove( x.a.nodes.namedItem("b"));
```

Next, slot y (in fact a clone of y) in between the first and second children of element a.

```javascript
x.a.nodes.insert( y.clone(true).nodes.item(0), x.a.nodes.item(1));
```

This produces the following

Serialized XML output from the preceding XMLData operation.

```xml
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

```javascript
x.a.nodes.remove( x.a.nodes.namedItem("b"));
```

Last, append y onto a.

```javascript
x.a.nodes.append( y.clone(true).nodes.item(0));
```

yielding

Serialized XML output from the preceding XMLData operation.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <c>A.</c>
        <d>C.</d>
        <b>Robat</b>
    </a>
</xfa:data>
```

Related: [XMLData.parse](parse.md).
