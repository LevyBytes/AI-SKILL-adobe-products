# Parsing and appending XML nodes

Run these examples in order in the Acrobat JavaScript console. They initialize `x` and `y` for the following node-editing steps.

Example 2: Build a small XML document and work with it.

```javascript
x = XMLData.parse("<a> <c>A.</c><d>C.</d> </a>", false);
x.saveXML("pretty");
```

That previous line outputs

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

Now build a second small document.

```javascript
y = XMLData.parse("<b>Robat</b>", false);
y.saveXML("pretty");
```

This line outputs

Serialized XML output from the preceding XMLData operation.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <b>Robat</b>
</xfa:data>
```

Append y on to x.

```javascript
x.nodes.append(y.clone(true).nodes.item(0));
x.saveXML("pretty");
```

The result:

Serialized XML output from the preceding XMLData operation.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xfa:data xmlns:xfa="http://www.xfa.org/schema/xfa-data/1.0/">
    <a>
        <c>A.</c>
        <d>C.</d>
    </a>
    <b>Robat</b>
</xfa:data>
```

Related: [XMLData.parse](parse.md).
