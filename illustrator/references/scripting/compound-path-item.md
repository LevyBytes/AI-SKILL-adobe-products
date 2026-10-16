# CompoundPathItem

app.activeDocument.activeLayer.compoundPathItems[index]

### Description

A CompoundPathItem represents a compound path built from multiple crossing paths; where those component paths overlap, interior transparent areas result. Use the pathItems property to reach the paths inside the compound path.

When a script requests document-level paths, Illustrator returns paths that sit inside a compound path or group as separate path objects. A layer-level path query, however, does not include paths nested in a compound path or group contained by that layer.

Every path in a compound path uses shared property values. Changing one component path property therefore updates the same property across the remaining component paths.
