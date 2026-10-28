# ToolObj.setOptionsFile

Community declaration reference: Animate/22.0.

Links an XML file to the tool. That file defines options for the modal panel opened by the Property inspector's Options button. In practice, call this from configureTool() in the JSFL file. See configureTool().
Example: PolyStar.xml declares three options for the Polygon tool:
@param xmlFile String naming the XML file that describes the tool's options. Keep that XML beside its JSFL.

```xml
<properties>
<property name="Style"
variable="style"
list="polygon,star"
defaultValue="0"
type="Strings"/>
<property name="Number of Sides"
variable="nsides"
min="3"
max="32"
defaultValue="5"
type="Number" />
<property name="Star point size"
variable="pointParam"
min="0"
max="1"
defaultValue=".5"
type="Double" />
</properties>
```

```typescript
declare class ToolObj {
    setOptionsFile(xmlFile: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
