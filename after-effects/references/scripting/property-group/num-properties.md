# PropertyGroup.numProperties

app.project.item(index).layer(index).propertyGroupSpec.numProperties

### Description

How many indexed properties live in this group.

On layers, the value comes back as 3 — one each for the mask, effect, and motion tracker groups, which together make up the layer's indexed groups.

That said, layers carry plenty of additional properties reachable only by name; see PropertyGroup.property().

### Type

Integer; read-only.
