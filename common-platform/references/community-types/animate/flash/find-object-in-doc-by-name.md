# Flash.findObjectInDocByName

Community declaration reference: Animate/22.0.

Reveals elements in a document when their instance names match the supplied text.
Note: In some cases, this method only works when run as a command from inside a FLA file, rather than while a JSFL file is being viewed or edited.
@returns Generic-object array. Use each item's .obj property to obtain the object. The object includes keyframe, layer, timeline, and parent properties, which provide access to the hierarchy. For more information about these properties and access patterns, see fl.findObjectInDocByType().
Methods and properties on the layer and timeline values are also available; those values correspond to the Layer object and Timeline object.
@param instanceName String specifying the instance name of an item within the specified document.
@param document Document object that serves as the search target for the specified item.

```typescript
declare class Flash {
    findObjectInDocByName(instanceName: string, document: Document): ObjectInDoc[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
